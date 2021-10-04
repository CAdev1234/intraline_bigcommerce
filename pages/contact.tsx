import { Layout } from "@components/common"
import { ChevronRight } from "@components/icons"
import Link from "@components/ui/Link"
import {Button, SelectInput, Input} from '@components/mycp'

export default function ContactUs() {
    return (
        <div className="ttcommon_font_thin text-c_00080D">
            <div className="flex items-start mb-25">
                <div className="w-154_5 pl-15 pt-28">
                    <div className="flex items-center uppercase text-sm leading-14_17 tracking-widest">
                        <div className="flex items-center">
                            <span>Home</span>
                            <span className="ml-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font_bold ml-1">Contact</span>
                        </div>
                    </div>
                    <div className="mt-10 max-w-106_5">
                        <div className="ttcommon_font_bold text-4xl leading-36_26">Contact Intraline.</div>
                        <div className="mt-5">We are here to help-reach out with any questions.</div>
                        <div className="mt-10">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="First name"/>
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="mt-5">
                            <div className="text-sm leading-14_26">How can we best help you?</div>
                        </div>
                        <div className="mt-2.5">
                            <div className="flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Distributor Inquiry</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" />
                                <label htmlFor="" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <textarea className="border-none bg-c_F7F7F7 w-full pl-5 py-2 h-24" placeholder="Write Your Message"/>
                        </div>
                        <div className="mt-5">
                            <div className="ttcommon_font_thin text-10px leading-extra-loose">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font_bold underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="flex">
                                <input type="checkbox" name="" id="contact_checkbox" checked/>
                            </div>
                            <label htmlFor="contact_checkbox" className="ml-2 text-10px leading-extra-loose">I agree to receive other communications from Intraline.</label>
                        </div>
                        <div className="text-c_00080D mt-5 text-10px leading-extra-loose">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                
                </div>
                <div className="flex-1 bg-c_C3E0DC flex flex-col pb-25">
                    <div className="mt-40 mx-auto bg-white w-106_5 pt-8 pb-10 px-7 divide-y divide-c_00080D">
                        <div className="pb-7">
                            <div className="ttcommon_font_bold text-4xl leading-36_26">Reach Out.</div>
                        </div>
                        <div className="pt-10">
                            <div className="flex flex-col">
                                <div className="flex items-start w-full">
                                    <div className="ttcommon_font_thin text-sm leading-14_17 uppercase">Address:</div>
                                </div>
                                <div className="flex items-start w-full">
                                    <div className="ttcommon_font_thin text-4xl leading-36_48">520 - 1632 Dickson Ave. Kelowna, B.C. Canada</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-sm leading-14_17 uppercase">Canada phone:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-4xl leading-36_48">+ 1 778 738 0351</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-sm leading-14_17 uppercase">UK Phone:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-4xl leading-36_48">+ 1 778 738 0351</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-sm leading-14_17 uppercase">Email:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin text-4xl leading-36_48">info@intraline.com</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

ContactUs.Layout = Layout