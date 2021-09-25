import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'

const renderLiftingThreadSwiper = () => {
    let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
        return <div className="keen-slider__slide" key={`pdo_thread_${index}`}>
                    <div className="" style={{width: 550}}>
                        <div className="ttcommon_font_bold text-4xl leading-36_48">Dimension 360.</div>
                        <div className="bg-c_CCE7EF w-full mt-10">
                            <img className="w-full" src="/assets/img/lifting-1.png" alt="" />
                        </div>
                        <div className="ttcommon_font_thin mt-7 uppercase text-3xl leading-36_48">Lorem ipsum doloris sit estimatum estiumen ipsum doloris sit estimatum.</div>
                    </div>
                </div>
    })
    return <KeenSliderB 
                render_ele={render_ele} 
                slidesPerView={3} 
                enableDot={false} 
                prevNavCss={"top-1/2 transform -translate-x-1/2 left-7"} 
                nextNavCss={"top-1/2 transform -translate-x-1/2 right-7"}
                dotCss={"mt-7_5"}/>
}




export default function LiftingThread() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="h-225 relative bg-c_F5DBDD w-full flex flex-col">
                <div className="flex my-auto w-full h-full px-15 z-10">
                    <div className="w-7/12 flex flex-col">
                        <div className="my-auto">
                            <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold">Lifting</div>
                            <div className="ttcommon_font_bold text-200px leading-200_160" >Threads</div>
                        </div>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="ttcommon_font_thin my-auto text-4xl leading-36_48">The goal of Lifting Threads is to provide a small amount of lift while also stimulating skin rejuvenation.</div>
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
                testimonial_li={[0,1,2,3,4]}/>
            
            
            {/* Question part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-10">
                            <select className="h-11 border-none bg-white w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                <option value="Choose Country or Region">Choose Country or Region</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment!"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="text-xs"><strong className="underline">Intraline’s Privacy Policy.</strong> If you consent to us contacting you for this purpose, please tick below:</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="ml-2">I agree to receive other communications from Intraline.</div>
                        </div>
                        <div className="text-xs text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

LiftingThread.Layout = Layout