import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import { Button, Input, TestimonialCp, FAQCp } from '@components/mycp'
import Link from '@components/ui/Link'




const RenderFAQCollapse = () => {
    var items = [
      {
        'title': 'How does it compare to Revolax?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'How does it compare to Juvederm?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'How does it compare to Teosyal?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'Which product is best for treatment area ‘x’ and treatment area ‘y’?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'I have heard rumours of lumpiness in the lips.  How can this be managed?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
          'title': 'Is your filler okay to use over previous existing filler/is it compatible with other fillers brands?',
          'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      }
    ]
    return <FAQCp faq_li={items}/>
}



export default function DemeralFiller() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Dr Amrit Thiara,Intraline KOL Cosmetic Doctor and Trainer in Aesthetic Medicine Tiara Aesthetics',
            detail: 'Intraline One is a product I enjoy using for all of my tear trough filler treatments. I regularly perform these procedures and have tried a variety of competitor products but none compare to the consistency, and predictable results that Intraline One gives. With its minimally hydrophilic properties its ideal for use in tear troughs as post procedure little water retention/ attraction occurs, hence avoiding any "puffiness" in the area. Great durability thanks to its highly cross-linked nature means my clients have lasting results with excellent value for money.'
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
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="bg-transparent w-full h-15"></div>
            <div className="relative bg-c_CCE7EF w-full pb-32 flex flex-col
                             h-150 lg:h-210 xl:h-210 2xl:h-210
                             px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Dermal fillers</span>
                    </div>
                </div>
                <div className="mt-28 w-full items-end
                                block sm:flex md:flex lg:flex xl:flex 2xl:flex">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                        <div className="ttcommon_font_thin font-semibold leading-200_160
                                        text-200px">Dermal</div>
                        <div className="ttcommon_font_bold leading-200_160
                                        text-200px" >Fillers</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2
                                    leading-36_48 ttcommon_font_thin
                                    text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl
                                    mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0
                                    " style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="mix_blend_multi h-full" src="/assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>

            <div className="bg-white w-full relative
                                h-175 sm:h-225 md:h-96 lg:h-96 xl:h-122 2xl:h-122">
                <div className="w-full grid gap-6 absolute z-10
                                grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                                -top-44 sm:-top-224 lg:-top-224 xl:-top-224 2xl:-top-224
                                px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                    <div className="">
                        <div className="leading-36_48 ttcommon_font_bold text-c_00080D
                                        text-3xl xl:text-4xl 2xl:text-4xl">The Essential Series.</div>
                        <div className="relative mt-10 bg-c_C6CBDD w-full border-none flex flex-col">
                            <img className="max-h-96" src="/assets/img/essential_series.jpg" alt="" />
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                <div className="my-auto mx-auto w-64">
                                    <div className="flex flex-col">
                                        <Link href="/shop/dermalfiller/essentials">
                                            <Button className="w-full h-11 text-sm">Learn more</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-c_00080D
                                        text-2xl xl:text-4xl 2xl:text-4xl">Biphasic dermal fillers manufactured with over 30 years of Swedish research.</div>
                    </div>
                    <div className="">
                        <div className="leading-36_48 ttcommon_font_bold text-c_00080D
                                        text-3xl xl:text-4xl 2xl:text-4xl">The M Series.</div>
                        <div className="relative mt-10 w-full border-none flex flex-col">
                            <img className="max-h-96" src="/assets/img/m_series.jpg" alt="" />
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                <div className="my-auto mx-auto w-64">
                                    <div className="flex flex-col">
                                        <Link href="/shop/dermalfiller/mseries">
                                            <Button className="w-full h-11 text-sm">Learn more</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-c_00080D
                                        text-2xl xl:text-4xl 2xl:text-4xl">The next generation of monophasic dermal fillers with lidocaine.</div>
                    </div>
                </div>
            </div>

            
            {/* Testimonial part */}
            <TestimonialCp 
                head_line={"Testimonials."} 
                bg_color={"bg-c_C3E0DC"} 
                quote_color={"#87C1B9"} 
                testimonial_li={testimonial_li}/>

            {/* FAQ part */}
            <div className="bg-white">
                <div className="py-24
                                mx-5 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                    <div className="flex text-c_00080D mb-2">
                        <div className="font-bold text-4xl
                                         leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <Link href="/faq">
                                <div className="flex items-center">
                                    <div className="font-bold text-lg ml-auto">Read More</div>
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
            
            {/* Download Catalog */}
            <div className="bg-c_F5DBDD">
                <div className="py-28">
                    <div className="flex flex-col mx-auto
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                    px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <Input type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

DemeralFiller.Layout = Layout