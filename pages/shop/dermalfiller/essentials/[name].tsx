import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import { Layout } from '@components/common'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import ChevronRight from '@components/icons/ChevronRight'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
const Button = dynamic(import('@components/mycp/Button'))
import { getCookie } from '@utils/cookie'
import Link from '@components/ui/Link'
import SideReview from '@components/mycp/SideReview'

import {useAppDispatch, useAppSelector} from 'utils/redux/hooks'
import {addProductToCart} from 'utils/redux/slices/cartSlice'
import {openSideReview} from 'utils/redux/slices/reviewSlice'
import { AddToCartByDom } from '@utils/addToCartByDom'
import { useRouter } from 'next/router'
import KeenSliderA from '@components/mycp/KeenSlider/KeenSliderA'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { products, MSERIES_TESTIMONIAL_LIST } from 'utils/productData'

import Image from 'next/image'
import smokeM2Img from 'public/assets/img/SmokeM2.webp'

type ParamsType = {
    name: string
}

function removeSpaceFromStr(str: string) {
    return str.replace(' ', '')
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { name: 'intralineone', id: 'product_0000-000000-0004' } },
        { params: { name: 'intralinetwo', id: 'product_0000-000000-0005' } },
        { params: { name: 'intralinethree', id: 'product_0000-000000-0006' } },
      ],
      fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (params) => {
    const all_products = products;
    const product_data = all_products.filter(item => removeSpaceFromStr(item.title).toLowerCase() === (params.params as ParamsType).name)[0]
    return {
        props: {
            product_data,
        },
    }
}

