import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// type Product = {
//     title: string,
//     price: number,
//     amount: number
// }

const initialState = {
    enableSideReview: false,
    // products: Array<Product>
}

const reviewSlice = createSlice({
    name: 'reviewSlice'
    , initialState
    , reducers: {
        openSideReview: state => {
            state.enableSideReview = true
        },
        closeSideReview: state => {
            state.enableSideReview = false
        },
        // addCart: ({products}, {payload}) => {
        //     products.push(payload)
        // },

    }
})

export const {openSideReview, closeSideReview} = reviewSlice.actions
export const enableSideReview = (state:RootState) => state.review.enableSideReview
export default reviewSlice.reducer