import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      {/* <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24">
                <span className="rounded-full border border-accent-6 mr-2">
                  <Logo />
                </span>
                <span>ACME</span>
              </a>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
              >
                <Github />
              </a>
              <I18nWidget />
            </div>
          </div>
        </div>
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center text-primary text-sm">
            <span className="text-primary">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-6 ml-3 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div>
        </div>
      </Container> */}


      <Container className="bg-black">
        <div className="pt-20 pb-24 ttcommon_font">
          <div className="block w-full md:flex lg:flex xl:flex">
            <div className="flex
                            w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
              <div className="w-full flex">
                <div className="w-5/12 md:w-7/12 lg:w-7/12 xl:w-7/12">
                  <Link href="/">
                    <a className={s.logo} aria-label="Logo">
                      <Logo />
                    </a>
                  </Link>
                  <p className="textellipsis_4 leading-14_26 text-white text-sm">We believe confidence is created  in many forms and looks different for everyone. We believe in individuality. Intraline is a family owned, innovative aesthetics company comitted to your overall health and well-being: both inside and out. We belive that confidence is ageless.</p>
                  <div className="text-white text-sm mt-5">2021 Intraline. All rights reserved.</div>
                </div>
                <div className="ml-auto flex flex-col
                                w-5/12 md:w-4/12 lg:w-4/12 xl:w-4/12">
                  <Link href="/">
                    <div className="uppercase text-white text-sm tracking-widest flex items-center h-15">Infraline</div>
                  </Link>
                  <div className="mb-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Dermal Fillers</a>
                    </Link>
                  </div>
                  <div className="my-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Pdo Threads</a>
                    </Link>
                  </div>
                  
                  <div className="my-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Skincare</a>
                    </Link>
                  </div>
                  
                  <div className="my-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Treatments</a>
                    </Link>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Privacy Policy</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex
                            w-full md:w-6/12 lg:w-6/12 xl:w-6/12
                            mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="w-full flex">
                <div className="flex flex-col
                                w-6/12 md:w-4/12 lg:w-4/12 xl:w-4/12
                                ml-0 md:ml-auto lg:ml-auto xl:ml-auto">
                  <Link href="/">
                    <a className="uppercase text-white text-sm tracking-widest h-15 flex items-center">Account</a>
                  </Link>
                  <div className="mb-auto">
                    <Link href="/">
                      <a className=" text-white text-sm" >Orders</a>
                    </Link>
                  </div>
                  <div className="my-auto">
                    <Link href="/">
                      <a className=" text-white text-sm" >Compare</a>
                    </Link>
                  </div>
                  
                  <div className="my-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Wishlist</a>
                    </Link>
                  </div>
                  
                  <div className="my-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Log In</a>
                    </Link>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href="/">
                      <a className="text-white text-sm" >Register</a>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col ml-auto
                                w-5/12 md:w-8/12 lg:w-8/12 xl:w-8/12">
                  <Link href="/">
                    <a className="uppercase text-white text-sm tracking-widest h-15 flex items-center">Subscribe to our newsletter</a>
                  </Link>
                  <div className="flex h-11 my-auto">
                    <input type="text" className="h-full w-full border-none bg-white pl-5 py-2 placeholder-c_00080D" placeholder="Your email address"/>
                    <button className="w-36 h-full uppercase text-white bg-c_52B5D3">submit</button>
                  </div>
                  
                  <div className="flex items-center">
                    <div>
                      <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80545 23C19.3715 23 25.1507 14.1505 25.1507 6.47614C25.1507 6.22482 25.1507 5.9746 25.1339 5.72548C26.2582 4.90334 27.2287 3.88549 28 2.71941C26.9516 3.18906 25.8393 3.497 24.7005 3.63311C25.8995 2.90755 26.7974 1.76547 27.2261 0.42094C26.0985 1.09735 24.8647 1.57413 23.5782 1.8306C22.492 0.662923 20.975 0 19.3896 0C16.2351 0 13.6394 2.62405 13.6394 5.81289C13.6394 6.25528 13.6894 6.69629 13.7883 7.12718C9.1717 6.89327 4.8644 4.68574 1.94879 1.05954C0.432633 3.69807 1.21712 7.11745 3.72734 8.81193C2.81323 8.78457 1.91877 8.53523 1.12 8.08504V8.15863C1.12077 10.9126 3.05851 13.3063 5.72879 13.8515C4.8831 14.0847 3.99558 14.1187 3.13491 13.9512C3.8856 16.311 6.05035 17.9377 8.50194 17.9842C6.46811 19.6 3.95429 20.4777 1.36752 20.4751C0.910438 20.4742 0.453797 20.4463 0 20.3913C2.62686 22.0955 5.68422 22.9997 8.80545 22.9955" fill="white"/>
                      </svg>
                    </div>
                    <div className="mx-8">
                      <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50798 0C4.22616 0 2.81296 1.8824 2.81296 5.11069V7.66604H0V11.5019H2.81296V23H8.00066V11.5019H11.5262L12 7.66604H8.00066V5.38684C8.00066 4.35666 8.23661 3.83396 9.90558 3.83396H12V0H8.50798Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.38889 0C4.69445 0 3.06941 0.673113 1.87126 1.87126C0.673113 3.06941 0 4.69445 0 6.38889V16.6111C0 18.3055 0.673113 19.9306 1.87126 21.1287C3.06941 22.3269 4.69445 23 6.38889 23H16.6111C18.3055 23 19.9306 22.3269 21.1287 21.1287C22.3269 19.9306 23 18.3055 23 16.6111V6.38889C23 4.69445 22.3269 3.06941 21.1287 1.87126C19.9306 0.673113 18.3055 0 16.6111 0H6.38889ZM19.1667 2.55556C19.8694 2.55556 20.4444 3.13056 20.4444 3.83333C20.4444 4.53611 19.8694 5.11111 19.1667 5.11111C18.4639 5.11111 17.8889 4.53611 17.8889 3.83333C17.8889 3.13056 18.4639 2.55556 19.1667 2.55556ZM11.5 5.11111C13.1944 5.11111 14.8195 5.78422 16.0176 6.98237C17.2158 8.18052 17.8889 9.80556 17.8889 11.5C17.8889 13.1944 17.2158 14.8195 16.0176 16.0176C14.8195 17.2158 13.1944 17.8889 11.5 17.8889C9.80556 17.8889 8.18052 17.2158 6.98237 16.0176C5.78422 14.8195 5.11111 13.1944 5.11111 11.5C5.11111 9.80556 5.78422 8.18052 6.98237 6.98237C8.18052 5.78422 9.80556 5.11111 11.5 5.11111ZM11.5 7.66667C10.9964 7.66683 10.4978 7.76619 10.0327 7.95905C9.56748 8.15191 9.14485 8.43451 8.78889 8.7907C8.43294 9.1469 8.15062 9.56972 7.95807 10.035C7.76552 10.5003 7.6665 10.999 7.66667 11.5026C7.66683 12.0061 7.76619 12.5047 7.95905 12.9699C8.15191 13.4351 8.43451 13.8577 8.7907 14.2137C9.1469 14.5696 9.56972 14.8519 10.035 15.0445C10.5003 15.237 10.999 15.3361 11.5026 15.3359C12.5196 15.3356 13.4948 14.9312 14.2137 14.2119C14.9326 13.4925 15.3362 12.517 15.3359 11.5C15.3356 10.483 14.9312 9.50778 14.2119 8.78889C13.4925 8.07001 12.517 7.66633 11.5 7.66667Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Container>

      <Container className="bg-c_CCE7EF">
        <div className="items-center py-3
                        block md:flex lg:flex xl:flex">
          <div className="flex
                          w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="flex items-center">
              <label htmlFor="Currency">Currency:</label>
              <select name="" id="" className="bg-transparent">
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
              </select>
            </div>
            <div className="flex items-center mx-auto">
              <label htmlFor="Currency">Language:</label>
              <select name="" id="" className="bg-transparent">
                <option value="en">EN</option>
                <option value="en">EN</option>
                <option value="en">EN</option>
                <option value="en">EN</option>
                <option value="en">EN</option>
                <option value="en">EN</option>
              </select>
            </div>
            <div className="text_overflow_one_line
                            mr-0 md:mr-12 lg:mr-12 xl:mr-12">info@intraline.com</div>
          </div>
          
          <div className="flex items-center
                          w-full md:w-1/2 lg:w-1/2 xl:w-1/2
                          mt-2 md:mt-0 lg:mt-0 xl:mt-0">
            <div className="mr-auto text_overflow_one_line text">+1 (778) 738-0351</div>
            <div className="flex items-center ml-auto">
              <label htmlFor="" className="text_overflow_one_line">Payment Methods:</label>
              <img className="ml-5" src="/assets/img/master_card.png" alt="" />
              <img className="ml-5" src="/assets/img/visa.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
