import { Navbar } from '@components/common'
import dynamic from 'next/dynamic'
const Button =  dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const SelectInput = dynamic(import('@components/mycp/SelectInput'))
const Link = dynamic(import('@components/ui/Link'));
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
import { loginAuth } from '@utils/auth';
import { useAppDispatch, useAppSelector } from '@utils/redux/hooks';
import { createOrder } from '@utils/redux/slices/cartSlice';
import { loginUser, logoutUser } from '@utils/redux/slices/userSlice';
import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie, removeCookie, setCookie } from 'utils/cookie'
import { generateID } from '@utils/simpleMethod'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const cart_products = useAppSelector(state => state.cart.products)
    const [user, setUser] = useState({email: '', password: '', f_name: '', l_name: '', mobile: ''})
    
    const [logined, setLogined] = useState(false)
    const [loginResult, setLoginResult] = useState(true)
    const [enableRegister, setEnableRegister] = useState(false)
    const [enableLoginForm, setEnableLoginForm] = useState(false)

    
    
    const [checkedShippingAddress, setCheckedShippingAddress] = useState(false)
    const [ship_address, setShipAddress] = useState({f_name: '', l_name: '', address: '', apt: '', city: '', country: '', postcode: ''})
    
    const [saFNameValiObj, setSAFNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saLNameValiObj, setSALNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saAddressValiObj, setSAAddressValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saAptValiObj, setSAAptValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saCityValiObj, setSACityValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saCountryValiObj, setSACountryValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [saPostCodeValiObj, setSAPostCodeValiObj] = useState({enableValiMsg: false, valiMsgText: ''})

    

    
    
    const [checkedBillAddress, setCheckedBillAddress] = useState(false)
    const [bill_address, setBillAddress] = useState({f_name: '', l_name: '', address: '', city: '', apt: '', country: '', postcode: ''})
    
    const [baFNameValiObj, setBAFNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baLNameValiObj, setBALNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baAddressValiObj, setBAAddressValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baAptValiObj, setBAAptValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baCityValiObj, setBACityValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baCountryValiObj, setBACountryValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [baPostCodeValiObj, setBAPostCodeValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    




    const [checkedPayment, setCheckedPayment] = useState(false)
    const [payment, setPayment] = useState({name: '', number: '', date: '', cvc: ''})
    
    const [pmNameValiObj, setPMNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [pmNumValiObj, setPMNumValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [pmExpireValiObj, setPMExpireValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [pmCVCValiObj, setPMCVCValiObj] = useState({enableValiMsg: false, valiMsgText: ''})


    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
        let user_info = JSON.parse(localStorage.getItem('user') as string)
        setUser(user_info)

        if (localStorage.getItem('sa')) {
            let shipping_address = JSON.parse(localStorage.getItem('sa') as string)
            setShipAddress(shipping_address)
            setCheckedShippingAddress(true)
        }

        if (localStorage.getItem('ba')) {
            let bill_address = JSON.parse(localStorage.getItem('ba') as string)
            setBillAddress(bill_address)
            setCheckedBillAddress(true)
        }

        if (localStorage.getItem('pm')) {
            let payment_info = JSON.parse(localStorage.getItem('pm') as string)
            setPayment(payment_info)
            setCheckedPayment(true)
        }

        if (router.query !== {}) {
            if (router.query.status === 'shipping_address') {
                setCheckedShippingAddress(false)
            }
            if (router.query.status === 'bill_address') {
                setCheckedBillAddress(false)
                setCheckedShippingAddress(true)
            }
            if (router.query.status === 'payment') {
                setCheckedPayment(false)
                setCheckedShippingAddress(true)
                setCheckedBillAddress(true)
            }
            // if (router.query.status === 'add payment') {

            // }
        }
    }, [])

    let loginSubmitHandler = async () => {
        let res = await loginAuth(user.email, user.password)
        if (typeof(res) === 'string') setLoginResult(false)
        else dispatch(loginUser())
    }
    const getEmailFromInputHandler = (email: string) => {
        setUser({...user, email: email})
    }
    const getPasswordFromInputHandler = (password: string) => {
        setUser({...user, password: password})
    }

    const getSAFNameFromInputHandler = (f_name: string) => {
        setShipAddress({...ship_address, f_name: f_name})
        if (f_name === '') {
            setSAFNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSAFNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getSALNameFromInputHandler = (l_name: string) => {
        setShipAddress({...ship_address, l_name: l_name})
        if (l_name === '') {
            setSALNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSALNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getSAAddressFromInputHandler = (addres: string) => {
        setShipAddress({...ship_address, address: addres})
        if (addres === '') {
            setSAAddressValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSAAddressValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getSAAptFromInputHandler = (apt: string) => {
        setShipAddress({...ship_address, apt: apt})
        if (apt === '') {
            setSAAptValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSAAptValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getSACityFromInputHandler = (city: string) => {
        setShipAddress({...ship_address, city: city})
        if (city === '') {
            setSACityValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSACityValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getSACountryFromInputHandler = (country: string) => {
        setShipAddress({...ship_address, country: country})
        // if (country === '') {
        //     setSACityValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        // }else {
        //     setSACityValiObj({enableValiMsg: false, valiMsgText: ''})
        // }
    }
    const getSAPostcodeFromInputHandler = (postcode: string) => {
        setShipAddress({...ship_address, postcode: postcode})
        if (postcode === '') {
            setSAPostCodeValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSAPostCodeValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const getBAFNameFromInputHandler = (f_name: string) => {
        setBillAddress({...bill_address, f_name: f_name})
        if (f_name === '') {
            setBAFNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBAFNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBALNameFromInputHandler = (l_name: string) => {
        setBillAddress({...bill_address, l_name: l_name})
        if (l_name === '') {
            setBALNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBALNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBAAddressFromInputHandler = (address: string) => {
        setBillAddress({...bill_address, address: address})
        if (address === '') {
            setSAAddressValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setSAAddressValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBAAptFromInputHandler = (apt: string) => {
        setBillAddress({...bill_address, apt: apt})
        if (apt === '') {
            setBAAptValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBAAptValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBACityFromInputHandler = (city: string) => {
        setBillAddress({...bill_address, city: city})
        if (city === '') {
            setBACityValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBACityValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBACountryFromInputHandler = (country: string) => {
        setBillAddress({...bill_address, country: country})
        if (country === '') {
            setBACountryValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBACountryValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getBAPostcodeFromInputHandler = (postcode: string) => {
        setBillAddress({...bill_address, postcode: postcode})
        if (postcode === '') {
            setBAPostCodeValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setBAPostCodeValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const getCardNameFromInputHandler = (name: string) => {
        setPayment({...payment, name: name})
        if (name === '') {
            setPMNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setPMNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCardNumberFromInputHandler = (num: string) => {
        setPayment({...payment, number: num})
        if (num === '') {
            setPMNumValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setPMNumValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCardDateFromInputHandler = (date: string) => {
        setPayment({...payment, date: date})
        if (date === '') {
            setPMExpireValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setPMExpireValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCardCVCFromInputHandler = (cvc: string) => {
        setPayment({...payment, cvc: cvc})
        if (cvc === '') {
            setPMCVCValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setPMCVCValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const saveShippingAddressHander = () => {
        const isEmpty = Object.values(ship_address).every(x => (x === null || x === ''))
        if (isEmpty) {
            return
        }
        setCheckedShippingAddress(true)
        localStorage.setItem('sa', JSON.stringify(ship_address))
        setCookie('sa', JSON.stringify(ship_address))
    }
    const saveBillAddressHander = () => {
        const isEmpty = Object.values(bill_address).every(x => (x === null || x === ''))
        if (isEmpty) {
            return
        }
        setCheckedBillAddress(true)
        localStorage.setItem('ba', JSON.stringify(bill_address))
        setCookie('ba', JSON.stringify(bill_address))
    }
    const savePaymentHandler = () => {
        const isEmpty = Object.values(payment).every(x => (x === null || x === ''))
        if (isEmpty) {
            return
        }
        setCheckedPayment(true)
        localStorage.setItem('pm', JSON.stringify(payment))
        setCookie('pm', JSON.stringify(payment))
    }
    const updateAccountHandler = () => {
        setLogined(false)
        dispatch(logoutUser())
        removeCookie('jwt')
        router.replace('/account/login')
    }

    const updateShippindAddressHandler = () => {
        setCheckedShippingAddress(false)
    }
    const updateBillingAddressHandler = () => {
        setCheckedBillAddress(false)
    }
    const updatePaymentHandler = () => {
        setCheckedPayment(false)
    }

    const placeOrderHandler = () => {
        if (cart_products.length === 0) {
            toast.configure()
            toast.warn("Cart is empty. Please add products to bag.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }else {
            let order_id = generateID()
            dispatch(createOrder(order_id))
            localStorage.setItem('order_id', order_id)
            router.push('/shop/checkout/confirm')
        }
        
    }
    return (
        <div className="text-c_00080D bg-c_CCE7EF ttcommon_font">
            <Navbar c_name="bg-black fixed"></Navbar>
            <div className="bg-transparent h-15 w-full"></div>
            <div className="max-w-4xl overflow-y-auto relative pb-9
                            mt-16 md:mt-0
                            px-5 md:px-15" style={{ minHeight: 'calc(100vh - 96px)' }}>
                {!checkedPayment &&
                    <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                        <div className="flex items-center">
                            <span>Home</span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ml-1">Shopping Bag</span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ttcommon_font_bold ml-1">Checkout</span>
                        </div>
                    </div>
                }
                {checkedPayment &&
                    <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                        <div className="flex items-center cursor-pointer flex-wrap">
                            <span><Link href="/">Home</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4" /></span>
                            <span className="mr-1"><Link href="/shop/shoppingbag">Shopping Bag</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4" /></span>
                            <span className="mr-1"><Link href="/shop/checkout">Checkout</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4" /></span>
                            <span className="ttcommon_font_bold">Review</span>
                        </div>
                    </div>
                }

                {checkedPayment &&
                    <div className="ttcommon_font_bold text-4xl leading-36_26 mt-10">Order Review.</div>
                }

                

                {logined &&
                    <div className="mt-12_5 bg-white flex items-center py-7_5
                                    px-2.5 sm:px-7_5">
                        <div className="flex justify-center items-center bg-c_00080D rounded-full text-white leading-14_17 tracking-widest min-w-7
                                        w-7 sm:w-9
                                        h-7 sm:h-9">1</div>
                        <div className="ml-5 sm:ml-11">
                            <div className="flex items-center">
                                <div className="ttcommon_font_bold uppercase leading-24_29 tracking-widest
                                            text-lg sm:text-2xl">Login</div>
                            </div>
                            <div className="leading-14_26 items-center
                                            block sm:flex">
                                <div className="mr-7
                                                mt-3 sm:mt-0">{`${user.f_name} ${user.l_name}`}</div>
                                <div className="mr-7">{user.mobile}</div>
                                <div className="mr-7">{user.email}</div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1
                                        self-start sm:self-center">
                            <button className="ml-auto leading-14_17 uppercase underline
                                            mb-auto sm:my-auto" onClick={() => { updateAccountHandler() }}>Change</button>
                        </div>
                        
                    </div>
                }

                {/* shipping address */}
                {!checkedShippingAddress && logined &&
                    <div>
                        <div className="mt-5 bg-white flex items-center py-7_5
                                        px-2.5 sm:px-7_5">
                            <div className="flex justify-center items-center border border-c_00080D rounded-full text-black leading-14_17 tracking-widest min-w-7
                                            w-7 sm:w-9
                                            h-7 sm:h-9">2</div>
                            <div className="ttcommon_font_bold uppercase leading-24_29 tracking-widest
                                            text-lg sm:text-2xl
                                            ml-5 sm:ml-11">Shipping address</div>
                        </div>
                        <div className="mt-5">
                            <div className="items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">First Name</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSAFNameFromInputHandler} 
                                        defaultValue={ship_address.f_name}
                                        enableValiMsg={saFNameValiObj.enableValiMsg} 
                                        valiMsgText={saFNameValiObj.valiMsgText}/>
                                </div>
                                <div className="w-full sm:w-1/2
                                                mt-3 sm:mt-0
                                                ml-0 sm:ml-2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Last Name</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSALNameFromInputHandler} 
                                        defaultValue={ship_address.l_name}
                                        enableValiMsg={saLNameValiObj.enableValiMsg} 
                                        valiMsgText={saLNameValiObj.valiMsgText}/>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Address</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSAAddressFromInputHandler} 
                                        defaultValue={ship_address.address}
                                        enableValiMsg={saAddressValiObj.enableValiMsg} 
                                        valiMsgText={saAddressValiObj.valiMsgText}/>
                                </div>
                                <div className="w-full sm:w-1/2
                                                mt-3 sm:mt-0
                                                ml-0 sm:ml-2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Apt, Suite</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSAAptFromInputHandler} 
                                        defaultValue={ship_address.apt}
                                        enableValiMsg={saAptValiObj.enableValiMsg} 
                                        valiMsgText={saAptValiObj.valiMsgText}/>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">City</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSACityFromInputHandler} 
                                        defaultValue={ship_address.city}
                                        enableValiMsg={saCityValiObj.enableValiMsg} 
                                        valiMsgText={saCityValiObj.valiMsgText}/>
                                </div>
                                <div className="w-full sm:w-1/2
                                                ml-0 sm:ml-2
                                                mt-3 sm:mt-0">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Country</label>
                                    <SelectInput
                                        enable_underline={false}
                                        default_option={ship_address.country === '' ? "Please select country" : ship_address.country}
                                        option_li={['United States', 'United Kingdom']}
                                        className="bg-white"
                                        option_class="bg-white hover:bg-opacity-80"
                                        returnVal={getSACountryFromInputHandler} />
                                    <span className='text-transparent'>ddd</span>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Postal Code</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getSAPostcodeFromInputHandler} 
                                        defaultValue={ship_address.postcode}
                                        enableValiMsg={saPostCodeValiObj.enableValiMsg} 
                                        valiMsgText={saPostCodeValiObj.valiMsgText}/>
                                </div>
                                <div className="w-full sm:w-1/2
                                                ml-0 sm:ml-2">
                                    <label className="ttcommon_font_bold leading-14_26 invisible" htmlFor="">Postal Code</label>
                                    <div className="flex items-center">
                                        <input className="h-3" type="radio" id="billing_address_cb" />
                                        <label className="ml-2 leading-14_26" htmlFor="billing_address_cb">Use this address as billing address</label>
                                    </div>
                                    <span className='text-transparent'>ddd</span>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64" onClick={() => { saveShippingAddressHander() }}>Save & Continue</Button>
                                <button className="uppercase ml-7 tracking-widest underline" onClick={() => {setCheckedShippingAddress(true)}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }

                <div>
                    {checkedShippingAddress &&
                        <div className="bg-white flex items-center mt-5 py-7_5
                                        px-2.5 sm:px-7_5">
                            <div className="flex justify-center items-center bg-c_00080D rounded-full text-white leading-14_17 tracking-widest
                                            w-7 sm:w-9
                                            h-7 sm:h-9">2</div>
                            <div className="ml-5 sm:ml-11">
                                <div className="ttcommon_font_bold uppercase leading-24_29 tracking-widest
                                                text-lg sm:text-2xl">Shipping address</div>
                                <div className="leading-14_26">
                                    <div className="">{`${ship_address.f_name} ${ship_address.l_name}`}</div>
                                    <div className="">{ship_address.address}</div>
                                    <div className="">{`${ship_address.city} ${ship_address.country} ${ship_address.postcode}`}</div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1
                                        self-start sm:self-center">
                                <button className="ml-auto leading-14_17 uppercase underline
                                                mb-auto sm:my-auto" onClick={() => { updateShippindAddressHandler() }}>Change</button>
                            </div>
                            
                        </div>
                    }
                </div>

                {/* billing address */}
                {checkedShippingAddress && logined && !checkedBillAddress &&
                    <div>
                        <div className="mt-5 bg-white flex items-center py-7_5
                                        px-2.5 sm:px-7_5">
                            <div className="flex justify-center items-center border border-c_00080D rounded-full text-black leading-14_17 tracking-widest min-w-7
                                            w-7 sm:w-9
                                            h-7 sm:h-9">3</div>
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest
                                            ml-5 sm:ml-11">Billing address</div>
                        </div>
                        <div className="mt-5">
                            <div className="items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">First Name</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBAFNameFromInputHandler} 
                                        defaultValue={bill_address.f_name}
                                        enableValiMsg={baFNameValiObj.enableValiMsg} 
                                        valiMsgText={baFNameValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                w-full sm:w-1/2
                                                mt-3 sm:mt-0">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Last Name</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBALNameFromInputHandler} 
                                        defaultValue={bill_address.l_name}
                                        enableValiMsg={baLNameValiObj.enableValiMsg} 
                                        valiMsgText={baLNameValiObj.valiMsgText}/>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Address</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBAAddressFromInputHandler} 
                                        defaultValue={bill_address.address}
                                        enableValiMsg={baAddressValiObj.enableValiMsg} 
                                        valiMsgText={baAddressValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                mt-3 sm:mt-0
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Apt, Suite</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBAAptFromInputHandler} 
                                        defaultValue={bill_address.apt}
                                        enableValiMsg={baAptValiObj.enableValiMsg} 
                                        valiMsgText={baAptValiObj.valiMsgText}/>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">City</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBACityFromInputHandler} 
                                        defaultValue={bill_address.city}
                                        enableValiMsg={baCityValiObj.enableValiMsg} 
                                        valiMsgText={baCityValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                w-full sm:w-1/2
                                                mt-3 sm:mt-0">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Country</label>
                                    <SelectInput
                                        enable_underline={false}
                                        default_option={bill_address.country === '' ? "Please select country" : bill_address.country}
                                        option_li={['United States', 'United Kingdom']}
                                        className="bg-white"
                                        option_class="bg-white hover:bg-opacity-80" 
                                        returnVal={getBACountryFromInputHandler}/>
                                    <span className='text-transparent'>ddd</span>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Postal Code</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        onChange={getBAPostcodeFromInputHandler} 
                                        defaultValue={bill_address.postcode}
                                        enableValiMsg={baPostCodeValiObj.enableValiMsg} 
                                        valiMsgText={baPostCodeValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                mt-3 sm:mt-0
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26 invisible" htmlFor="">Postal Code</label>
                                    <div className="flex items-center">
                                        <input className="h-3" type="radio" id="billing_address_cb" />
                                        <label className="ml-2 leading-14_26" htmlFor="billing_address_cb">Use this address as billing address</label>
                                    </div>
                                    <span className='text-transparent'>ddd</span>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64" onClick={() => { saveBillAddressHander() }}>Save & Continue</Button>
                                <button className="uppercase ml-7 tracking-widest underline" onClick={() => { setCheckedBillAddress(true) }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                {checkedBillAddress &&
                    <div className="bg-white flex items-center mt-5 py-7_5
                                    px-2.5 sm:px-7_5">
                        <div className="flex justify-center items-center bg-c_00080D rounded-full text-white leading-14_17 tracking-widest min-w-7
                                        w-7 sm:w-9
                                        h-7 sm:h-9
                                        ">3</div>
                        <div className="ml-5 sm:ml-11">
                            <div className="ttcommon_font_bold uppercase leading-24_29 tracking-widest
                                            text-lg sm:text-2xl">Billing Address</div>
                            <div className="leading-14_26">
                                <div className="">{`${bill_address.f_name} ${bill_address.l_name}`}</div>
                                <div className="">{bill_address.address}</div>
                                <div className="">{`${bill_address.city} ${bill_address.country} ${bill_address.postcode}`}</div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1
                                        self-start sm:self-center">
                            <button className="ml-auto leading-14_17 uppercase underline
                                                mb-auto sm:my-auto" onClick={() => { updateBillingAddressHandler() }}>Change</button>
                        </div>
                    </div>
                }

                {/* payment method */}
                {!checkedPayment && logined && checkedShippingAddress && checkedBillAddress &&
                    <div>
                        <div className="mt-5 bg-white flex items-center py-7_5
                                        px-2.5 sm:px-7_5">
                            <div className="flex justify-center items-center border border-c_00080D rounded-full text-black leading-14_17 tracking-widest min-w-7
                                            w-7 sm:w-9
                                            h-7 sm:h-9">4</div>
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest
                                            ml-5 sm:ml-11">Payment Method</div>
                        </div>
                        <div className="mt-5">
                            <div className="items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Name on Card</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        placeholder="Name on Card" 
                                        onChange={getCardNameFromInputHandler} 
                                        defaultValue={payment.name}
                                        enableValiMsg={pmNameValiObj.enableValiMsg} 
                                        valiMsgText={pmNameValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                mt-3 sm:mt-0
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Card Number</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        placeholder="1234 5678 1234 5678 0000" 
                                        onChange={getCardNumberFromInputHandler} 
                                        defaultValue={payment.number}
                                        enableValiMsg={pmNumValiObj.enableValiMsg} 
                                        valiMsgText={pmNumValiObj.valiMsgText}/>
                                </div>
                            </div>
                            <div className="mt-3 items-center
                                            block sm:flex">
                                <div className="mr-2
                                                w-full sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">Expiration Date</label>
                                    <Input 
                                        className='bg-white' 
                                        type="text" 
                                        placeholder="(mm/yyyy)" 
                                        onChange={getCardDateFromInputHandler} 
                                        defaultValue={payment.date}
                                        enableValiMsg={pmExpireValiObj.enableValiMsg} 
                                        valiMsgText={pmExpireValiObj.valiMsgText}/>
                                </div>
                                <div className="ml-0 sm:ml-2
                                                mt-3 sm:mt-0
                                                w-11/12 sm:w-1/2">
                                    <label className="ttcommon_font_bold leading-14_26" htmlFor="">CVC</label>
                                    <div className="relative">
                                        <Input 
                                            type="text" 
                                            placeholder="xxx" 
                                            onChange={getCardCVCFromInputHandler} 
                                            defaultValue={payment.cvc}
                                            enableValiMsg={pmCVCValiObj.enableValiMsg} 
                                            valiMsgText={pmCVCValiObj.valiMsgText}/>
                                        <div className="absolute top-0 -right-6 h-full flex flex-col">
                                            <button className="my-auto text-white w-4 h-4 rounded-full bg-c_00080D flex items-center justify-center">?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64" onClick={() => savePaymentHandler()}>Save & Continue</Button>
                                <button className="uppercase ml-7 tracking-widest underline" onClick={() => {setCheckedPayment(true)}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                {checkedPayment && logined && checkedShippingAddress && checkedBillAddress &&
                    <div>
                        <div className="bg-white flex items-center mt-5 py-7_5
                                        px-2.5 sm:px-7_5">
                            <div className="flex justify-center items-center bg-c_00080D rounded-full text-white leading-14_17 tracking-widest min-w-7
                                            w-7 sm:w-9
                                            h-7 sm:h-9">4</div>
                            <div className="ml-5 sm:ml-11">
                                <div className="ttcommon_font_bold uppercase leading-24_29 tracking-widest
                                                text-lg sm:text-2xl">Payment Method</div>
                                <div className="leading-14_26">
                                    <div className="">{`${payment.name}`}</div>
                                    <div className="">{`${payment.number}`}</div>
                                    <div className="">{`Expires ${payment.date} CVC: ${payment.cvc}`}</div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1
                                        self-start sm:self-center">
                                <button className="ml-auto leading-14_17 uppercase underline
                                                    mb-auto sm:my-auto" onClick={() => { updatePaymentHandler() }}>Change</button>
                            </div>
                            
                        </div>
                        <div className="mt-7 flex items-center">
                            <Button className="h-11 w-64" onClick={() => {placeOrderHandler()}}>Place Order</Button>
                            <button className="uppercase ml-7 tracking-widest underline" onClick={() => {router.back()}}>Cancel</button>
                        </div>
                    </div>
                }

            </div>
            {/* <div className="fixed top-15 right-0">
                <SideCart />
            </div> */}
        </div>

    );
}

export default withRouter(Checkout)