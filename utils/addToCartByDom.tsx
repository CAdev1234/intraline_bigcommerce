import { useAppDispatch } from "./redux/hooks"
import { addProductToCart, updateProductInCart } from 'utils/redux/slices/cartSlice'
import React from "react"

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

export class AddToCartByDom {
    items: Array<ProductObject>;
    dispatch: any

    constructor(items: Array<ProductObject>) {
        this.items = items
        this.dispatch = useAppDispatch()
    }

    addToBagHandler = (addBtnClick:React.MouseEvent<HTMLButtonElement>, index: number) => {
        let event_target = addBtnClick.target
        let cart_btn_group_ele = (event_target as HTMLElement).parentElement
        let count_btn_group_ele = ((cart_btn_group_ele as HTMLDivElement).querySelector('div') as HTMLDivElement)
        let count_div = count_btn_group_ele.querySelector('div')
        let count_val:number = Number((count_div as HTMLDivElement).innerText)
        let product_detail = {...this.items[index]}
        product_detail.quantity = count_val
        this.dispatch(addProductToCart(product_detail))
    }

    decreaseNumHandler = (decreaseClick:React.MouseEvent<HTMLButtonElement>, enabledAddBtn: boolean, index: number) => {
        let event_target = decreaseClick.target
        let count_btn_group_ele = (event_target as HTMLElement).parentElement
        let count_div = ((count_btn_group_ele as HTMLDivElement).querySelector('div') as HTMLDivElement)
        let count_val:number = Number(count_div.innerText) - 1
        if (count_val < 1) {
            count_div.innerText = Number(1).toString()
        }else {
            count_div.innerText = count_val.toString()
        }
        if (!enabledAddBtn) {
            // let product_detail = {
            //     title: this.items[index].title,
            //     price: this.items[index].price,
            //     img: this.items[index].img,
            //     amount: count_val
            // }
            let product_detail = {...this.items[index]}
            product_detail.quantity = count_val
            this.dispatch(updateProductInCart(product_detail))
        }
    }

    increaseNumHandler = (increaseClick:React.MouseEvent<HTMLButtonElement>, enabledAddBtn: boolean, index: number) => {
        let event_target = increaseClick.target
        let count_btn_group_ele = (event_target as HTMLElement).parentElement
        let count_div = ((count_btn_group_ele as HTMLDivElement).querySelector('div') as HTMLDivElement)
        let count_val:number = Number(count_div.innerText) + 1
        count_div.innerText = count_val.toString()
        if (!enabledAddBtn) {
            let product_detail = {...this.items[index]}
            product_detail.quantity = count_val
            this.dispatch(updateProductInCart(product_detail))
        }
    }
}