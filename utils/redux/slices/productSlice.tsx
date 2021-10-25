import { createSlice } from '@reduxjs/toolkit'
import { products } from 'utils/productData'

const initialState = {
    enableSideReview: false,
    products: products,
    searchResult: []
}

const productSlice = createSlice({
    name: 'productSlice'
    , initialState
    , reducers: {
        search: (state, {payload}) => {
            let result = state.products.filter(item => item.title.toLowerCase().includes(payload));
            state.searchResult = result as any
        },
        sortProducts: (state, {payload}) => {
            
        } 
    }
})

export const {search} = productSlice.actions
export default productSlice.reducer