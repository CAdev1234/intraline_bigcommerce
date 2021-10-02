import { ChevronRight } from "@components/icons"
import Link from "@components/ui/Link"
import Button from '@components/mycp/Button'
import Cookies from 'js-cookie'

import { useAppDispatch } from 'utils/redux/hooks'
import { updateCheckOutStatus } from 'utils/redux/slices/checkoutSlice'

export default function LoginForm() {
    const dispatch = useAppDispatch()
    const LoginSubmitHandler = () => {
        Cookies.set('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        dispatch(updateCheckOutStatus({logined:true, enableLoginForm: false, checkedShippingAddress: false, checkedBillAddress: false, checkedPayment: false}))
        
    }
    return (
        <div>
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
            <Button className="mt-8 w-full h-11 text-sm" onClick={() => {LoginSubmitHandler()}}>Login</Button>
            
        </div>
    )
}