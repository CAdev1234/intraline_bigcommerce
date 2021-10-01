
import { RatingView } from 'react-simple-star-rating'
import Button from '@components/mycp/Button'
import { Cross } from '@components/icons'
import { FC } from 'react'

interface SideReviewProps {
    closeSideReview: any
}
const SideReview:FC<SideReviewProps> = ({closeSideReview}) => {
    let review_li = [
        {
            title: "Dermal Filler M3 PLUS - Amazing Product",
            rate: 4,
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
            client: "DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS",
            created_at: '03 Aug 2021'
        },
        {
            title: "Dermal Filler M3 PLUS - Amazing Product",
            rate: 2,
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
            client: "DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS",
            created_at: '03 Aug 2021'
        },
        {
            title: "Dermal Filler M3 PLUS - Amazing Product",
            rate: 5,
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
            client: "DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS",
            created_at: '03 Aug 2021'
        },
        {
            title: "Dermal Filler M3 PLUS - Amazing Product",
            rate: 3,
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
            client: "DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS",
            created_at: '03 Aug 2021'
        },
    ]
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen bg-c_00080D bg-opacity-40 z-20"></div>
            <div className="fixed top-15 right-0 ttcommon_font_thin text-c_00080D z-20">
                <div className="relative flex flex-col bg-white w-125 pl-7_5 pr-5 pt-12_5 py-7_5" 
                    style={{height: 'calc(100vh - 60px)', boxShadow: '0px -10px 40px rgba(0, 0, 0, 0.05);'}}>
                    <div>
                        <div className="ttcommon_font_bold text-4xl leading-36_26">Read {review_li.length} Reviews.</div>
                        <div className="mt-5 text-sm leading-14_26">Read M2 Plus client’s reviews.</div>
                    </div>
                    <div className="flex-1 h-0 overflow-y-auto pr-9">
                        <div className="h-full">
                            {review_li.map((item, index) => {
                                return <div key={`review_${index}`}>
                                            <div className="mt-5 flex items-center text-sm leading-14_26">
                                                <div className="ttcommon_font_bold">{item.title}</div>
                                                <div className="ml-auto">{item.created_at}</div>
                                            </div>
                                            <div className="mt-2.5">
                                                <RatingView ratingValue={item.rate} size={30} className="foo" fillColor="#52B5D3" emptyColor="rgba(82, 181, 211, 0.3)" />
                                            </div>
                                            <div className="mt-2.5 text-sm leading-14_26">{item.detail}</div>
                                            <div className="mt-2.5 text-sm leading-14_26">{item.client}</div>
                                            {index !== review_li.length - 1 && 
                                                <div className="h-px w-full bg-c_00080D my-5"></div>
                                            }
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="bg-c_F7F7F7">
                        <Button className="w-full h-11 mt-7_5 text-sm" onClick={() => {closeSideReview(false)}}>Leave Review</Button>
                    </div>
                    <button className="absolute top-4 right-4 text-c_00080D" onClick={() => {closeSideReview(false)}}>
                        <Cross />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default SideReview