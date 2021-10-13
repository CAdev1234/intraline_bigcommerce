import React, {useEffect, useRef, useState} from 'react'

import { Layout } from '@components/common'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import { ChevronDown, ChevronRight, Plus } from '@components/icons'
import Link from '@components/ui/Link'

import { getCookie } from 'utils/cookie'




export default function MSeries() {
    const spec_li = [
        {
            headline: 'Pure.',
            title: 'Purely hyaluronic acid',
            detail: 'M Series by Intraline is made of non-animal derived hyaluronic acid (HA), in the highest form of purity. It’s a completely natural substance that is optimized to harmonize with a person’s skin tissue. Over time, a person will break down and fully reabsorb the HA gel.'
        },
        {
            headline: 'Innovative.',
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        },
        {
            headline: 'Volume.',
            title: 'HIGH VISCO-ELASTICITY',
            detail: 'Due to our patent-pending manufacturing process the M Series has higher levels of visco-elasticity than the prior generation of competing monophasic products. The supple consistency of our gel provides unwavering volume while allowing the product to break down evenly with a natural finish..'
        },
        {
            headline: 'Consistent.',
            title: 'HIGHLY CONSISTENT MONOPHASIC STRUCTURE',
            detail: 'The M Series gel is a uniform monophasic structure, making the product stable and consistent. This results in predictable placement in the skin with a smooth delivery of product.'
        },
        {
            headline: 'Movement.',
            title: 'Low phase angle percentage',
            detail: 'The M Series has a low percentage of product migration, meaning that once injected the product is more likely to stay close to the injection site until the gel is reabsorbed into the body.'
        },
    ]
    let testimonial_li = [
        {
            title: 'SAMMI-PEONY DOVEY',
            detail: 'Just want to say I’ve had the best feedback since I started using Intraline from patients xx.'
        },
        {
            title: 'SUSSEX AESTHETICS',
            detail: 'We are seeing amazing results from Intraline as we would expect as their PDO Threads are a market leader.'
        },
        {
            title: 'DR. AMRIT THIARA TIARA AESTHETICS INTRALINE KOL',
            detail: 'Clients are reporting that they are getting an overall more attractive appearance, which is also looking so natural. They mention that it’s very difficult for friends and family to pinpoint what they’ve had done other than they look more refreshed.'
        },
        {
            title: 'DR. THOMAS F. KENNEY AVANT-GARDE PROFESSIONAL AESTHETICS',
            detail: 'Excellent product, perfect density and flow, results were outstanding.'
        },
        {
            title: 'AESTHETICS BY ALICIA, NMC REGISTERED STAFF NURSE',
            detail: 'Intraline M Series is a dream to use.'
        },
    ]
    const [scroll_perc, setScrollPerc] = useState(0)
    const [scroll_perc_mobile, setScrollPercMobile] = useState(0)
    const [logined, setLogined] = useState(false)
    
    let scrollHandler = (ele:HTMLDivElement) => {
        let scroll_height = ele.scrollHeight
        let scroll_top = ele.scrollTop
        let client_height = ele.clientHeight
        setScrollPerc(scroll_top / (scroll_height - client_height) * 100)
    }
    
    let scrollMobileHandler = (ele: HTMLDivElement) => {
        let scroll_width = ele.scrollWidth
        let client_width = ele.clientWidth
        let scroll_left = ele.scrollLeft
        setScrollPercMobile(scroll_left / (scroll_width - client_width) * 100)
    }

    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])

    const renderMSeriesSwiper = () => {
        let mseries_li = [
            {id: 'product_0000-000000-0001', title: 'M2 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/m2plus.png', detail: "M2 Plus is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love.", link: '/shop/dermalfiller/mseries/m2plus'},
            {id: 'product_0000-000000-0002', title: 'M3 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/m3plus.png', detail: "M3 Plus style embraces a minimal aesthetic, with maximum impact of all the important things. It’s all about minimally enhancing your features for maximum impact.", link: '/shop/dermalfiller/mseries/m3plus'},
            {id: 'product_0000-000000-0003', title: 'M4 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/m4plus.png', detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave.", link: '/shop/dermalfiller/mseries/m4plus'},
        ]
        let render_ele = mseries_li.map((item, index) => {
            return <div className="keen-slider__slide flex flex-col relative group" key={`mseries_${index}`}>
                        <div className="my-auto">
                            <div className="flex flex-col">
                                    <div className="mx-auto relative
                                                    h-80 md:h-146">
                                        <img className="h-full" src={item.img} alt=""/>
                                        {logined && 
                                            <div className="absolute
                                                            top-0 
                                                            -right-10">
                                                <Button className="h-9 w-30 ttcommon_font_bold text-lg" variant="primary">${item.price}</Button>
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="uppercase text-2xl text-center tracking-widest font-semibold">{item.title}</div>
                                </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100">
                            <Link href={item.link}>
                                <button className="my-auto mx-auto w-20 h-20 flex justify-center items-center bg-c_00080D rounded-full text-white">
                                    <Plus />
                                </button>
                                <div className="text-center">Know More</div>
                            </Link>
                            
                        </div>
                    </div>
        })
        return <KeenSliderB 
                    render_ele={render_ele} 
                    slidesPerView={[1,1,1,1,1]} 
                    enableDot={true} 
                    prevNavCss={"my-auto"} 
                    nextNavCss={"my-auto"}
                    dotCss={"mt-7_5"}/>
    }

    return(
        <div className="ttcommon_font text-c_00080D flex flex-col
                        mt-16 md:mt-0">
            <div className="absolute top-0 left-0 w-full flex overflow-hidden
                            h-auto sm:h-175 md:h-225 lg:h-225 xl:h-225 2xl:h-225">
                <div className="h-full
                                w-0 xl:w-154_5 2xl:w-154_5"></div>
                <div className="relative flex-1 h-full
                                hidden sm:block">
                    <div className="absolute left-0 rounded-full bg-c_CCE7EF" style={{width: 1192, height: 1192, top: -128}}></div>
                </div>
            </div>
            <div className="w-full h-15 bg-transparent"></div>
            <div className="relative w-full flex flex-col
                            h-auto sm:h-160 md:h-210 lg:h-210 xl:h-210 2xl:h-210
                            bg-c_CCE7EF sm:bg-white
                            bg-opacity-100 sm:bg-opacity-0">
                
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center flex-wrap cursor-pointer
                                    pl-5 md:pl-10 lg:pl-15 xl:pl-15 2xl:pl-15
                                    md:w-90 lg:w-full">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="mr-1"><Link href="/shop/dermalfiller">Dermal fillers</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold
                                        ml-0 lg:mr-1">MONOPHASIC DERMAL FILLERS</span>
                    </div>
                </div>
                <div className="z-10 h-full flex flex-col
                                mb-0 sm:mb-15">
                    <div className="w-full
                                    mt-12 md:mt-30
                                    block sm:flex
                                    px-5 md:px-10 lg:px-15 xl:px-15 2xl:px-15">
                        <div className="flex flex-col">
                            <div className="">
                                <div>
                                    <div className="ttcommon_font_thin font-semibold
                                                    text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                    leading-none md:leading-200_160 lg:leading-200_160 xl:leading-200_160">The</div>
                                    <div className="ttcommon_font_bold
                                                    text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                    leading-none md:leading-tight lg:leading-none xl:leading-200_160" >M Series</div>
                                </div>
                                <div className="mr-10
                                                ml-0 lg:ml-auto
                                                sm:w-6/12 md:w-5/12 lg:w-131_5">
                                    <div className="ttcommon_font_thin w-full font-semibold mt-8 text-c_00080D
                                                    text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                                                    leading-36_48 sm:leading-36_48 md:leading-36_48 lg:leading-36_48 xl:leading-36_48
                                                    ">The M Series from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 pb-15 relative overflow-hidden
                                    block sm:hidden
                                    px-5 sm:px-0">
                        {renderMSeriesSwiper()}
                        <div className="absolute top-15 bg-white h-full rounded-t-full w-150vw left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="items-center justify-center mt-auto
                                    hidden sm:flex">
                        <span className="uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
                <div className="absolute h-full
                                top-28 sm:top-0 md:top-0
                                sm:right-5 md:right-10 lg:right-15
                                sm:w-75 md:w-90 lg:w-100
                                hidden sm:block">
                    <div className="flex flex-col ml-auto h-full">
                        <div className="my-auto">
                            {renderMSeriesSwiper()}
                        </div>
                    </div>
                </div>
            </div>

            {/* pure part */}
            <div className="hidden sm:block bg-c_C6CBDD w-full relative z-10" style={{height: 880}}>
                <div className="mt-12_5 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="pr-5 xl:pr-32 2xl:pr-32
                                        w-1/2 overflow-y-auto
                                        no-scrollbar" 
                                        style={{height: 830, scrollbarWidth: 'none'}}
                                        onScroll={(event) => scrollHandler(event.target as any)}>
                            {spec_li.map((item, index) => {
                                return <div className="mb-7_5" key={`pure_part_${index}`}>
                                            <div className="ttcommon_font_bold leading-64_76
                                                            sm:text-4xl md:text-6xl
                                                            ml-5 md:ml-10 lg:ml-20 xl:ml-172 2xl:ml-172">{item.headline}</div>
                                            <div className="relative">
                                                <div className="mt-2 bg-white py-12 relative z-10
                                                                sm:px-5 md:px-10
                                                                sm:py-10 md:py-12
                                                                ml-5 md:ml-10 lg:ml-20 xl:ml-172 2xl:ml-172">
                                                    <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 text-c_00080D tracking-widest">{item.title}</div>
                                                    <div className="mt-2 text-sm leading-14_26 text-c_00080D">{item.detail}</div>
                                                </div>
                                                <div className="ttcommon_font_bold text-200px text-c_8D97BC leading-14_17 absolute" style={{bottom: -60}}>0{index + 1}</div>
                                            </div>        
                                        </div>
                            })}
                            
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 flex flex-col w-5/12 h-full
                                    mr-5 md:mr-10 lg:mr-20 xl:mr-172 2xl:mr-172" style={{maxWidth: 538}}>
                        <div className="my-auto">
                            <div className="text-sm tracking-widest">THE M SERIES were created for maximum</div>
                            <div className="ttcommon_font_bold text-4xl leading-36_48 mt-2.5 uppercase">Function, versatility & impact.</div>
                            <div className="ttcommon_font_thin mt-7_5
                                            text-2xl md:text-3xl lg:text-4xl
                                            leading-36_48 md:leading-36_48 lg:leading-36_48">Our fillers are made using patent-pending technology to harness the power of a highly pure, highly cross-linked hyaluronic acid; a completely natural substance that harmonizes with the skin, creating long-lasting and natural looking results.</div>
                            <div className="progress-bar-container bg-white w-full h-1 mt-12_5">
                                <div className="progress-bar bg-c_00080D h-full" style={{width: `${scroll_perc}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pure part for mobile */}
            <div className="block sm:hidden bg-c_C6CBDD w-full py-20">
                <div className="w-full flex items-center pl-5">
                    <div className="w-full overflow-x-auto test_ele
                                    no-scrollbar flex" 
                                    style={{scrollbarWidth: 'none'}}
                                    onScroll={(event) => scrollMobileHandler(event.target as any)}>
                        {spec_li.map((item, index) => {
                            return <div className="mr-5 flex-1 flex flex-col" key={`pure_part_${index}`} style={{width:278, minWidth:278}}>
                                        <div className="flex items-center">
                                            <div className="ttcommon_font_bold leading-64_76 text-4xl">{item.headline}</div>
                                            <div className="ml-auto ttcommon_font_bold text-6xl text-c_8D97BC leading-14_17">0{index + 1}</div>
                                        </div>
                                        
                                        <div className="w-full h-full">
                                            <div className="bg-white p-7_5 relative z-10 h-full">
                                                <div className="ttcommon_font_bold uppercase text-sm leading-24_29 text-c_00080D tracking-widest">{item.title}</div>
                                                <div className="mt-2 text-xs leading-14_26 text-c_00080D">{item.detail}</div>
                                            </div>
                                            
                                        </div>        
                                    </div>
                        })}
                        
                    </div>
                    
                </div>
                <div className="px-5 mt-7_5">
                    <div className="progress-bar-container bg-white w-full h-1">
                        <div className="progress-bar bg-c_00080D h-full" style={{width: `${scroll_perc_mobile}%`}}></div>
                </div>
                </div>

                <div className="flex flex-col w-full h-full mt-20 px-5">
                    <div className="text-sm tracking-widest uppercase">THE M SERIES were created for maximum</div>
                    <div className="ttcommon_font_bold text-2xl leading-36_48 mt-2.5">Function, versatility & impact.</div>
                    <div className="ttcommon_font_thin mt-5 leading-36_48 text-2xl">Our fillers are made using patent-pending technology to harness the power of a highly pure, highly cross-linked hyaluronic acid; a completely natural substance that harmonizes with the skin, creating long-lasting and natural looking results.</div>
                </div>
            </div>


            {/* Mesmerizing, Modern, and Memorable */}
            <div className="bg-white">
                <div className="flex flex-col mx-auto py-28
                                w-11/12 sm:w-146">
                    <div className="ttcommon_font_bold text-center mx-auto
                                    text-2xl sm:text-4xl
                                    leading-24_29 sm:leading-36_26">Mesmerizing, Modern, and Memorable.</div>
                    <p className="mt-6 ttcommon_font_thin text-center
                                text-2xl sm:text-4xl
                                leading-9 sm:leading-36_48">Intraline M Series dermal fillers have high visco-elasticity levels to give long-lasting volume.</p>
                    <div className="mt-8">
                        <Link href="/shop/dermalfiller/mseriesshop">
                            <Button className="mx-auto h-11 w-64 text-sm">Shop now the m series</Button>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-c_C3E0DC"} 
                quote_color={"#87C1B9"} 
                testimonial_li={testimonial_li}/>
            
        </div>
    )
}

MSeries.Layout = Layout