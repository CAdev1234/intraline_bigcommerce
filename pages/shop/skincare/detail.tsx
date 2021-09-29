import React, {useState} from 'react'

import { Layout } from '@components/common'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import Link from '@components/ui/Link'
import { ChevronDown, ChevronRight } from '@components/icons'


export default function SkinCareDetail() {
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="h-225 relative bg-c_F5DBDD w-full flex flex-col pl-15 pr-20">
                <div className="absolute top-28 left-0 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1">Skin Care</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Moisturizer</span>
                    </div>
                </div>
                <div className="mt-auto mb-15 flex flex-col">
                    <div className="flex w-full h-full z-10">
                        <div className="flex flex-col max-w-xl">
                            <div className="my-auto">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">Restorative</div>
                                <div className="ttcommon_font_thin text-120px font-semibold mt-2 leading-none" ><span className="ttcommon_font_bold">Moisturizer</span></div>
                                <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Sed ut perspiciatis unde omnis iste.</div>
                                <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.</div>
                                <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 100ML</span>
                                </div>
                                <div className="mt-5 flex items-center h-12 text-white">
                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                        <button className="mx-auto bg-transparent border-none p-1">-</button>
                                        <div className="mx-auto">1</div>
                                        <button className="mx-auto bg-transparent border-none p-1">+</button>
                                    </div>
                                    <Button className="ml-3 w-52 h-full text-sm">Add to cart</Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center ml-auto my-auto rounded-full bg-c_CCE7EF" style={{height: 576, width: 576}}>
                            <Button className="ttcommon_font_bold absolute right-14 top-5 h-9 w-32 text-lg" variant="primary">$100.00</Button>
                            <div className="my-auto relative flex flex-col h-3/4">
                                <img className="h-full" src="/assets/img/skincare3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="ttcommon_font uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
            </div>

            {/* Lorem Ipsum. */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Lorem Ipsum.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64 text-sm">Browse catalog</Button>
                    </div>
                </div>
            </div>

            {/* Testimonials part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-c_C6CBDD"} 
                quote_color={"#87C1B9"} 
                testimonial_li={[0,1,2,3]}/>


            {/* Question part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
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
                            <select className="h-11 border-none bg-white w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                <option value="Choose Country or Region">Choose Country or Region</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="ttcommon_font_thin text-xs">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="flex">
                                <input type="checkbox" name="" id="" className="w-3_5 h-3_5"/>
                            </div>
                            <div className="ml-2 text-10px leading-extra-loose">I agree to receive other communications from Intraline.</div>
                        </div>
                        <div className="text-10px leading-extra-loose text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-7_5">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

SkinCareDetail.Layout = Layout