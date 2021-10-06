import React, {useEffect, useRef, useState} from 'react'

import { Layout } from '@components/common'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import { ChevronDown, ChevronRight, Plus } from '@components/icons'
import Link from '@components/ui/Link'

import { getCookie } from 'utils/cookie'




export default function Essentials() {
    const essential_li = [
        {
            headline: 'Quality.',
            title: 'Two hyaluronic acid phases',
            detail: 'The biphasic Essential series manufactured in Sweden is produced by running the gel  through a series of sieving operations producing a consistent gel particle size. A noncrosslinked phase is added (hence the biphasic) to lubricate these particles for injection.'
        },
        {
            headline: 'Elasticity.',
            title: 'Premium shape & movement',
            detail: 'The biphasic products are characterized by a high G Prime or elasticity meaning they resist change of shape brought on by external forces such as facial movements. As such they are better used where definition and longevity are preferred in areas like the lips. A follow up visit may be required for optimal results.'
        },
        {
            headline: 'Satisfaction.',
            title: 'CE Approved',
            detail: 'Intraline’s non-animal derived Hyaluronic Acid is manufactured through bacterial fermentation resulting in HA identical to that found in the human body that is of a very high quality and purity. Carefully developed after years of  research, Intraline science brings the tools to the artist taking the guesswork out of the result.'
        },
    ]
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
    }, [])

    const renderEssentialSeriesSwiper = () => {
        let essential_series_li = [
            {title: "INTRALINE ONE", price: 100, img: '/assets/img/mseries_1.png', link: '/shop/dermalfiller/m2plus'},
            {title: "INTRALINE TWO", price: 100, img: '/assets/img/mseries_2.png', link: '/shop/dermalfiller/m2plus'},
            {title: "INTRALINE THREE", price: 100, img: '/assets/img/mseries_2.png', link: '/shop/dermalfiller/m2plus'},
        ]
        let render_ele = essential_series_li.map((item, index) => {
            return <div className="keen-slider__slide flex flex-col relative group" key={`mseries_${index}`}>
                        <div className="my-auto">
                            <Link href={item.link}>
                                <div className="flex flex-col bg-c_CCE7EF">
                                    <img className="mx-auto mix-blend-multiply" src={item.img} alt="" />
                                    <div className="uppercase text-2xl text-center tracking-widest font-semibold">{item.title}</div>
                                </div>
                            </Link>
                        </div>
                        {logined && <div className="absolute top-8 right-15">
                            <Button className="h-9 w-30 ttcommon_font_bold text-lg" variant="primary">${item.price}.00</Button>
                        </div>}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col opacity-0 grpup-hover:opacity-100">
                            <button className="my-auto mx-auto w-20 h-20 flex justify-center items-center bg-c_00080D rounded-full text-white">
                                <Plus />
                            </button>
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
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1"><Link href="/shop/dermalfiller">Dermal fillers</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">MONOPHASIC DERMAL FILLERS</span>
                    </div>
                </div>
                <div className="mb-15 z-10 h-full flex flex-col
                                px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                    <div className="mt-30 w-full
                                    block sm:flex">
                        <div className="flex flex-col">
                            <div className="">
                                <div>
                                    <div className="ttcommon_font_thin leading-200_160 font-semibold
                                                    text-8xl md:text-200px lg:text-200px xl:text-200px 2xl:text-200px">Essential</div>
                                    <div className="ttcommon_font_bold leading-200_160
                                                    text-8xl md:text-200px lg:text-200px xl:text-200px 2xl:text-200px" >Series</div>
                                </div>
                                <div className="w-full ml-auto mr-10" style={{maxWidth:538}}>
                                    <div className="ttcommon_font_thin leading-36_48 font-semibold mt-8 text-c_00080D
                                                    text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">The Essential Series from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-auto">
                        <span className="uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
                <div className="absolute top-0 right-15 w-125 h-full">
                    <div className="flex flex-col ml-auto h-full">
                        <div className="my-auto">
                            {renderEssentialSeriesSwiper()}
                        </div>
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
                            {essential_li.map((item, index) => {
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
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline Essential Series dermal fillers have high visco-elasticity levels to give long-lasting volume.</p>
                    <div className="mt-8">
                        <Link href="/shop/dermalfiller/mseriesshop">
                            <Button className="mx-auto h-11 w-72 text-sm">Shop now the essential series</Button>
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

Essentials.Layout = Layout