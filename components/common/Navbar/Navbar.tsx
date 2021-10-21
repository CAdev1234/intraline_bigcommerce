import React, { FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import s from './Navbar.module.css'

const NavbarRoot = dynamic(import('./NavbarRoot'))
const Link = dynamic(import('next/link'))
const Logo = dynamic(import('@components/ui/Logo'))
const Container = dynamic(import('@components/ui/Container'))
const SearchSvg = dynamic(import('@components/icons/SearchSvg'))
const ProfileSvg = dynamic(import('@components/icons/ProfileSvg'))
const CartSvg = dynamic(import('@components/icons/CartSvg'))
const SideCart = dynamic(import('@components/mycp/SideCart'))
const HamburgerMenu = dynamic(import('@components/icons/HamburgerMenu'))
const Cross = dynamic(import('@components/icons/Cross'))

import { useAppDispatch, useAppSelector } from '../../../utils/redux/hooks'
import { activeSideCart } from '@utils/redux/slices/cartSlice'
import { getCookie } from '@utils/cookie'
import { search } from '@utils/redux/slices/productSlice'
import router, { useRouter } from 'next/router'




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
              <div className="text-c_00080D uppercase text-center tracking-widest leading-14_17 cursor-pointer hover:underline">
                <Link href={item.link}>{item.name}</Link>
              </div>
              {(item.subItem_li || []).map((item1, index1) => {
                return <div className="text-center leading-14_17 mt-5 cursor-pointer hover:underline" key={`shop_menu-${index}-${index1}`}>
                          <Link href={item1.link}>{item1.name}</Link>
                        </div>
              })}
            </div>
          </div>
  })
}



