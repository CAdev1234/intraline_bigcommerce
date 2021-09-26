import { FC, useState } from 'react'
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

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[],
  c_name?: any
}

const renderShopMenu = () => {
  const category_li = [
    { name: 'All products', link: '/shop/allproducts', subItem_li: []},
    { name: 'Dermal Fillers', link: '/shop/dermalfiller', 
      subItem_li: [
        { name: 'M Series', link: '/shop/dermalfiller/mseries'},
        { name: 'Rejuvenation', link: '/shop/dermalfiller/detail'}
      ]
    },
    { name: 'PDO Threads', link: '/shop/pdothread', 
      subItem_li: [
        { name: 'The Essentials', link: '/shop/pdothread/detail'},
        { name: 'Lifting Threads', link: '/shop/pdothread/liftingthread'}
      ]
    },
    { name: 'Skincare', link: '/shop/skincare', 
      subItem_li: []
    },
    { name: 'Scar Kit', link: '/'}
  ]
  return category_li.map((item, index) => {
    return <div key={`shop_menu_${index}`}>
            <div>
              <div className="uppercase text-sm tracking-widest leading-14_17 cursor-pointer hover:underline">
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
  const [enableCart, setEnableCart] = useState(false)
  const [enableMobileMenu, setEnableMobileMenu] = useState(false)

  function showMobileMenu() {
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
                    {renderShopMenu()}
                  </div>
                </div>
              </div>
              <Link href="/">
                <a className={s.link}>ABOUT US</a>
              </Link>
              <Link href="/treatments">
                <a className={s.link}>TREATMENTS</a>
              </Link>
              <Link href="/">
                <a className={s.link}>INDUSTRY</a>
              </Link>
              <Link href="/">
                <a className={s.link}>CONTACT</a>
              </Link>
            </div>
            <div className="items-center
                            ml-0 lg:ml-20 xl:ml-44 2xl:ml-32
                            hidden md:flex lg:flex xl:flex 2xl:flex">
              <SearchSvg className={s.svg} />
              <ProfileSvg className={s.svg} />
              <div onClick={() => setEnableCart(!enableCart)}>
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
      {enableCart && <SideCart />}
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
                      {renderShopMenu()}
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/">
                    <a className="text-3xl text-white">ABOUT US</a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a className="text-3xl text-white">INDUSTRY</a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
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
