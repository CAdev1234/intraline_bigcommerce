import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import {Button, Input, TestimonialCp} from '@components/mycp'
import { ChevronDown, ChevronRight, Plus } from '@components/icons'
import Link from '@components/ui/Link'
import SelectInput from '@components/mycp/SelectInput'

const renderPDOThreadSwiper = () => {
    let pdothread_li = [
        {title: 'Lifting Threads', img: '/assets/img/lifting_thread_1.png'},
        {title: 'Rejuvenation Threads', img: '/assets/img/lifting_thread_1.png'}
    ]
    let render_ele = pdothread_li.map((item, index) => {
        return <div className="keen-slider__slide relative" key={`pdo_thread_${index}`}>
                    <div className="my-auto">
                        <img src={item.img} alt="" />
                        <div className="uppercase text-2xl text-center font-semibold">{item.title}</div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
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




export default function PDOThread() {
    let pdo_question_li = [
        {
            title: 'What is PDO?', 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
        {
            title: 'What are PDO Threads?', 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
        {
            title: 'What is a PDO Treatment?', 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
        {
            title: 'Types of PDO Threads.', 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
        {
            title: "PDO FAQ's.", 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
    ]
    const [enablePDOQues, setEnablePDOQues] = useState([true, ...new Array(pdo_question_li.length - 1).fill(false)])
    let updatePDOQues = (index:number) => {
        let new_array = new Array(enablePDOQues.length).fill(false)
        new_array[index] = true
        setEnablePDOQues(new_array)
    }
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="bg-transparent w-full h-15"></div>
            <div className="h-210 relative bg-white w-full flex flex-col">
                <div className="absolute w-full h-full flex">
                    <div className="w-5/12 h-full"></div>
                    <div className="w-7/12 h-full bg-c_F5DBDD"></div>
                </div>
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">PDO Threads</span>
                    </div>
                </div>
                <div className="mt-30 z-10 flex flex-col h-full mb-15">
                    <div className="flex w-full h-full px-15">
                        <div className="w-7/12 flex flex-col">
                            <div className="">
                                <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold">PDO</div>
                                <div className="ttcommon_font_bold text-200px leading-200_160" >Threads</div>
                                <div className="leading-36_48 ttcommon_font_thin font-semibold mt-8 mx-auto text-4xl max-w-134_5">An excellent treatment option for combatting facial ageing, skin stress, and other related concerns.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-auto">
                        <span className="uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-5/12">
                    <div className="flex flex-col ml-auto mr-15 h-120_5">
                        <div className="">
                            {renderPDOThreadSwiper()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Polydioxanone Threads.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline’s PDO threads are CE marked with an excellent safety profile and virtually non-allergenic. PDO suture use has nearly 40 years of medical history supporting its use.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64 text-sm">Browse catalog</Button>
                    </div>
                </div>
            </div>
            
            {/* what is pdo? */}
            <div className="bg-c_CCE7EF flex items-center py-40 relative overflow-hidden">
                <div className="ttcommon_font_bold absolute bottom-0 transform -rotate-90 text-c_99CEE0" style={{fontSize: 200,lineHeight: 160 + 'px',transformOrigin: 'bottom left', left:160}}>PDO Threads</div>
                <div className="w-1/2 pr-28 pl-44">
                    <div className="bg-white pt-8 pl-7 pb-16 flex flex-col divide-y">
                        <div className="pb-8">
                            <div className="text-6xl ttcommon_font_bold" style={{lineHeight: 76 + "px"}}>PDO Threads.</div>
                            <div className="uppercase tracking-widest mt-3">Select a question to learn more.</div>
                        </div>
                        <div className="pt-8 text-4xl">
                            {pdo_question_li.map((item, index) => {
                                return <div key={`pdo_ques_${index}`}>
                                           <button className={`leading-36_48 ${index != 0 && 'mt-7'} ${enablePDOQues[index] ? 'ttcommon_font_bold' : 'ttcommon_font_thin'}`}
                                                onClick={() => {updatePDOQues(index)}}>{item.title}</button>         
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pr-44">
                    {pdo_question_li.map((item, index) => {
                        return enablePDOQues[index] && 
                        <div key={`pdo_ques_detail_${index}`}>
                            <div className="ttcommon_font_bold text-4xl leading-36_48">{item.title}</div>
                            <p className="ttcommon_font_thin text-sm mt-5">{item.detail}</p>
                        </div>
                    })}
                    
                </div>
            </div>

            {/* Testimonials */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#F5DBDD"} 
                testimonial_li={[0,1,2,3]}/>

            
            
            {/* Question part */}
            <div className=" bg-c_C6CBDD">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="ttcommon_font_thin mt-5 text-sm leading-14_26">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <Input type="text" placeholder="Full Name"/>
                        </div>
                        <div className="mt-5">
                            <Input type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-5">
                            <Input type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-5">
                            <SelectInput 
                                enable_underline={false}
                                default_option="Choose Country or Region"
                                option_li={['United States', 'United Kingdom']} 
                                className="bg-white"
                                option_class="bg-white hover:bg-opacity-80" />
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
                                <input type="checkbox" name="" id="checkbox_infra" className="w-3_5 h-3_5"/>
                            </div>
                            <label className="ttcommon_font_thin ml-2 text-10px leading-extra-loose" htmlFor="checkbox_infra">I agree to receive other communications from Intraline.</label>
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

PDOThread.Layout = Layout