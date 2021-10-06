import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { ChevronDown, ChevronRight, ChevronUp } from '@components/icons'

import { FC, useEffect, useRef, useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


import KeenSliderA from '@components/mycp/KeenSlider/KeenSliderA'

import { RatingView } from 'react-simple-star-rating'
import Button from '@components/mycp/Button'
import FAQCp from '@components/mycp/FAQCp/FAQCp'

import ReactPlayer from 'react-player';
import Link from '@components/ui/Link'

import {getCookie} from 'utils/cookie'

import {useAppDispatch, useAppSelector} from '../utils/redux/hooks'
import {openSideCart, closeSideCart, addProductToCart} from '../utils/redux/slices/cartSlice'
import {openSideReview, closeSideReview} from '../utils/redux/slices/reviewSlice'
import TriangleRight from '@components/icons/TriangleRight'
import { AddToCartByDom } from '@utils/addToCartByDom'
import ResponsivePlayer from '@components/mycp/ResponsivePlayer'
import router from 'next/router'


export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

const RenderCategorySwiper:FC = () => {
  var render_ele = [
      { name: 'M Series', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/70-1.jpg?width=300&name=70-1.jpg", link: "/shop/dermalfiller/mseries" },
      { name: 'Essentials', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/63.jpg?width=300&name=63.jpg", link: "/shop/dermalfiller/essentials" },
      { name: 'Rejuvenation Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/65-1.jpg?width=300&name=65-1.jpg", link: "/shop/pdothread/rejuvenation" },
      { name: 'Lifting Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg?width=400&name=Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg", link: "/shop/pdothread/liftingthread" },
      { name: 'Skincare', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/7-12.jpg?width=400&name=7-12.jpg", link: "/shop/skincare" },
      { name: 'Scar Kit', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/10-2.jpg?width=3000&name=10-2.jpg", link: "/shop/scarkit" },
  ].map((item, index) => {
      return <div className="keen-slider__slide relative shadow-custom" key={`category_${index}`}>
                  <div className="flex flex-col bg-white pt-5 px-5 pb-12" style={{ height: 472 }}>
                      <div className="flex-1 h-0">
                          <img className="h-full object-contain mx-auto" src={item.img} alt="" />
                      </div>
                      <div className="uppercase text-center text-color_1 tracking-widest font-bold text-2xl mt-auto">{item.name}</div>
                  </div>
                  <div className="absolute top-0 left-0 bg-c_CCE7EF bg-opacity-30 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                      <div className="my-auto flex flex-col">
                          <Link href={item.link}>
                              <Button className="my-auto mx-auto h-11 w-10/12 text-sm">Learn more</Button>
                          </Link>
                      </div>
                  </div>
              </div>
  })
  return <KeenSliderA render_ele={render_ele} slidesPerView={[1,2,3.5,3.5,3.5]} navCss={"mr-10 lg:mr-28 xl:mr-172 2xl:mr-172 mt-10"}/>
}




interface ArrowProps{
  disabled: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
const ArrowNavLeft:FC<ArrowProps> = ({disabled, onClick}) => {
  const disabeld = disabled ? " arrow--disabled" : ""
  return (
      <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-50' : '')}>
        <svg
            className={"arrow arrow--left w-2 h-2"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
  )
}

const ArrowNavRight:FC<ArrowProps> = ({disabled, onClick}) => {
  const disabeld = disabled ? " arrow--disabled" : ""
  return (
      <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-75' : '')} >
      <svg
          className={"arrow arrow--right w-2 h-2"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
      </button>
  )
}
const RenderProfileSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [profile_img_ref, slider1] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 3,
    spacing: 20,
    loop: true,
    controls: false,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
      // slider2.moveToSlide(currentSlide)
    }
  })
  let profile_img_li = ["http://demos.thementic.com/wordpress/WC01/WC010007/wp-content/uploads/2019/02/t3.jpg",
    "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/3.JPG",
    "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG",
    "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
    "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34268-MLS-Serene-Zhuang-007flin.jpg"]

  let render_img_ele = profile_img_li.map((item, index) => {
    return <div key={'profile_img_' + index} className="keen-slider__slide">
            <div>
              <div className="flex">
                <img className={((currentSlide + 1) % profile_img_li.length === index ? 'opacity-100 w-25' : 'opacity-50 w-22_5') + ' mx-auto rounded-full'} src={item} alt="" />
              </div>
            </div>
          </div>
  })
  const [profile_detail_ref, slider2] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    spacing: 20,
    loop: true,
    controls: false,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
      // slider1.moveToSlide(s.details().relativeSlide)
      
    }
  })



  let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
    return <div key={'profile_detail_' + index} className="keen-slider__slide">
            <div className="">
              <div className="text-sm text-center leading-14_17 tracking-widest">DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
              <div className="flex justify-center mt-7_5">
                <RatingView ratingValue={3} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)" />
              </div>
              <p className="text-sm text-center leading-14_26 mt-4 mx-auto max-w-md">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            </div>
          </div>
  })
  
  return <div className="relative 
                        mx-5 md:mx-15 lg:mx-172 xl:mx-172">
            <div className="mx-auto mt-10 w-96">
              <div className="relative">
                <div ref={profile_img_ref} className="keen-slider flex items-center">
                  {render_img_ele}
                </div>
              </div>
            </div>
            <div className="mx-auto mt-10 " style={{ maxWidth: 1094 + 'px' }}>
              <div className="relative mt-7">
                <div ref={profile_detail_ref} className="keen-slider">
                  {render_ele}
                </div>
              </div>
            </div>
            {slider1 && slider2 && (
                  <div className={`flex items-center`}>
                    <div className="absolute top-1/3 left-0">
                      <ArrowNavLeft
                        onClick={(e:any) => {e.stopPropagation(); slider1.prev(); slider2.prev()}}
                        disabled={currentSlide === 0}
                      />
                    </div>
                    <div className="absolute top-1/3 right-0">
                      <ArrowNavRight
                        onClick={(e:any) => {e.stopPropagation(); slider1.next(); slider2.next()}}
                        disabled={currentSlide === slider1.details().size - 1}
                      />
                    </div>
                  </div>
            )}
            {slider1 && slider2 && (
                  <div className="dots mx-auto mt-11">
                    {[...Array(slider1.details().size).keys()].map((idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            slider1.moveToSlideRelative(idx);
                            slider2.moveToSlideRelative(idx);
                          }}
                          className={"dot" + (currentSlide === idx ? " active" : "") + " w-2_5 h-2_5"}
                        ></button>
                      )
                    })}
                  </div>
                )}
          </div> 
}

