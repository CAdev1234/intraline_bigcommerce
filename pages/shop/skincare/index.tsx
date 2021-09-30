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
import Button from '@components/mycp/Button'



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



export default function SkinCare() {
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="w-full h-15 bg-transparent"></div>
            <div className="h-210 bg-c_C6CBDD w-full px-15 pb-32 flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Skin Care</span>
                    </div>
                </div>
                <div className="mt-28 flex items-end w-full">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold text-200px leading-200_160">Skin</div>
                        <div className="ttcommon_font_bold text-200px leading-200_160" >Care</div>
                    </div>
                    <div className="max-w-128 w-1/2 text-4xl ttcommon_font_thin">
                        Immerse your skin in intense moisture while smoothing, tightening & rejuvenating.
                    </div>
                </div>
            </div>

            <div className="bg-white w-full relative h-122">
                <div className="w-full px-15 flex absolute z-10 -top-56">
                    <div className="w-1/2 mr-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">Restorative Moisturizer.</div>
                        <div className="relative mt-10 pt-5 bg-c_F5DBDD w-full h-100 border-none flex flex-col">
                            <div className="flex h-full px-15 justify-center">
                                <img src="/assets/img/skincare1.png" alt="" />
                            </div>
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                <div className="my-auto mx-auto w-10/12">
                                    <div className="flex flex-col text-white w-64 mx-auto">
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                        <div className="mt-2 flex items-center h-12 text-white">
                                            <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                                <button className="mx-auto bg-transparent border-none p-1">-</button>
                                                <div className="mx-auto">1</div>
                                                <button className="mx-auto bg-transparent border-none p-1">+</button>
                                            </div>
                                            <Button className="ml-3 flex-1 h-full text-sm">Add to bag</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0">
                                <Button variant="primary" className="h-9 w-30 ttcommon_font_bold text-lg leading-36_48">$30.00</Button>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                    </div>
                    <div className="w-1/2 ml-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">Biocellulose Masque.</div>
                        <div className="relative mt-10 pt-5 bg-c_F5DBDD w-full border-none" style={{height: 400 + 'px'}}>
                            <div className="flex h-full px-15 justify-center">
                                <img src="/assets/img/skincare2.png" alt="" />
                            </div>
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                <div className="my-auto mx-auto w-10/12">
                                    <div className="flex flex-col text-white w-64 mx-auto">
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                        <div className="mt-2 flex items-center h-12 text-white">
                                            <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                                <button className="mx-auto bg-transparent border-none p-1">-</button>
                                                <div className="mx-auto">1</div>
                                                <button className="mx-auto bg-transparent border-none p-1">+</button>
                                            </div>
                                            <Button className="ml-3 flex-1 h-full text-sm">Add to bag</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0">
                                <Button variant="primary" className="h-9 w-30 ttcommon_font_bold text-lg leading-36_48">$30.00</Button>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_CCE7EF w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -20 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_99CEE0 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Skincare</div>
                </div>
                <div className="ml-172 mr-15 my-32">
                    <div className="w-full flex items-center">
                        <div className="w-5/12 pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Ingredients.</div>
                                    <div className="text-sm leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="ttcommon_font_bold text-4xl leading-36_48">Sea Buckthorn</div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Hyaluronic Acid.</div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Vitamin A, B & C.</div>
                                        </div>
                                        
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Vitamin B3.</div>
                                        </div>

                                        <div className="mt-7 w-full">
                                            <div className="ttcommon_font_thin text-4xl leading-36_48">Skincare FAQ’s.</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_48">What is Sea Bucktorn?</div>
                            <div className="ttcommon_font_thin mt-5 text-sm leading-14_26">Sea Buckthorn is known to aid in alleviating sunburns, healing wounds, including burns & cuts, treating acne, dermatitis, dry skin, eczema, and changes in skin colour;,and for protecting mucus membranes. Sea Buckthorn contains vitamins A, B1, B2, B6, and C, as well as Hyaluronic Acid and several other active ingredients.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#C6CBDD"} 
                testimonial_li={[0,1,2,3]}/>

            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-60 py-24">
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
        </div>
    )
}

SkinCare.Layout = Layout