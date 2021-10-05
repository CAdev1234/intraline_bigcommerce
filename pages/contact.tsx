import { Layout } from "@components/common"
import { ChevronRight } from "@components/icons"
import Link from "@components/ui/Link"
import {Button, SelectInput, Input} from '@components/mycp'
import React, { useEffect, useState } from "react"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const [contact_info, setContactInfo] = useState({full_name: '', email: '', mobile: '', help_type: '', msg: ''})
    const [enableSubmit, setEnableSubmit] = useState(false)
    const setFullNameHandler = (str: string) => {
        setContactInfo({...contact_info, full_name: str})
    } 
    const setEmailHandler = (str: string) => {
        setContactInfo({...contact_info, email: str})
    }
    const setMobileHandler = (str: string) => {
        setContactInfo({...contact_info, mobile: str})
    }
    const setHelpTypeHandler = (str: string) => {
        setContactInfo({...contact_info, help_type: str})
    }
    const setMsgHandler = (str: string) => {
        setContactInfo({...contact_info, msg: str})
    }

    const radioHandle = (event: any) => {
        setContactInfo({...contact_info, help_type: event.target.value})
      };

    const submitHandler = () => {
        if (contact_info.full_name && contact_info.email && contact_info.mobile) {
            toast.success("Submit Success.", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }else {
            return
        }
    }

    useEffect(() => {
        
        if (contact_info.full_name && contact_info.email && contact_info.mobile) {
            setEnableSubmit(true)
        }
    }, [contact_info])
    return (
        <div className="ttcommon_font_thin text-c_00080D">
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="toast-container"
            />
            <div className="flex items-start mb-25">
                <div className="w-154_5 pl-15 pt-28">
                    <div className="flex items-center uppercase text-sm leading-14_17 tracking-widest">
                        <div className="flex items-center cursor-pointer">
                            <span className="ttcommon_font"><Link href="/">Home</Link></span>
                            <span className="ml-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font_bold ml-1"><Link href="/contact">Contact</Link></span>
                        </div>
                    </div>
                    <div className="mt-10 max-w-106_5">
                        <div className="ttcommon_font_bold text-4xl leading-36_26">Contact Intraline.</div>
                        <div className="mt-5">We are here to help-reach out with any questions.</div>
                        <div className="mt-10">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Full name" onChange={setFullNameHandler}/>
                            {contact_info.full_name === '' &&
                                <span className="text-sm text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Email" onChange={setEmailHandler}/>
                            {contact_info.email === '' || !(contact_info.email.includes('@')) || !(contact_info.email.includes(".com")) &&
                                <span className="text-sm text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="number" placeholder="Phone Number" onChange={setMobileHandler}/>
                            {contact_info.mobile === '' &&
                                <span className="text-sm text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <div className="text-sm leading-14_26">How can we best help you?</div>
                        </div>
                        <div className="mt-2.5">
                            <div className="flex items-center">
                                <input type="radio" id="help_type_1" value="distributor inquiry" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_1" className="text-sm leading-14_26 ml-3">Distributor Inquiry</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_2" value="purchasing intraline" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_2" className="text-sm leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_3" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_3" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_4" value="purchasing intraline" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_4" className="text-sm leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_5" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_5" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_6" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_6" className="text-sm leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <textarea className="border-none bg-c_F7F7F7 w-full pl-5 py-2 h-24" placeholder="Write Your Message" onChange={(event) => {setMsgHandler(event.target.value)}}/>
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
                                <input type="checkbox" name="" id="contact_checkbox" defaultChecked/>
                            </div>
                            <label htmlFor="contact_checkbox" className="ml-2 text-10px leading-extra-loose">I agree to receive other communications from Intraline.</label>
                        </div>
                        <div className="text-c_00080D mt-5 text-10px leading-extra-loose">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <Button className="h-11 w-full text-sm" disabled={!enableSubmit} onClick={() => {submitHandler()}}>SUBMIT</Button>
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