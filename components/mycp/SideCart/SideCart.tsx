import Link from '@components/ui/Link'
import { FC, useState, useEffect } from 'react'
import Button from '@components/mycp/Button'
import { Cross } from '@components/icons'

import {useAppDispatch, useAppSelector} from '../../../utils/redux/hooks'
import {openSideCart, closeSideCart} from '../../../utils/redux/slices/cartSlice'
import { useRouter } from 'next/router'

interface SideCartProps {
}

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

const SideCart: FC<SideCartProps> = () => {
    const [currentUrl, setCurrentUrl] = useState('')
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(() => {
        setCurrentUrl(window.location.href)
    })
    const cart_product_li = useAppSelector(state => state.cart.products) as Array<ProductObject>
    const total_price = useAppSelector(state => state.cart.totalPrice)
    const total_amount = useAppSelector(state => state.cart.totalQuantity)
    
    const editBagHandler = () => {
        dispatch(closeSideCart())
        router.push('/shop/shoppingbag')
    }

    const gotoShoppingBagHandler = () => {
        dispatch(closeSideCart())
        router.push('/shop/shoppingbag')
    }

    const gotoCheckoutHandler = () => {
        dispatch(closeSideCart())
        router.push('/shop/checkout')
    }
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-screen bg-c_00080D bg-opacity-40 z-20"></div>
            <div className="ttcommon_font_thin flex flex-col bg-white fixed right-0 max-h-screen z-40
                            w-full md:w-96" style={{height: 'calc(100% - 60px)', boxShadow: '0px -10px 40px rgba(0, 0, 0, 0.05)'}}>
                <div className="relative h-full flex flex-col py-12">
                    <div className="px-7 flex flex-col flex-1 h-0">
                        <div className="text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag</span> ({total_amount})</div>
                        <div className="mt-10 mb-3 flex-1 h-0">
                            <div className="h-full overflow-y-auto">
                                {cart_product_li.map((item, index) => {
                                    return <div className="flex items-center mb-3" key={`cart_item_${index}`}>
                                                <div className="w-24 flex flex-col">
                                                    <img className="w-full my-auto" src={item.img} alt="" style={{aspectRatio: '1'}} />
                                                </div>
                                                <div className="flex-1 ml-5">
                                                    <div>Intraline's</div>
                                                    <div className="ttcommon_font_bold">{item.title}</div>
                                                    <div>{item.quantity} X <span className="ttcommon_font_bold tracking-widest">${item.price}</span></div>
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="h-px w-full bg-gray-500 mt-auto"></div>
                    <div className="px-7 tracking-widest">
                        <div className="mt-7 flex items-center text-sm leading-14_17">
                            <div className="ttcommon_font uppercase">Subtotal:</div>
                            <div className="ttcommon_font_bold ml-auto">${total_price}</div>
                        </div>
                        <div className="mt-7">
                            {!currentUrl.includes('/shop/checkout') && 
                                <div>
                                    <Button className="h-11 w-full text-sm" onClick={() => {gotoShoppingBagHandler()}}>View Bag</Button>
                                    <Button className="mt-2 h-11 w-full text-sm" onClick={() => {gotoCheckoutHandler()}}>Checkout</Button>
                                    
                                </div>
                            }
                            
                            {currentUrl.includes('/shop/checkout') && 
                                <Button className="mt-2 h-11 w-full text-sm" onClick={() => {editBagHandler()}}>Edit Bag</Button>
                            }
                        </div>
                    </div>
                    <button className="absolute top-6 right-4" onClick={() => {dispatch(closeSideCart())}}>
                        <Cross />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideCart;