import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'

// const renderPDOThreadSwiper = () => {
//     return [0, 1, 2, 3, 4].map((item, index) => {
//         return <SwiperSlide key={'pdo_thread_' + index}>
//                     <div className="">
//                         <img src="/assets/img/lifting_thread_1.png" alt="" />
//                         <div className="uppercase text-2xl text-center font-semibold">Lifting Threads</div>
//                     </div>
//                 </SwiperSlide>
//     })
// }

const RenderTestimonialSwiper = () => {
    let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
      return <div className="keen-slider__slide" key={`testimonial_${index}`}>
                <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
            </div>
    })
    return <KeenSliderB render_ele={render_ele} slidesPerView={1} />
}


export default function PDOThread() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="relative bg-white w-full flex flex-col" style={{height: 900 + 'px'}}>
                <div className="absolute w-full h-full flex">
                    <div className="w-5/12 h-full"></div>
                    <div className="w-7/12 h-full bg-c_F5DBDD"></div>
                </div>
                <div className="flex my-auto w-full h-full px-15 z-10">
                    <div className="w-7/12 flex flex-col">
                        <div className="my-auto">
                            <div className="ttcommon_font_thin text-12_5 leading-200_160 font-semibold">PDO</div>
                            <div className="ttcommon_font_bold text-12_5 leading-200_160" >Threads</div>
                            <div className="leading-36_48 ttcommon_font_thin w-7/12 font-semibold mt-8 mx-auto text-4xl text-c_00080D">An excellent treatment option for combatting facial ageing, skin stress, and other related concerns.</div>
                        </div>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="my-auto">
                            {/* {renderPDOThreadSwiper()} */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Polydioxanone Threads.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline’s PDO threads are CE marked with an excellent safety profile and virtually non-allergenic. PDO suture use has nearly 40 years of medical history supporting its use.</p>
                    <div className="mt-8">
                        <button className="mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-64 flex items-center justify-center text-sm">Browse catalog</button>
                    </div>
                </div>
            </div>
            
            {/* what is pdo? */}
            <div className="bg-c_CCE7EF flex items-center py-32 relative overflow-hidden">
                <div className="ttcommon_font_bold absolute bottom-0 transform -rotate-90 text-c_99CEE0" style={{fontSize: 200,lineHeight: 160 + 'px',transformOrigin: 'bottom left', left:160}}>PDO Threads</div>
                <div className="w-1/2 pr-32 pl-44">
                    <div className="bg-white p-7 flex flex-col divide-y">
                        <div className="pb-8">
                            <div className="text-6xl ttcommon_font_bold" style={{lineHeight: 76 + "px"}}>PDO Threads.</div>
                            <div className="uppercase tracking-widest mt-3">Select a question to learn more.</div>
                        </div>
                        <div className="pt-8 text-4xl">
                            <div className="ttcommon_font_bold leading-36_48">What is PDO?</div>
                            <div className="mt-7 ttcommon_font_thin">What are PDO Threads?</div>
                            <div className="mt-7 ttcommon_font_thin">What is a PDO Treatment?</div>
                            <div className="mt-7 ttcommon_font_thin">Types of PDO Threads.</div>
                            <div className="mt-7 ttcommon_font_thin">PDO FAQ's.</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pr-44">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">What is PDO?</div>
                    <p className="ttcommon_font_thin text-sm mt-5">Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.</p>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Testimonials.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#F5DBDD"/>
                    </div>
                </div>
            </div>

            
            
            {/* Question part */}
            <div className=" bg-c_C6CBDD">
                <div className="mx-60 py-28">
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

PDOThread.Layout = Layout