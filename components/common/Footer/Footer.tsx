import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Logo, Container } from '@components/ui'
import s from './Footer.module.css'
import { Button, SelectInput } from '@components/mycp'
import { useAppSelector } from '@utils/redux/hooks'
import { validateEmail } from 'utils/simpleMethod'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import visaImage from 'public/assets/img/visa.webp'
import masterCardImage from 'public/assets/img/master_card.webp'

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
  const [subescribeEmail, setSubscribeEmail] = useState('')
  const [enableSubscribeSuccessModal, setEnableSubscribeSuccessModal] = useState(false)
  const [enableSubscribeFailModal, setEnableSubscribeFailModal] = useState(false)
  // const [logined, setLogined] = useState(false)
  const logined = useAppSelector((state) => state.user.logined)
  const rootClassName = cn(s.root, className)

  let infraline_link_li = [
    {title: 'Products', link: '/shop/allproducts'},
    {title: 'Treatments', link: '/treatments'},
    {title: 'About Us', link: '/aboutus'},
    {title: 'Contact', link: '/contact'},
    {title: 'Privacy Policy', link: '/privacypolicy'},
    {title: 'Cookie Policy', link: '/privacypolicy'},
  ]

  let account_link_li = [
    {title: 'My Account', link: '/account/myaccount'},
    {title: 'Register/Login', link: '/account/login'},
    {title: 'My Orders', link: '/account/myaccount'},
    {title: 'My Reviews', link: '/account/myaccount'},
  ]

  useEffect(() => {
    
  }, [])

  const subscribeHandle = async (bool_var: boolean) => {
    if (!validateEmail(subescribeEmail)) {
      toast.error("Invalid Email.", {
          position: toast.POSITION.TOP_RIGHT
      });
      return
    }
    if (!bool_var) {
      setEnableSubscribeFailModal(false);
      setEnableSubscribeSuccessModal(false);
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto'
      return
    }
    if (subescribeEmail) {
      let res = await fetch('/api/hubspot/subscribe', {
        method: 'POST',
        body: JSON.stringify({email: subescribeEmail})
      })
      if(res.status === 200) {
        setEnableSubscribeSuccessModal(true)
      }else {
        setEnableSubscribeFailModal(true)
      }
    }else {
      return
    }
    if (bool_var) {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
    }else {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto'
    }
  }

  const toMyAccountHandler =() => {
    if (!logined) {
        router.push("/account/register")
        return
    }else {
      router.push('/account/myaccount')
    }
  }

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
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center text-primary">
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

      <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast-container"
      />

      <Container className="bg-black 
                              px-5 lg:px-15">
        <div className=" ttcommon_font
                         pt-5 sm:pt-20
                         pb-10 sm:pb-17_5">
          <div className="w-full grid
                          grid-cols-1 sm:grid-cols-3">
            <div className="flex">
              <div className="w-full">

                {/* intraline part */}
                <div className="w-full flex flex-col
                                text-center sm:text-left">
                  <div className="flex 
                                  justify-center sm:justify-start">
                    <Link href="/">
                      <a className={s.logo} aria-label="Logo">
                        <Logo />
                      </a>
                    </Link>
                  </div>
                  <p className="leading-14_26 text-white">We believe confidence is created  in many forms and looks different for everyone. We believe in individuality. Intraline is a family owned, innovative aesthetics company comitted to your overall health and well-being: both inside and out. We belive that confidence is ageless.</p>
                  <div className="text-white mt-5">2021 Intraline. All rights reserved.</div>
                </div>

              </div>
            </div>
            <div className="flex
                            mt-12 sm:mt-0">
              {/* intraline link part */}
              <div className="flex flex-col mx-auto">
                <Link href="/">
                  <div className="uppercase text-white tracking-widest flex items-center h-15">Infraline</div>
                </Link>
                {infraline_link_li.map((item, index) => {
                  return <div key={`infraline_link_${index}`} className="mb-1">
                            <Link href={item.link}>
                              <a className="text-white leading-14_26" >{item.title}</a>
                            </Link>
                        </div>
                })}
              </div>
              {/* account link part */}
              <div className="flex flex-col mx-auto">
                <Link href="/">
                  <a className="uppercase text-white tracking-widest h-15 flex items-center">Account</a>
                </Link>
                {account_link_li.map((item, index) => {
                  return <div className="mb-1" key={`account_link_${index}`}>
                            {item.title === "Register/Login" && logined &&
                              <Link href="/account/myaccount">
                                <a className=" text-white leading-14_26" >{item.title}</a>
                              </Link>
                            }
                            {item.title === "Register/Login" && !logined &&
                              <Link href={item.link}>
                                <a className=" text-white leading-14_26" >{item.title}</a>
                              </Link>
                            }
                            {item.title !== "Register/Login" && 
                              <button className="text-white leading-14_26" onClick={() => {toMyAccountHandler()}}>{item.title}</button>
                            }
                        </div>
                })}
              </div>
            </div>
            <div className="flex">
              <div className="w-full
                              block sm:flex md:flex lg:flex xl:flex 2xl:flex">
                {/* subscribe part */}
                <div className="flex flex-col w-full ml-auto
                                mt-12 sm:mt-0">
                  <Link href="/">
                    <a className="uppercase text-white tracking-widest h-15 flex items-center
                                  text-center sm:text-left">Subscribe to our newsletter</a>
                  </Link>
                  <div className="flex h-11
                                  mt-0 sm:mt-4">
                    <input 
                      type="text" 
                      className="h-full w-full border-none bg-white pl-5 py-2" 
                      placeholder="Your email address"
                      onChange={(event) => {setSubscribeEmail(event.target.value)}}/>
                    <Button className="w-36 h-full text-white" variant="primary" onClick={() => {subscribeHandle(true)}}>submit</Button>
                  </div>
                  
                  {/* social media links */}
                  <div className="flex items-center cursor-pointer
                                  justify-center sm:justify-start
                                  mt-7_5 sm:mt-10 md:mt-10 lg:mt-16 xl:mt-16 2xl:mt-16">
                    <div>
                      <Link href="https://twitter.com/weareintraline">
                        <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.80545 23C19.3715 23 25.1507 14.1505 25.1507 6.47614C25.1507 6.22482 25.1507 5.9746 25.1339 5.72548C26.2582 4.90334 27.2287 3.88549 28 2.71941C26.9516 3.18906 25.8393 3.497 24.7005 3.63311C25.8995 2.90755 26.7974 1.76547 27.2261 0.42094C26.0985 1.09735 24.8647 1.57413 23.5782 1.8306C22.492 0.662923 20.975 0 19.3896 0C16.2351 0 13.6394 2.62405 13.6394 5.81289C13.6394 6.25528 13.6894 6.69629 13.7883 7.12718C9.1717 6.89327 4.8644 4.68574 1.94879 1.05954C0.432633 3.69807 1.21712 7.11745 3.72734 8.81193C2.81323 8.78457 1.91877 8.53523 1.12 8.08504V8.15863C1.12077 10.9126 3.05851 13.3063 5.72879 13.8515C4.8831 14.0847 3.99558 14.1187 3.13491 13.9512C3.8856 16.311 6.05035 17.9377 8.50194 17.9842C6.46811 19.6 3.95429 20.4777 1.36752 20.4751C0.910438 20.4742 0.453797 20.4463 0 20.3913C2.62686 22.0955 5.68422 22.9997 8.80545 22.9955" fill="white"/>
                        </svg>
                      </Link>
                    </div>
                    <div className="mx-8">
                      <Link href="https://www.facebook.com/weareintraline">
                        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.50798 0C4.22616 0 2.81296 1.8824 2.81296 5.11069V7.66604H0V11.5019H2.81296V23H8.00066V11.5019H11.5262L12 7.66604H8.00066V5.38684C8.00066 4.35666 8.23661 3.83396 9.90558 3.83396H12V0H8.50798Z" fill="white"/>
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://www.instagram.com/accounts/login/">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.38889 0C4.69445 0 3.06941 0.673113 1.87126 1.87126C0.673113 3.06941 0 4.69445 0 6.38889V16.6111C0 18.3055 0.673113 19.9306 1.87126 21.1287C3.06941 22.3269 4.69445 23 6.38889 23H16.6111C18.3055 23 19.9306 22.3269 21.1287 21.1287C22.3269 19.9306 23 18.3055 23 16.6111V6.38889C23 4.69445 22.3269 3.06941 21.1287 1.87126C19.9306 0.673113 18.3055 0 16.6111 0H6.38889ZM19.1667 2.55556C19.8694 2.55556 20.4444 3.13056 20.4444 3.83333C20.4444 4.53611 19.8694 5.11111 19.1667 5.11111C18.4639 5.11111 17.8889 4.53611 17.8889 3.83333C17.8889 3.13056 18.4639 2.55556 19.1667 2.55556ZM11.5 5.11111C13.1944 5.11111 14.8195 5.78422 16.0176 6.98237C17.2158 8.18052 17.8889 9.80556 17.8889 11.5C17.8889 13.1944 17.2158 14.8195 16.0176 16.0176C14.8195 17.2158 13.1944 17.8889 11.5 17.8889C9.80556 17.8889 8.18052 17.2158 6.98237 16.0176C5.78422 14.8195 5.11111 13.1944 5.11111 11.5C5.11111 9.80556 5.78422 8.18052 6.98237 6.98237C8.18052 5.78422 9.80556 5.11111 11.5 5.11111ZM11.5 7.66667C10.9964 7.66683 10.4978 7.76619 10.0327 7.95905C9.56748 8.15191 9.14485 8.43451 8.78889 8.7907C8.43294 9.1469 8.15062 9.56972 7.95807 10.035C7.76552 10.5003 7.6665 10.999 7.66667 11.5026C7.66683 12.0061 7.76619 12.5047 7.95905 12.9699C8.15191 13.4351 8.43451 13.8577 8.7907 14.2137C9.1469 14.5696 9.56972 14.8519 10.035 15.0445C10.5003 15.237 10.999 15.3361 11.5026 15.3359C12.5196 15.3356 13.4948 14.9312 14.2137 14.2119C14.9326 13.4925 15.3362 12.517 15.3359 11.5C15.3356 10.483 14.9312 9.50778 14.2119 8.78889C13.4925 8.07001 12.517 7.66633 11.5 7.66667Z" fill="white"/>
                        </svg>
                      </Link>
                    </div>
                    <div className="mx-8">
                      <Link href="https://www.linkedin.com/company/intraline%C2%AE/">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.90521 6.97713V23H0.363349V6.97713H4.90521ZM5.26856 2.55945C5.26856 3.99695 4.06951 5.15396 2.61611 5.15396C1.16272 5.15396 0 3.99695 0 2.55945C0 1.15701 1.16272 0 2.61611 0C4.06951 0 5.26856 1.15701 5.26856 2.55945ZM23 13.1479V23H18.4581V14.8308C18.4581 9.92226 12.4265 10.3079 12.4265 14.8308V23H7.92101V6.97713H12.4265V9.57165C14.534 5.78506 23 5.50457 23 13.1479Z" fill="white"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Container>

      <Container className="bg-c_CCE7EF
                            px-5 lg:px-15">
        <div className="items-center py-5
                        block md:flex lg:flex xl:flex">
          <div className="flex items-center
                          w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="flex items-center">
              <label className="text-xs md:text-sm" htmlFor="Currency ">Currency:</label>
              {/* <SelectInput option_li={['$US', '$US', '$US', '$US']} default_option="$US" /> */}
              <select name="" id="" className="bg-transparent">
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
                <option value="us">$US</option>
              </select>
            </div>
            <div className="flex items-center mx-auto">
              <label className="text-xs md:text-sm" htmlFor="Currency">Language:</label>
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
                            mr-0 md:mr-12 lg:mr-12 xl:mr-12
                            text-xs md:text-sm">info@intraline.com</div>
          </div>
          
          <div className="flex items-center
                          flex-row-reverse sm:flex-row
                          w-full md:w-1/2 lg:w-1/2 xl:w-1/2
                          mt-6 md:mt-0 lg:mt-0 xl:mt-0">
            <div className="text_overflow_one_line 
                            text-xs sm:text-sm
                            ml-auto sm:ml-0
                            mr-0 sm:mr-auto">+1 (778) 738-0351</div>
            <div className="flex items-center 
                            ml-0 sm:ml-auto">
              <label htmlFor="" 
                    className="text_overflow_one_line
                              text-xs sm:text-sm">Payment Methods:</label>
              <div className="flex items-center
                              ml-2.5 sm:ml-5 
                              w-12 sm:w-auto">
                <Image src={visaImage} alt="visa image" />
              </div>
              <div className="flex items-center
                              ml-2.5 sm:ml-5
                              w-12 sm:w-auto">
                <Image src={masterCardImage} alt="master card image"/>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* subscribe success modal */}
      {enableSubscribeSuccessModal &&
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col z-40 bg-black bg-opacity-50">
          <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-auto mx-auto">
            <div className="flex justify-between border-b border-gray-100 px-5 py-4">
              <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">Success</span>
                </div>
              <div>
                  <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
                </div>
            </div>
          
            <div className="px-10 py-5 text-gray-600">
              Your email is subscribed successfully and thanks.
            </div>
          
            <div className="px-5 py-4 flex justify-end">
              <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
                onClick={() => {subscribeHandle(false)}}>Close</button>
            </div>
          </div>
        </div>
      }

      {enableSubscribeFailModal &&
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col z-40 bg-black bg-opacity-50">
          <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-auto mx-auto">
            <div className="flex justify-between border-b border-gray-100 px-5 py-4">
              <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">Info</span>
                </div>
              <div>
                  <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
                </div>
            </div>
          
            <div className="px-10 py-5 text-gray-600">
              Your email is already subscribed.
            </div>
          
            <div className="px-5 py-4 flex justify-end">
              <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
                onClick={() => {subscribeHandle(false)}}>Close</button>
            </div>
          </div>
        </div>
      }
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
