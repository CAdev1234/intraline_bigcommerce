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
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [enableSubmitBtn, setEnableSubmitBtn] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (router.isReady) {
            let key = localStorage.getItem('rp_key')
            let rp_end_time = localStorage.getItem('rp_end_time')
            console.log(router.query)
            if (router.query.key === undefined || key !== router.query.key || Number(rp_end_time) < Number(Date.now().toString())) {
                router.push('/404')
            }
        }
    })

    useEffect(() => {
        if (newPassword === confirmPassword && newPassword !== '') {
            setEnableSubmitBtn(true)
        }else {
            setEnableSubmitBtn(false)
        }
    }, [newPassword, confirmPassword])
    
    const updatePWDHandler = () => {
        // updatePassword(newPassword, router.query.email as string)
        let user = JSON.parse(localStorage.getItem('user') as string)
        toast.configure()
        console.log(user.password)
        console.log(newPassword)
        if (user.password === newPassword) {
            toast.warning("Password is duplicated. Please use another password.", {
                position: toast.POSITION.TOP_RIGHT
            });    
        }else {
            user.password = newPassword
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
                        <Input className='bg-white' type='password' placeholder="New Password" onChange={setNewPassword}/>
                        {newPassword === '' && <span className=" text-c_F4511E">Required</span>}
                        {newPassword.length < 8 && newPassword !== '' && <span className=" text-c_F4511E">At least 8 characters</span>}
                        
                    </div>
                    <div className="mt-5">
                        <Input className='bg-white' type='password' placeholder="Confirm Password" onChange={setConfirmPassword}/>
                        {confirmPassword === '' && <span className="vali-span text-c_F4511E">Required.</span>}
                        {newPassword !== confirmPassword && confirmPassword !== '' &&
                            <span className="vali-span text-c_F4511E">Not matched.</span>
                        }
                    </div>
                    <Button className="mt-8 w-full h-11" disabled={!enableSubmitBtn} onClick={() => {updatePWDHandler()}}>Update Password</Button>
                </div>
            </div>
        </div>
        
    );
}

ForgotPassword.Layout = Layout