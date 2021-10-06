import { Layout } from "@components/common";
import { ChevronRight } from "@components/icons";
import Button from '@components/mycp/Button'
import Link from "@components/ui/Link";
import { useEffect, useState } from "react";

import { getCookie } from "@utils/cookie";
import { AddToCartByDom } from "@utils/addToCartByDom";

export default function MseriesShop() {
    let items = [
        {title: "M2 Plus", price: 100, amount: 1, img: "/assets/img/products/m2plus.png", link: "/shop/dermalfiller/m2plus", detail: "M2 Plus is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love."},
        {title: "M3 Plus", price: 100, amount: 1, img: "/assets/img/products/m3plus.png", link: "/shop/dermalfiller/m3plus", detail: "M3 Plus style embraces a minimal aesthetic, with maximum impact of all the important things. It’s all about minimally enhancing your features for maximum impact."},
        {title: "M4 Plus", price: 100, amount: 1, img: "/assets/img/products/m4plus.png", link: "/shop/dermalfiller/m4plus", detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave."},
    ]
    const [logined, setLogined] = useState(false)
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])

    const addToCartByDom = new AddToCartByDom(items)
    const addToBagHandler = (event:React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.addToBagHandler(event, index)
    }
    const decreaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    
    }
    const increaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }

    const RenderMseries = () => {
        
        return items.map((item, index) => {
            return <div className="flex flex-col pb-5 bg-white relative hover:bg-opacity-50" 
                        key={`m_${index}_product`}>
                        {logined && <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">${item.price}</div>}
                        <div className="flex">
                            <img className="w-full mx-auto" src={item.img} alt="" />
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                        <div className="mt-2 px-3 text-sm leading-14_26 text-center">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                    </Link>
                                    {logined && <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                        </div>
                                        <Button className="ml-3 flex-1 h-full text-sm" onClick={(event) => addToBagHandler(event, index)}>Add to bag</Button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
        })
    }
    return (
        <div className="ttcommon_font h-225 flex flex-col">
            <div className="w-full min-h-15 bg-transparent"></div>
            <div className="bg-c_F5DBDD w-full flex flex-col pb-40">
                <div className="px-15 mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="ttcommon_font"><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1 ttcommon_font">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Monophasic dermal fillers</span>
                    </div>
                </div>
                <div className="mx-172 mt-20">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">The M Series.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold text-lg"><Link href="/shop/dermalfiller/mseries">Learn More</Link></div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-5">
                        {RenderMseries()}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

MseriesShop.Layout = Layout