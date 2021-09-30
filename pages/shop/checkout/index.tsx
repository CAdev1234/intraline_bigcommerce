import { Navbar } from '@components/common'
import { ChevronRight } from '@components/icons';
import Button from '@components/mycp/Button'
import SelectInput from '@components/mycp/SelectInput';
import Link from '@components/ui/Link';
import { useState } from 'react';

export default function Checkout() {
    const [checkedAuth, setCheckedAuth] = useState(true)
    const [checkedShippingAddress, setCheckShippingAddress] = useState(false)
    const [checkedBillAddress, setCheckedBillAddress] = useState(false)
    const [checkedPayment, setCheckedPayment] = useState(false)
    return (
        <div className="ttcommon_font text-c_00080D bg-c_CCE7EF h-screen">
            <Navbar c_name="bg-black fixed"></Navbar>
            <div className="bg-transparent h-15 w-full"></div>
            <div className="px-15 max-w-4xl overflow-y-auto relative mb-9" style={{height: 'calc(100vh - 96px)'}}>
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shopping Bag</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Checkout</span>
                    </div>
                </div>
                {/* auth part */}
                {checkedAuth &&
                    <div className="mt-12_5 bg-white p-7 flex items-center">
                        <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">1</div>
                        <div className="ml-11">
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Login</div>
                            <div className="ttcommon_font_thin text-sm leading-14_26 flex items-center">
                                <div className="">Sameer Haque</div>
                                <div className="ml-7">+808 445 4454</div>
                                <div className="ml-7">sameerhaque@sameer.com</div>
                            </div>
                        </div>
                        <div className="ml-auto text-sm leading-14_17 uppercase underline">Change</div>
                    </div>
                }

                {/* shipping address */}
                {!checkedShippingAddress && 
                    <div>
                        <div className="mt-5 bg-white p-7 flex items-center">
                            <div className="flex justify-center items-center border border-c_00080D w-9 h-9 rounded-full text-black text-sm leading-14_17 tracking-widest">2</div>
                            <div className="ml-11 ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Shipping address</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">First Name</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="Sameer"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Last Name</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="Haque"/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Address</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="234 HK, Avenue Lake City, Utah"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Apt, Suite</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="23H UN3"/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">City</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="Lake City, Utah"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Country</label>
                                    <SelectInput 
                                        option_li={['United States', 'United Kingdom']} 
                                        className="bg-white"
                                        option_class="bg-white"/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Postal Code</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="Sameer"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26 invisible" htmlFor="">Postal Code</label>
                                    <div className="flex items-center">
                                        <input className="h-3" type="radio" id="billing_address_cb"/>
                                        <label className="ml-2 text-sm leading-14_26" htmlFor="billing_address_cb">Use this address as billing address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Button className="h-11 w-64 text-sm" onClick={() => {
                                    setCheckShippingAddress(true)
                                    setCheckedBillAddress(true)
                                }}>Save & Continue</Button>
                                <button className="uppercase ml-7 text-sm tracking-widest underline">Cancel</button>
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
                                    <div className="">Sameer Haque</div>
                                    <div className="">234 HK, Avenue Lake City, Utah 23H UN3</div>
                                    <div className="">Lake City, Utah, United States 230 654</div>
                                </div>
                            </div>
                            <div className="ml-auto text-sm leading-14_17 uppercase underline">Change</div>
                        </div>
                    }
                </div>

                {/* billing address */}
                {checkedBillAddress && 
                    <div className="bg-white p-7 flex items-center mt-5">
                        <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">3</div>
                        <div className="ml-11">
                            <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Billing Address</div>
                            <div className="ttcommon_font_thin text-sm leading-14_26">
                                <div className="">Sameer Haque</div>
                                <div className="">234 HK, Avenue Lake City, Utah 23H UN3</div>
                                <div className="">Lake City, Utah, United States 230 654</div>
                            </div>
                        </div>
                        <div className="ml-auto text-sm leading-14_17 uppercase underline">Change</div>
                    </div>
                }

                {/* payment method */}
                {!checkedPayment && checkedAuth && checkedShippingAddress && checkedBillAddress && 
                    <div>
                        <div className="mt-5 bg-white p-7 flex items-center">
                            <div className="flex justify-center items-center border border-c_00080D w-9 h-9 rounded-full text-black text-sm leading-14_17 tracking-widest">4</div>
                            <div className="ml-11 ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Payment Method</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Name on Card</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="Sameer Haque"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Card Number</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" value="1234 5678 1234 5678 0000"/>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center">
                                <div className="w-1/2 mr-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">Expiration Date</label>
                                    <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="(mm/yyyy)"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="ttcommon_font_bold text-sm leading-14_26" htmlFor="">CVC</label>
                                    <div className="relative">
                                        <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="xxx"/>
                                        <div className="absolute top-0 -right-6 h-full flex flex-col">
                                            <button className="my-auto text-white text-10px w-4 h-4 rounded-full bg-c_00080D flex items-center justify-center">?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 flex items-center">
                                <Link href="/shop/checkout/review">
                                    <Button className="h-11 w-64 text-sm" onClick={() => setCheckedPayment(true)}>Save & Continue</Button>
                                </Link>
                                <button className="uppercase ml-7 text-sm tracking-widest underline">Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
        
    );
}

