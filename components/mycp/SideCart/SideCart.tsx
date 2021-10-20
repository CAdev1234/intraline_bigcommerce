import dynamic from 'next/dynamic'
import { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import s from './SideCart.module.css'
const Button = dynamic(import('@components/mycp/Button'))
const Cross = dynamic(import('@components/icons/Cross'))
const Image = dynamic(import('next/image'))

import {useAppDispatch, useAppSelector} from '../../../utils/redux/hooks'
import {activeSideCart} from '../../../utils/redux/slices/cartSlice'
import { useRouter } from 'next/router'
import { ProductObject } from 'utils/types'

interface SideCartProps {
    className?: string
}

const SideCart: FC<SideCartProps> = ({className}) => {
    const rootClassName = cn(s.root, className)
    const [currentUrl, setCurrentUrl] = useState('')
    const router = useRouter()
    const dispatch = useAppDispatch()
    const enableSideCart = useAppSelector(state => state.cart.enableSideCart)
    useEffect(() => {
        setCurrentUrl(window.location.href)
    })
    const cart_product_li = useAppSelector(state => state.cart.products) as Array<ProductObject>
    const total_price = useAppSelector(state => state.cart.totalPrice)
    const total_amount = useAppSelector(state => state.cart.totalQuantity)
    
    const editBagHandler = () => {
        dispatch(activeSideCart())
        router.push('/shop/shoppingbag')
    }

    const gotoShoppingBagHandler = () => {
        dispatch(activeSideCart())
        router.push('/shop/shoppingbag')
    }

    const gotoCheckoutHandler = () => {
        dispatch(activeSideCart())
        router.push('/shop/checkout')
    }
    return (
        <div className={`${rootClassName}`}>
            <div className={`${s.side_cart_bg} ${enableSideCart ? 'block' : 'hidden'}`}></div>
            <div className={`${s.side_cart_body}`}
                style={{transform: `${enableSideCart ? 'translateX(0px)' : 'translateX(1000px)'}`}}>
                <div className="relative h-full flex flex-col py-12">
                    <div className="px-7 flex flex-col flex-1 h-0">
                        <div className="text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag</span> ({total_amount})</div>
                        <div className="mt-10 mb-3 flex-1 h-0">
                            <div className="h-full overflow-y-auto">
                                {cart_product_li.map((item, index) => {
                                    return <div className="flex items-center mb-3" key={`cart_item_${index}`}>
                                                <div className="w-24 flex flex-col">
                                                    <div className='image-container'>
                                                        <Image className='image' src={item.img as string} alt='' layout="fill" />
                                                    </div>
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
                        <div className="mt-7 flex items-center text-base leading-14_17">
                            <div className="uppercase">Subtotal:</div>
                            <div className="ttcommon_font_bold ml-auto">${total_price}</div>
                        </div>
                        <div className="mt-7">
                            {!currentUrl.includes('/shop/checkout') && 
                                <div>
                                    <Button className="h-11 w-full text-base" onClick={() => {gotoShoppingBagHandler()}}>View Bag</Button>
                                    <Button className="mt-2 h-11 w-full text-base" onClick={() => {gotoCheckoutHandler()}}>Checkout</Button>
                                    
                                </div>
                            }
                            
                            {currentUrl.includes('/shop/checkout') && 
                                <Button className="mt-2 h-11 w-full text-base" onClick={() => {editBagHandler()}}>Edit Bag</Button>
                            }
                        </div>
                    </div>
                    <button className="absolute top-6 right-4" onClick={() => {dispatch(activeSideCart())}}>
                        <Cross />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideCart;