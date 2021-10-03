import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '@utils/cookie'


type Product = {
    title: string,
    price: number,
    amount: number,
    img: string
}
const calcTotalPrice = (products: Array<Product>) => {
    let total_price = 0
    for (let index = 0; index < products.length; index++) {
        total_price = total_price + products[index].price * products[index].amount;
    }
    return total_price
}
const calcTotalAmount = (products: Array<Product>) => {
    let total_amount = 0
    for (let index = 0; index < products.length; index++) {
        total_amount = total_amount + products[index].amount
    }
    return total_amount
}
const initialState = {
    enableSideCart: false,
    products: getCookie('cart_products', '') === undefined ? new Array<Product>() : JSON.parse(getCookie('cart_products', '') as string),
    totalPrice: calcTotalPrice(getCookie('cart_products', '') === undefined ? new Array<Product>() : JSON.parse(getCookie('cart_products', '') as string)),
    totalAmount: calcTotalAmount(getCookie('cart_products', '') === undefined ? new Array<Product>() : JSON.parse(getCookie('cart_products', '') as string))
}

const cartSlice = createSlice({
    name: 'cartSlice'
    , initialState
    , reducers: {
        openSideCart: state => {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
            state.enableSideCart = true;
        },
        closeSideCart: state => {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
            state.enableSideCart = false
        },
        addProductToCart: (state, {payload}) => {
            let result = (state.products as Array<Product>).filter(item => item.title.toLowerCase() === payload.title.toLowerCase())
            if (result.length === 0) {
                state.products.push(payload);
            }else {
                result[0].amount = result[0].amount + payload.amount;
            }
            setCookie('cart_products', JSON.stringify(state.products));
            state.totalAmount = calcTotalAmount(state.products);
            state.totalPrice = calcTotalPrice(state.products);
            
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
            state.enableSideCart = true;
        },
        updateProductInCart: (state, {payload}) => {
            let result = (state.products as Array<Product>).filter(item => item.title.toLowerCase() === payload.title.toLowerCase())
            result[0].amount = payload.amount
            setCookie('cart_products', JSON.stringify(state.products))
            state.totalAmount = calcTotalAmount(state.products)
            state.totalPrice = calcTotalPrice(state.products)
            // state.enableSideCart = true
        },
        deleteProduct: (state, {payload}) => {
            state.products = (state.products as Array<Product>).filter(item => item.title.toLowerCase() !== payload.title.toLowerCase())
            setCookie('cart_products', JSON.stringify(state.products))
            state.totalAmount = calcTotalAmount(state.products)
            state.totalPrice = calcTotalPrice(state.products)
        }
    }
})

export const {openSideCart, closeSideCart, addProductToCart, updateProductInCart, deleteProduct} = cartSlice.actions
// export const enableSideCart = (state:RootState) => state.cart.enableSideCart
export default cartSlice.reducer