const Navbar: FC<NavbarProps> = ({ links, c_name }) => {
  const logined = useAppSelector((state) => state.user.logined)
  const [enableMobileMenu, setEnableMobileMenu] = useState(false)
  const [enableSearchBar, setEnableSearchBar] = useState(false)
  const [current_url, setCurrentUrl] = useState('/')
  const [searchKey, setSearchKey] = useState('')
  const dispatch = useAppDispatch()
  const enableSideCart = useAppSelector((state) => state.cart.enableSideCart)
  const totalAmount = useAppSelector((state) => state.cart.totalQuantity)
  const searchResult = useAppSelector((state) => state.product.searchResult)
  const route = useRouter()

  let page_li = [
    { name: 'Shop', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Treatments', link: '/treatments' },
    { name: 'Contact', link: '/contact' },
  ]

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

  const router = useRouter()
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
  }, [])

  const showSearchBarHandler = (bool_var: boolean) => {
    console.log(bool_var)
    setEnableSearchBar(bool_var)
    if (bool_var) {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
    }else {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto'
    }
  }

  const searchProductHandler = () => {
    showSearchBarHandler(false)
    dispatch(search(searchKey))
    router.replace({
      pathname: '/searchresult',
      query: {keyword: searchKey}
    })
  }

  const toMyAccountHandler =() => {
    showMobileMenuHandler(false)
    if (!logined) {
      router.push("/account/register")
      return
    }else {
      router.push('/account/myaccount')
    }
  }

  const showMobileMenuHandler = (bool_var: boolean) => {
    setEnableMobileMenu(bool_var)
    if (bool_var) (document.querySelector("body") as HTMLBodyElement).style.overflow = 'hidden'
    else (document.querySelector("body") as HTMLBodyElement).style.overflow = "auto"
  }

  const gotoOtherPageHandler = (path: string) => {
    showMobileMenuHandler(false)
    route.push(path)
  }

  const renderSubMenuInMobile = (category_li: NavLinkArray) => {
    return category_li.map((item, index) => {
      return <div key={`shop_menu_${index}`}>
              <div className="text-xs text-left tracking-widest leading-tight">
                <div className="mb-10 cursor-pointer">
                <div className="uppercase" onClick={() => {gotoOtherPageHandler(item.link)}}>{item.name}</div>
                  {(item.subItem_li || []).map((item1, index1) => {
                    return <div className="mt-5 cursor-pointer" key={`shop_menu-${index}-${index1}`}>
                              <div onClick={() => {gotoOtherPageHandler(item1.link)}}>{item1.name}</div>
                            </div>
                  })}
                </div>
                
              </div>
            </div>
    })
  }

  return (
    <NavbarRoot c_name={c_name || ''}>
      <Container>
        <div className="h-15 ttcommon_font">
          <div className="flex relative h-full">
            <div className="absolute top-0 left-0 h-full flex
                             justify-center md:justify-start
                             w-full md:w-auto">
              <div className={`${s.logo}`} aria-label="Logo" 
                  onClick={() => {
                    showMobileMenuHandler(false)
                    router.push('/')
                  }}>
                <Logo />
              </div>
            </div>
            <div className="absolute top-0 left-0 h-full flex w-full">
              <div className="h-full items-center mx-auto font-normal
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
                {/* <Link href="/aboutus"> */}
                  <a className={s.link} href='/aboutus'>ABOUT US</a>
                {/* </Link> */}
                {/* <Link href="/treatments"> */}
                  <a className={s.link} href='/treatments'>TREATMENTS</a>
                {/* </Link> */}
                {/* <div className={s.nav_item}>
                  <div className={s.link}>INDUSTRY</div>
                  <div className={s.submenu}>
                    <div className="flex justify-between flex-wrap w-full
                                    px-10 lg:px-32 xl:px-56 2xl:px-56">
                      {renderSubMenu(industry_category_li as any)}
                    </div>
                  </div>
                </div> */}
                {/* <Link href="/contact"> */}
                  <a className={s.link} href='/contact'>CONTACT</a>
                {/* </Link> */}
              </div>
            </div>
            
            <div className="items-center ml-auto relative z-40 flex">
              <div className="relative
                              hidden md:flex">
                <button onClick={() => {showSearchBarHandler(!enableSearchBar)}}><SearchSvg className={`${s.svg}`} color="white" /></button>
                {enableSearchBar && 
                  <div className="fixed top-15 left-0 w-full bg-black bg-opacity-50" style={{height: 'calc(100vh - 60px)'}}>
                    <div className="fixed top-15 left-0 w-full bg-c_00080D h-21_5 border-t border-white flex flex-col">
                      <div className="mx-15 flex items-center my-auto">
                        <input 
                          type="text" 
                          className="bg-transparent w-154_5 text-white" 
                          placeholder="Search for product or category. Hit enter to submit or escape to close."
                          onKeyPress={(event) => {event.key === 'Enter' && searchProductHandler()}}
                          onChange={(event) => {setSearchKey(event.target.value)}}
                          autoFocus={enableSearchBar}/>
                        <button 
                          className="underline uppercase text-white tracking-widest ml-auto"
                          onClick={() => {searchProductHandler()}}>Enter</button>
                        <button className="ml-9 text-white" onClick={() => {showSearchBarHandler(false)}}>
                          <Cross />
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </div>
                }
              </div>
              <div className="bg-white h-16 fixed top-15 left-0 w-full flex-col
                                flex md:hidden">
                <div className="w-full h-11 px-5 my-auto relative">
                  <input 
                      type="text" 
                      className="bg-c_F7F7F7 w-full h-full text-c_00080D pl-2.5" 
                      placeholder="Search for product or category."
                      onKeyPress={(event) => {event.key === 'Enter' && searchProductHandler()}}
                      onChange={(event) => {setSearchKey(event.target.value)}}/>
                  <button className="absolute top-0 right-7 h-full text-c_00080D"
                          onClick={() => {searchProductHandler()}}>
                    <SearchSvg color={'#00080D'} />
                  </button>
                </div>
                
              </div>
              
              <div className="flex ml-7_5">
                <button onClick={() => {toMyAccountHandler()}}><ProfileSvg className={s.svg} /></button>
                
              </div>
              {logined && 
                <div className="ml-7_5 relative" onClick={() => {dispatch(activeSideCart())}}>
                  <CartSvg className={s.svg} />
                  {totalAmount > 0 && 
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-c_CCE7EF">
                      <div className="relative w-full h-full flex justify-center items-center">
                        <div className="ttcommon_font_bold" style={{fontSize: 8}}>{totalAmount}</div>
                        <div className="absolute top-0 left-0 w-full h-full bg-c_CCE7EF rounded-full animate-ping"></div>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
            <div className="absolute left-0 top-0 h-full w-12 text-white
                            flex md:hidden lg:hidden xl:hidden 2xl:hidden">
              {!enableMobileMenu && <button className="w-8 h-8 my-auto" onClick={() => showMobileMenuHandler(true)}><HamburgerMenu/></button>}
              {enableMobileMenu && <button className="w-8 h-8 my-auto" onClick={() => showMobileMenuHandler(false)}><Cross /></button>}
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
      <SideCart />
      {/* {enableSideCart && <SideCart />} */}
      {enableMobileMenu && 
        <div className="fixed top-15 left-0 w-full h-screen z-40">
          <div className="w-full h-screen absolute top-0 left-0 flex">
            <div className="w-36 bg-c_00080D bg-opacity-95 pt-12_5 pl-5">
              {page_li.map((item, index) => {
                return <div key={`page_${index}_mobile`} className="mb-8 flex">
                        <button className={`pb-1 uppercase text-white text-xs leading-tight flex ${router.asPath.includes(item.link) ? 'border-c_52B5D3 border-b-2' : 'border-none'}`}
                              onClick={() => {gotoOtherPageHandler(item.link)}}>{item.name}</button>
                      </div>
              })}
            </div>
            <div className="flex-1 bg-white pt-12_5 pl-14">
              {renderSubMenuInMobile(shop_category_li as any)}
            </div>
          </div>
        </div>
      }
    </NavbarRoot>
  )
}

export default Navbar