const RenderFAQCollapse = () => {
  var items = [
    {
      'title': 'How does it work?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'How long do the results last?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What is the expected recovery time for my patients?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are some important safety tips to follow when using this product?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are the most common side effects?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    }
  ]
  return <FAQCp faq_li={items}/>
}


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const play_icon = () => {
    return <div>
              <div className="w-25 h-25 rounded-full border border-white text-white flex justify-center items-center">
                <TriangleRight className="text-white"/>
              </div>     
          </div>
  }
  let featured_product_li = [
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
    {title: "Intraline MasQue", price: 100, amount: 1, img: "/assets/img/product1.png", link: "", detail: ""},
  ]
  const [enableScrollUpBtn, setEnableScrollUpBtn] = useState(false)
  const [logined, setLogined] = useState(false)
  let scrollHandler = (ele:HTMLDivElement) => {
    let scroll_top = ele.scrollTop
    if (scroll_top > 0) {
      setEnableScrollUpBtn(true)
    }
  }

  useEffect(() => {
    if (getCookie('jwt', '') != null) {
        setLogined(true)
    }
  }, [])

  const addToCartByDom = new AddToCartByDom(featured_product_li)

  const addToBagHandler = (event:React.MouseEvent<HTMLButtonElement>, index: number) => {
    addToCartByDom.addToBagHandler(event, index)
  }

  const decreaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    addToCartByDom.decreaseNumHandler(event, true, -1)
    
  }
  const increaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    addToCartByDom.increaseNumHandler(event, true, -1)
  }

  const loginToPurchaseHandler = () => {
    router.push('/account/login')
  }

  const RenderProductSwiper:FC = () => {
    let render_ele = featured_product_li.map((item, index) => {
      return <div className="keen-slider__slide flex flex-col pt-5 pb-12 bg-white relative h-118" key={`m_${index}_product`}>
                {logined && <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8 animate-pulse">${item.price}</div>}
                <div className="flex-1 h-0">
                    <img className="mix_blend_multi mx-auto h-full " src="/assets/img/product1.png" alt="" />
                </div>
                <div className="ttcommon_font_bold uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                <div className="mt-2 text-sm leading-14_26 text-center">Lorem ipsum doloris sit estimatum estiumen.</div>
                <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-c_C6CBDD bg-opacity-50 hover:opacity-100">
                    <div className="my-auto mx-auto w-10/12">
                        <div className="flex flex-col">
                            <Button className=" h-11 text-sm">learn more</Button>
                            {logined && <div className="mt-2 flex items-center h-11 text-white">
                                <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                    <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                    <div className="mx-auto">1</div>
                                    <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                </div>
                                <Button className="ml-3 h-full w-full text-sm" onClick={(event) => {addToBagHandler(event, index)}}>Add to bag</Button>
                            </div>}
                            {!logined && 
                              <div className="mt-2 flex items-center h-11 text-white">
                                <Button className="h-full w-full text-sm" onClick={(event) => {loginToPurchaseHandler()}}>Login in to purchase</Button>
                              </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    }) 
    return <KeenSliderA render_ele = {render_ele} slidesPerView={[1,2,3,4,5]} navCss="mx-5 md:mx-15 lg:mx-172 xl:mx-172 mt-10"/>
  }

  return (
    <div className="bg-c_CCE7EF ttcommon_font">
      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}

      {/* <img className="w-full" src="/assets/img/home-part1-bg.png"></img> */}
      <div className="w-full mt-15">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=giRyQtkecqA"/>
      </div>
      <div className="relative z-10 text-white font-bold flex
                      -mt-20 md:-mt-32
                      mx-5 md:mx-15 lg:mx-172">
        <div className="text-4xl leading-36_26">Our Categories.</div>
        <div className="flex items-center ml-auto">
          <div className=""><Link href="/shop/allproducts">Explore All</Link></div>
          <div className="ml-2">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* our category part */}
      <div className="mt-4 md:mt-10
                      sm:ml-5 md:ml-15 lg:ml-172">
        <RenderCategorySwiper />
      </div>


      {/* about us part */}
      <div className="mt-20 bg-white text-center py-24 relative" style={{ height: 469 + 'px' }}>
        <div className="flex flex-col h-full">
          <div className="leading-36_26 text-4xl font-bold my-auto">Intraline is Confidence.</div>
          <p className="ttcommon_font_thin my-auto text-c_00080D text-4xl leading-36_48 mx-auto max-w-lg">We believe confidence is created in many forms and looks different for everyone. We believe in individuality.</p>
          <Link href="/aboutus">
            <Button className="w-52 h-11 mx-auto mt-7_5 text-sm">About us</Button>
          </Link>
        </div>
        <div className="absolute top-0 left-0
                        w-52 md:w-auto">
          <img src="/assets/img/triple_red.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0
                        w-52 md:w-auto">
          <img src="/assets/img/triple_blue.png" alt="" />
        </div>
      </div>

      {/* Feature products part */}
      <div className="bg-c_C6CBDD py-24">
        <div className="flex items-center
                        mx-5 md:mx-15 lg:mx-172">
          <div className="leading-36_26 font-bold text-4xl">Featured Products.</div>
          <div className="flex items-center ml-auto">
            <Link href="/shop/allproducts">
              <div className="flex items-center">
                <div className=" leading-snug font-bold text-lg">See All</div>
                <div className="ml-2">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <RenderProductSwiper />
        </div>
      </div>

      {/* Reviews part */}
      <div className="py-24 bg-white">
        <div className="leading-36_26 text-c_00080D font-bold text-4xl text-center">Intraline Reviews.</div>
        {RenderProfileSwiper()}
        
      </div>

      {/* FAQ part */}
      <div className="bg-c_C3E0DC">
        <div className="mx-5 md:mx-15 lg:mx-172
                        py-24">
          <div className="flex text-c_00080D mb-2">
            <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
            <div className="flex items-center ml-auto">
              <Link href="/faq">
                <div className="flex items-center">
                  <span className="font-bold text-lg">Read More</span>
                  <span className="ml-2">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          {RenderFAQCollapse()}
        </div>
      </div>
      
      {enableScrollUpBtn && 
        <Button className="fixed bottom-10 right-10 h-20 w-20" variant="scrollup">
          <ChevronUp />
        </Button>
      }
    </div>
  )
}

Home.Layout = Layout
