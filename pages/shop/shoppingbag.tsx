import { Layout } from "@components/common"
import { ChevronRight, Cross } from "@components/icons"
import Link from "@components/ui/Link"
import Button from '@components/mycp/Button'

export default function ShoppingBag() {
    const bag_product_li = [
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 1,
            price: '$100.00',
            img: "/assets/img/m2plus.png",
        },
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 2,
            price: '$100.00',
            img: "/assets/img/lifting-1-1.png",
        },
    ]
    return (
        <div className="ttcommon_font bg-white px-15">
            <div className="bg-transparent h-15 w-full"></div>
            <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                <div className="flex items-center">
                    <span>Home</span>
                    <span className="ml-1"><ChevronRight className="w-4"/></span>
                    <span className="ttcommon_font_bold ml-1">Shopping Bag</span>
                </div>
            </div>
            <div className="ttcommon_font_thin mt-10 text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag </span>(3)</div>
            <div className="flex mt-7_5 items-start pb-15">
                <div className=" w-8/12">
                    <div className="h-0.5 w-full bg-c_00080D"></div>
                    <div className="mt-7">
                        {bag_product_li.map((item, index) => {
                            return <div className="flex items-center mb-5" key={`bag_item_${index}`}>
                                        <div className="w-24 h-32 px-7 py-5 bg-c_F5DBDD">
                                            <img className="w-full" src={item.img} alt="" />
                                        </div>
                                        <div className="ml-5 text-sm leading-14_26">
                                            <div className="">{item.shop_name}</div>
                                            <div className="ttcommon_font_bold">{item.product_name}</div>
                                        </div>
                                        <div className="ttcommon_font_bold mx-auto tracking-widest text-sm leading-14_17">{item.price}</div>
                                        <div className="border border-c_00080D h-11 w-24 flex items-center mx-auto">
                                            <button className="mx-auto">-</button>
                                            <div className="mx-auto">{item.amount}</div>
                                            <button className="mx-auto">+</button>
                                        </div>
                                        <div className="ml-auto">
                                            <Cross />
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div className=" bg-c_F7F7F7 w-full p-7 flex items-center mt-44">
                        <div className="text-sm leading-14_26">
                            <div className="ttcommon_font_bold">Free Shipping</div>
                            <div>Free standard shipping when you spend $500+. <Link href="/"><span className="underline">Details.</span></Link></div>
                        </div>
                        <div className="text-sm leading-14_26 ml-auto">
                            <div className="ttcommon_font_bold">Secure Payment</div>
                            <div>We accept most credit cards, Paypal, American Express. <Link href="/"><span className="underline">Details.</span></Link></div>
                        </div>
                    </div>
                </div>
                <div className="ml-15 flex-1 bg-c_F7F7F7 p-7 divide-y divide-c_00080D">
                    <div className="pb-7">
                        <div className="ttcommon_font_bold uppercase tracking-widest text-2xl leading-24_29">Order Summary</div>
                        <div className="flex items-center tracking-widest text-sm leading-14_17 mt-8">
                            <div className="uppercase">Subtotal:</div>
                            <div className="ttcommon_font_bold ml-auto">$300.00</div>
                        </div>
                        <div className="flex items-center tracking-widest text-sm leading-14_17 mt-5">
                            <div className="uppercase">Shipping Estimate:</div>
                            <div className="ttcommon_font_bold ml-auto">$30.00</div>
                        </div>
                        <div className="ttcommon_font_thin mt-2 text-sm leading-14_26">Free if you add $200.00 to your bag.</div>
                    </div>
                    <div className="pt-7">
                        <div className="flex items-center text-sm leading-14_17 tracking-widest">
                            <div className="uppercase">Total:</div>
                            <div className=" ttcommon_font_bold ml-auto">$300.00</div>
                        </div>
                        <div className="ttcommon_font_thin mt-2 text-sm leading-14_26">Addtional taxes and duties may apply. <Link href="/"><span className="underline">Details.</span></Link></div>
                        <Link href="/shop/checkout">
                            <Button className="mt-15 h-11 w-full text-sm">Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShoppingBag.Layout = Layout