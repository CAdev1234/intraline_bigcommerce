import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import checkoutSlice from './slices/checkoutSlice'
import reviewReducer from './slices/reviewSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        review: reviewReducer,
        checkout: checkoutSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export default store