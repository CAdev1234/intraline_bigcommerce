import { createSlice } from '@reduxjs/toolkit'
import date from 'date-and-time'
import { generateID } from 'utils/simpleMethod'
import { ProductObject } from 'utils/types'

type OrderItemObject = {
    order_id: string,
    order_state: string,
    order_tracking: string,
    order_date: string,
    order_subItem: Array<ProductObject>,
    reference: string  
}

const calcTotalPrice = (products: Array<ProductObject>) => {
    let total_price = 0
    for (let index = 0; index < products.length; index++) {
        total_price = total_price + (products[index].price as number) * (products[index].quantity as number);
    }
    return total_price
}
const calcTotalQuantity = (products: Array<ProductObject>) => {
    let total_quantity = 0
    for (let index = 0; index < products.length; index++) {
        total_quantity = total_quantity + (products[index].quantity as number)
    }
    return total_quantity
}


const initialState = {
    enableSideCart: false,
    products: [] as Array<ProductObject>,
    totalPrice: 0,
    totalQuantity: 0,
    orderList: [] as Array<OrderItemObject>
}

const cartSlice = createSlice({
    name: 'cartSlice', 
    initialState,
    reducers: {
        initialCart: (state, {payload}) => {
            state.products = payload
            state.totalQuantity = calcTotalQuantity(payload)
            state.totalPrice = calcTotalPrice(payload)
        },
        initialOrder: (state, {payload}) => {
            state.orderList = payload
        },
        activeSideCart: (state) => {
            state.enableSideCart = !state.enableSideCart
            if(state.enableSideCart) {
                (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
            }else {
                (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
            }
        },
        addProductToCart: (state, {payload}) => {
            let result = (state.products as Array<ProductObject>).filter(item => item.id === payload.id)
            if (result.length === 0) {
                state.products.push(payload);
            }else {
                result[0].quantity = result[0].quantity + payload.quantity;
            }
            // setCookie('cart_products', JSON.stringify(state.products));
            localStorage.setItem('cart_products', JSON.stringify(state.products))
            state.totalQuantity = calcTotalQuantity(state.products);
            state.totalPrice = calcTotalPrice(state.products);
            
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
            state.enableSideCart = true;
        },
        updateProductInCart: (state, {payload}) => {
            let result = (state.products as Array<ProductObject>).filter(item => item.id === payload.id)
            result[0].quantity = payload.quantity
            // setCookie('cart_products', JSON.stringify(state.products))
            localStorage.setItem('cart_products', JSON.stringify(state.products))
            state.totalQuantity = calcTotalQuantity(state.products)
            state.totalPrice = calcTotalPrice(state.products)
            // state.enableSideCart = true
        },
        deleteProduct: (state, {payload}) => {
            state.products = (state.products as Array<ProductObject>).filter(item => item.id !== payload.id)
            // setCookie('cart_products', JSON.stringify(state.products))
            localStorage.setItem('cart_products', JSON.stringify(state.products))
            state.totalQuantity = calcTotalQuantity(state.products)
            state.totalPrice = calcTotalPrice(state.products)
        },
        createOrder: (state) => {
            let cart_products = state.products
            state.orderList.push({
                order_id: generateID(),
                order_state: 'Shipped',
                order_tracking: '1234567890',
                order_date: date.format(new Date(), 'DD MMM YYYY'),
                order_subItem: cart_products,
                reference: '1234567890'  
            })
            localStorage.setItem('order_items', JSON.stringify(state.orderList))
            localStorage.setItem('cart_products', "")
            state.totalPrice = 0
            state.totalQuantity = 0
            state.products = []
        },
    
    }
    
})

export const {initialCart, initialOrder, activeSideCart, addProductToCart, updateProductInCart, deleteProduct, createOrder} = cartSlice.actions
// export const enableSideCart = (state:RootState) => state.cart.enableSideCart
export default cartSlice.reducer