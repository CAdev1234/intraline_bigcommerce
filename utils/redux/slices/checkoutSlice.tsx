import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    enableLoginForm: true,
    checkedShippingAddress: false,
    checkedBillAddress: false,
    checkedPayment: false,
    // orderList: []
}

const convertStrToJson = (str: string) => {
    if (str === null || str === undefined) {
        return null
    }else {
        return JSON.parse(str)
    }
}

const checkoutSlice = createSlice({
    name: 'checkoutSlice'
    , initialState
    , reducers: {
        updateCheckOutStatus: (state, {payload}) => {
            state.enableLoginForm                   = payload.enableLoginForm
            state.checkedShippingAddress            = payload.checkedShippingAddress
            state.checkedBillAddress                = payload.checkedBillAddress
            state.checkedPayment                    = payload.checkedPayment
        },
    }
})
export const { updateCheckOutStatus } = checkoutSlice.actions
export default checkoutSlice.reducer