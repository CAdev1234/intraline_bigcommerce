import { Layout, Navbar } from '@components/common'
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import Input from '@components/mycp/Input'
import { ChevronRight } from '@components/icons';
import login from 'pages/api/login';
import { useRouter } from 'next/router';
import { setCookie } from '@utils/cookie';
import { useCallback, useEffect, useState } from 'react';
import { validate } from 'email-validator'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmitHandler = () => {
        if (email !== '' && password !== '') {
            setCookie('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
            router.push('/')
        }else {
            toast.error("Email and Password error.", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        
    }
    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="toast-container"
            />
            <div className="h-15 w-full bg-transparent"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Account</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Login</span>
                    </div>
                </div>
                <div className="my-52 mx-auto 
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="leading-36_26 font-bold text-4xl text-left">Login to Your Account.</div>
                    <Input
                        className="mt-10" 
                        placeholder="Email Address"
                        onChange={setEmail}/>
                    <div className="mt-5 flex items-center">
                        <div className="w-full">
                            <Input className="w-full" type="password" placeholder="Password"/>
                        </div>
                        <div className="-ml-40">
                            <Link href="/">
                                <span className="text-c_8D97BC">Forgot Your Password?</span>
                            </Link>
                        </div>
                    </div>
                    <Button className="mt-8 w-full h-11 text-sm" onClick={() => {loginSubmitHandler()}}>Login</Button>
                    <div className="text-center mt-5">
                        <Link href="/account/register">
                            <span className="leading-36_26 text-base underline">Don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

Login.Layout = Layout