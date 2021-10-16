import dynamic from 'next/dynamic'
const Button = dynamic(import('@components/mycp/Button'))
import { Cross } from '@components/icons'
import { FC } from 'react'
import cn from 'classnames'
import s from './SideReview.module.css'
import { MSERIES_TESTIMONIAL_LIST } from 'utils/productData'
import { useAppDispatch, useAppSelector } from '@utils/redux/hooks'
import { activeSideReview } from 'utils/redux/slices/reviewSlice'
import { ReviewObject } from 'utils/types'

import { RatingView } from 'react-simple-star-rating'

interface SideReviewProps {
    reviewList: Array<ReviewObject>,
    className?: string
}
const SideReview:FC<SideReviewProps> = ({reviewList, className}) => {
    const rootClassName = cn(s.root, className)
    let review_li = MSERIES_TESTIMONIAL_LIST
    const dispatch = useAppDispatch()
    const enableSideReview = useAppSelector(state => state.review.enableSideReview)
    const closeSideReviewHandler = () => {
        dispatch(activeSideReview())
    }
    return (
        <div className={rootClassName}>
            <div className={`${s.side_review_bg} ${enableSideReview ? 'block' : 'hidden'}`}></div>
            <div className={`ttcommon_font_thin ${s.side_review_body}`} 
                style={{transform: `${enableSideReview ? 'translateX(0px)' : 'translateX(1000px)'}`}}>
                <div className="pl-7_5 pr-5">
                    <div className="ttcommon_font_bold text-4xl leading-36_26 mt-12_5">Read {reviewList.length} Reviews.</div>
                    <div className="mt-5 leading-14_26">Read client’s reviews.</div>
                </div>
                <div className="pl-7_5 pr-5 mr-5
                                flex-1 h-0 overflow-y-auto">
                    <div className="h-full">
                        {reviewList.map((item, index) => {
                            return <div key={`review_${index}`}>
                                        <div className="mt-5 flex items-center  leading-14_26">
                                            <div className="mt-2_5 ttcommon_font_bold  leading-14_26">{item.client}</div>
                                            {/* <div className="ttcommon_font_bold">{item.title}</div> */}
                                            {/* <div className="ml-auto">{item.created_at}</div> */}
                                        </div>
                                        <div className="mt-2_5">
                                            <RatingView ratingValue={item.rating || 0} size={30} className="foo" fillColor="#52B5D3" emptyColor="rgba(82, 181, 211, 0.3)" />
                                        </div>
                                        <div className="mt-2_5 leading-14_26">{item.detail}</div>
                                        {/* <div className="mt-2_5  leading-14_26">{item.client}</div> */}
                                        {index !== review_li.length - 1 && 
                                            <div className="h-px w-full bg-c_00080D my-5"></div>
                                        }
                            </div>
                        })}
                    </div>
                </div>
                <div className="bg-c_F7F7F7 px-7_5">
                    <Button className="w-full h-11 my-7_5 " onClick={() => {closeSideReviewHandler()}}>Leave Review</Button>
                </div>
                <div className="absolute top-4 right-4">
                    <button className="text-c_00080D" onClick={() => {closeSideReviewHandler()}}>
                        <Cross />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default SideReview