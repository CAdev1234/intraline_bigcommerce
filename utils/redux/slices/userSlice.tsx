import { createSlice } from '@reduxjs/toolkit'
import {getCookie} from 'utils/cookie'

const convertStrToJson = (str: string) => {
    if (str === null || str === undefined) {
        return null
    }else {
        return JSON.parse(str)
    }
}


const initialState = {
    logined: getCookie('jwt', '') !== null && getCookie('jwt', '') !== undefined ? true : false,
}

const checkoutSlice = createSlice({
    name: 'checkoutSlice'
    , initialState
    , reducers: {
        loginUser: (state) => {
            state.logined = true
        },
        logoutUser: (state) => {
            state.logined = false
        }
    }
})
export const { logoutUser, loginUser } = checkoutSlice.actions
export default checkoutSlice.reducer