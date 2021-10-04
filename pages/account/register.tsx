import { Layout, Navbar } from '@components/common'
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import Input from '@components/mycp/Input'
import { ChevronRight } from '@components/icons';
import { useState } from 'react';
import { setCookie } from '@utils/cookie';
import { useRouter } from 'next/router';

export default function Register() {
    const [email, setEmail] = useState('')
    const [f_name, setFName] = useState('')
    const [l_name, setLName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setCPassword] = useState('')
    const router = useRouter()

    const registerHandler = () => {
        if (email !== "" && f_name !== "" && l_name !== "" && mobile !== '' && password !== "" && c_password !== "" && password === c_password) {
            setCookie('user', JSON.stringify({email: email, f_name: f_name, l_name: l_name, mobile: mobile}))
            router.push('/account/login')
        }else {
            
        }
    }
    return (
        <div>
            <div className="bg-transparent h-15 w-full"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
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
                    <Input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address" onChange={setEmail}/>
                    <Input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First Name" onChange={setFName}/>
                    <Input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Last Name" onChange={setLName}/>
                    <Input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Phone Number" onChange={setMobile}/>
                    <Input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password" onChange={setPassword}/>
                    <Input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Confirm Password" onChange={setCPassword}/>
                            
                    <Button className="mt-8 w-full h-11 text-sm" onClick={() => {registerHandler()}}>Register</Button>
                    <div className="text-center mt-5">
                        <Link href="/account/login">
                            <span className="leading-36_26 text-base underline">Already have an account?</span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

Register.Layout = Layout

