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
    { name: 'Dermal Fillers', link: '/shop/dermalfillers', 
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
    { name: 'Scar Kit', link: '/shop/scarkit'}
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
            <div className="flex items-center mr-auto ttcommon_font font-normal">
              <div className={s.nav_item}>
                <div className={s.link}>Shop</div>
                {/* shop menu */}
                <div className={s.submenu}>
                  <div className="flex justify-between mx-auto max-w-7xl flex-wrap">
                    {renderShopMenu()}
                  </div>
                </div>
              </div>
              <Link href="/search?q=clothes">
                <a className={s.link}>ABOUT US</a>
              </Link>
              <Link href="/search?q=accessories">
                <a className={s.link}>INDUSTRY</a>
              </Link>
              <Link href="/search?q=accessories">
                <a className={s.link}>CONTACT</a>
              </Link>
            </div>
            <div className="flex items-center ml-auto">
              <SearchSvg className={s.svg} />
              <ProfileSvg className={s.svg} />
              <div onClick={() => setEnableCart(!enableCart)}>
                <CartSvg className={s.svg} />
              </div>
            </div>
          </div>

          {/* <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div> */}

          {/* <div className="flex justify-end flex-1 space-x-8">
            <UserNav />
          </div> */}
        </div>

        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      </Container>
      {enableCart && <SideCart />}
    </NavbarRoot>
  )
}

export default Navbar
