import { Layout } from "@components/common"
import { Check, ChevronRight } from "@components/icons"
import Button from '@components/mycp/Button'

export default function CheckoutConfirm() {
    return (
        <div className="ttcommon_font_thin text-c_00080D">
            <div className="bg-transparent h-15 w-full"></div>
            <div className="flex items-center w-full h-full">
                <div className="w-1/2 px-15 pb-40 bg-c_CCE7EF">
                    <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                        <div className="flex items-center">
                            <span className="ttcommon_font">Home</span>
                            <span className="ml-1"><ChevronRight className="w-4" /></span>
                            <span className="ttcommon_font ml-1">Shopping Bag</span>
                            <span className="ml-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font ml-1">Checkout</span>
                            <span className="ml-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font_bold ml-1">Confirmation</span>
                        </div>
                    </div>
                    <div className="mt-22_5">
                        <div className="text-200px leading-200_160">Thank</div>
                        <div className="ttcommon_font_bold text-200px leading-200_160">You.</div>
                    </div>
                    <div className="mt-10 text-3xl leading-36_48">Your order has been confirmed.</div>
                    <div className="mt-5 text-sm leading-14_26">Your order will be processed and shipped soon. You will receive an email with all the details. We are glad you are part of Intraline. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div>
                <div className="w-1/2 flex flex-col h-full bg-white">
                    <div className="my-auto mx-auto text-center">
                        <div className="w-12_5 h-12_5 mx-auto rounded-full bg-c_52B5D3 text-white flex items-center justify-center">
                            <Check />
                        </div>
                        <div className="ttcommon_font_bold mt-7_5 text-4xl leading-36_26">Order Successfully Placed.</div>
                        <div className="mt-5 text-4xl leading-36_48">Your order Number: 1234567890</div>
                        <div className="mt-2.5 max-w-sm mx-auto">
                            If you have any questions about your order, you can emai us at <span className="ttcommon_font_bold">info@intraline.com</span> or call us at <span className="ttcommon_font_bold">+1 (778) 738-0351</span>.
                        </div>
                        <div className="mt-10">
                            <Button className="h-11 w-72 text-sm mx-auto">View your orders</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
CheckoutConfirm.Layout = Layout