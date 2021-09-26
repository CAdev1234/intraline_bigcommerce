import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'


// const RenderTestimonialSwiper = () => {
//     let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
//       return <div className="keen-slider__slide" key={`testimonial_${index}`}>
//                 <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
//                 <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
//             </div>
//     })
//     return <KeenSliderB 
//                 render_ele={render_ele} 
//                 slidesPerView={1} 
//                 enableDot={true} 
//                 prevNavCss={"top-0 left-0"} 
//                 nextNavCss={"top-0 right-0"} 
//                 dotCss={"mt-7_5"}/>
// }


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



export default function DemeralFiller() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="h-225 relative bg-c_CCE7EF w-full px-15 pb-32 flex flex-col">
                <div className="flex my-auto w-full items-end">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold text-200px leading-200_160">Dermal</div>
                        <div className="ttcommon_font_bold text-200px leading-200_160" >Fillers</div>
                    </div>
                    <div className="w-1/2 text-4xl leading-36_48 ttcommon_font_thin max-w-md" style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="mix_blend_multi h-full" src="/assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>

            <div className="bg-white w-full relative" style={{height: 488 + "px"}}>
                <div className="w-full px-15 flex absolute z-10" style={{top: -224 + 'px'}}>
                    <div className="w-1/2 mr-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">The Essential Series.</div>
                        <div className="relative mt-10 bg-c_C6CBDD w-full border-none flex flex-col" style={{height: 400 + 'px'}}>
                            <img className="h-full" src="/assets/img/essential_series.jpg" alt="" />
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-4xl text-c_00080D">Biphasic dermal fillers manufactured with over 30 years of Swedish research.</div>
                    </div>
                    <div className="w-1/2 ml-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">The M Series.</div>
                        <div className="relative mt-10 w-full border-none flex flex-col" style={{height: 400 + 'px'}}>
                            <img className="h-full" src="/assets/img/m_series.jpg" alt="" />
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-4xl text-c_00080D">The next generation of monophasic dermal fillers with lidocaine.</div>
                    </div>
                </div>
            </div>

            
            {/* Testimonial part */}
            <TestimonialCp 
                head_line={"Testimonials."} 
                bg_color={"bg-c_C3E0DC"} 
                quote_color={"#87C1B9"} 
                testimonial_li={[0,1,2,3]}/>

            {/* FAQ part */}
            <div className="bg-white">
                <div className="py-24
                                mx-5 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                    <div className="flex text-c_00080D mb-2">
                        <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <div className="font-bold text-lg">Read More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    {RenderFAQCollapse()}
                </div>
            </div>
            
            {/* Download Catalog */}
            <div className="bg-c_F5DBDD">
                <div className="py-28">
                    <div className="flex flex-col mx-auto
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

DemeralFiller.Layout = Layout