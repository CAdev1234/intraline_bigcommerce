import React, {useEffect, useRef, useState} from 'react'

import { Layout } from '@components/common'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import { ChevronDown, ChevronRight } from '@components/icons'
import Link from '@components/ui/Link'

import { getCookie } from 'utils/cookie'




export default function MSeries() {
    const m_series_li = [
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
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        },
        {
            headline: 'Innovative.',
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        },
        {
            headline: 'Volume.',
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        },
        {
            headline: 'Innovative.',
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        },
        {
            headline: 'Volume.',
            title: 'Unique cross-linked technology',
            detail: 'The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.'
        }
    ]
    const [scroll_perc, setScrollPerc] = useState(0)
    const [logined, setLogined] = useState(false)
    
    let scrollHandler = (ele:HTMLDivElement) => {
        let scroll_height = ele.scrollHeight
        let scroll_top = ele.scrollTop
        let client_height = ele.clientHeight
        setScrollPerc(scroll_top / (scroll_height - client_height) * 100)
    }

    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    })

    const renderMSeriesSwiper = () => {
        let render_ele = [0, 1, 2].map((item, index) => {
            return <div className="keen-slider__slide flex flex-col relative" key={`mseries_${index}`}>
                        <div className="my-auto">
                            <img className="mx-auto" src={"/assets/img/mseries_3.png"} alt="" />
                            <div className="uppercase text-2xl text-center tracking-widest font-semibold">M2 Plus</div>
                        </div>
                        {logined && <div className="absolute top-0 right-15">
                            <Button className="h-9 w-30 ttcommon_font_bold text-lg" variant="primary">$100.00</Button>
                        </div>}
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
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="absolute top-0 left-0 w-full h-225 flex">
                <div className="h-full
                                w-0 xl:w-154_5 2xl:w-154_5"></div>
                <div className="flex-1 h-full bg-c_CCE7EF rounded-l-full"></div>
            </div>
            <div className="w-full h-15 bg-transparent"></div>
            <div className="relative bg-white bg-opacity-0 w-full flex flex-col
                            h-150 sm:h-210 lg:h-210 xl:h-210 2xl:h-210">
                
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1">Dermal fillers</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">MONOPHASIC DERMAL FILLERS</span>
                    </div>
                </div>
                <div className="mb-15 z-10 h-full flex flex-col
                                px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                    <div className="my-auto w-full
                                    block sm:flex">
                        <div className="flex flex-col">
                            <div className="my-auto">
                                <div>
                                    <div className="ttcommon_font_thin leading-200_160 font-semibold
                                                    text-8xl md:text-200px lg:text-200px xl:text-200px 2xl:text-200px">The</div>
                                    <div className="ttcommon_font_bold leading-200_160
                                                    text-8xl md:text-200px lg:text-200px xl:text-200px 2xl:text-200px" >M Series</div>
                                </div>
                                <div className="w-full ml-auto mr-10" style={{maxWidth:538}}>
                                    <div className="ttcommon_font_thin leading-36_48 font-semibold mt-8 text-c_00080D
                                                    text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">The M Series from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col ml-auto
                                        w-full sm:w-4/12">
                            <div className="my-auto">
                                {renderMSeriesSwiper()}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
                
            </div>

            {/* pure part */}
            <div className="bg-c_C6CBDD w-full" style={{height: 880}}>
                <div className="mt-12_5 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="pr-5 xl:pr-32 2xl:pr-32
                                        w-1/2 overflow-y-auto
                                        no-scrollbar" 
                                        style={{height: 830, scrollbarWidth: 'none'}}
                                        onScroll={(event) => scrollHandler(event.target as any)}>
                            {m_series_li.map((item, index) => {
                                return <div className="mb-7_5" key={`pure_part_${index}`}>
                                            <div className="ttcommon_font_bold text-6xl leading-64_76
                                                            ml-5 md:ml-10 lg:ml-20 xl:ml-172 2xl:ml-172">{item.headline}</div>
                                            <div className="relative">
                                                <div className="mt-2 bg-white py-12 px-10 relative z-10
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
                            <div className="ttcommon_font_bold text-4xl leading-36_48">Function, versatility & impact.</div>
                            <div className="ttcommon_font_thin mt-7 leading-36_48
                                            text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Our fillers are made using patent-pending technology to harness the power of a highly pure, highly cross-linked hyaluronic acid; a completely natural substance that harmonizes with the skin, creating long-lasting and natural looking results.</div>
                            <div className="progress-bar-container bg-white w-full h-1 mt-12_5">
                                <div className="progress-bar bg-c_00080D h-full" style={{width: `${scroll_perc}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mesmerizing, Modern, and Memorable */}
            <div className="bg-white">
                <div className="flex flex-col mx-auto py-28
                                w-11/12 sm:w-146">
                    <div className="ttcommon_font_bold text-4xl text-center mx-auto
                                    sm:leading-36_26">Mesmerizing, Modern, and Memorable.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline M Series dermal fillers have high visco-elasticity levels to give long-lasting volume.</p>
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
                testimonial_li={[0,1,2,3]}/>
            
        </div>
    )
}

MSeries.Layout = Layout