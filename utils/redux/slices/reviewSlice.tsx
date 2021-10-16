import { createSlice } from '@reduxjs/toolkit'
import { generateID } from '@utils/simpleMethod'
import type { RootState } from '../store'
import date from 'date-and-time'
import { ReviewObject } from 'utils/types'


const initialState = {
    enableSideReview: false,
    review_li: [] as Array<ReviewObject>
}

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    reducers: {
        initialReviews: (state, {payload}) => {
            state.review_li = payload
        },
        activeSideReview: state => {
            state.enableSideReview = !state.enableSideReview
            if(state.enableSideReview) {
                (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
            }else {
                (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
            }
        },
        createReview: (state, {payload}) => {
            state.review_li.push({...payload, id: generateID(), created_at: date.format(new Date(), 'DD MMM YYYY')})
            localStorage.setItem('review_items', JSON.stringify(state.review_li))
        },
        updateReview: (state, {payload}) => {
            let result = state.review_li.filter(item => item.id === payload.id)
            result[0].product = payload.product
            result[0].detail = payload.detail
            result[0].rating = payload.rating
            result[0].title = payload.title
            localStorage.setItem('review_items', JSON.stringify(state.review_li))
        },
        deleteReview: (state, {payload}) => {
            state.review_li = state.review_li.filter(item => item.id !== payload.id)
            localStorage.setItem('review_items', JSON.stringify(state.review_li))
        }
    }
})

export const {
    initialReviews, 
    activeSideReview, 
    createReview,
    updateReview,
    deleteReview
} = reviewSlice.actions
export const enableSideReview = (state:RootState) => state.review.enableSideReview
export default reviewSlice.reducer