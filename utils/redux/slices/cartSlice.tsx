import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type Product = {
    title: string,
    price: number,
    amount: number,
    img: string
}

const initialState = {
    enableSideCart: false,
    products: new Array<Product>()
}

const cartSlice = createSlice({
    name: 'cartSlice'
    , initialState
    , reducers: {
        openSideCart: state => {
            state.enableSideCart = true
        },
        closeSideCart: state => {
            state.enableSideCart = false
        },
        addProductToCart: (state, {payload}) => {
            let result = state.products.filter(item => item.title.toLowerCase() === payload.title.toLowerCase())
            if (result.length === 0) {
                state.products.push(payload)
            }else {
                result[0].amount = result[0].amount + payload.amount
            }
            state.enableSideCart = true
        },

    }
})

export const {openSideCart, closeSideCart, addProductToCart} = cartSlice.actions
// export const enableSideCart = (state:RootState) => state.cart.enableSideCart
export default cartSlice.reducer