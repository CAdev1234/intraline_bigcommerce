import { Layout, Navbar } from '@components/common'
import dynamic from 'next/dynamic'
const Link = dynamic(import('@components/ui/Link'));

const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))

export default function ForgotPassword() {
    
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
                        <Input placeholder="Email Address"/>
                    </div>
                    <Button className="mt-8 w-full h-11">Send Verification Code</Button>
                </div>
            </div>
        </div>
        
    );
}

ForgotPassword.Layout = Layout