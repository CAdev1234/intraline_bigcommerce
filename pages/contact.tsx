import { Layout } from "@components/common"
import React, { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import Link from "@components/ui/Link"
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const Cross = dynamic(import('@components/icons/Cross'))
const Button =  dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const Checkbox = dynamic(import("@components/mycp/Checkbox"))

import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';


import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { validateEmail } from "@utils/simpleMethod"
// const validateEmail = dynamic(() => import('@utils/simpleMethod').then((module) => module.validateEmail))

export default function ContactUs() {
    const [contact_info, setContactInfo] = useState({full_name: '', email: '', mobile: '', help_type: '', msg: ''})
    const [enableSubmit, setEnableSubmit] = useState(false)
    const [enableContactHubspotForm, setEnableContactHubspotForm] = useState(false)

    // const { loaded, error, formCreated } = useHubspotForm({
    //     portalId: '2718899',
    //     formId: '91cfa806-067a-4a3b-ba8a-d5cbe9ccf0f3',
    //     target: '#my-hubspot-form'
    // });
    

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
            setEnableContactHubspotForm(true);
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
            // toast.success("Submit Success.", {
            //     position: toast.POSITION.BOTTOM_RIGHT
            // });
        }else {
            return
        }
    }

    const closeHubspotModal = () => {
        setEnableContactHubspotForm(false);
        (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto'
    }

    useEffect( () => {
        if (contact_info.full_name && contact_info.email && contact_info.mobile) {
            setEnableSubmit(true)
        }
    }, [contact_info])
    return (
        <div className="ttcommon_font_thin text-c_00080D
                        mt-16 md:mt-0">
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
            {/* <div id="my-hubspot-form"></div> */}
            <div className="items-start
                            block md:flex
                            mb-0 md:mb-25">
                <div className="pt-28
                                pl-5 md:pl-15
                                pr-5 md:pr-0
                                md:w-131_5 lg:w-131_5 xl:w-154_5">
                    <div className="flex items-center uppercase leading-14_17 tracking-widest">
                        <div className="flex items-center cursor-pointer">
                            <span className="ttcommon_font mr-1"><Link href="/">Home</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font_bold"><Link href="/contact">Contact</Link></span>
                        </div>
                    </div>
                    
                    <div className="mt-10
                                    max-w-none md:max-w-106_5">
                        <div className="ttcommon_font_bold text-4xl leading-36_26">Contact Intraline.</div>
                        <div className="mt-5">We are here to help-reach out with any questions.</div>
                        <div className="mt-10">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Full name" onChange={setFullNameHandler}/>
                            {contact_info.full_name === '' &&
                                <span className="text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="text" placeholder="Email" onChange={setEmailHandler}/>
                            {!validateEmail(contact_info.email) &&
                                <span className="text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <Input className="bg-c_F7F7F7" type="number" placeholder="Phone Number" onChange={setMobileHandler}/>
                            {contact_info.mobile === '' &&
                                <span className="text-c_F4511E font-bold">Required.</span>
                            }
                        </div>
                        <div className="mt-5">
                            <div className="leading-14_26">How can we best help you?</div>
                        </div>
                        <div className="mt-2_5">
                            <div className="flex items-center">
                                <input type="radio" id="help_type_1" value="distributor inquiry" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_1" className="text-base leading-14_26 ml-3">Distributor Inquiry</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_2" value="purchasing intraline" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_2" className="text-base leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_3" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_3" className="text-base leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_4" value="purchasing intraline" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_4" className="text-base leading-14_26 ml-3">Purchasing Intraline</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_5" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_5" className="text-base leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                            <div className="mt-1 flex items-center">
                                <input type="radio" id="help_type_6" value="aesthetic training" name="help_type" onChange={(event) => radioHandle(event)}/>
                                <label htmlFor="help_type_6" className="text-base leading-14_26 ml-3">Aesthetic Training</label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <textarea className="border-none bg-c_F7F7F7 w-full pl-5 py-2 h-24" placeholder="Write Your Message" onChange={(event) => {setMsgHandler(event.target.value)}}/>
                        </div>
                        <div className="mt-5">
                            <div className="ttcommon_font_thin leading-extra-loose">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font_bold underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5">
                            <Checkbox id="contact_checkbox" type="checkbox" defaultChecked={true} className="ttcommon_font_thin" label="I agree to receive other communications from Intraline."></Checkbox>
                        </div>
                        <div className="text-c_00080D mt-5 leading-extra-loose">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <Button className="h-11 w-full" disabled={!enableSubmit} onClick={() => {submitHandler()}}>SUBMIT</Button>
                        </div>
                    </div>
                
                </div>
                <div className="flex-1 bg-c_C3E0DC flex flex-col
                                mt-15 md:mt-0
                                px-5 md:px-0
                                pb-15 md:pb-25">
                    <div className="mx-auto bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D
                                    md:w-106_5 lg:w-106_5
                                    mt-15 md:mt-40">
                        <div className="pb-7">
                            <div className="ttcommon_font_bold text-4xl leading-36_26">Reach Out.</div>
                        </div>
                        <div className="pt-10">
                            <div className="flex flex-col">
                                <div className="flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-14_17 uppercase">Address:</div>
                                </div>
                                <div className="flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-36_48
                                                    text-2xl md:text-4xl">520 - 1632 Dickson Ave. Kelowna, B.C. Canada</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-14_17 uppercase">Canada phone:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-36_48
                                                    text-2xl md:text-4xl">+ 1 778 738 0351</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-14_17 uppercase">UK Phone:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-36_48
                                                    text-2xl md:text-4xl">+ 1 778 738 0351</div>
                                </div>
                                <div className="mt-5 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-14_17 uppercase">Email:</div>
                                </div>
                                <div className="mt-2 flex items-start w-full">
                                    <div className="ttcommon_font_thin leading-36_48
                                                    text-2xl md:text-4xl">info@intraline.com</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/* <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col py-7_5 px-5">
                    <div className=" w-146 h-131_5 bg-white my-auto mx-auto">
                        <div id="my-hubspot-form"></div>
                    </div>
                    
                </div> */}

                <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col ${enableContactHubspotForm ? 'block' : 'hidden'}`}>
                    <div className="relative pl-5 pr-2 py-7_5 bg-white my-auto mx-auto flex flex-col
                                    w-full md:w-146" style={{height: '80vh'}}>
                        <div className="tt_common_font_bold text-4xl text-center">Hubspot Form</div>
                        <div className="flex-1 h-0 mt-3">
                            <div className="h-full overflow-y-auto pr-2">
                                <div id="my-hubspot-form"></div>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 cursor-pointer" onClick={() => {closeHubspotModal()}}>
                            <Cross />
                        </div>
                    </div>

                    
                </div>
        </div>
    )
}

ContactUs.Layout = Layout