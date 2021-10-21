import { Layout } from '@components/common'
import dynamic from 'next/dynamic'
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
import { ChevronRight } from '@components/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail } from 'utils/simpleMethod'
import { useAppDispatch } from '@utils/redux/hooks';
import { loginUser } from '@utils/redux/slices/userSlice';
import { loginAuth } from '@utils/auth';

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResult, setLoginResult] = useState(true)
    // const user = useAppSelector((state) => state.user.userInfo)
    
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (user !== {}) {
    //         router.push('/')
    //     }
    // }, [])
    

    const loginSubmitHandler = async () => {
        let res = await loginAuth(email, password)
        if (typeof(res) === 'string') setLoginResult(false)
        else dispatch(loginUser())
        // if (user) {
        //     if (email !== '' && password !== '' && email === JSON.parse(getCookie('user', '') as string).email && password === JSON.parse(getCookie('user', '') as string).password) {
        //         setCookie('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        //         dispatch(loginUser())
        //         router.push('/')
        //     }else {
        //         setLoginResult(false)
        //         // toast.error("Email and Password error.", {
        //         //     position: toast.POSITION.TOP_RIGHT
        //         // });
        //     }
        // }else {
        //     setLoginResult(false)
        // }
        
    }


    return (
        <div className="ttcommon_font mt-16 md:mt-0">
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
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font
                            px-5 md:px-0">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1"><Link href="/account/myaccount">Account</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1"><Link href="/account/login">Login</Link></span>
                    </div>
                </div>
                <div className="mx-auto 
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                sm:my-52 my-25">
                    <div className="leading-36_26 font-bold text-4xl text-left">Login to Your Account.</div>
                    <div className="mt-10">
                        {!loginResult && 
                            <div className="mb-5 w-full py-3 px-7_5 rounded-lg bg-c_F4511E bg-opacity-30 text-c_F4511E">Wrong email and password. If you don't have account, please sign up.</div>
                        }
                        <Input className='bg-white' placeholder="Email Address" onChange={setEmail}/>
                        {email === '' && <span className=" text-c_F4511E">Required</span>}
                        {email !== '' && !validateEmail(email) &&
                            <span className="vali-span text-c_F4511E">Email is incorrect.</span>
                        }
                    </div>
                    <div className="mt-5 flex items-center">
                        <div className="w-full">
                            <Input className="w-full bg-white" type="password" placeholder="Password" onChange={setPassword}/>
                        </div>
                        <div className="-ml-40">
                            <Link href="/account/forgotpassword">
                                <span className="text-c_8D97BC">Forgot Your Password?</span>
                            </Link>
                        </div>
                    </div>
                    {password === '' && <span className=" text-c_F4511E">Required</span>}
                    <Button className="mt-8 w-full h-11" onClick={() => {loginSubmitHandler()}}>Login</Button>
                    <div className="text-center mt-5">
                        <Link href="/account/register">
                            <span className="leading-36_26 underline">Don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

Login.Layout = Layout