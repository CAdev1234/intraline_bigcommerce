import Link from '@components/ui/Link'
import { FC, useState, useEffect } from 'react'
import Button from '@components/mycp/Button'

const SideCart: FC = () => {
    const cart_product_li = [
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 1,
            price: 100,
            img: "/assets/img/mseries_3.png",
        },
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 2,
            price: 100,
            img: "/assets/img/lifting-1-1.png",
        },
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 2,
            price: 100,
            img: "/assets/img/lifting-1-1.png",
        },
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 2,
            price: 100,
            img: "/assets/img/lifting-1-1.png",
        },
        {
            shop_name: "Intraline's",
            product_name: "Dermal Filler M2 Plus",
            amount: 2,
            price: 100,
            img: "/assets/img/lifting-1-1.png",
        },
    ]
    return (
        <div className="ttcommon_font_thin flex flex-col bg-white w-96 py-12 fixed right-0 max-h-screen" style={{height: 'calc(100% - 60px)'}}>
            <div className="px-7">
                <div className="text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag</span>(3)</div>
                <div className="mt-10 overflow-y-auto" style={{height: 450}}>
                    {cart_product_li.map((item, index) => {
                        return <div className="flex items-center mb-3" key={`cart_item_${index}`}>
                                    <div className="w-24 h-32 px-7 py-5 bg-c_F5DBDD">
                                        <img className="w-full" src={item.img} alt="" />
                                    </div>
                                    <div className="flex-1 ml-5">
                                        <div>{item.shop_name}</div>
                                        <div className="ttcommon_font_bold">{item.product_name}</div>
                                        <div>{item.amount} X <span className="ttcommon_font_bold tracking-widest">${item.price}</span></div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
            <div className="h-px w-full bg-gray-500 mt-auto"></div>
            <div className="px-7 tracking-widest">
                <div className="mt-7 flex items-center text-sm leading-14_17">
                    <div className="ttcommon_font uppercase">Subtotal:</div>
                    <div className="ttcommon_font_bold ml-auto">$300.00</div>
                </div>
                <div className="mt-7">
                    <Link href="/shop/shoppingbag">
                        <Button className="h-11 w-full">View Bag</Button>
                    </Link>
                    <Link href="/shop/checkout">
                        <Button className="mt-2 h-11 w-full">Checkout</Button>
                    </Link>
                    
                    <Link href="/shop/shoppingbag">
                        <Button className="mt-2 h-11 w-full">Edit Bag</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideCart;