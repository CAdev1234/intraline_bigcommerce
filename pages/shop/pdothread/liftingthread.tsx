import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import Link from '@components/ui/Link'
import { ChevronRight } from '@components/icons'
import SelectInput from '@components/mycp/SelectInput'

const renderLiftingThreadSwiper = () => {
    let render_ele = ['Dimension 720.', 'Dimension 360.', 'Nose Threads','Dimension 720.', 'Dimension 360.', 'Nose Threads'].map((item, index) => {
        return <div className="keen-slider__slide" key={`pdo_thread_${index}`}>
                    <div className="">
                        <div className="ttcommon_font_bold text-4xl leading-36_48">{item}</div>
                        <div className="bg-c_CCE7EF w-full mt-10">
                            <img className="w-full" src="/assets/img/lifting-1.png" alt="" />
                        </div>
                        <div className="ttcommon_font_thin mt-7 text-3xl leading-36_48 w-125">Lorem ipsum doloris sit estimatum estiumen ipsum doloris sit estimatum.</div>
                    </div>
                </div>
    })
    return <KeenSliderB 
                render_ele={render_ele} 
                slidesPerView={[1, 2, 2.5, 2.5, 5]} 
                enableDot={false} 
                prevNavCss={"my-auto ml-7_5"} 
                nextNavCss={"my-auto mr-22_5"}
                dotCss={"mt-7_5"}/>
}




export default function LiftingThread() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="bg-transparent w-full h-15"></div>
            <div className="h-210 relative bg-c_F5DBDD w-full flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Dermal fillers</span>
                    </div>
                </div>
                <div className="flex mt-28 w-full px-15 z-10">
                    <div className="flex items-end">
                        <div className="w-7/12 flex flex-col">
                            <div className="">
                                <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold">Lifting</div>
                                <div className="ttcommon_font_bold text-200px leading-200_160" >Threads</div>
                            </div>
                        </div>
                        <div className="w-5/12 flex flex-col">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">The goal of Lifting Threads is to provide a small amount of lift while also stimulating skin rejuvenation.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-15 pb-24" style={{marginTop: -240}}>
                {renderLiftingThreadSwiper()}
            </div>
            
            <div className=" bg-c_C6CBDD py-24 px-15">
                <div className="ttcommon_font_bold text-4xl leading-36_26">Lifting PDO Threads.</div>
                <div className="mt-6 flex items-center">
                    <div className="ttcommon_font_thin w-1/2 text-4xl leading-36_48 pr-28">Lifting threads have barbs, also known as Cogs along the length of the thread with the aim of affixing the skin in a position to give the appearance of a minor facelift. </div>
                    <div className="w-1/2 p-10 bg-white ttcommon_font_thin text-sm leading-14_26">Typically, depth of placement for a Cog PDO Thread is the subcutaneous tissue and the effect is twofold with an immediate lift due to the barbs being activated and hooking into the underside of the skin and long-lasting effect due to the gradual metabolism of the thread which leads to skin rejuvenation. The amount of lift provided from a Cog PDO Thread treatment is typically only a few centimeters and results are not permanent. There are many types and sizes of Cog PDO Threads but Intraline focuses on the most effectively used types for classic multiple point lifting and non-surgical rhinoplasty.</div>
                </div>
            </div>


            {/* Testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#F5DBDD"} 
                testimonial_li={[0,1,2,3]}/>
            
            
            {/* Question part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="ttcommon_font_thin mt-5 text-sm leading-14_26">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Full Name"/>
                        </div>
                        <div className="mt-5">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-5">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-5">
                            <SelectInput 
                                option_li={['Choose Country or Region', 'United States', 'United Kingdom']} 
                                className="bg-white"
                                option_class="bg-white" />
                        </div>
                        <div className="mt-5">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="ttcommon_font_thin text-10px leading-extra-loose">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="flex">
                                <input type="checkbox" name="" id="agree-checkbox" className="w-3_5 h-3_5"/>
                            </div>
                            <label className="ttcommon_font_thin ml-2 text-10px leading-extra-loose" htmlFor="agree-checkbox">I agree to receive other communications from Intraline.</label>
                        </div>
                        <div className="ttcommon_font_thin text-10px leading-extra-loose text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-7_5">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

LiftingThread.Layout = Layout