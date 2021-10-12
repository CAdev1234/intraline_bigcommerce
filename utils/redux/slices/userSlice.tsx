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
        },
        updateUser: (state, {payload}) => {
            // payload.password = JSON.parse(localStorage.getItem('user') as string).password
            // localStorage.setItem('user', payload)
        }
    }
})
export const { 
    logoutUser, 
    loginUser,
    updateUser 
} = checkoutSlice.actions
export default checkoutSlice.reducer