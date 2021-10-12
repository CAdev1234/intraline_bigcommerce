import { Layout } from "@components/common"
import { ChevronRight, Cross } from "@components/icons"
import Link from "@components/ui/Link"
import Button from '@components/mycp/Button'

import { useAppSelector, useAppDispatch} from 'utils/redux/hooks'
import { AddToCartByDom } from "@utils/addToCartByDom"
import React from "react"
import { deleteProduct } from "@utils/redux/slices/cartSlice"

type ProductObject = {
    id: string,
    title: string,
    price: number,
    amount: number,
    quantity: number,
    img: string,
    detail: string,
    link: string
}

export default function ShoppingBag() {
    const dispatch = useAppDispatch()
    const cart_product_li = useAppSelector(state => state.cart.products) as Array<ProductObject>
    const total_price = useAppSelector(state => state.cart.totalPrice)
    const total_quantity = useAppSelector(state => state.cart.totalQuantity)
    const addToCartByDom = new AddToCartByDom(cart_product_li)
    const decreaseNumHandler = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        if (cart_product_li[index].amount > 1) {
            addToCartByDom.decreaseNumHandler(event, false, index)
        }
    }
    const increaseNumHandler = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.increaseNumHandler(event, false, index)
    }
    const delNumHandler = (index: number) => {
        dispatch(deleteProduct(cart_product_li[index]))
    }

    return (
        <div className="ttcommon_font bg-white
                        mt-16 md:mt-0
                        px-5 md:px-15">
            <div className="bg-transparent h-15 w-full"></div>
            <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                <div className="flex items-center cursor-pointer">
                    <span className="mr-1"><Link href="/">Home</Link></span>
                    <span className="mr-1"><ChevronRight className="w-4"/></span>
                    <span className="ttcommon_font_bold">Shopping Bag</span>
                </div>
            </div>
            <div className="ttcommon_font_thin mt-10 text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag </span>({total_quantity})</div>
            <div className="flex mt-7_5 items-start pb-15">
                <div className="w-full xl:w-8/12">
                    <div className="h-0.5 w-full bg-c_00080D"></div>
                    <div className="mt-7">
                        {cart_product_li.map((item, index) => {
                            return <div className="flex items-center mb-5" key={`bag_item_${index}`}>
                                        <div className="w-24 flex flex-col">
                                            <img className="w-full my-auto" src={item.img} alt="" style={{aspectRatio: '1'}}/>
                                        </div>
                                        <div className="ml-5 text-sm leading-14_26 w-1/3">
                                            <div className="">Intraline's</div>
                                            <div className="ttcommon_font_bold">{item.title}</div>
                                        </div>
                                        <div className="ttcommon_font_bold mx-auto tracking-widest text-sm leading-14_17">${item.price}</div>
                                        <div className="border border-c_00080D h-11 w-24 flex items-center mx-auto">
                                            <button className="mx-auto" onClick={(event) => {decreaseNumHandler(event, index)}}>-</button>
                                            <div className="mx-auto">{item.quantity}</div>
                                            <button className="mx-auto" onClick={(event) => {increaseNumHandler(event, index)}}>+</button>
                                        </div>
                                        <div className="ml-auto">
                                            <button onClick={() => {delNumHandler(index)}}><Cross /></button>
                                        </div>
                                    </div>
                        })}
                    </div>
                    
                    {/* order summary part responsive */}
                    <div className="flex-1 bg-c_F7F7F7 p-7 divide-y divide-c_00080D
                                    lg:block xl:hidden">
                        <div className="pb-7">
                            <div className="ttcommon_font_bold uppercase tracking-widest text-2xl leading-24_29">Order Summary</div>
                            <div className="flex items-center tracking-widest text-sm leading-14_17 mt-8">
                                <div className="uppercase">Subtotal:</div>
                                <div className="ttcommon_font_bold ml-auto">${total_price}</div>
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
                                <div className=" ttcommon_font_bold ml-auto">${total_price}</div>
                            </div>
                            <div className="ttcommon_font_thin mt-2 text-sm leading-14_26">Addtional taxes and duties may apply. <Link href="/"><span className="underline">Details.</span></Link></div>
                            <Link href="/shop/checkout">
                                <Button className="mt-15 h-11 w-full text-sm">Checkout</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-c_F7F7F7 w-full p-7 flex items-center 
                                    mt-7_5 xl:mt-44">
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

                {/* order summary part */}
                <div className="ml-15 flex-1 bg-c_F7F7F7 p-7 divide-y divide-c_00080D
                                hidden xl:block">
                    <div className="pb-7">
                        <div className="ttcommon_font_bold uppercase tracking-widest text-2xl leading-24_29">Order Summary</div>
                        <div className="flex items-center tracking-widest text-sm leading-14_17 mt-8">
                            <div className="uppercase">Subtotal:</div>
                            <div className="ttcommon_font_bold ml-auto">${total_price}</div>
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
                            <div className=" ttcommon_font_bold ml-auto">${total_price}</div>
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