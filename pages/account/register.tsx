import { Layout, Navbar } from '@components/common'
import dynamic from 'next/dynamic'
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
import Input from '@components/mycp/Input'
import { ChevronRight } from '@components/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { validateEmail } from 'utils/simpleMethod'
import { useAppDispatch } from '@utils/redux/hooks';
import { registerAuth } from '@utils/auth';



export default function Register() {
    const [email, setEmail] = useState('')
    const [f_name, setFName] = useState('')
    const [l_name, setLName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setCPassword] = useState('')
    const [disabledSubmitBtn, setDisabledSubmitBtn] = useState(true)
    const [registerResultFail, setRegisterResultFail] = useState(false)
    const [numValiSpan, setNumValiSpan] = useState(0)
    const router = useRouter()
    const dispatch = useAppDispatch()

    
    const [emailValiObj, setEmailValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [fnameValiObj, setFNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [lnameValiObj, setLNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [mobileValiObj, setMobileValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [pwdValiObj, setPwdValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [c_pwdValiObj, setCPwdValiObj] = useState({enableValiMsg: false, valiMsgText: ''})

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

    const getMobileHandler = (str: string) => {
        setMobile(str)
        if (str === '') {
            setMobileValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setMobileValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }


    const getPwdHandler = (str: string) => {
        setPassword(str)
        setCPassword('')
        if (str === '') {
            setPwdValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (str.length < 8) {
            setPwdValiObj({enableValiMsg: true, valiMsgText: 'At least 8 characters.'})
        }else {
            setPwdValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const getCPwdHandler = (str: string) => {
        setCPassword(str)
        if (str === '') {
            setCPwdValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (password !== str) {
            setCPwdValiObj({enableValiMsg: true, valiMsgText: 'No matched.'})
        }else {
            setCPwdValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }


    const registerHandler = () => {
        registerAuth(email, f_name, l_name, mobile, password, c_password)
    }
    
    useEffect(() => {
        let vali_span_li = document.querySelectorAll('body span.vali-span.block')
        setNumValiSpan(vali_span_li.length)
        if (numValiSpan !== 0) setDisabledSubmitBtn(true)
        else if(email !== "" && f_name !== "" && l_name !== "" && mobile !== '' && password !== "" && c_password !== "" && password === c_password) setDisabledSubmitBtn(false)
    }, [disabledSubmitBtn, numValiSpan, email, f_name, l_name, mobile, password, c_password])
    return (
        <div className="ttcommon_font mt-16 md:mt-0">
            <div className="bg-transparent h-15 w-full"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font
                            px-5 md:px-0">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1"><Link href="/account/myaccount">Account</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1"><Link href="/account/register">Register</Link></span>
                    </div>
                </div>
                <div className="my-25 mx-auto
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="leading-36_26 font-bold text-4xl text-left">Create Your Account.</div>
                    <div className="w-full">
                        {registerResultFail && <span className="vali-span text-c_F4511E">Oops, Sorry, register was failed.</span>}
                        <Input 
                            className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" 
                            type="text" 
                            placeholder="Email Address" 
                            onChange={getEmailHandler}
                            enableValiMsg={emailValiObj.enableValiMsg} 
                            valiMsgText={emailValiObj.valiMsgText}/>
                        
                    </div>
                    <div className="w-full mt-5 flex flex-col">
                        <Input 
                            className="h-11 border-none bg-white w-full pl-5 py-2" 
                            type="text"
                            placeholder="First Name" 
                            onChange={getFNameHandler}
                            enableValiMsg={fnameValiObj.enableValiMsg} 
                            valiMsgText={fnameValiObj.valiMsgText}/>
                        
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input 
                            className="h-11 border-none bg-white w-full pl-5 py-2" 
                            type="text" 
                            placeholder="Last Name" 
                            onChange={getLNameHandler}
                            enableValiMsg={lnameValiObj.enableValiMsg} 
                            valiMsgText={lnameValiObj.valiMsgText}/>
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input 
                            className="h-11 border-none bg-white w-full pl-5 py-2" 
                            type="number" 
                            placeholder="Phone Number" 
                            onChange={getMobileHandler}
                            enableValiMsg={mobileValiObj.enableValiMsg} 
                            valiMsgText={mobileValiObj.valiMsgText}/>
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input 
                            className="h-11 border-none bg-white w-full pl-5 py-2" 
                            type="password" 
                            placeholder="Password" 
                            onChange={getPwdHandler}
                            enableValiMsg={pwdValiObj.enableValiMsg} 
                            valiMsgText={pwdValiObj.valiMsgText}/>
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input 
                            className="h-11 border-none bg-white w-full pl-5 py-2" 
                            type="password" 
                            placeholder="Confirm Password" 
                            onChange={getCPwdHandler}
                            enableValiMsg={c_pwdValiObj.enableValiMsg} 
                            valiMsgText={c_pwdValiObj.valiMsgText}/>
                    </div>
                            
                    <Button className="mt-8 w-full h-11" onClick={() => {registerHandler()}} disabled={disabledSubmitBtn}>Register</Button>
                    <div className="text-center mt-5">
                        <Link href="/account/login">
                            <span className="leading-36_26 underline">Already have an account?</span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

Register.Layout = Layout

