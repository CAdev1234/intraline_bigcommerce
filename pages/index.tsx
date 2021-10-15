import commerce from '@lib/api/commerce'
import dynamic from 'next/dynamic'
import Layout from'@components/common/Layout'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { ChevronRight, ChevronUp } from '@components/icons'

import { FC, useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const KeenSliderA = dynamic(import('@components/mycp/KeenSlider/KeenSliderA'))
const Button = dynamic(import('@components/mycp/Button'))
const FAQCp = dynamic(import('@components/mycp/FAQCp/FAQCp'))
const Link = dynamic(() => import('@components/ui/Link'))
const ResponsivePlayer = dynamic(() => import('@components/mycp/ResponsivePlayer'))

import { RatingView } from 'react-simple-star-rating'
import {useAppSelector} from '../utils/redux/hooks'
import { AddToCartByDom } from '@utils/addToCartByDom'
import router from 'next/router'
import { TestimonialCp } from '@components/mycp'
import tripleRedImg from 'public/assets/img/triple_red.webp'
import tripleBlueImg from 'public/assets/img/triple_blue.png'

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

const RenderCategorySwiper = () => {
  var render_ele = [
      { name: 'M Series', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/70-1.jpg?width=300&name=70-1.jpg", link: "/shop/dermalfiller/mseries" },
      { name: 'Essentials', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/63.jpg?width=300&name=63.jpg", link: "/shop/dermalfiller/essentials" },
      { name: 'Rejuvenation Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/65-1.jpg?width=300&name=65-1.jpg", link: "/shop/pdothread/rejuvenation" },
      { name: 'Lifting Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg?width=400&name=Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg", link: "/shop/pdothread/liftingthread" },
      { name: 'Skincare', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/7-12.jpg?width=400&name=7-12.jpg", link: "/shop/skincare" },
      { name: 'Scar Kit', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/10-2.jpg?width=3000&name=10-2.jpg", link: "/shop/scarkit" },
  ].map((item, index) => {
      return <div className="keen-slider__slide relative" key={`category_${index}`}>
                  <div className="flex flex-col bg-white w-full aspect-w-11 aspect-h-14">
                    <div className="w-full h-full flex flex-col px-3 pt-3">
                      <div className="">
                          <img className="w-full" src={item.img} alt="" />
                      </div>
                      <div className="ttcommon_font_bold uppercase text-center text-color_1 tracking-widest mt-5 h-12 flex justify-center items-center
                                       md:text-2xl
                                       leading-14_17 md:leading-none">{item.name}</div>
                    </div>
                      
                  </div>
                  <div className="absolute top-0 left-0 bg-c_CCE7EF bg-opacity-70 w-full h-full flex flex-col transition duration-500 ease-linear opacity-0 hover:opacity-100">
                      <div className="my-auto flex flex-col">
                          <Link href={item.link}>
                              <Button className="my-auto mx-auto h-11 w-10/12">Learn more</Button>
                          </Link>
                      </div>
                  </div>
              </div>
  })
  return <KeenSliderA render_ele={render_ele} slidesPerView={[1.5,2,2.5,3.5,3.5]} navCss={"mr-10 lg:mr-28 xl:mr-172 2xl:mr-172 mt-10"}/>
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
  let profile_li = [
    {
      title: "DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC",
      detail: "Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.",
      img: "https://liniaskinclinic.com/wp-content/uploads/2018/11/ThermiLaunch_LR-8281-214x300.jpg"
    },
    {
      title: "Claire Newman Intraline KOL & Brand Ambassador SOFT TOUCHES AESTHETICS",
      detail: "I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.",
      img: "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/3.JPG"
    },
    {
      title: "Marissa Freeman (patient)",
      detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men.",
      img: "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
    },
    {
      title: "Cole Harrison (patient)",
      detail: "Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!",
      img: "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg"
    },
    {
      title: "Dr. Tuğba Yalçın Director Lumière Aesthetics",
      detail: "Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.",
      img: "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34268-MLS-Serene-Zhuang-007flin.jpg"
    },
  ]
  let render_img_ele = profile_li.map((item, index) => {
    return <div key={'profile_img_' + index} className="keen-slider__slide">
            <div>
              <div className="flex">
                <img className={((currentSlide + 1) % profile_li.length === index ? 'opacity-100 w-25 h-25' : 'opacity-50 w-22_5 h-22_5') + ' mx-auto rounded-full'} src={item.img} alt="" />
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

  let render_ele = profile_li.map((item, index) => {
    return <div key={'profile_detail_' + index} className="keen-slider__slide">
            <div className="">
              <div className="text-base text-center uppercase leading-14_17 tracking-widest max-w-md mx-auto">{item.title}</div>
              <div className="flex justify-center mt-7_5">
                <RatingView ratingValue={5} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)" />
              </div>
              <p className="text-base text-center leading-14_26 mt-4 mx-auto max-w-md">{item.detail}</p>
            </div>
          </div>
  })
  
  return <div className="relative 
                        mx-5 md:mx-15 lg:mx-172 xl:mx-172">
            {/* <div className="mx-auto mt-10 w-full" style={{maxWidth: 384}}>
              <div className="relative">
                <div ref={profile_img_ref} className="keen-slider flex items-center">
                  {render_img_ele}
                </div>
              </div>
            </div> */}
            <div className="mx-auto mt-10 " style={{ maxWidth: 1094 + 'px' }}>
              <div className="relative mt-7">
                <div ref={profile_detail_ref} className="keen-slider">
                  {render_ele}
                </div>
              </div>
            </div>
            {slider2 && (
                  <div className={`flex items-center`}>
                    <div className="absolute top-1/3 left-0 mt-auto sm:mt-0 hidden sm:block">
                      <ArrowNavLeft
                        onClick={(e:any) => {e.stopPropagation(); slider2.prev()}}
                        disabled={currentSlide === 0}
                      />
                    </div>
                    <div className="absolute top-1/3 right-0 mt-auto sm:mt-0 hidden sm:block">
                      <ArrowNavRight
                        onClick={(e:any) => {e.stopPropagation(); slider2.next()}}
                        disabled={currentSlide === slider1.details().size - 1}
                      />
                    </div>
                  </div>
            )}
            {slider2 && (
                  <div>
                    <div className="absolute bottom-0 left-0 block sm:hidden">
                      <ArrowNavLeft
                        onClick={(e:any) => {e.stopPropagation(); slider2.prev()}}
                        disabled={currentSlide === 0}
                      />
                    </div>
                    <div className="dots mx-auto mt-11">
                      {[...Array(slider2.details().size).keys()].map((idx) => {
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
                    <div className="absolute bottom-0 right-0 block sm:hidden">
                      <ArrowNavRight
                        onClick={(e:any) => {e.stopPropagation(); slider2.next()}}
                        disabled={currentSlide === slider1.details().size - 1}
                      />
                    </div>
                  </div>
                )}
          </div> 
}

const RenderFAQCollapse = () => {
  var items = [
    {
      'title': 'WHAT ARE THE BENEFITS OF DERMAL FILLERS?',
      'detail': 'Generally, Dermal Fillers help patients to achieve a more youthful, rejuvenated look by filling out wrinkles and fine lines in certain areas (currently, the most common treatment area is the face). Patients say the largest benefit of Dermal Fillers is the immediate results they see, you can expect to see your desired results with little to no waiting time post treatment. Patients tend to opt for Dermal Fillers over other alternative treatments that use Neurotoxins (most common brand is Botox) because of the more natural results achieved by Dermal Fillers and the longer lasting results reached with Dermal Fillers over Neurotoxin treatments. Dermal Fillers are made up of natural properties, like Hyaluronic Acid that is naturally found in the body (read more about that here). Additionally, unlike Neurotoxins, Dermal Fillers are also completely reversible. Dermal Filler treatments can be expected to last for several months, this is dependent on the treatment area, age and lifestyle. Your doctor or injector will be able to give you a more accurate timeline on your results duration. Intraline provides patients with the best of both worlds: A long lasting, beautiful result without the commitment of an irreversible procedure – the perfect introduction to a dermatological aesthetics treatment program.'
    },
    {
      'title': 'WHAT IS HYALURONIC ACID?',
      'detail': 'Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the skin creates volume and elasticity. HA is a naturally occurring sugar found in virtually all species in the animal kingdom and in every tissue of the human body. Just a single gram of Hyaluronic Acid has the ability to hold up to six liters of water. The skin has three layers: The Epidermis, Dermis, and Subcutaneous. The Epidermis is the outer layer, containing cells that are continually renewed. The Dermis is the middle layer, containing Collagen (which provides support to the skin) and Elastin (which provides strength and flexibility). The Subcutaneous is the deepest layer of the skin, and has the job of supporting the two layers above it. HA is naturally found throughout all three layers of the skin. However, as you age, your skin cells renew themselves at a slower rate, providing less HA, Collagen, and Elastin, causing the skin to thin. In combination with external elements such as sun exposure, gravity, repetitive movement, diet, and stress, the skin loses volume, sags, and develops fine lines.'
    },
    {
      'title': 'WHO IS A GOOD CANDIDATE FOR DERMAL FILLERS?',
      'detail': 'Dermal Fillers can be used on people in all age ranges, the ideal candidate should be in good physical and psychological health. Generally, compared to PDO thread treatments Dermal Filler treatments are performed on younger patients. However, this is all dependent on the desired results. It is important for candidates to have realistic expectations of results. Dermal Fillers are a great solution to prevent the early signs of aging in the face (i.e. crows feet, frown lines, smile lines, etc.) as well as plumping and shaping the lips, cheeks and jawline.'
    },
    {
      'title': 'HOW SHOULD I PREPARE FOR A DERMAL FILLER TREATMENT?',
      'detail': 'Before your treatment, it’s wise to sit down with your Clinician in a consultation appointment to discuss your expectations and ensure your understanding of the procedure. Be sure to communicate your specific desires for your appearance, as well as your complete medical history. Talk to your clinician candidly about timelines you may have, or specific events or dates that you would like to see results achieved by. In more general terms, patients want to ensure they do not consume alcoholic beverages for at least 24 hours before the treatment. We also recommend that patients eat and drink prior to their appointments to avoid nausea or lightheadedness. Certain blood thinning medications should also be avoided, for more specifics on this, we recommend contacting your doctor.'
    },
    {
      'title': 'WHAT CAN I EXPECT DURING MY TREATMENT?',
      'detail': 'Come to your appointment prepared by having followed any instructions provided to you by your Clinician during your consultation. Your Clinician will clean and sterilize the injection site thoroughly. You can expect to experience some mild discomfort during the procedure, but the injection site will be numbed using a topical, or local anesthetic, for your comfort.'
    },
    {
      'title': 'WHAT CAN I EXPECT AFTER MY TREATMENT?',
      'detail': "You can expect to feel some mild discomfort at the injection site after the treatment. Your Clinician will provide you with a list of “Do’s and Don’ts” for post-treatment care. Follow these instructions carefully to avoid excess bruising and swelling, and to guarantee the best possible results. Most commonly, patients are advised to avoid strenuous exercise for one or two days post treatment and alcohol for two to three days. Patients should not expose the injection site to extreme temperatures (cold, heat, or sun) for the first week, and should avoid touching the injection site as much as possible. One of the benefits of dermal fillers is that you will begin to see results immediately after your treatment. That being said, you can expect some swelling and mild bruising in the days following, so always be sure to book your treatment well in advance of any important events you may need to attend. Your results will last several months, however, if you are unhappy with your new look, dermal fillers are also completely reversible. Intraline provides patients with the best of both worlds: A long lasting result without the commitment of an irreversible procedure – the perfect introduction to a dermatological aesthetics treatment program."
    },
    {
      'title': "RECOMMENDED QUESTIONS TO ASK YOUR CLINICIAN",
      'detail': "- What products do you recommend, and why \n - What specifically are the results that I should I expect?\n- How long can I expect the results to last?\n- What side effects should I expect?\n- How much will the treatment cost?\n- How much pain can I expect during and after the treatment?\n- What type of care will be required after my procedure?\n- Any additional special instructions?"
    },
    {
      'title': "HOW LONG DO RESULTS LAST?",
      'detail': "The result duration really depends on the treatment, individual and their lifestyle. However, you can expect results on average to last between 4-12 months."
    },
    {
      'title': "ARE THERE SIDE EFFECTS FROM DERMAL FILLER TREATMENTS?",
      'detail': "With any cosmetic procedure, there is a range of potential side effects. The most common side effects include temporary reactions at the treatment site such as tenderness, swelling, firmness, lumps/bumps, bruising, pain, redness, discoloration, and itching. The reactions normally appear shortly after treatment and may last up to 7 days for injections into the skin and up to 14 for injection into the lips. If you determine that the discomfort experienced is severe or if the site gives rise to other conditions, such as oedema or prolonged swelling, contact the physician who administered the treatment immediately. Although most side effects will resolve with time, some side effects may persist longer than 30 days. Your doctor may choose to treat them with medications, such as antibiotics, steroids, or hyaluronidase (an enzyme that breaks down HA and essentially removes the product). The risks associated with dermal fillers are low, but it is important to be aware."
    },
    {
      'title': "WHAT ARE THE RISKS & COMPLICATIONS OF A TREATMENT?",
      'detail': "Severe complications from Dermal Fillers are very uncommon, however with any cosmetic procedure potential risks exist. Risks depend on the Dermal Filler type, injector and patient. Here are some identified potential risks:\n- Acne-like skin eruptions\n- Asymmetry\n- Bruising, bleeding from the injection site, swelling\n- Damage to the skin that results in a wound and possible scarring\n- Infection at the injection site\n- Lumps\n- Palpability of the filler under the surface of the skin\n- Skin rash with itching\n- Skin redness\n- Under- or over-correction of wrinkles\n- Blindness\n- Skin necrosis (ulceration or loss of skin from disruption of blood flow)\nWe recommend sourcing a clinician that is professionally trained and able to answer all of your questions related to the procedure and potential risks."
    }
  ]
  return <FAQCp faq_li={items}/>
}


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  let profile_li = [
    {
      title: "DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC",
      detail: "Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.",
      rate: 5
    },
    {
      title: "Claire Newman Intraline KOL & Brand Ambassador SOFT TOUCHES AESTHETICS",
      detail: "I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.",
      rate: 5
    },
    {
      title: "Marissa Freeman (patient)",
      detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men.",
      rate: 5
    },
    {
      title: "Cole Harrison (patient)",
      detail: "Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!",
      rate: 5
    },
    {
      title: "Dr. Tuğba Yalçın Director Lumière Aesthetics",
      detail: "Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.",
      rate: 5
    },
  ]
  const [enableScrollUpBtn, setEnableScrollUpBtn] = useState(false)
  const logined = useAppSelector((state) => state.user.logined)
  
  let all_product_li = useAppSelector((state) => state.product.products)
  let scrollHandler = (ele:HTMLDivElement) => {
    let scroll_top = ele.scrollTop
    if (scroll_top > 0) {
      setEnableScrollUpBtn(true)
    }
  }

  useEffect(() => {
    // if (getCookie('jwt', '') != null) {
    //     setLogined(true)
    // }
  }, [])

  const addToCartByDom = new AddToCartByDom(all_product_li)

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

  const gotoProductHandler = (product_path: string) => {
    router.push(product_path)
  }

  const RenderProductSwiper:FC = () => {
    let featured_products = []
    for (let index = 0; index < all_product_li.length; index++) {
      featured_products.push(all_product_li[index])
      if (index > 7) break;
    }
    let render_ele = featured_products.map((item, index) => {
      return <div className="keen-slider__slide flex flex-col bg-white relative
                             pb-5 sm:pb-12" 
                  key={`m_${index}_product`}>
                {logined && <div className="ttcommon_font_bold absolute top-0 right-0 z-10 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">${item.price}</div>}
                <div className="">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img className="w-full" src={item.img} alt="" />
                    {/* <div className="w-full">
                      <Image src={item.img} alt={`category_img_${index}`}/>
                    </div> */}
                  </div>
                </div>
                <div className="ttcommon_font_bold mt-5 uppercase text-center text-c_00080D tracking-widest
                                sm:text-2xl
                                leading-14_17 sm:leading-none">{item.title}</div>
                <div className="textellipsis_2 mt-2 text-center px-4
                                text-xs sm:text-base
                                leading-normal sm:leading-14_26">{item.detail}</div>
                <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-c_C6CBDD bg-opacity-50 transition duration-500 ease-linear hover:opacity-100">
                    <div className="my-auto mx-auto w-10/12">
                        <div className="flex flex-col">
                            <Button className=" h-11" onClick={() => {gotoProductHandler(item.link)}}>learn more</Button>
                            {logined && <div className="mt-2 flex items-center h-11 text-white">
                                <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                    <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                    <div className="mx-auto">1</div>
                                    <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                </div>
                                <Button className="ml-3 h-full w-full" onClick={(event) => {addToBagHandler(event, index)}}>Add to bag</Button>
                            </div>}
                            {!logined && 
                              <div className="mt-2 flex items-center h-11 text-white">
                                <Button className="h-full w-full" onClick={(event) => {loginToPurchaseHandler()}}>Login in to purchase</Button>
                              </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    }) 
    return <KeenSliderA render_ele = {render_ele} slidesPerView={[1.5,2,3,4,5]} navCss="mr-5 md:mx-15 lg:mx-172 xl:mx-172 mt-10"/>
  }

  return (
    <div className="bg-c_CCE7EF ttcommon_font
                    pt-16 md:pt-0">
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

      <div className="w-full mt-15">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=giRyQtkecqA"/>
      </div>
      <div className="relative z-10 flex ttcommon_font_bold
                      text-c_00080D md:text-white
                      mt-16 md:-mt-32
                      mx-5 md:mx-15 lg:mx-172">
        <div className="text-2xl md:text-4xl 
                        leading-7 md:leading-36_26">Our Categories.</div>
        <div className="flex items-center ml-auto">
          <div className=""><Link href="/shop/allproducts">Explore All</Link></div>
          <div className="ml-2">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* our category part */}
      <div className="mt-4 md:mt-10
                      ml-5 md:ml-15 lg:ml-172">
        <RenderCategorySwiper />
      </div>

      {/* about us part */}
      <div className="mt-20 bg-white text-center py-24 relative
                      h-103 md:h-117
                      px-5 md:px-0">
        <div className="flex flex-col h-full">
          <div className="ttcommon_font_bold my-auto
                          text-2xl md:text-4xl
                          leading-tight md:leading-36_26">Intraline is Confidence.</div>
          <p className="ttcommon_font_thin my-auto text-c_00080D mx-auto max-w-lg
                        text-2xl md:text-4xl
                        leading-normal md:leading-36_48">Our mission is to inspire confidence through safe and effective medical aesthetic products.</p>
          <Link href="/aboutus">
            <Button className="w-52 h-11 mx-auto mt-7_5">About us</Button>
          </Link>
        </div>
        <div className="absolute top-0 left-0
                        w-52 md:w-auto">
          <Image src={tripleRedImg} alt="" />
          {/* <img src="/assets/img/triple_red.webp" alt="" /> */}
        </div>
        <div className="absolute bottom-0 right-0
                        w-52 md:w-auto">
          {/* <img src="/assets/img/triple_blue.webp" alt="" /> */}
          <Image src={tripleBlueImg} alt="triple blue image"></Image>
        </div>
      </div>

      {/* Feature products part */}
      <div className="bg-c_C6CBDD
                        py-16 sm:py-24">
        <div className="flex items-center
                        mx-5 md:mx-15 lg:mx-172">
          <div className="ttcommon_font_bold
                          text-2xl md:text-4xl
                          leading-tight md:leading-36_26">Featured Products.</div>
          <div className="flex items-center ml-auto">
            <Link href="/shop/allproducts">
              <div className="flex items-center">
                <div className="ttcommon_font_bold leading-snug text-lg">See All</div>
                <div className="ml-2">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-5 md:mt-10
                        pl-5 md:pl-0">
          <RenderProductSwiper />
        </div>
      </div>

      {/* Reviews part */}
      <div className="bg-white
                      py-10 sm:py-24">
        {/* <div className="text-center ttcommon_font_bold
                        text-2xl md:text-4xl
                        leading-tight md:leading-36_26">Intraline Reviews.</div> */}
        {/* {RenderProfileSwiper()} */}
        <TestimonialCp
                head_line={"Intraline Reviews."} 
                bg_color={"bg-white"} 
                quote_color={"#52B5D3"} 
                testimonial_li={profile_li}/>
      </div>

      {/* FAQ part */}
      <div className="bg-c_C3E0DC">
        <div className="mx-5 md:mx-15 lg:mx-172
                        py-15 sm:py-24">
          <div className="flex text-c_00080D mb-2">
            <div className="ttcommon_font_bold leading-36_26 text-4xl hidden sm:block">Frequently Asked Questions.</div>
            <div className="ttcommon_font_bold text-2xl leading-tight block sm:hidden">FAQs.</div>
            <div className="flex items-center ml-auto">
              <Link href="/faq">
                <div className="flex items-center">
                  <span className="ttcommon_font_bold 
                                  text-xs sm:text-lg
                                   leading-loose sm:leading-none">Read More</span>
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
