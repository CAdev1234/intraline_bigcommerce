import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import cartReducer from './slices/cartSlice'
import checkoutSlice from './slices/checkoutSlice'
import productSlice from './slices/productSlice'
import reviewReducer from './slices/reviewSlice'
import userSlice from './slices/userSlice'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        review: reviewReducer,
        checkout: checkoutSlice,
        product: productSlice,
        user: userSlice
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default {store}