export default function EssentialProduct({ product_data }: InferGetStaticPropsType<typeof getStaticProps>) {
    let testimonial_li = MSERIES_TESTIMONIAL_LIST.filter(item => {
        if (item.detail.toLowerCase().includes(product_data.title)) return item
    })
    let essential_li = [
        {id: 'product_0000-000000-0004', title: 'Intraline One', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_1.webp', detail: "Used to treat tear troughs, perioral “smoker’s lines”, cupid’s bow and lips for enhancement or subtle definition; marionette lines,  nasolabial folds, and crow’s feet/fine lines.", link: '/shop/dermalfiller/essentials/intralineone'},
        {id: 'product_0000-000000-0005', title: 'Intraline Two', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_2.webp', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral, cupid’s bow and lips. Intraline Two can also be used in nonsurgical rhinoplasty, cheeks, and facial contouring, in addition to treatments for chin and jawline enhancement.", link: '/shop/dermalfiller/essentials/intralinetwo'},
        {id: 'product_0000-000000-0006', title: 'Intraline Three', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_3.webp', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral “smoker’s lines”; cupid’s bow and lips (high definition). Intraline For Men can also be used for nonsurgical rhinoplasty and facial contouring of the cheeks, chin, and jawline.", link: '/shop/dermalfiller/essentials/intralinethree'},
    ]
    const enableSideReview = useAppSelector(state => state.review.enableSideReview)
    const [logined, setLogined] = useState(false)
    const [numM2Plus, setNumM2Plus] = useState(1)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const addToBagHandler = () => {
        let product_detail = essential_li.filter(item => item.link === router.asPath)[0]
        product_detail.quantity = numM2Plus
        dispatch(addProductToCart(product_detail))
    }
    const decreaseNumHandler = () => {
        if (numM2Plus > 1) {
            setNumM2Plus(numM2Plus - 1)
        }else {
            setNumM2Plus(1)
        }
    }
    const increaseNumHandler = () => {
        setNumM2Plus(numM2Plus + 1)
    }
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])

    const addToCartByDom = new AddToCartByDom(essential_li)
    const addToBagMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.addToBagHandler(event, index)
    }
    const decreaseNumMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    
    }
    const increaseNumMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }

    const loginToPurchaseHandler = () => {
        router.push('/account/login')
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
    

    const RenderMseries = () => {
        return essential_li.map((item, index) => {
            return <div className="flex flex-col pb-5 bg-white relative hover:bg-opacity-50" 
                        key={`mseires_${index}`}>
                        {logined && <Button className="ttcommon_font_bold h-9 w-30 absolute top-0 right-0 text-lg" variant="primary">${item.price}</Button>}
                        <div className="flex">
                            <img className="mx-auto " src={item.img} alt="" />
                        </div>
                        <div className="mt-5 ttcommon_font_bold uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                        <div className="textellipsis_2 mt-2 px-3 leading-14_26 text-center">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="h-11 w-full">learn more</Button>
                                    </Link>
                                    
                                    {logined && <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumMseriesHandler(event)}}>-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumMseriesHandler(event)}}>+</button>
                                        </div>
                                        <Button className="ml-3 flex-1 h-full" onClick={(event) => {addToBagMseriesHandler(event, index)}}>Add to bag</Button>
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
    }

    const RenderMseriesSwiper = () => {
        var render_ele = essential_li.map((item, index) => {
            return <div className="keen-slider__slide flex flex-col bg-white relative pb-5" key={`m_${index}_product`}>
                        <div className="flex-1 w-full h-0">
                            <div>
                                <div className="aspect-w-1 aspect-h-1 w-full">
                                    <img className="w-full" src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-c_00080D tracking-widest
                                    sm:text-2xl
                                    leading-14_17 sm:leading-none">{item.title}</div>
                        <div className="textellipsis_2 mt-2 text-center px-4
                                    text-xs sm:text-base
                                    leading-normal sm:leading-14_26">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-c_C6CBDD bg-opacity-50 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="my-auto mx-auto h-11 w-10/12">Learn more</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
        })
        return <KeenSliderA render_ele={render_ele} slidesPerView={[1.5,1.5,2.5,3.5,3.5]} navCss={"mt-10"}/>
    }

    const ShowEnableSideReviewHandler = () => {
        dispatch(openSideReview())
    }
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col
                        mt-16 md:mt-0">
            <div className="h-15 w-full bg-transparent"></div>
            <div className="relative bg-c_CCE7EF w-full flex flex-col pb-15">
                <div className="mt-12_5 items-center uppercase leading-14_17 tracking-widest
                                hidden md:flex">
                    <div className="flex items-center flex-wrap cursor-pointer
                                    pl-5 md:pl-10 lg:pl-15 xl:pl-15 2xl:pl-15
                                    w-10/12">
                        <span className="ttcommon_font mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1 ttcommon_font">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="mr-1 ttcommon_font"><Link href="/shop/dermalfiller">MONOPHASIC DERMAL FILLERS</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">{product_data.title}</span>
                    </div>
                </div>
                <div className="h-full z-10 flex flex-col">
                    {/* responsive part */}
                    <div className="w-full h-full relative
                                    block md:hidden">
                        <div className="flex flex-col items-end h-full">
                            <div className="mb-auto h-full bg-c_CCE7EF relative flex flex-col w-full">
                                {/* <img className="mix_blend_multi ml-auto h-full" src="/assets/img/SmokeM2.webp" alt="" /> */}
                                <Image className="mix-blend-multiply ml-auto h-full" src={smokeM2Img} />
                                <div className="w-full h-full flex absolute items-center justify-center">
                                    <div className="relative">
                                        <img className="m-auto" src="/assets/img/m2plus.webp" alt="" />
                                        {logined && <Button className="absolute top-2 -right-10 h-9 w-30 ttcommon_font_bold text-lg z-10" variant="primary">${product_data.price}.00</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-12 left-5 flex items-center uppercase leading-14_17 tracking-widest">
                            <div className="flex items-center flex-wrap cursor-pointer
                                            w-10/12">
                                <span className="ttcommon_font mr-1"><Link href="/">Home</Link></span>
                                <span className="mr-1"><ChevronRight className="w-4" /></span>
                                <span className="mr-1 ttcommon_font">Shop</span>
                                <span className="mr-1"><ChevronRight className="w-4"/></span>
                                <span className="mr-1 ttcommon_font"><Link href="/shop/dermalfiller">MONOPHASIC DERMAL FILLERS</Link></span>
                                <span className="mr-1"><ChevronRight className="w-4"/></span>
                                <span className="ttcommon_font_bold mr-1">{product_data.title}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex flex-col
                                        w-full md:w-6/12
                                        pr-5 md:pr-0
                                        pl-5 md:pl-10 lg:pl-15 xl:pl-15 2xl:pl-15">
                            <div className="mt-0 md:mt-28">
                                <div className="ttcommon_font_bold text-4xl leading-36_48 mt-7_5">The minimalist.</div>
                                <div className="ttcommon_font_thin leading-200_160 font-semibold
                                                text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px" >
                                    <div className={`${router.asPath.includes('/essentials/intralineone') ? 'block' : 'hidden'}`}><span className='ttcommon_font_bold'>Intraline</span> One</div>
                                    <div className={`${router.asPath.includes('/essentials/intralinetwo') ? 'block' : 'hidden'}`}><span className='ttcommon_font_bold'>Intraline</span> Two</div>
                                    <div className={`${router.asPath.includes('/essentials/intralinethree') ? 'block' : 'hidden'}`}><span className='ttcommon_font_bold'>Intraline</span> Three</div>
                                </div>
                                <div className="ttcommon_font mt-5 leading-36_48
                                                text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">Enhancing more of what you love.</div>
                                <div className="ttcommon_font_thin mt-2 leading-14_26
                                                md:mr-5 lg:mr-36">Minimalism is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love. This style sets out to expose the true essence, essentials or identity of individuals.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 1.1ML</span>
                                </div>}
                                {logined && <div className="mt-5 items-center h-12 text-white
                                                            block md:flex">
                                    <div className="bg-c_00080D flex items-center justify-center h-full
                                                    w-full md:w-24">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numM2Plus}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="h-full
                                                    w-full md:w-52
                                                    ml-0 md:ml-3
                                                    mt-2.5 md:mt-0" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-full h-full
                                hidden md:block">
                    <div className="w-6/12 flex flex-col items-end ml-auto h-full">
                        <div className="mb-auto h-full bg-c_CCE7EF relative flex flex-col">
                            <Image className="mix-blend-multiply ml-auto h-full" src={smokeM2Img} alt="smoke image" />
                            <div className="w-full h-full flex absolute items-center justify-center">
                                <div className="relative">
                                    <img className="m-auto" src="/assets/img/m2plus.webp" alt="" />
                                    {logined && <Button className="absolute top-2 -right-10 h-9 w-30 ttcommon_font_bold text-lg z-10" variant="primary">$100.00</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bg-c_CCE7EF w-full flex flex-col pb-15">
                <div className="items-center justify-center
                                hidden md:flex">
                    <span className="ttcommon_font uppercase tracking-widest">Scroll for more details</span>
                    <ChevronDown className="w-4 ml-4" />
                </div>
            </div>
            

            {/* Indications */}
            <div className="bg-white">
                <div className="flex flex-col mx-auto py-28
                                w-full md:w-162_5
                                px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
                    <div className="ttcommon_font_bold text-center
                                    text-2xl md:text-4xl
                                    leading-none md:leading-36_26">Indications</div>
                    <p className="leading-36_48 mt-6 ttcommon_font_thin text-center
                                text-2xl md:text-4xl">{product_data.title} with lidocaine is best suited for treatment of fine to medium wrinkles in the frown lines, cupid’s bow, labial commissure, neck folds and lip definition.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-72">download indication chart</Button>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_C6CBDD w-full relative
                            hidden lg:block">
                <div className="absolute h-full flex flex-col" style={{left: -211}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_8D97BC text-200px leading-200_160" style={{transformOrigin: 'center'}}>Specs.</div>
                </div>
                <div className="ml-172 mr-15 my-32 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="w-1/2
                                        pr-10 xl:pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">{product_data.title}.</div>
                                    <div className="flex items-center" onClick={() => {ShowEnableSideReviewHandler()}}>
                                        <RatingView ratingValue={testimonial_li.length === 0 ? 0 : 3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                        <div className="text-base ">({testimonial_li.length})</div>
                                    </div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Type</div>
                                                <div className="ttcommon_font_thin leading-14_26">Monophasic dermal filler.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">TOTAL HA CONCENTRATION</div>
                                                <div className="ttcommon_font_thin leading-14_26">24 MG/ML</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Average gel particle size</div>
                                                <div className="ttcommon_font_thin leading-14_26">Small</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Cross linking</div>
                                                <div className="ttcommon_font_thin leading-14_26">BODE(1UG/ML)</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Level of injection</div>
                                                <div className="ttcommon_font_thin leading-14_26">Upper dermis.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">PACKAGING</div>
                                                <div className="ttcommon_font_thin leading-14_26">1 Syringe & 2 Sterile Needles.</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Volume</div>
                                                <div className="ttcommon_font_thin leading-14_26">11ML</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase leading-14_17">Lidocaine</div>
                                                <div className="ttcommon_font_thin leading-14_26">3MG/ML</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex items-center h-11 text-white">
                                        <Button className="h-full flex-1">Buy {product_data.title} now</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Monophasic dermal filler with lidocaine.For fine to medium wrinkles.Each unit comes with two different needles .</div>
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">Rheology.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Low viscosity.<br />Low complex modulus.<br />Low phase angle.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* cart part responsive */}
            <div className="bg-c_C6CBDD w-full relative px-5 pb-15
                            block lg:hidden">
                <div className="flex flex-col">
                    <div className="my-auto ttcommon_font_bold text-c_8D97BC text-7xl leading-24_29">Specs.</div>
                </div>
                <div className="">
                    <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                        <div className="pb-5">
                            <div className="ttcommon_font_bold text-6xl leading-64_76">{product_data.title}.</div>
                            <div className="flex items-center" onClick={() => {ShowEnableSideReviewHandler()}}>
                                <RatingView ratingValue={testimonial_li.length === 0 ? 0 : 3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                <div className="text-base ">({testimonial_li.length})</div>
                            </div>
                        </div>
                        <div className="pt-7">
                            <div className="flex flex-col">
                                <div className="flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Type</div>
                                        <div className="ttcommon_font_thin leading-14_26">Monophasic dermal filler.</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">TOTAL HA CONCENTRATION</div>
                                        <div className="ttcommon_font_thin leading-14_26">24 MG/ML</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Average gel particle size</div>
                                        <div className="ttcommon_font_thin leading-14_26">Small</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Cross linking</div>
                                        <div className="ttcommon_font_thin leading-14_26">BODE(1UG/ML)</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Level of injection</div>
                                        <div className="ttcommon_font_thin leading-14_26">Upper dermis.</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">PACKAGING</div>
                                        <div className="ttcommon_font_thin leading-14_26">1 Syringe & 2 Sterile Needles.</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Volume</div>
                                        <div className="ttcommon_font_thin leading-14_26">11ML</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase leading-14_17">Lidocaine</div>
                                        <div className="ttcommon_font_thin leading-14_26">3MG/ML</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center h-11 text-white">
                                <Button className="h-full flex-1">Buy {product_data.title} now</Button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="w-full text-2xl text-center mt-10">
                    <div className="ttcommon_font_thin leading-36_48">Monophasic dermal filler with lidocaine.For fine to medium wrinkles.Each unit comes with two different needles .</div>
                    <div className="ttcommon_font_bold mt-7_5 leading-36_26">Rheology.</div>
                    <div className="ttcommon_font_thin mt-2.5 leading-36_48">Low viscosity.<br />Low complex modulus.<br />Low phase angle.</div>
                </div>
            </div>
            
            
            {/* Reviews part */}
            <TestimonialCp 
                head_line={"Reviews."} 
                bg_color={"bg-white"} 
                quote_color={"#CCE7EF"} 
                testimonial_li={testimonial_li}/>
            
            
            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="py-15 sm:py-24
                                mx-5 md:mx-15 lg:mx-172 xl:mx-172 2xl:mx-172">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold text-2xl
                                        block sm:hidden
                                        leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">FAQs.</div>
                        <div className="ttcommon_font_bold text-4xl
                                        hidden sm:block
                                         leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <Link href="/faq">
                                <div className="flex items-center">
                                    <div className="ttcommon_font_bold ml-auto
                                                    text-xs sm:text-lg">Read More</div>
                                    <div className="ml-2">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {RenderFAQCollapse()}
                </div>
            </div>

            {/* MSeries */}
            <div className="bg-c_F5DBDD">
                <div className="py-24
                                mx-5 md:mx-15 lg:mx-172">
                    <div className="flex text-c_00080D items-center
                                    mb-5 md:mb-2">
                        <div className="ttcommon_font_bold
                                        text-2xl md:text-4xl
                                        leading-none md:leading-36_26">The Essentials.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold
                                            md:text-lg"><Link href="/shop/dermalfiller/mseries">Learn More</Link></div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 gap-5 grid-cols-3
                                    hidden md:grid">
                        {RenderMseries()}
                    </div>
                    <div className="block md:hidden">
                        {RenderMseriesSwiper()}
                    </div>
                </div>
            </div>

            {enableSideReview && <SideReview reviewList={testimonial_li} />}
        </div>
    )
}

EssentialProduct.Layout = Layout