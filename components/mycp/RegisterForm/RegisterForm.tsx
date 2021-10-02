
import Link from '@components/ui/Link';
import Button from '@components/mycp/Button'
import { ChevronRight } from '@components/icons';

export default function RegisterForm() {
    return (
        <div>
            <div className="leading-36_26 font-bold text-4xl text-left">Create Your Account.</div>
            <input className="mt-10 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email Address"/>
            <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First Name"/>
            <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Last Name"/>
            <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Password"/>
            <input className="mt-5 h-11 border-none bg-white w-full pl-5 py-2" type="password" placeholder="Confirm Password"/>
                    
            <Button className="mt-8 w-full h-11 text-sm">Register</Button>
            
        </div>
    )
}