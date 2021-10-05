import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'

import { Button, Input, SelectInput} from '@components/mycp'
import Link from '@components/ui/Link'
import ReactPlayer from 'react-player'
import TriangleRight from '@components/icons/TriangleRight'




export default function AboutUs() {
    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [comment, setComment] = useState('')
    const our_sec = [
        {
            title: 'Education.',
            detail: 'Intraline places a high value on providing proper education on our products and the necessary tools to use them safely and effectively. Intraline supports medical professionals.'
        },
        {
            title: 'Confidence.',
            detail: 'Intraline believes in inspiring confidence through the use of safe and effective medical aesthetic products.'
        },
        {
            title: 'Individuality.',
            detail: 'Intraline respects that each individual has their own story and desired outcomefrom a treatment. We value listening to the patients and encouraging diversity.'
        },
        {
            title: 'Excellence.',
            detail: 'Intraline believes in upholding the highest standards for our high quality products and our genuine customer care with a focus on building long-lasting and trusting relationships.'
        }
    ]
    const play_icon = () => {
        return <div>
                  <div className="w-25 h-25 rounded-full border border-white text-white flex justify-center items-center">
                    <TriangleRight className="text-white"/>
                  </div>     
              </div>
    }
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="relative w-full flex flex-col mt-15">
                {/* <img className="w-full" src="/assets/img/aboutus_banner.png" alt="" /> */}
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=rW_3OCbQEHg"
                    width="100%"
                    height="800px"
                    // light
                    // playIcon={play_icon()} 
                />
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
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Full name"/>
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-5">
                            <SelectInput 
                                enable_underline={false}
                                default_option="Choose Country or Region"
                                option_li={['Choose Country or Region', 'UK', "US"]} 
                                option_class="bg-c_F7F7F7 hover:bg-opacity-80" 
                                className="bg-c_F7F7F7"
                                returnVal={setCountry}
                                />
                        </div>
                        <div className="mt-5">
                            <textarea className="h-24 border-none bg-c_F7F7F7 w-full pl-5 py-2" placeholder="Write Your Comment"></textarea>
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
                                <input type="checkbox" name="" id="aboutus_checkbox" className="w-3_5 h-3_5" defaultChecked/>
                            </div>
                            <label className="ttcommon_font_thin ml-2 text-10px leading-extra-loose" htmlFor="aboutus_checkbox">I agree to receive other communications from Intraline.</label>
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

AboutUs.Layout = Layout