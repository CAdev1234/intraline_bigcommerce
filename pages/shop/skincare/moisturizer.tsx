import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/common'

const TestimonialCp = dynamic(import('@components/mycp/TestimonialCp/TestimonialCp'))
const Button =  dynamic(import('@components/mycp/Button'))
const Link = dynamic(import('@components/ui/Link'))
const ChevronDown = dynamic(import('@components/icons/ChevronDown'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))


import { getCookie } from '@utils/cookie'

import { useAppDispatch } from '@utils/redux/hooks'
import { addProductToCart } from '@utils/redux/slices/cartSlice'
import QuestionForm from '@components/mycp/QuestionForm'
import { products } from '@utils/productData'

const Image = dynamic(import('next/image'))


export default function Moisturizer() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Claire NewmanIntraline KOL & Brand AmbassadorSOFT TOUCHES AESTHETICS',
            detail: 'I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.'
        },
        {
            title: "Marissa Freeman (patient)",
            detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men"
        },
        {
            title: 'Cole Harrison (patient)',
            detail: 'Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!'
        },
        {
            title: 'Mica Amos Aesthetics by Mica',
            detail: 'Beautiful product giving just perfect results.'
        },
        {
            title: 'Dr. TuğbaYalçın Director Lumière Aesthetics',
            detail: 'Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.'
        },
        {
            title: 'Dr. Mark Homes KOL INTRALINE MEDICAL AESTHETICS',
            detail: 'I was amazed by the extra lift and tightening they generated compared to the already impressive cutting cog of the Intraline Dimension 360 thread. The patient who was previously treated with 19G Dimension 360 threads 18 months ago could not belevie the dramatic improvement in the result compared to last time. I am excited about using these in my practice!'
        },
    ]
    let skincare = products.filter(item => {
        if (item.link.includes('skincare/moisturizer')) return item
    })
    let moisturizer = skincare[0]
    const [logined, setLogined] = useState(false)
    const [numMoisturizer, setNumMoisturizer] = useState(1)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])

    const addToBagHandler = () => {
        moisturizer.quantity = numMoisturizer
        dispatch(addProductToCart(moisturizer))
    }
    const decreaseNumHandler = () => {
        if (numMoisturizer > 1) {
            setNumMoisturizer(numMoisturizer - 1)
        }else {
            setNumMoisturizer(1)
        }
    }
    const increaseNumHandler = () => {
        setNumMoisturizer(numMoisturizer + 1)
    }

    const scrollToBottomHandler = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return(
        <div className="text-c_00080D flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <div className="relative bg-c_F5DBDD w-full flex flex-col mt-15
                            px-5 md:px-15">
                <div className="mt-12_5 left-0 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center ttcommon_font">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="mr-1"><Link href="/shop/skincare">Skin Care</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">Moisturizer</span>
                    </div>
                </div>
                <div className="w-full mt-9
                                block md:hidden">
                    <div className="relative aspect-h-1 aspect-w-1 bg-c_CCE7EF rounded-full">
                        <div className="absolute w-full left-0 top-0">
                            {logined && <Button className="ttcommon_font_bold absolute top-5 h-9 w-32 text-lg
                                                            right-0 md:right-15" variant="primary">${moisturizer.price}</Button>}
                            <div className="relative w-full h-full">
                                <Image className="w-full transform scale-75" src="/assets/img/skincare3.webp" alt="" layout="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full
                                mt-7 md:mt-44">
                    <div className="flex w-full h-full z-10">
                        <div className="flex-1
                                        max-w-none md:max-w-xl">
                            <div className="">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">Restorative</div>
                                <div className="mt-2 leading-none
                                                text-6xl md:text-7xl lg:text-8xl xl:text-120px" ><span className="ttcommon_font_bold">Moisturizer</span></div>
                                <div className="mt-5 leading-36_48
                                                text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">Immerse your skin in intense moisture while smoothing, tightening & rejuvenating</div>
                                <div className="mt-2 leading-14_26
                                                mr-5 lg:mr-36">Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD ${moisturizer.price}</span>
                                    <span className="ml-5">Volume: 100ML</span>
                                </div>}
                                {logined && <div className="mt-5 items-center h-12 text-white
                                                            block md:flex">
                                    <div className="bg-c_00080D flex items-center justify-center h-full
                                                    w-full md:w-24">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numMoisturizer}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="h-full
                                                    w-full md:w-52
                                                    ml-0 md:ml-3
                                                    mt-2_5 md:mt-0" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                        <div className="w-full my-auto max-w-xl
                                        ml-10 lg:ml-20 xl:ml-36
                                        hidden md:block">
                            <div className="relative aspect-h-1 aspect-w-1 bg-c_CCE7EF rounded-full">
                                <div className="absolute w-full left-0 top-0">
                                    {logined && <Button className="ttcommon_font_bold absolute  top-5 h-9 w-32 text-lg
                                                                    right-0 md:right-15" variant="primary">${moisturizer.price}</Button>}
                                    <div className="relative w-full h-full">
                                        <Image className="w-full transform scale-75" src="/assets/img/skincare3.webp" alt="" layout="fill" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 pb-15">
                        <div className="items-center justify-center cursor-pointer
                                        hidden md:flex">
                            <a href='#catalog_section' className='flex items-center'>
                                <span className="uppercase tracking-widest
                                                ">Scroll for more details</span>
                                <ChevronDown className="w-4 ml-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lorem Ipsum. */}
            {/* <div id='catalog_section' className="bg-white
                            px-5 md:px-15 lg:px-40">
                <div className="flex flex-col max-w-2xl mx-auto
                                py-25 md:py-28">
                    <div className="ttcommon_font_bold text-center
                                    leading-none md:leading-36_26
                                    text-2xl md:text-4xl">Lorem Ipsum.</div>
                    <p className="leading-36_48 mt-6 text-center
                                    text-2xl md:text-4xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64">Browse catalog</Button>
                    </div>
                </div>
            </div> */}

            {/* Testimonials part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-c_C6CBDD"} 
                quote_color={"#87C1B9"} 
                testimonial_li={testimonial_li}/>


            {/* Question part */}
            <QuestionForm bg_color='bg-c_C3E0DC' input_bg='bg-white'/>
            
        </div>
    )
}

Moisturizer.Layout = Layout