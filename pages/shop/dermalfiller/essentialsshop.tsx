import { Layout } from "@components/common";
import dynamic from 'next/dynamic'
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const Button = dynamic(import('@components/mycp/Button'))
const Link = dynamic(import('@components/ui/Link'));
const Image = dynamic(import('next/image'))
import { useEffect, useState } from "react";

import { getCookie } from "@utils/cookie";
import { AddToCartByDom } from "@utils/addToCartByDom";
import router from "next/router";

export default function EssentialsShop() {
    let items = [
        {id: 'product_0000-000000-0004', title: 'Intraline One', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_1.webp', detail: "Used to treat tear troughs, perioral “smoker’s lines”, cupid’s bow and lips for enhancement or subtle definition; marionette lines,  nasolabial folds, and crow’s feet/fine lines.", link: '/shop/dermalfiller/essentials/intralineone'},
        {id: 'product_0000-000000-0005', title: 'Intraline Two', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_2.webp', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral, cupid’s bow and lips. Intraline Two can also be used in nonsurgical rhinoplasty, cheeks, and facial contouring, in addition to treatments for chin and jawline enhancement.", link: '/shop/dermalfiller/essentials/intralinetwo'},
        {id: 'product_0000-000000-0006', title: 'Intraline For Men', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/intraline_3.webp', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral “smoker’s lines”; cupid’s bow and lips (high definition). Intraline For Men can also be used for nonsurgical rhinoplasty and facial contouring of the cheeks, chin, and jawline.", link: '/shop/dermalfiller/essentials/intralinethree'},
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

    const loginToPurchaseHandler = () => {
        router.push('/account/login')
    }
    const RenderMseries = () => {
        
        return items.map((item, index) => {
            return <div className="flex flex-col pb-5 bg-white relative hover:bg-opacity-50" 
                        key={`m_${index}_product`}>
                        {logined && <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">${item.price}</div>}
                        <div className="flex">
                            <div className="image-container">
                                <Image className="image" src={item.img} alt="" layout="fill" />
                            </div>
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                        <div className="textellipsis_2 mt-2 px-3 leading-14_26 text-center">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col bg-c_F5DBDD bg-opacity-50 transition duration-500 ease-linear opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="h-11 w-full">learn more</Button>
                                    </Link>
                                    {logined && <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                        </div>
                                        <Button className="ml-3 flex-1 h-full" onClick={(event) => addToBagHandler(event, index)}>Add to bag</Button>
                                    </div>}
                                    {!logined && 
                                        <div className="mt-2 flex items-center h-11 text-white">
                                            <Button className="h-full w-full" onClick={(event) => {loginToPurchaseHandler()}}>Login in to purchase</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
        })
    }
    return (
        <div className="flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <div className="w-full min-h-15 bg-transparent"></div>
            <div className="bg-c_F5DBDD w-full flex flex-col pb-40">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest
                                mx-5 sm:px-15">
                    <div className="flex items-center cursor-pointer">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1 ttcommon_font">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">Essentials Shop</span>
                    </div>
                </div>
                <div className="mt-20
                                mx-5 sm:mx-15 md:mx-15 lg:mx-172">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">The Essentials.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold text-lg"><Link href="/shop/dermalfiller/essentials">Learn More</Link></div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid gap-5
                                    grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        {RenderMseries()}
                    </div>
                </div>
            </div>
        </div>
    )
}

EssentialsShop.Layout = Layout