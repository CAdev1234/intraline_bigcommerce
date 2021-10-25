import { Layout } from '@components/common'
import { validateEmail } from '@utils/simpleMethod';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [emailValiObj, setEmailValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [numValiSpan, setNumValiSpan] = useState(0)
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)



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
    useEffect(() => {
        let vali_span_li = document.querySelectorAll('body span.vali-span.block')
        setNumValiSpan(vali_span_li.length)
        if (numValiSpan !== 0) setDisableSubmitBtn(true)
        else if(email !== "") setDisableSubmitBtn(false)
    }, [email])
    
    // useEffect(() => {
    //     initFirebaseApp()
    // })

    const forgotPasswordSubmitHandler = async() => {
        let res_data = await fetch('/api/auth/forgotpassword', {
            method: 'POST',
            body: JSON.stringify({email: email})
        }).then(res => res.json())
        
        toast.configure()
        if (res_data.status === 'success') {
            let user = JSON.parse(localStorage.getItem('user') as string)
            if (user !== null && user.email === email ) {
                localStorage.setItem('rp_key', res_data.data.rp_key)
                localStorage.setItem('rp_end_time', res_data.data.rp_end_time)
                toast.success("Success. Please confirm verification link.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else {
                toast.error("Email doesnot exist.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }
    
    return (
        <div className='ttcommon_font'>
            <div className="h-15 w-full bg-transparent"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1"><Link href="/account/myaccount">Account</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1"><Link href="/account/forgotpassword">Forgot Password</Link></span>
                    </div>
                </div>
                <div className="my-52 mx-auto 
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="leading-36_26 font-bold text-4xl text-left">Forgot Password.</div>
                    <div className="mt-10">
                        <Input 
                            className='bg-white' 
                            placeholder="Email Address" 
                            onChange={getEmailHandler} 
                            enableValiMsg={emailValiObj.enableValiMsg} 
                            valiMsgText={emailValiObj.valiMsgText}/>
                    </div>
                    <Button className="mt-8 w-full h-11" disabled={disableSubmitBtn} onClick={() => {forgotPasswordSubmitHandler()}}>Send Verification Code</Button>
                </div>
            </div>
        </div>
        
    );
}

ForgotPassword.Layout = Layout