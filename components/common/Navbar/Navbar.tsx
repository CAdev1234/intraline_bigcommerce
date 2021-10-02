import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import SearchSvg from '@components/icons/SearchSvg'
import ProfileSvg from '@components/icons/ProfileSvg'
import CartSvg from '@components/icons/CartSvg'
import SideCart from '@components/mycp/SideCart'
import HamburgerMenu from '@components/icons/HamburgerMenu'
import { Cross } from '@components/icons'

import { useAppDispatch, useAppSelector } from '../../../utils/redux/hooks'
import { openSideCart } from '@utils/redux/slices/cartSlice'


interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[],
  c_name?: any
}
type SubLinkArray = Array<{name: string, link: string}>
type NavLinkArray = Array<{name: string, link:string, subItem_li: SubLinkArray}>
const renderSubMenu = (category_li: NavLinkArray) => {
  return category_li.map((item, index) => {
    return <div key={`shop_menu_${index}`}>
            <div>
              <div className="uppercase text-sm text-center tracking-widest leading-14_17 cursor-pointer hover:underline">
                <Link href={item.link}>{item.name}</Link>
              </div>
              {(item.subItem_li || []).map((item1, index1) => {
                return <div className="text-center text-sm leading-14_17 mt-5 cursor-pointer hover:underline" key={`shop_menu-${index}-${index1}`}>
                          <Link href={item1.link}>{item1.name}</Link>
                        </div>
              })}
            </div>
          </div>
  })
}

const Navbar: FC<NavbarProps> = ({ links, c_name }) => {
  const [enableMobileMenu, setEnableMobileMenu] = useState(false)
  const [enableSearchBar, setEnableSearchBar] = useState(false)
  const [current_url, setCurrentUrl] = useState('/')
  const dispatch = useAppDispatch()
  const enableSideCart = useAppSelector((state) => state.cart.enableSideCart)

  let shop_category_li = [
    { name: 'All products', link: '/shop/allproducts', subItem_li: []},
    { name: 'Dermal Fillers', link: '/shop/dermalfiller', 
      subItem_li: [
        { name: 'M Series', link: '/shop/dermalfiller/mseries'},
        { name: 'The Essentials', link: '/shop/dermalfiller/essentials'},
      ]
    },
    { name: 'PDO Threads', link: '/shop/pdothread', 
      subItem_li: [
        { name: 'Rejuvenation Threads', link: '/shop/pdothread/rejuvenation'},
        { name: 'Lifting Threads', link: '/shop/pdothread/liftingthread'}
      ]
    },
    { name: 'Skincare', link: '/shop/skincare', 
      subItem_li: []
    },
    { name: 'Scar Kit', link: '/shop/scarkit'}
  ]
  let industry_category_li = [
    { name: 'Industry', link: '/industry', subItem_li: []},
    { name: 'Blog', link: '/industry/blog', subItem_li: []},
    { name: 'Courses', link: '/industry', 
      subItem_li: [
        { name: 'Dermal Filler', link: '/industry'},
        { name: 'PDO Thread', link: '/industry'}
      ]
    },
    { name: 'Partners', link: '/industry', subItem_li: []},
    { name: 'Rheology Report', link: '/'}
  ]
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
    
  })

  let showMobileMenu = () => {
    setEnableMobileMenu(!enableMobileMenu)
    if (enableMobileMenu) (document.querySelector("body") as HTMLBodyElement).style.overflow = 'hidden'
    else (document.querySelector("body") as HTMLBodyElement).style.overflow = "auto"
  }

  return (
    <NavbarRoot c_name={c_name || ''}>
      <Container>
        <div className="">
          <div className="flex">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <div className="items-center ml-auto ttcommon_font font-normal
                            hidden md:flex xl:flex 2xl:flex">
              <div className={s.nav_item}>
                <div className={s.link}>SHOP</div>
                {/* shop menu */}
                <div className={s.submenu}>
                  <div className="flex justify-between flex-wrap w-full
                                  px-10 lg:px-32 xl:px-56 2xl:px-56">
                    {renderSubMenu(shop_category_li as any)}
                  </div>
                </div>
              </div>
              <Link href="/aboutus">
                <a className={s.link}>ABOUT US</a>
              </Link>
              <Link href="/treatments">
                <a className={s.link}>TREATMENTS</a>
              </Link>
              <div className={s.nav_item}>
                <div className={s.link}>INDUSTRY</div>
                {/* shop menu */}
                <div className={s.submenu}>
                  <div className="flex justify-between flex-wrap w-full
                                  px-10 lg:px-32 xl:px-56 2xl:px-56">
                    {renderSubMenu(industry_category_li as any)}
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <a className={s.link}>CONTACT</a>
              </Link>
            </div>
            <div className="items-center
                            ml-0 lg:ml-20 xl:ml-44 2xl:ml-32
                            hidden md:flex lg:flex xl:flex 2xl:flex">
              <div className="flex relative">
                <button onClick={() => {setEnableSearchBar(!enableSearchBar)}}><SearchSvg className={s.svg} /></button>
                {enableSearchBar && 
                  <div className="fixed top-15 left-0 w-full bg-c_00080D h-21_5 border-t border-white flex flex-col">
                    <div className="mx-15 flex items-center my-auto">
                      <input type="text" className="bg-transparent w-154_5 text-white" placeholder="Search for product or category. Hit enter to submit or escape to close."/>
                      <button 
                        className="underline uppercase text-sm text-white tracking-widest ml-auto"
                        onClick={() => {setEnableSearchBar(false)}}>Enter</button>
                      <button className="ml-9 text-white" onClick={() => {setEnableSearchBar(false)}}>
                        <Cross />
                      </button>
                    </div>
                  </div>
                }
              </div>
              
              <div className="flex">
                <Link href="/account/myaccount">
                  <button><ProfileSvg className={s.svg} /></button>
                </Link>
              </div>
              <div onClick={() => {dispatch(openSideCart())}}>
                <CartSvg className={s.svg} />
              </div>
            </div>
            <div className="ml-auto w-12 text-white
                            flex md:hidden lg:hidden xl:hidden 2xl:hidden"
                onClick={showMobileMenu}>
              <HamburgerMenu/>
            </div>
          </div>

          {/* <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div> */}

          {/* <div className="flex justify-end flex-1 space-x-8">
            <UserNav />
          </div> */}
        </div>

        {/* <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div> */}
      </Container>
      {enableSideCart && <SideCart />}
      {enableMobileMenu && 
        <div className="fixed top-0 left-0 w-screen h-screen">
          <div className="bg-black bg-opacity-70 w-screen h-screen absolute top-0 left-0 pt-12 px-5">
            <div className="relative">
              <div className="ttcommon_font font-normal">
                <div className={s.nav_item}>
                  <div className="text-3xl text-white">SHOP</div>
                  {/* shop menu */}
                  <div className={s.submenu}>
                    <div className="flex justify-between mx-auto max-w-7xl flex-wrap">
                      {renderSubMenu(shop_category_li as any)}
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/aboutus">
                    <a className="text-3xl text-white">ABOUT US</a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a className="text-3xl text-white">INDUSTRY</a>
                  </Link>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="text-3xl text-white">CONTACT</a>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-white" onClick={() => {setEnableMobileMenu(false)}}>
                <Cross />
              </div>
            </div>
          </div>
          
        </div>}
    </NavbarRoot>
  )
}

export default Navbar
