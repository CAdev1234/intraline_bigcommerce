import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import checkoutSlice from './slices/checkoutSlice'
import productSlice from './slices/productSlice'
import reviewReducer from './slices/reviewSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        review: reviewReducer,
        checkout: checkoutSlice,
        product: productSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export default store