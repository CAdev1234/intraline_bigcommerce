import { Layout } from "@components/common"
import { Check, ChevronRight } from "@components/icons"
import Button from '@components/mycp/Button'
import Link from "@components/ui/Link"

export default function CheckoutConfirm() {
    return (
        <div className="ttcommon_font_thin text-c_00080D">
            <div className="bg-transparent h-15 w-full"></div>
            <div className="items-center w-full h-full
                            block md:flex">
                <div className="bg-c_CCE7EF
                                px-5 md:px-15
                                w-full md:w-1/2
                                pt-16 md:pt-0
                                pb-15 md:pb-40">
                    <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                        <div className="flex items-center cursor-pointer flex-wrap">
                            <span className="ttcommon_font mr-1"><Link href="/">Home</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4" /></span>
                            <span className="ttcommon_font mr-1"><Link href="/shop/shoppingbag">Shopping Bag</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font mr-1"><Link href="/shop/checkout">Checkout</Link></span>
                            <span className="mr-1"><ChevronRight className="w-4"/></span>
                            <span className="ttcommon_font_bold"><Link href="/shop/checkout/confirm">Confirmation</Link></span>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-22_5">
                        <div className="leading-none lg:leading-200_160
                                        text-64px md:text-120px lg:text-200px">Thank</div>
                        <div className="ttcommon_font_bold
                                        leading-none lg:leading-200_160
                                        text-64px md:text-120px lg:text-200px">You.</div>
                    </div>
                    <div className="text-3xl leading-36_48
                                    mt-5 md:mt-10">Your order has been confirmed.</div>
                    <div className="mt-5 leading-14_26">Your order will be processed and shipped soon. You will receive an email with all the details. We are glad you are part of Intraline. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div>
                <div className="flex-1 flex flex-col h-full bg-white
                                px-5 md:px-0">
                    <div className="my-auto mx-auto text-center">
                        <div className="w-12_5 h-12_5 mx-auto rounded-full bg-c_52B5D3 text-white items-center justify-center
                                        hidden md:flex">
                            <Check />
                        </div>
                        <div className="ttcommon_font_bold leading-14_17
                                        mt-15 md:mt-7_5
                                        text-2xl md:text-4xl">Order Successfully Placed.</div>
                        <div className="mt-5 leading-36_48
                                        text-2xl md:text-4xl">Your order Number: 1234567890</div>
                        <div className="max-w-sm mx-auto
                                        mt-5 md:mt-2.5
                                        text-sm md:text-base">
                            If you have any questions about your order, you can emai us at <span className="ttcommon_font_bold">info@intraline.com</span> or call us at <span className="ttcommon_font_bold">+1 (778) 738-0351</span>.
                        </div>
                        <div className="mt-10
                                        mb-15 md:mb-0">
                            <Link href="/account/myaccount">
                                <Button className="h-11 w-72 mx-auto">View your orders</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
CheckoutConfirm.Layout = Layout