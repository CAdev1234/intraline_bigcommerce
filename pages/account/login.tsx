import { Layout } from '@components/common'
import dynamic from 'next/dynamic'
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
import { ChevronRight } from '@components/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail } from 'utils/simpleMethod'
import { useAppDispatch } from '@utils/redux/hooks';
import { loginUser } from '@utils/redux/slices/userSlice';
import { loginAuth } from '@utils/auth';
import { useAuth } from '@utils/context/auth';

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResultMsg, setLoginResultMsg] = useState(true)
    const [emailValiObj, setEmailValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [pwdValiObj, setPwdValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [numValiSpan, setNumValiSpan] = useState(100)
    const [disableLoginBtn, setDisableLoginBtn] = useState(true)
    // const user = useAppSelector((state) => state.user.userInfo)
    // const { login } = useAuth()
    
    const dispatch = useAppDispatch()

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

    const getPWDHandler = (str: string) => {
        setPassword(str)
        if (str === '') {
            setPwdValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (str.length < 8) {
            setPwdValiObj({enableValiMsg: true, valiMsgText: 'At least 8 characters.'})
        }else {
            setPwdValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const loginSubmitHandler = async () => {
        // let login_res = login(email, password)
        let res = await loginAuth(email, password)
        if (typeof(res) === 'string') {
            setLoginResultMsg(false)
            setTimeout(() => {
                setLoginResultMsg(true)
            }, 3000);
        }
        else {
            dispatch(loginUser())
            router.push('/')
        }
    }

    useEffect(() => {
        let vali_span_li = document.querySelectorAll('body span.vali-span.block')
        setNumValiSpan(vali_span_li.length)
        if (numValiSpan !== 0) setDisableLoginBtn(true)
        else if(email !== '' && password !== '') setDisableLoginBtn(false)
    }, [email, password])


    return (
        <div className="ttcommon_font mt-16 md:mt-0">
            
            <div className="h-15 w-full bg-transparent"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font
                            px-5 md:px-0">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className='mr-1'><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1"><Link href="/account/myaccount">Account</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold"><Link href="/account/login">Login</Link></span>
                    </div>
                </div>
                <div className="mx-auto 
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                sm:my-52 my-25">
                    <div className="leading-36_26 font-bold text-4xl text-left">Login to Your Account.</div>
                    <div className="mt-10">
                        {!loginResultMsg && 
                            <div className="mb-5 w-full py-3 px-7_5 rounded-lg bg-c_F4511E bg-opacity-30 text-c_F4511E">Wrong email and password. If you don't have account, please sign up.</div>
                        }
                        <Input className='bg-white' placeholder="Email Address" onChange={getEmailHandler} enableValiMsg={emailValiObj.enableValiMsg} valiMsgText={emailValiObj.valiMsgText}/>
                        
                    </div>
                    <div className="mt-5 flex items-center">
                        <div className="w-full">
                            <Input className="w-full bg-white" type="password" placeholder="Password" onChange={getPWDHandler} enableValiMsg={pwdValiObj.enableValiMsg} valiMsgText={pwdValiObj.valiMsgText}/>
                        </div>
                        <div className="-ml-40">
                            <Link href="/account/forgotpassword">
                                <span className="text-c_8D97BC">Forgot Your Password?</span>
                            </Link>
                        </div>
                    </div>

                    <Button className="mt-8 w-full h-11" onClick={() => {loginSubmitHandler()}} disabled={disableLoginBtn}>Login</Button>
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