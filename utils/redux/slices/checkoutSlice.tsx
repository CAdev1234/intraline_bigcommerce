import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {getCookie} from 'utils/cookie'

const initialState = {
    logined: getCookie('jwt', '') !== undefined,
    enableLoginForm: true,
    checkedShippingAddress: false,
    checkedBillAddress: false,
    checkedPayment: false
}

const checkoutSlice = createSlice({
    name: 'checkoutSlice'
    , initialState
    , reducers: {
        updateCheckOutStatus: (state, {payload}) => {
            state.logined                           = payload.logined
            state.enableLoginForm                   = payload.enableLoginForm
            state.checkedShippingAddress            = payload.checkedShippingAddress
            state.checkedBillAddress                = payload.checkedBillAddress
            state.checkedPayment                    = payload.checkedPayment
        }
    }
})
export const { updateCheckOutStatus } = checkoutSlice.actions
export default checkoutSlice.reducer