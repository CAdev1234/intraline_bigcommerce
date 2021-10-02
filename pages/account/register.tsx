import { Layout, Navbar } from '@components/common'
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import { ChevronRight } from '@components/icons';
import RegisterForm from '@components/mycp/RegisterForm';

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
                    <RegisterForm />
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

