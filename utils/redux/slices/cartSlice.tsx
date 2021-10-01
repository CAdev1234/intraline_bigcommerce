import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// type Product = {
//     title: string,
//     price: number,
//     amount: number
// }

const initialState = {
    enableSideCart: false,
    // products: Array<Product>
}

const cartSlice = createSlice({
    name: 'cartSlice'
    , initialState
    , reducers: {
        openSideCart: state => {
            state.enableSideCart = true
        },
        closeSideCart: ({enableSideCart}) => {
            enableSideCart = false
        },
        // addCart: ({products}, {payload}) => {
        //     products.push(payload)
        // },

    }
})

export const {openSideCart, closeSideCart} = cartSlice.actions
export const enableSideCart = (state:RootState) => state.cart.enableSideCart
export default cartSlice.reducer