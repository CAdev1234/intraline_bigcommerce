import { Navbar } from '@components/common'
import Link from '@components/ui/Link';

export default function Register() {
    return (
        <div>
            <Navbar c_name="bg-black sticky"></Navbar>
            <div className="h-screen bg-c_CCE7EF flex flex-col ttcommon_font">
            <div className="my-auto mx-auto w-1/4">
                    <div className="leading-36_26 font-bold text-4xl text-left">Create Your Account.</div>
                    <input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First Name"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Last Name"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password"/>
                    <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Confirm Password"/>
                            
                    <button className="mt-8 uppercase bg-c_00090D text-white tracking-widest py-4 w-full text-sm">Register</button>
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

