import { Navbar } from '@components/common'
import Link from '@components/ui/Link';

export default function Login() {
    return (
        <div>
            <Navbar c_name="bg-black sticky"></Navbar>
            <div className="h-screen bg-c_CCE7EF flex flex-col ttcommon_font">
            <div className="my-auto mx-auto 
                            w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                <div className="leading-36_26 font-bold text-4xl text-left">Login to Your Account.</div>
                    <input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address"/>
                    <div className="mt-5 flex items-center">
                        <input className="h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password"/>
                        <div className="-ml-40">
                            <Link href="/">
                                <span className="text-c_8D97BC">Forgot Your Password?</span>
                            </Link>
                        </div>
                    </div>
                    <button className="mt-8 uppercase bg-c_00090D text-white py-4 w-full text-sm tracking-widest">Login</button>
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

