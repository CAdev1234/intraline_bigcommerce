import { Navbar } from '@components/common'
import Button from '@components/mycp/Button'

export default function Checkout() {
    return (
        <div className="bg-c_CCE7EF h-screen">
            <Navbar c_name="bg-black sticky"></Navbar>
            <div className="px-15 pt-44 max-w-4xl overflow-y-auto h-screen">
                
                {/* auth part */}
                <div className="bg-white p-7 flex items-center">
                    <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">1</div>
                    <div className="ml-11">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Login</div>
                        <div className="ttcommon_font_thin text-sm leading-14_26 flex items-center">
                            <div className="">Sameer Haque</div>
                            <div className="ml-7">+808 445 4454</div>
                            <div className="ml-7">sameerhaque@sameer.com</div>
                        </div>
                    </div>
                    <div className="ml-auto text-sm leading-14_17 uppercase">Change</div>
                </div>

                {/* shipping address */}
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
                                <select className="h-11 border-none bg-white w-full pl-5 py-2">
                                    <option value="United States">United States</option>
                                </select>
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
                            <Button className="h-11 w-64">Save & Continue</Button>
                            <button className="uppercase ml-7 text-sm tracking-widest">Cancel</button>
                        </div>
                    </div>
                
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
                        <div className="ml-auto text-sm leading-14_17 uppercase">Change</div>
                    </div>
                </div>

                {/* billing address */}
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
                    <div className="ml-auto text-sm leading-14_17 uppercase">Change</div>
                </div>

                {/* payment method */}
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
                                <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="xxx"/>
                            </div>
                        </div>
                        <div className="mt-7 flex items-center">
                            <Button className="h-11 w-64">Save & Continue</Button>
                            <button className="uppercase ml-7 text-sm tracking-widest">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

