import { Navbar } from '@components/common'
import { ChevronRight } from '@components/icons';
import Button from '@components/mycp/Button'
import SelectInput from '@components/mycp/SelectInput';
import Link from '@components/ui/Link';
import { useState } from 'react';

export default function CheckoutReview() {
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
                        <span className="ml-1">Checkout</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Review</span>
                    </div>
                </div>
                {/* auth part */}
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
                    <button className="ml-auto text-sm leading-14_17 uppercase underline">Change</button>
                </div>

                {/* shipping address */}
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
                    <button className="ml-auto text-sm leading-14_17 uppercase underline">Change</button>
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
                    <button className="ml-auto text-sm leading-14_17 uppercase underline">Change</button>
                </div>

                {/* payment method */}
                <div className="bg-white p-7 flex items-center mt-5">
                    <div className="flex justify-center items-center bg-c_00080D w-9 h-9 rounded-full text-white text-sm leading-14_17 tracking-widest">4</div>
                    <div className="ml-11">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 tracking-widest">Payment Method</div>
                        <div className="ttcommon_font_thin text-sm leading-14_26">
                            <div className="">Sameer Haque</div>
                            <div className="">1234 5678 1234 5678 0000</div>
                            <div className="">Expires 01/24 CVC: 123</div>
                        </div>
                    </div>
                    <button className="ml-auto text-sm leading-14_17 uppercase underline">Change</button>
                </div>

                <div className="mt-7 flex items-center">
                    <Link href="/shop/checkout/confirm">
                        <Button className="h-11 w-64 text-sm">Place Order</Button>
                    </Link>
                    <button className="uppercase ml-7 text-sm tracking-widest underline">Cancel</button>
                </div>
            </div>
        </div>
        
    );
}

