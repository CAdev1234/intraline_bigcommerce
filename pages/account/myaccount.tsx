import { Layout } from "@components/common"
import { ChevronRight, Cross } from "@components/icons"
import Button from '@components/mycp/Button'
import { RatingView, Rating } from 'react-simple-star-rating'
import { useState } from "react"
import SelectInput from "@components/mycp/SelectInput"

export default function MyAccount() {
    let product_info = {
        title: 'Dermal Filler M3 PLUS',
        quantity: 2,
        price: '$100.00',
        reference: '1234567890',
        img: '/assets/img/mseries_3.png'
    }
    let order_info = {
        order_date: '30 April 2021',
        order_num: '0987654321',
        order_status: 'Shipped',
        order_track: '1234567890',
        product_li: [product_info, product_info]
    }
    let order_li = [order_info, order_info, order_info]
    let review_li = [
        {
            title: 'Dermal Filler M3 PLUS - Amazing Product',
            created_at: '03 Aug 2021',
            rate: 4,
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' 
        },
        {
            title: 'Dermal Filler M3 PLUS - Amazing Product',
            created_at: '03 Aug 2021',
            rate: 4,
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' 
        }
    ]
    
    const[enableShowMore, setEnableShowMore] = useState(new Array(order_li.length).fill(false))
    const[enableEditAccountModal, setEnableAccountModal] = useState(false)
    const[enableAddReviewModal, setEnableAddReviewModal] = useState(false)
    const[rating, setRating] = useState(0)

    const showEditAccountModal = (bool_var: boolean) => {
        setEnableAccountModal(!bool_var)
        let body_ele = document.querySelector('body') as HTMLBodyElement
        if (!bool_var) {
            body_ele.style.overflow = 'hidden'
        }else {
            body_ele.style.overflow = 'auto'
        }
    }

    const showAddReviewModal = (bool_var: boolean) => {
        setEnableAddReviewModal(!bool_var)
        let body_ele = document.querySelector('body') as HTMLBodyElement
        if (!bool_var) {
            body_ele.style.overflow = 'hidden'
        }else {
            body_ele.style.overflow = 'auto'
        }
    }

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    let item_li = ['Dermal filler1', 'Dermal filler2', 'Dermal filler3']
    return (
        <div className="ttcommon_font_thin text-c_00080D">
            <div className="h-15 w-full"></div>
            <div className="pt-12_5 px-15 pb-25 bg-c_CCE7EF">
                <div className="flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center">
                        <span className="ttcommon_font">Home</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Account</span>
                    </div>
                </div>
                <div className="ttcommon_font_bold mt-10 text-4xl leading-36_26">Hello Sameer Haque.</div>
                <div className="mt-5 text-sm leading-14_26">Edit your account information, check your orders or write a product review.</div>
                <div className="mt-10 flex items-start w-full">
                    <div className="w-1/3">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">My Account</div>
                        <div className="mt-5 text-sm leading-14_26">
                            <span className="ttcommon_font_bold">Name:</span>
                            <span className="ml-2.5">Sameer Haque</span>
                        </div>
                        <div className="mt-2.5 text-sm leading-14_26">
                            <span className="ttcommon_font_bold">Email:</span>
                            <span className="ml-2.5">sameer@haque.com</span>
                        </div>
                        <div className="mt-2.5 text-sm leading-14_26">
                            <span className="ttcommon_font_bold">Phone:</span>
                            <span className="ml-2.5">+808 445 4454</span>
                        </div>
                        <button className="ttcommon_font mt-7_5 uppercase text-sm leading-14_17 tracking-widest underline"
                                onClick={() => {showEditAccountModal(enableEditAccountModal)}}>Edit information</button>
                        <div className="ttcommon_font mt-5 uppercase text-sm leading-14_17 tracking-widest underline">Log out</div>
                        <div className="ttcommon_font mt-5 uppercase text-sm leading-14_17 tracking-widest underline">Delete account</div>
                    </div>
                    <div className="w-1/3">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">Addresses</div>
                        <div className="mt-5 text-sm leading-14_26">
                            <span className="ttcommon_font_bold">Shipping Address:</span>
                            <span className="ml-2.5"></span>
                        </div>
                        <div className="mt-2.5 text-sm leading-14_26">
                            <div className="">Sameer Haque</div>
                            <div>234 HK, Avenue Lake City, Utah 23H UN3</div>
                            <div>Lake City, Utah, United States 230 654</div>
                        </div>
                        <div className="ttcommon_font mt-7_5 uppercase text-sm leading-14_17 tracking-widest underline">Edit information</div>
                        <div className="mt-7_5 text-sm leading-14_26">
                            <div className="ttcommon_font_bold">Billing Address:</div>
                            <div className="mt-2.5">Not Provided</div>
                        </div>
                        <div className="ttcommon_font mt-5 uppercase text-sm leading-14_17 tracking-widest underline">Add Address</div>
                    </div>
                    <div className="w-1/3">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">Payment method</div>
                        <div className="mt-5 text-sm leading-14_26">
                            <span className="ttcommon_font_bold">Payment Method 1:</span>
                            <span className="ml-2.5"></span>
                        </div>
                        <div className="mt-2.5 text-sm leading-14_26">
                            <div className="">Sameer Haque</div>
                            <div>1234 5678 1234 5678 000</div>
                            <div>Expires 01/24 CVC: 123</div>
                        </div>
                        <div className="ttcommon_font mt-7_5 uppercase text-sm leading-14_17 tracking-widest underline">Edit Payment Method</div>
                        <div className="ttcommon_font mt-5 uppercase text-sm leading-14_17 tracking-widest underline">Add Payment Method</div>
                    </div>
                </div>
            </div>
            {/* my orders */}
            <div className="py-25 bg-white">
                <div className="ttcommon_font_bold text-2xl leading-24_29 tracking-widest uppercase text-center">My orders</div>
                <div className="mt-7_5 bg-c_C6CBDD h-12 px-15 flex items-center">
                    <div className="text-sm leading-14_26 text-center uppercase w-1/5">Order date</div>
                    <div className="text-sm leading-14_26 text-center uppercase w-1/5">order number</div>
                    <div className="text-sm leading-14_26 text-center uppercase w-1/5">status</div>
                    <div className="text-sm leading-14_26 text-center uppercase w-1/5">tracking</div>
                </div>
                <div className="">
                    {order_li.map((item, index) => {
                        return <div key={`order_item_${index}`}>
                                    <div className="bg-c_F7F7F7 h-20 items-center flex mb-1 px-15">
                                        <div className="text-sm leading-14_26 text-center w-1/5">{item.order_date}</div>
                                        <div className="text-sm leading-14_26 text-center w-1/5">{item.order_num}</div>
                                        <div className="text-sm leading-14_26 text-center w-1/5">{item.order_status}</div>
                                        <div className="text-sm leading-14_26 text-center w-1/5">{item.order_track}</div>
                                        <div className="flex-1 flex flex-col">
                                            <Button className="h-11 w-56 ml-auto text-sm"
                                                onClick={() => {
                                                    let new_array = [...enableShowMore]
                                                    new_array[index] = !enableShowMore[index]
                                                    setEnableShowMore(new_array)
                                                }}>{enableShowMore[index] ? 'Show Less' : 'Show More'}</Button>
                                        </div>
                                    </div>
                                    { enableShowMore[index] && 
                                        <div className="px-15">
                                            <div className="flex items-center border-b-2 border-c_00080D border-opacity-20 h-14">
                                                <div className="ttcommon_font_bold text-sm leading-14_26 text-center w-1/5">Item</div>
                                                <div className="ttcommon_font_bold text-sm leading-14_26 text-center w-1/5">Quantity</div>
                                                <div className="ttcommon_font_bold text-sm leading-14_26 text-center w-1/5">Price</div>
                                                <div className="ttcommon_font_bold text-sm leading-14_26 text-center w-1/5">Reference</div>
                                            </div>
                                            <div className="mt-5">
                                                {item.product_li.map((item1, index1) => {
                                                    return <div className="flex items-center mb-3" key={`product_${index1}_${item1.title}`}>
                                                                <div className="flex items-center text-sm leading-14_26 text-center w-1/5">
                                                                    <div className="w-25 h-36 px-7 bg-c_CCE7EF flex flex-col">
                                                                        <img src={item1.img} className="w-full my-auto" alt="" />
                                                                    </div>
                                                                    <div className="ml-8">{item1.title}</div>
                                                                </div>
                                                                <div className="text-sm leading-14_26 text-center w-1/5">{item1.quantity}</div>
                                                                <div className="text-sm leading-14_26 text-center w-1/5">{item1.price}</div>
                                                                <div className="text-sm leading-14_26 text-center w-1/5">{item1.reference}</div>
                                                            </div>
                                                })}
                                            </div>
                                        </div>
                                    }        
                                </div>
                    })}
                </div>
            </div>
            
            {/* product reviews */}
            <div className="py-25 bg-c_F5DBDD">
                <div className="mx-172">
                    <div className="ttcommon_font_bold text-lg leading-24_29 tracking-widest uppercase text-center">Product Reviews</div>
                    <div className="mt-7_5">
                        {review_li.map((item, index) => {
                            return <div className="bg-white p-7_5 mb-2.5" key={`review_${index}`}>
                                        <div className="flex items-center text-sm leading-14_17">
                                            <span className="ttcommon_font_bold">{item.title}</span>
                                            <span className="ml-5">{item.created_at}</span>
                                            <div className="ml-auto">
                                                <RatingView ratingValue={item.rate} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)" />
                                            </div>
                                        </div>
                                        <div className="mt-5 text-sm leading-14_17">{item.description}</div>
                                        <div className="ttcommon_font mt-7_5 text-sm leading-14_17 tracking-widest uppercase underline">
                                            <span>Edit</span>
                                            <span className="ml-5">Delete review</span>
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div className="mt-5">
                        <Button className="h-11 w-72 text-sm" onClick={() => {showAddReviewModal(enableAddReviewModal)}}>Add new review</Button>
                    </div>
                </div>
            </div>
            
            {/* account edit modal */}
            {enableEditAccountModal && 
                <div className="fixed top-0 left-0 w-full h-screen z-50">
                    <div className="relative flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-screen bg-c_00080D bg-opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full h-screen flex flex-col">
                            <div className="relative my-auto mx-auto bg-white w-162_5 py-15 px-28">
                                <div className="ttcommon_font_bold text-4xl leading-36_26">Edit Information.</div>
                                <div className="mt-5 text-sm leading-14_26">Make changes to your account info.</div>
                                <div className="mt-10">
                                    <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Full Name"/>
                                </div>
                                <div className="mt-5">
                                    <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Email"/>
                                </div>
                                <div className="mt-5">
                                    <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Phone"/>
                                </div>
                                <div className="mt-7_5 flex items-center">
                                    <Button className="text-sm h-11 w-64"
                                        onClick={() => {showEditAccountModal(enableEditAccountModal)}}>Submit</Button>
                                    <button className="ttcommon_font uppercase underline text-sm tracking-widest ml-7_5"
                                        onClick={() => {showEditAccountModal(enableEditAccountModal)}}>Cancel</button>
                                </div>
                                <button className="absolute top-6 right-6" onClick={() => {showEditAccountModal(enableEditAccountModal)}}>
                                    <Cross/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* new review modal */}
            {enableAddReviewModal && 
                <div className="fixed top-0 left-0 w-full h-screen z-50">
                    <div className="relative flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-screen bg-c_00080D bg-opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full h-screen flex flex-col">
                            <div className="relative my-auto mx-auto bg-white w-162_5 py-15 px-28">
                                <div className="ttcommon_font_bold text-4xl leading-36_26">Add Review.</div>
                                <div className="mt-5 text-sm leading-14_26">Add a new review from a previous purchase.</div>
                                <div className="mt-10">
                                    <SelectInput 
                                        enable_underline={true}
                                        default_option="Select Dermal filler"
                                        option_li={item_li} 
                                        className="bg-c_F7F7F7"
                                        option_class="bg-c_F5DBDD hover:bg-opacity-80"/>
                                </div>
                                <div className="mt-5">
                                    <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Review title"/>
                                </div>
                                <div className="mt-5">
                                    <textarea className="h-24 border-none bg-c_F7F7F7 w-full pl-5 py-2" placeholder="Write your review"/>
                                </div>
                                <div className="mt-5 flex items-center">
                                    <span>Rating:</span>
                                    <div className="ml-5 mt-2">
                                        <Rating onClick={handleRating} ratingValue={rating} size={28} stars={5} fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)"/>
                                    </div>
                                </div>
                                <div className="mt-7_5 flex items-center">
                                    <Button className="text-sm h-11 w-64"
                                        onClick={() => {showAddReviewModal(enableAddReviewModal)}}>Submit</Button>
                                    <button className="ttcommon_font uppercase underline text-sm tracking-widest ml-7_5"
                                        onClick={() => {showAddReviewModal(enableAddReviewModal)}}>Cancel</button>
                                </div>
                                <button className="absolute top-6 right-6" onClick={() => {showAddReviewModal(enableAddReviewModal)}}>
                                    <Cross/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

MyAccount.Layout = Layout