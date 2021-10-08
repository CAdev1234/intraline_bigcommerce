import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {getCookie} from 'utils/cookie'

const initialState = {
    userInfo: getCookie('user', ''),
    logined: getCookie('user', '') !== null && getCookie('jwt', '') !== null ? true : false,
}

const checkoutSlice = createSlice({
    name: 'checkoutSlice'
    , initialState
    , reducers: {
        updateUserInfo: (state, {payload}) => {

        }
    }
})
// export const { } = checkoutSlice.actions
export default checkoutSlice.reducer