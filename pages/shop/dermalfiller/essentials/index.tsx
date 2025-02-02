import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

import { Layout } from '@components/common'
const KeenSliderB = dynamic(import('@components/mycp/KeenSlider/KeenSliderB'))
const TestimonialCp = dynamic(import('@components/mycp/TestimonialCp/TestimonialCp'))
const Button = dynamic(import('@components/mycp/Button'))
const Plus = dynamic(import('@components/icons/Plus'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const ChevronDown = dynamic(import('@components/icons/ChevronDown'))
const Link = dynamic(import('@components/ui/Link'))
const Image = dynamic(import('next/image'))

import { getCookie } from 'utils/cookie'




export default function Essentials() {
    const spec_li = [
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
    const [scroll_perc_mobile, setScrollPercMobile] = useState(0)
    const [logined, setLogined] = useState(false)
    const router = useRouter()
    
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
        let essential_series_li = [
            {title: "INTRALINE ONE", price: 100, img: '/assets/img/intraline_1.webp', link: '/shop/dermalfiller/essentials/intralineone'},
            {title: "INTRALINE TWO", price: 100, img: '/assets/img/intraline_2.webp', link: '/shop/dermalfiller/essentials/intralinetwo'},
            {title: "INTRALINE FOR MEN", price: 100, img: '/assets/img/intraline_3.webp', link: '/shop/dermalfiller/essentials/intralineformen'},
        ]
        let render_ele = essential_series_li.map((item, index) => {
            return <div className="keen-slider__slide flex flex-col relative group" 
                        key={`m_${index}_product`}>
                        <div className="flex flex-col">
                            <div className="w-full mx-auto" style={{maxWidth: 250}}>
                                <div className="w-full image-container">
                                    <Image src={item.img} alt={`category_img_${index}`} className={'image'} layout="fill" />
                                </div>
                            </div>
                        </div>
                        <div className="uppercase text-2xl leading-24_29 text-center">{item.title}</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100">
                            <button className="my-auto mx-auto w-20 h-20 flex justify-center items-center bg-c_00080D rounded-full text-white"
                                    onClick={() => {router.push(item.link)}}>
                                <Plus />
                            </button>
                            <div className="text-center">Know More</div>
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

    const scrollToBottomHandler = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return(
        <div className="text-c_00080D flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <div className="absolute top-0 left-0 w-full flex overflow-hidden bg-white
                            h-auto sm:h-175 md:h-225 lg:h-225 xl:h-225 2xl:h-225">
                <div className="h-full
                                w-0 xl:w-154_5 2xl:w-154_5"></div>
                <div className="relative flex-1 h-full
                                hidden sm:block">
                    <div className="absolute rounded-full bg-c_CCE7EF" style={{width: 1192, height: 1192, top: -128}}></div>
                </div>
            </div>
            <div className="w-full h-15 bg-transparent"></div>
            <div className="relative w-full flex flex-col
                            h-auto sm:h-160 md:h-210 lg:h-210 xl:h-210 2xl:h-210
                            bg-c_CCE7EF sm:bg-white
                            bg-opacity-100 sm:bg-opacity-0">
                
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
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
                                    block sm:flex
                                    px-0 sm:px-10 lg:px-15 xl:px-15 2xl:px-15">
                        <div className="flex flex-col flex-1
                                        mt-12 md:mt-30
                                        px-5 sm:px-0">
                            <div className="">
                                <div>
                                    <div className="ttcommon_font
                                                    text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                    leading-none md:leading-200_160 lg:leading-200_160 xl:leading-200_160">The</div>
                                    <div className="ttcommon_font_bold
                                                    text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                    leading-none md:leading-tight lg:leading-none xl:leading-200_160" >Essentials</div>
                                </div>
                                <div className="mr-10
                                                ml-0 lg:ml-auto xl:ml-25
                                                sm:w-11/12 md:w-11/12 lg:w-131_5">
                                    <div className="w-full mt-8 text-c_00080D
                                                    text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                                                    leading-36_48 sm:leading-36_48 md:leading-36_48 lg:leading-36_48 xl:leading-36_48
                                                    ">Essentials from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='relative overflow-hidden
                                        mx-0 sm:mx-auto
                                        mt-5 sm:mt-0
                                        px-5 sm:px-0'>
                            <div className='w-full sm:w-70 md:w-100'>
                                {renderMSeriesSwiper()}
                            </div>
                            <div className="absolute top-15 bg-white h-full rounded-t-full w-150vw left-1/2 transform -translate-x-1/2
                                            block sm:hidden"></div>
                        </div>
                    </div>
                    {/* <div className="mt-10 pb-15 relative overflow-hidden
                                    block sm:hidden
                                    px-5 sm:px-0">
                        {renderMSeriesSwiper()}
                        <div className="absolute top-15 bg-white h-full rounded-t-full w-150vw left-1/2 transform -translate-x-1/2"></div>
                    </div> */}
                    <div className="items-center justify-center mt-auto cursor-pointer
                                    hidden sm:flex">
                        <a href='#essentials_indication' className='flex items-center'>
                            <span className="uppercase tracking-widest">Scroll for more details</span>
                            <ChevronDown className="w-4 ml-4" />
                        </a>
                        
                    </div>
                </div>
                {/* <div className="absolute h-full
                                top-28 sm:top-0 md:top-0
                                sm:right-5 md:right-10 lg:right-15
                                sm:w-75 md:w-90 lg:w-100
                                hidden sm:block">
                    <div className="flex flex-col ml-auto h-full">
                        <div className="my-auto">
                            {renderMSeriesSwiper()}
                        </div>
                    </div>
                </div> */}
            </div>

            {/* pure part */}
            <div id='essentials_indication' className="hidden sm:block bg-c_C6CBDD w-full relative z-10" style={{height: 880}}>
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
                                                    <div className="mt-2 leading-14_26 text-c_00080D">{item.detail}</div>
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
                            <div className="text-base tracking-widest">THE M SERIES were created for maximum</div>
                            <div className="ttcommon_font_bold text-4xl leading-36_48 mt-2_5 uppercase">Function, versatility & impact.</div>
                            <div className="mt-7_5
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
                                                <div className="ttcommon_font_bold uppercase leading-24_29 text-c_00080D tracking-widest">{item.title}</div>
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
                    <div className="text-base tracking-widest uppercase">THE M SERIES were created for maximum</div>
                    <div className="ttcommon_font_bold text-2xl leading-36_48 mt-2_5">Function, versatility & impact.</div>
                    <div className="mt-5 leading-36_48 text-2xl">Our fillers are made using patent-pending technology to harness the power of a highly pure, highly cross-linked hyaluronic acid; a completely natural substance that harmonizes with the skin, creating long-lasting and natural looking results.</div>
                </div>
            </div>


            {/* Mesmerizing, Modern, and Memorable */}
            <div className="bg-white">
                <div className="flex flex-col mx-auto py-28
                                w-11/12 sm:w-146">
                    <div className="ttcommon_font_bold text-center mx-auto
                                    text-2xl sm:text-4xl
                                    leading-24_29 sm:leading-36_26">Mesmerizing, Modern, and Memorable.</div>
                    <p className="mt-6 text-center
                                text-2xl sm:text-4xl
                                leading-9 sm:leading-36_48">Intraline Essentials dermal fillers have high visco-elasticity levels to give long-lasting volume.</p>
                    <div className="mt-8">
                        <Link href="/shop/dermalfiller/essentialsshop">
                            <Button className="mx-auto h-11
                                                w-80 md:w-90">Shop essential series now</Button>
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