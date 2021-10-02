import { Layout, Navbar } from '@components/common'
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import { ChevronRight } from '@components/icons';
import Cookies from 'js-cookie'
import login from 'pages/api/login';
import LoginForm from '@components/mycp/LoginForm';

export default function Login() {
    
    return (
        <div>
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
                    <LoginForm />
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