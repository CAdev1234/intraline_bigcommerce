import { Navbar } from '@components/common'
import { ChevronRight } from '@components/icons';
import { Button, Input, SelectInput } from '@components/mycp'
import SideCart from '@components/mycp/SideCart';
import Link from '@components/ui/Link';
import { loginAuth } from '@utils/auth';
import { useAppDispatch, useAppSelector } from '@utils/redux/hooks';
import { createOrder } from '@utils/redux/slices/cartSlice';
import { loginUser, logoutUser } from '@utils/redux/slices/userSlice';
import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie, removeCookie, setCookie } from 'utils/cookie'


function Checkout() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [user, setUser] = useState({email: '', password: '', f_name: '', l_name: '', mobile: ''})
    
    const [logined, setLogined] = useState(false)
    const [loginResult, setLoginResult] = useState(true)
    const [enableRegister, setEnableRegister] = useState(false)
    const [enableLoginForm, setEnableLoginForm] = useState(false)

    const [checkedShippingAddress, setCheckedShippingAddress] = useState(false)
    const [ship_address, setShipAddress] = useState({f_name: '', l_name: '', address: '', apt: '', city: '', country: '', postcode: ''})
    

    const [checkedBillAddress, setCheckedBillAddress] = useState(false)
    const [bill_address, setBillAddress] = useState({f_name: '', l_name: '', address: '', city: '', apt: '', country: '', postcode: ''})
    

    const [checkedPayment, setCheckedPayment] = useState(false)
    const [payment, setPayment] = useState({name: '', number: '', date: '', cvc: ''})

    

    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
        let user_info = JSON.parse(localStorage.getItem('user') as string)
        setUser(user_info)

        if (localStorage.getItem('sa')) {
            let shipping_address = JSON.parse(localStorage.getItem('sa') as string)
            setShipAddress(shipping_address)
        }

        if (localStorage.getItem('ba')) {
            let bill_address = JSON.parse(localStorage.getItem('ba') as string)
            setBillAddress(bill_address)
        }

        if (localStorage.getItem('pm')) {
            let payment_info = JSON.parse(localStorage.getItem('pm') as string)
            setPayment(payment_info)
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
    }
    const getSALNameFromInputHandler = (l_name: string) => {
        setShipAddress({...ship_address, l_name: l_name})
    }
    const getSAAddressFromInputHandler = (addres: string) => {
        setShipAddress({...ship_address, address: addres})
    }
    const getSAAptFromInputHandler = (apt: string) => {
        setShipAddress({...ship_address, apt: apt})
    }
    const getSACityFromInputHandler = (city: string) => {
        setShipAddress({...ship_address, city: city})
    }
    const getSACountryFromInputHandler = (country: string) => {
        setShipAddress({...ship_address, country: country})
    }
    const getSAPostcodeFromInputHandler = (postcode: string) => {
        setShipAddress({...ship_address, postcode: postcode})
    }

    const getBAFNameFromInputHandler = (f_name: string) => {
        setBillAddress({...bill_address, f_name: f_name})
    }
    const getBALNameFromInputHandler = (l_name: string) => {
        setBillAddress({...bill_address, l_name: l_name})
    }
    const getBAAddressFromInputHandler = (addres: string) => {
        setBillAddress({...bill_address, address: addres})
    }
    const getBAAptFromInputHandler = (apt: string) => {
        setBillAddress({...bill_address, apt: apt})
    }
    const getBACityFromInputHandler = (city: string) => {
        setBillAddress({...bill_address, city: city})
    }
    const getBACountryFromInputHandler = (country: string) => {
        setBillAddress({...bill_address, country: country})
    }
    const getBAPostcodeFromInputHandler = (postcode: string) => {
        setBillAddress({...bill_address, postcode: postcode})
    }

    const getCardNameFromInputHandler = (name: string) => {
        setPayment({...payment, name: name})
    }
    const getCardNumberFromInputHandler = (number: string) => {
        setPayment({...payment, number: number})
    }
    const getCardDateFromInputHandler = (date: string) => {
        setPayment({...payment, date: date})
    }
    const getCardCVCFromInputHandler = (cvc: string) => {
        setPayment({...payment, cvc: cvc})
    }

    const saveShippingAddressHander = () => {
        setCheckedShippingAddress(true)
        localStorage.setItem('sa', JSON.stringify(ship_address))
        setCookie('sa', JSON.stringify(ship_address))
    }
    const saveBillAddressHander = () => {
        setCheckedBillAddress(true)
        localStorage.setItem('ba', JSON.stringify(bill_address))
        setCookie('ba', JSON.stringify(bill_address))
    }
    const savePaymentHandler = () => {
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
        dispatch(createOrder())
        router.push('/shop/checkout/confirm')
    }
    return (
        <div className="ttcommon_font text-c_00080D bg-c_CCE7EF h-screen">
            <Navbar c_name="bg-black fixed"></Navbar>
            <div className="bg-transparent h-15 w-full"></div>
            <div className="px-15 max-w-4xl overflow-y-auto relative mb-9" style={{ height: 'calc(100vh - 96px)' }}>
                {!checkedPayment &&
                    <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
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
                    <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                        <div className="flex items-center cursor-pointer">
                            <span><Link href="/">Home</Link></span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ml-1"><Link href="/shop/shoppingbag">Shopping Bag</Link></span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ml-1"><Link href="/shop/checkout">Checkout</Link></span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ttcommon_font_bold ml-1">Review</span>
                        </div>
                    </div>
                }

                {checkedPayment &&
                    <div className="ttcommon_font_bold text-4xl leading-36_26 mt-10">Order Review.</div>
                }

                {/* auth part */}
                {/* {!logined && !enableRegister &&
                    <div>
                        <div className="bg-c_CCE7EF flex flex-col ttcommon_font">
                            <div className="my-52 mx-auto 
                                        w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                                <div className="leading-36_26 font-bold text-4xl text-left">Login to Your Account.</div>
                                <div className="mt-10">
                                    {!loginResult && 
                                        <div className="mb-5 w-full py-3 px-7_5 rounded-lg bg-c_F4511E bg-opacity-30 text-c_F4511E">Wrong email and password. If you don't have account, please sign up.</div>
                                    }
                                    <Input type="text" placeholder="Email Address" onChange={getEmailFromInputHandler} />
                                </div>
                                <div className="mt-5 flex items-center">
                                    <div className="w-full">
                                        <Input type="password" placeholder="Password" onChange={getPasswordFromInputHandler} />
                                    </div>
                                    <div className="-ml-40">
                                        <Link href="/">
                                            <span className="text-c_8D97BC">Forgot Your Password?</span>
                                        </Link>
                                    </div>
                                </div>
                                <Button className="mt-8 w-full h-11 text-sm" onClick={() => { loginSubmitHandler() }}>Login</Button>
                                <div className="text-center mt-5">
                                    <button className="leading-36_26 text-base underline" onClick={() => { setEnableRegister(true) }}>Don't have an account?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                } */}

                {/* {!logined && enableRegister &&
                    <div className="my-25 mx-auto
                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                        <div className="leading-36_26 font-bold text-4xl text-left">Create Your Account.</div>
                        <Input className="mt-10" type="text" placeholder="Email Address" />
                        <Input className="mt-5" type="text" placeholder="First Name" />
                        <Input className="mt-5" type="text" placeholder="Last Name" />
                        <Input className="mt-5" type="number" placeholder="Phone Number" />
                        <Input className="mt-5" type="password" placeholder="Password" />
                        <Input className="mt-5" type="password" placeholder="Confirm Password" />

                        <Button className="mt-8 w-full h-11 text-sm">Register</Button>
                        <div className="text-center mt-5">
                            <button className="leading-36_26 text-base underline" onClick={() => { setEnableRegister(false) }}>Already have an account?</button>
                        </div>
                    </div>
                } */}

                {logined &&
                    <div className="mt-12_5 bg-white p-7 flex items-center">
                        <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">1</div>
                        <div className="ml-11">
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Login</div>
                            <div className="ttcommon_font_thin text-sm leading-14_26 flex items-center">
                                <div className="">{`${user.f_name} ${user.l_name}`}</div>
                                <div className="ml-7">{user.mobile}</div>
                                <div className="ml-7">{user.email}</div>
                            </div>
                        </div>
                        <button className="ml-auto text-sm leading-14_17 uppercase underline" onClick={() => { updateAccountHandler() }}>Change</button>
                    </div>
                }

                {/* shipping address */}
                {!checkedShippingAddress && logined &&
                    <div>
                        <div className="mt-5 bg-white p-7 flex items-center">
                            <div className="flex justify-center items-center border border-c_00080D w-9 h-9 rounded-full text-black text-sm leading-14_17 tracking-widest">2</div>
                            <div className="ml-11 ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Shipping address</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">First Name</label>
                                    <Input type="text" onChange={getSAFNameFromInputHandler} value={ship_address.f_name}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Last Name</label>
                                    <Input type="text" onChange={getSALNameFromInputHandler} value={ship_address.l_name}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Address</label>
                                    <Input type="text" onChange={getSAAddressFromInputHandler} value={ship_address.address}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Apt, Suite</label>
                                    <Input type="text" onChange={getSAAptFromInputHandler} value={ship_address.apt}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">City</label>
                                    <Input type="text" onChange={getSACityFromInputHandler} value={ship_address.city}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Country</label>
                                    <SelectInput
                                        enable_underline={false}
                                        default_option={ship_address.country === '' ? "Please select country" : ship_address.country}
                                        option_li={['United States', 'United Kingdom']}
                                        className="bg-white"
                                        option_class="bg-white hover:bg-opacity-80"
                                        returnVal={getSACountryFromInputHandler} />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Postal Code</label>
                                    <Input type="text" onChange={getSAPostcodeFromInputHandler} value={ship_address.postcode}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26 invisible" htmlFor="">Postal Code</label>
                                    <div className="flex items-center">
                                        <input className="h-3" type="radio" id="billing_address_cb" />
                                        <label className="ml-2 text-sm leading-14_26" htmlFor="billing_address_cb">Use this address as billing address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64 text-sm" onClick={() => { saveShippingAddressHander() }}>Save & Continue</Button>
                                <button className="uppercase ml-7 text-sm tracking-widest underline" onClick={() => { }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }

                <div>
                    {checkedShippingAddress &&
                        <div className="bg-white p-7 flex items-center mt-5">
                            <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">2</div>
                            <div className="ml-11">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Shipping address</div>
                                <div className="ttcommon_font_thin text-sm leading-14_26">
                                    <div className="">{`${ship_address.f_name} ${ship_address.l_name}`}</div>
                                    <div className="">{ship_address.address}</div>
                                    <div className="">{`${ship_address.city} ${ship_address.country} ${ship_address.postcode}`}</div>
                                </div>
                            </div>
                            <button className="ml-auto text-sm leading-14_17 uppercase underline" onClick={() => { updateShippindAddressHandler() }}>Change</button>
                        </div>
                    }
                </div>

                {/* billing address */}
                {checkedShippingAddress && logined && !checkedBillAddress &&
                    <div>
                        <div className="mt-5 bg-white p-7 flex items-center">
                            <div className="flex justify-center items-center border border-c_00080D w-9 h-9 rounded-full text-black text-sm leading-14_17 tracking-widest">3</div>
                            <div className="ml-11 ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Billing address</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">First Name</label>
                                    <Input type="text" onChange={getBAFNameFromInputHandler} value={bill_address.f_name}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Last Name</label>
                                    <Input type="text" onChange={getBALNameFromInputHandler} value={bill_address.l_name}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Address</label>
                                    <Input type="text" onChange={getBAAddressFromInputHandler} value={bill_address.address}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Apt, Suite</label>
                                    <Input type="text" onChange={getBAAptFromInputHandler} value={bill_address.apt}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">City</label>
                                    <Input type="text" onChange={getBACityFromInputHandler} value={bill_address.city}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Country</label>
                                    <SelectInput
                                        enable_underline={false}
                                        default_option={bill_address.country === '' ? "Please select country" : bill_address.country}
                                        option_li={['United States', 'United Kingdom']}
                                        className="bg-white"
                                        option_class="bg-white hover:bg-opacity-80" 
                                        returnVal={getBACountryFromInputHandler}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Postal Code</label>
                                    <Input type="text" onChange={getBAPostcodeFromInputHandler} value={bill_address.postcode}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26 invisible" htmlFor="">Postal Code</label>
                                    <div className="flex items-center">
                                        <input className="h-3" type="radio" id="billing_address_cb" />
                                        <label className="ml-2 text-sm leading-14_26" htmlFor="billing_address_cb">Use this address as billing address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64 text-sm" onClick={() => { saveBillAddressHander() }}>Save & Continue</Button>
                                <button className="uppercase ml-7 text-sm tracking-widest underline" onClick={() => { updateBillingAddressHandler() }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                {checkedBillAddress &&
                    <div className="bg-white p-7 flex items-center mt-5">
                        <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">3</div>
                        <div className="ml-11">
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Billing Address</div>
                            <div className="ttcommon_font_thin text-sm leading-14_26">
                                <div className="">{`${bill_address.f_name} ${bill_address.l_name}`}</div>
                                <div className="">{bill_address.address}</div>
                                <div className="">{`${bill_address.city} ${bill_address.country} ${bill_address.postcode}`}</div>
                            </div>
                        </div>
                        <button className="ml-auto text-sm leading-14_17 uppercase underline" onClick={() => { updateBillingAddressHandler() }}>Change</button>
                    </div>
                }

                {/* payment method */}
                {!checkedPayment && logined && checkedShippingAddress && checkedBillAddress &&
                    <div>
                        <div className="mt-5 bg-white p-7 flex items-center">
                            <div className="flex justify-center items-center border border-c_00080D w-9 h-9 rounded-full text-black text-sm leading-14_17 tracking-widest">4</div>
                            <div className="ml-11 ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Payment Method</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Name on Card</label>
                                    <Input type="text" placeholder="Name on Card" onChange={getCardNameFromInputHandler} value={payment.name}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Card Number</label>
                                    <Input type="text" placeholder="1234 5678 1234 5678 0000" onChange={getCardNumberFromInputHandler} value={payment.number}/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Expiration Date</label>
                                    <Input type="text" placeholder="(mm/yyyy)" onChange={getCardDateFromInputHandler} value={payment.date}/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">CVC</label>
                                    <div className="relative">
                                        <Input type="text" placeholder="xxx" onChange={getCardCVCFromInputHandler} value={payment.cvc}/>
                                        <div className="absolute top-0 -right-6 h-full flex flex-col">
                                            <button className="my-auto text-white text-10px w-4 h-4 rounded-full bg-c_00080D flex items-center justify-center">?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64 text-sm" onClick={() => savePaymentHandler()}>Save & Continue</Button>
                                <button className="uppercase ml-7 text-sm tracking-widest underline">Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                {checkedPayment && logined && checkedShippingAddress && checkedBillAddress &&
                    <div>
                        <div className="bg-white p-7 flex items-center mt-5">
                            <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">4</div>
                            <div className="ml-11">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Payment Method</div>
                                <div className="ttcommon_font_thin text-sm leading-14_26">
                                    <div className="">{`${payment.name}`}</div>
                                    <div className="">{`${payment.number}`}</div>
                                    <div className="">{`Expires ${payment.date} CVC: ${payment.cvc}`}</div>
                                </div>
                            </div>
                            <button className="ml-auto text-sm leading-14_17 uppercase underline" onClick={() => { updatePaymentHandler() }}>Change</button>
                        </div>
                        <div className="mt-7 flex items-center">
                            <Button className="h-11 w-64 text-sm" onClick={() => {placeOrderHandler()}}>Place Order</Button>
                            <button className="uppercase ml-7 text-sm tracking-widest underline">Cancel</button>
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