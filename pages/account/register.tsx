import { Layout, Navbar } from '@components/common'
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import { ChevronRight } from '@components/icons';

export default function Register() {
    return (
        <div>
            <div className="bg-transparent h-15 w-full"></div>
            <div className="bg-c_CCE7EF flex flex-col ttcommon_font">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Account</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Register</span>
                    </div>
                </div>
                <div className="my-25 mx-auto
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="leading-36_26 font-bold text-4xl text-left">Create Your Account.</div>
                    <input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First Name"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Last Name"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Confirm Password"/>
                            
                    <Button className="mt-8 w-full h-11 text-sm">Register</Button>
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

