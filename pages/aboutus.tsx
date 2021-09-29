import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'

import Button from '@components/mycp/Button'




export default function AboutUs() {
    const our_sec = [
        {
            title: 'Education.',
            detail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
        },
        {
            title: 'Confidence.',
            detail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
        },
        {
            title: 'Individuality.',
            detail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
        },
        {
            title: 'Excellence.',
            detail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
        }
    ]
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="relative w-full flex flex-col">
                <img className="w-full" src="/assets/img/aboutus_banner.png" alt="" />
            </div>

            {/* Confidence is Ageless. */}
            <div className="bg-white mx-auto
                            w-full md:w-162_5 lg:w-162_5 xl:w-162_5 2xl:w-162_5">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Confidence is Ageless.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">We believe that people matter, therefore we listen and commit ourselves to excellence in all that we do. Your story is our story, and we are proud to grow together.</p>
                    
                </div>
            </div>

            <div className="px-15 py-25 bg-c_CCE7EF">
                <div className="grid gap-x-5 gap-y-12
                                grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                    {our_sec.map((item, index) => {
                        return <div key={`our_sec_${index}`}>
                                    <div className="ttcommon_font_bold leading-36_48 text-4xl">{item.title}</div>
                                    <div className="mt-7_5">
                                        <img className="w-full" src={`/assets/img/aboutus_sec_${index + 1}.png`} alt="" />
                                    </div>
                                    <div className="mt-7_5 ttcommon_font_thin text-sm leading-14_26">{item.detail}</div>
                                </div>
                    })}
                </div>
            </div>

            {/* Question part */}
            <div className="bg-white">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="First name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-10">
                            <select className="h-11 border-none bg-c_F7F7F7 w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                <option value="Choose Country or Region">Choose Country or Region</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <textarea className="h-24 border-none bg-c_F7F7F7 w-full pl-5 py-2" placeholder="Write Your Comment!"></textarea>
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
                            <Button className="h-11 w-full">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

AboutUs.Layout = Layout