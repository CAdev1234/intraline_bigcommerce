import { FC, useEffect, useState } from "react";

import dynamic from 'next/dynamic'
import { validateEmail } from "@utils/simpleMethod";
const Button =  dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const SelectInput = dynamic(import('@components/mycp/SelectInput'))
const Link = dynamic(import('@components/ui/Link'))
const Checkbox = dynamic(import('@components/mycp/Checkbox'))

interface QuestionFormProps {
    bg_color: string,
    input_bg: string,
}

const QuestionForm:FC<QuestionFormProps> = ({bg_color, input_bg}) => {

    const [f_name, setFName] = useState('')
    const [l_name, setLName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [comment, setComment] = useState('')
    const [fnameValiObj, setFNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [lnameValiObj, setLNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [emailValiObj, setEmailValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [companyNameValiObj, setCompanyNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
    const [numValiSpan, setNumValiSpan] = useState(100)

    useEffect(() => {
        let vali_span_li = document.querySelectorAll('body span.vali-span.block')
        setNumValiSpan(vali_span_li.length)
        if (numValiSpan !== 0) setDisableSubmitBtn(true)
        else if(email !== "" && f_name !== "" && l_name !== "" && companyName !== '') setDisableSubmitBtn(false)
    })

    const getFNameHandler = (str: string) => {
        setFName(str)
        if (str === '') {
            setFNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setFNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getLNameHandler = (str: string) => {
        setLName(str)
        if (str === '') {
            setLNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setLNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCompanyNameHandler = (str: string) => {
        setCompanyName(str)
        if (str === '') {
            setCompanyNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setCompanyNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getEmailHandler = (str: string) => {
        setEmail(str)
        if (str === '') {
            setEmailValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (!validateEmail(str)) {
            setEmailValiObj({enableValiMsg: true, valiMsgText: 'Email is incorrect.'})
        }else {
            setEmailValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    return (
        <div className={`${bg_color}`}>
            <div className="py-28 mx-auto
                        w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                <div className="flex flex-col
                                w-full md:max-w-lg
                                mx-0 md:mx-auto
                                px-5 md:px-0">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                    <p className="mt-5">We are here to help --- reach out with any questions.</p>
                    <div className="mt-7_5 md:mt-10">
                        <Input 
                            className={`${input_bg}`} 
                            type="text" 
                            placeholder="First Name"
                            enableValiMsg={fnameValiObj.enableValiMsg} 
                            valiMsgText={fnameValiObj.valiMsgText}
                            onChange={getFNameHandler}/>
                    </div>
                    <div className="mt-5">
                        <Input 
                            className={`${input_bg}`} 
                            type="text" 
                            placeholder="Last Name"
                            enableValiMsg={lnameValiObj.enableValiMsg} 
                            valiMsgText={lnameValiObj.valiMsgText}
                            onChange={getLNameHandler}/>
                    </div>
                    <div className="mt-5">
                        <Input 
                            className={`${input_bg}`} 
                            type="text" 
                            placeholder="Company Name"
                            enableValiMsg={companyNameValiObj.enableValiMsg} 
                            valiMsgText={companyNameValiObj.valiMsgText}
                            onChange={getCompanyNameHandler}/>
                    </div>
                    <div className="mt-5">
                        <Input 
                            className={`${input_bg}`} 
                            type="text" 
                            placeholder="Email"
                            enableValiMsg={emailValiObj.enableValiMsg} 
                            valiMsgText={emailValiObj.valiMsgText}
                            onChange={getEmailHandler}/>
                    </div>
                    <div className="mt-5">
                        <SelectInput 
                            enable_underline={false}
                            default_option="Choose Country or Region"
                            option_li={['United States', 'United Kingdom']} 
                            className={`${input_bg}`}
                            option_class="bg-white hover:bg-opacity-80"
                            returnVal={setCountry} />
                    </div>
                    <div className="mt-5">
                        <textarea className={`h-24 border-none w-full pl-5 py-2 ${input_bg}`} placeholder="Write Your Comment"></textarea>
                    </div>
                    <div className="mt-5">
                        <div className="ttcommon_font">
                            <Link href="/privacypolicy">
                                <span className="ttcommon_font_bold underline mr-2">Intraline’s Privacy Policy.</span>
                            </Link> 
                            If you consent to us contacting you for this purpose, please tick below:
                        </div>
                    </div>
                    <div className="mt-5">
                        <Checkbox id="moisturizer_checkbox" type="checkbox" defaultChecked={true} className="ttcommon_font" label="I agree to receive other communications from Intraline."></Checkbox>
                    </div>
                    <div className="text-base leading-14_17 text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                    <div className="mt-7_5">
                        <Button className="h-11 w-full" disabled={disableSubmitBtn}>SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
} 

export default QuestionForm