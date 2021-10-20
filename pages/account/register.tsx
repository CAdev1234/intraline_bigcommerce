import { Layout, Navbar } from '@components/common'
import dynamic from 'next/dynamic'
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
import Input from '@components/mycp/Input'
import { ChevronRight } from '@components/icons';
import { useEffect, useState } from 'react';
import { setCookie } from '@utils/cookie';
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

    const registerHandler = () => {
        if (email !== "" && f_name !== "" && l_name !== "" && mobile !== '' && password !== "" && c_password !== "" && password === c_password) {
            registerAuth(email, f_name, l_name, mobile, password, c_password)
        }else {
            setRegisterResultFail(true)
        }
    }
    
    useEffect(() => {
        let vali_span_li = document.querySelectorAll('body span.vali-span')
        setNumValiSpan(vali_span_li.length)
        if (numValiSpan !== 0) setDisabledSubmitBtn(true)
        else setDisabledSubmitBtn(false)
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
                        <Input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address" onChange={setEmail}/>
                        {email === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                        {email !== '' && !validateEmail(email) &&
                            <span className="vali-span text-c_F4511E">Email is incorrect.</span>
                        }
                    </div>
                    <div className="w-full mt-5 flex flex-col">
                        <Input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First Name" onChange={setFName}/>
                        {f_name === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Last Name" onChange={setLName}/>
                        {l_name === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input className="h-11 border-none bg-white w-full pl-5 py-2" type="number" placeholder="Phone Number" onChange={setMobile}/>
                        {mobile === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input className="h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password" onChange={setPassword}/>
                        {password.length < 8 && <span className="vali-span text-c_F4511E">Required. At least 8 characters.</span>}
                    </div>
                    <div className="mt-5 w-full flex flex-col">
                        <Input className="h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Confirm Password" onChange={setCPassword}/>
                        {c_password === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                        {c_password !== '' && c_password !== password && <span className="vali-span text-c_F4511E">Not matched.</span>}
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

