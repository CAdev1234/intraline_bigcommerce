import { Layout, Navbar } from '@components/common'
import { updatePassword } from '@utils/auth';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))

export default function ForgotPassword() {
    const [n_pwd, setNPwd] = useState('')
    const [c_pwd, setCPwd] = useState('')
    const [n_pwdValiObj, setNewPWDValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [c_pwdValiObj, setCPWDValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [enableSubmitBtn, setEnableSubmitBtn] = useState(false)
    const router = useRouter()

    const getNPwdHandler = (str: string) => {
        setNPwd(str)
        if (str === '') {
            setNewPWDValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (str.length < 8) {
            setNewPWDValiObj({enableValiMsg: true, valiMsgText: 'At least 8 characters.'})
        }else {
            setNewPWDValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCPwdHandler = (str: string) => {
        setCPwd(str)
        if (str === '') {
            setCPWDValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (n_pwd !== str) {
            setCPWDValiObj({enableValiMsg: true, valiMsgText: 'No matched.'})
        }else {
            setCPWDValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    useEffect(() => {
        if (router.isReady) {
            // let key = localStorage.getItem('rp_key')
            // let rp_end_time = localStorage.getItem('rp_end_time')
            // console.log(router.query.key === undefined || key !== router.query.key || Number(rp_end_time) < Number(Date.now().toString()))
            // if (router.query.key === undefined || key !== router.query.key || Number(rp_end_time) < Number(Date.now().toString())) {
            //     router.push('/404')
            // }
        }
    })

    useEffect(() => {
        if (n_pwd === c_pwd && n_pwd !== '') {
            setEnableSubmitBtn(true)
        }else {
            setEnableSubmitBtn(false)
        }
    }, [n_pwd, c_pwd])
    
    const updatePWDHandler = () => {
        // updatePassword(newPassword, router.query.email as string)
        let user = JSON.parse(localStorage.getItem('user') as string)
        toast.configure()
        console.log(user.password)
        console.log(n_pwd)
        if (user.password === n_pwd) {
            toast.warning("Password is duplicated. Please use another password.", {
                position: toast.POSITION.TOP_RIGHT
            });    
        }else {
            user.password = n_pwd
            localStorage.setItem('user', JSON.stringify(user))
            router.push('/account/login')
            // toast.success("Password updated succesfully. Please log in.", {
            //     position: toast.POSITION.TOP_RIGHT
            // });
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
                        <span className="ttcommon_font_bold ml-1"><Link href="/account/forgotpassword">Reset Password</Link></span>
                    </div>
                </div>
                <div className="my-30 mx-auto 
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="leading-36_26 font-bold text-4xl text-left">Reset Password.</div>
                    <div className="mt-10">
                        <Input 
                            className='bg-white' 
                            type='password' 
                            placeholder="New Password" 
                            onChange={getNPwdHandler}
                            enableValiMsg={n_pwdValiObj.enableValiMsg} 
                            valiMsgText={n_pwdValiObj.valiMsgText}/>
                        
                    </div>
                    <div className="mt-5">
                        <Input 
                            className='bg-white' 
                            type='password' 
                            placeholder="Confirm Password" 
                            onChange={getCPwdHandler}
                            enableValiMsg={c_pwdValiObj.enableValiMsg} 
                            valiMsgText={c_pwdValiObj.valiMsgText}/>
                    </div>
                    <Button className="mt-8 w-full h-11" disabled={!enableSubmitBtn} onClick={() => {updatePWDHandler()}}>Update Password</Button>
                </div>
            </div>
        </div>
        
    );
}

ForgotPassword.Layout = Layout