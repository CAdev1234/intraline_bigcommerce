import dynamic from "next/dynamic"
const Layout = dynamic(() => import('@components/common/Layout'))
import { ChevronRight, Cross } from "@components/icons"
const Button = dynamic(() => import("@components/mycp/Button"))
const Input = dynamic(() => import("@components/mycp/Input"))
const SelectInput = dynamic(() => import("@components/mycp/SelectInput"))
import { RatingView, Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"
import { getCookie, removeCookie } from "@utils/cookie"
import { useRouter } from "next/router"
import Link from "@components/ui/Link"
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks"
import { logoutUser, updateUser } from "@utils/redux/slices/userSlice"
import { createReview, deleteReview, updateReview } from "@utils/redux/slices/reviewSlice"

import { ProductObject } from 'utils/types'


export default function MyAccount() {
    
    let order_li = useAppSelector(state => state.cart.orderList)
    let review_li = useAppSelector(state => state.review.review_li)
    let all_products = useAppSelector(state => state.product.products)
    // const userInfo = useAppSelector((state) => state.user.userInfo)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const logined = useAppSelector((state) => state.user.logined)
    const [user, setUser] = useState({email: '', password: '', f_name: '', l_name: '', mobile: ''})
    const [ship_address, setShipAddress] = useState({f_name: '', l_name: '', address: '', apt: '', city: '', country: '', postcode: ''})
    const [bill_address, setBillAddress] = useState({f_name: '', l_name: '', address: '', city: '', apt: '', country: '', postcode: ''})
    const [payment, setPayment] = useState({name: '', number: '', date: '', cvc: ''})
    const [newReview, setNewReview] = useState({id: '', product: '', title: '', created_at: '', rating: 0, detail: ''})
    const [selectedReview, setSelectedReview] = useState(review_li[0])
    const [selectedAccont, setSelectedAccount] = useState({f_name: '', l_name: '', email: '', mobile: ''})

    const [enableShowMore, setEnableShowMore] = useState(new Array(order_li.length).fill(false))
    const [enableEditAccountModal, setEnableAccountModal] = useState(false)
    const [enableAddReviewModal, setEnableAddReviewModal] = useState(false)
    const [enableEditReviewModal, setEnableEditReviewModal] = useState(false)
    const [enableDelReviewModal, setEnableDelReviewModal] = useState(false)
    const [rating, setRating] = useState(0)

    useEffect(() => {
        if (!logined) {
            router.push('/account/login')
            return
        }
        
        setUser(JSON.parse(localStorage.getItem('user') as string))
        setSelectedAccount(JSON.parse(localStorage.getItem('user') as string))

        if (getCookie('sa', '')) {
            let shipping_address = JSON.parse(getCookie('sa', '') as string)
            setShipAddress(shipping_address)
        }

        if (getCookie('ba', '')) {
            let bill_address = JSON.parse(getCookie('ba', '') as string)
            setBillAddress(bill_address)
        }

        if (getCookie('pm', '')) {
            let payment_info = JSON.parse(getCookie('pm', '') as string)
            setPayment(payment_info)
        }
    }, [])

    // account handler
    const submitUpdatedUserHandler = () => {
        dispatch(updateUser(selectedAccont))
        console.log(selectedAccont)
        setUser(JSON.parse(localStorage.getItem('user') as string))
        setEnableAccountModal(false)
    }
    const changeUserFNameHandler = (str: string) => {
        setSelectedAccount({...selectedAccont, f_name: str})
    }
    const changeUserLNameHandler = (str: string) => {
        setSelectedAccount({...selectedAccont, l_name: str})
    }
    const changeUserEmailHandler = (str: string) => {
        setSelectedAccount({...selectedAccont, email: str})
    }
    const changeUserMobileHandler = (str: string) => {
        setSelectedAccount({...selectedAccont, mobile: str})
    }


    const logoutHandler = () => {
        removeCookie('jwt')
        dispatch(logoutUser())
        router.push('/account/login')
    }
    const delAccountHandler = () => {
        removeCookie('jwt')
        localStorage.clear()
        dispatch(logoutUser())
        router.push('/account/login')
    }
    const editShippingAddressHandler = () => {
        router.push({
            pathname: '/shop/checkout',
            query: {status: 'shipping_address'}
        })
    }
    const addBillAddressHandler = () => {
        router.push({
            pathname: '/shop/checkout',
            query: {status: 'bill_address'}
        })
    }
    const editBillAddressHandler = () => {
        router.push({
            pathname: '/shop/checkout',
            query: {status: 'bill_address'}
        })
    }
    const editPaymentHandler = () => {
        router.push({
            pathname: '/shop/checkout',
            query: {status: 'payment'}
        })
    }
    const addPaymentHandler = () => {
        
    }

    const showEditAccountModalHandler = (bool_var: boolean) => {
        setEnableAccountModal(!bool_var)
        let body_ele = document.querySelector('body') as HTMLBodyElement
        if (!bool_var) {
            body_ele.style.overflow = 'hidden'
        }else {
            body_ele.style.overflow = 'auto'
        }
    }

    const showAddReviewModalHandler = (bool_var: boolean) => {
        setEnableAddReviewModal(!bool_var)
        let body_ele = document.querySelector('body') as HTMLBodyElement
        if (!bool_var) {
            body_ele.style.overflow = 'hidden'
        }else {
            body_ele.style.overflow = 'auto'
        }
    }

    const handleRatingHandler = (rate: number) => {
        setNewReview({...newReview, rating: rate})
    }

    const updateReviewProduct = (str: string) => {
        setNewReview({...newReview, product: str})
    } 

    const updateReviewTitle = (str: string) => {
        setNewReview({...newReview, title: str})
    }

    const submitNewReviewHandler = () => {
        setNewReview({...newReview, id: '', created_at: '', rating: rating})
        dispatch(createReview(newReview))
        setNewReview({id: '', product: '', title: '', created_at: '', rating: 0, detail: ''})
        showAddReviewModalHandler(enableAddReviewModal)
    }

    const showEditReviewModalHandler = (index: number) => {
        setEnableEditReviewModal(true);
        setSelectedReview(review_li[index]);
        (document.querySelector('body') as HTMLBodyElement).style.overflowY = 'hidden'
    }
    const closeEditReviewModalHandler = () => {
        setEnableEditReviewModal(false);
        (document.querySelector('body') as HTMLBodyElement).style.overflowY = 'auto'
    }
    const updateSelectedReviewProduct = (str: string) => {
        setSelectedReview({...selectedReview, product: str})
    }
    const updateSelectedReviewTitle = (str: string) => {
        setSelectedReview({...selectedReview, title: str})
    }
    const updateReviewRatingHandler = (rate: number) => {
        setSelectedReview({...selectedReview, rating: rate})
    }
    const submitEditReviewHandler = () => {
        console.log(selectedReview)
        dispatch(updateReview(selectedReview))
        closeEditReviewModalHandler()
    }

    const showDelReviewModalHandler = (index: number) => {
        setEnableDelReviewModal(true);
        setSelectedReview(review_li[index]);
        (document.querySelector('body') as HTMLBodyElement).style.overflowY = 'hidden'
    }
    const closeDelReviewModalHandler = () => {
        setEnableDelReviewModal(false);
        (document.querySelector('body') as HTMLBodyElement).style.overflowY = 'auto'
    }
    const submitDelReviewHandler = () => {
        closeDelReviewModalHandler()
        dispatch(deleteReview(selectedReview))
    }

    return (
        <div className="ttcommon_font_thin text-c_00080D
                        mt-16 md:mt-0">
            <div className="h-15 w-full"></div>
            <div className="pt-12_5 pb-25 bg-c_CCE7EF
                            px-5 md:px-15">
                <div className="flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer">
                        <span className="ttcommon_font"><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1"><Link href="/account/myaccount">Account</Link></span>
                    </div>
                </div>
                <div className="ttcommon_font_bold mt-10 text-4xl leading-36_26">Hello {`${user.f_name} ${user.l_name}`}.</div>
                <div className="mt-5 leading-14_26">Edit your account information, check your orders or write a product review.</div>
                <div className="mt-10 grid items-start w-full
                                grid-cols-1 md:grid-cols-3">
                    <div className="">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">My Account</div>
                        <div className="mt-5 leading-14_26">
                            <span className="ttcommon_font_bold">Name:</span>
                            <span className="ml-2.5">{`${user.f_name} ${user.l_name}`}</span>
                        </div>
                        <div className="mt-2.5 leading-14_26">
                            <span className="ttcommon_font_bold">Email:</span>
                            <span className="ml-2.5">{user.email}</span>
                        </div>
                        <div className="mt-2.5 leading-14_26">
                            <span className="ttcommon_font_bold">Phone:</span>
                            <span className="ml-2.5">{user.mobile}</span>
                        </div>
                        <div>
                            <button className="ttcommon_font mt-7_5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {showEditAccountModalHandler(enableEditAccountModal)}}>Edit information</button>
                        </div>
                        <div>
                            <button className="ttcommon_font mt-5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {logoutHandler()}}>Log out</button>
                        </div>
                        <div>
                            <button className="ttcommon_font mt-5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {delAccountHandler()}}>Delete account</button>
                        </div>
                    </div>
                    <div className="mt-7_5 md:mt-0">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">Addresses</div>
                        <div className="mt-5 leading-14_26">
                            <span className="ttcommon_font_bold">Shipping Address:</span>
                            <span className="ml-2.5"></span>
                        </div>
                        <div className="mt-2.5 leading-14_26">
                            <div className="">{`${ship_address.f_name} ${ship_address.l_name}`}</div>
                            <div>{ship_address.address}</div>
                            <div>{ship_address.city}, {ship_address.country} {ship_address.postcode}</div>
                        </div>
                        <div>
                            <button className="ttcommon_font mt-7_5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {editShippingAddressHandler()}}>Edit information</button>
                        </div>
                        <div className="mt-7_5 leading-14_26">
                            <div className="ttcommon_font_bold">Billing Address:</div>
                            {bill_address.address === "" && <div className="mt-2.5">Not Provided</div>}
                            {bill_address.address !== "" && 
                                <div className="mt-2.5 leading-14_26">
                                    <div className="">{`${bill_address.f_name} ${bill_address.l_name}`}</div>
                                    <div>{bill_address.address}</div>
                                    <div>{bill_address.city}, {bill_address.country} {bill_address.postcode}</div>
                                </div>
                            }
                        </div>
                        <div>
                            <button className="ttcommon_font mt-7_5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {editBillAddressHandler()}}>Edit information</button>
                        </div>
                        {bill_address.address === "" && 
                            <div>
                                <button className="ttcommon_font mt-5 uppercase leading-14_17 tracking-widest underline"
                                    onClick={() => {addBillAddressHandler()}}>Add Address</button>
                            </div>
                        }
                    </div>
                    <div className="mt-7_5 md:mt-0">
                        <div className="ttcommon_font_bold uppercase text-2xl leading-24_29">Payment method</div>
                        {[0].map((item, index) => {
                            return <div key={`payment_${index}`}>
                                        <div className="mt-5 leading-14_26">
                                            <span className="ttcommon_font_bold">Payment Method {index + 1}:</span>
                                            <span className="ml-2.5"></span>
                                        </div>
                                        <div className="mt-2.5 leading-14_26">
                                            <div className="">{payment.name}</div>
                                            <div>{payment.number}</div>
                                            <div>{`Expires ${payment.date} CVC: ${payment.cvc}`}</div>
                                        </div>        
                                    </div>
                        })}
                        <div>
                            <button className="ttcommon_font mt-7_5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {editPaymentHandler()}}>Edit Payment Method</button>
                        </div>
                        <div>
                            <button className="ttcommon_font mt-5 uppercase leading-14_17 tracking-widest underline"
                                onClick={() => {addPaymentHandler()}}>Add Payment Method</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* my orders */}
            <div className="py-25 bg-white
                            hidden md:block">
                <div className="ttcommon_font_bold text-2xl leading-24_29 tracking-widest uppercase text-center">My orders</div>
                <div className="mt-7_5 bg-c_C6CBDD h-12 flex items-center
                                px-5 md:px-15">
                    <div className="text-base leading-14_26 text-center uppercase w-1/5">Order date</div>
                    <div className="text-base leading-14_26 text-center uppercase w-1/5">order number</div>
                    <div className="text-base leading-14_26 text-center uppercase w-1/5">status</div>
                    <div className="text-base leading-14_26 text-center uppercase w-1/5">tracking</div>
                </div>
                {order_li.length === 0 &&
                    <div className="text-5xl text-c_00080D ttcommon_font text-center my-10">There is no order.</div>
                }
                <div className="">
                    {order_li.map((item, index) => {
                        return <div key={`order_item_${index}`}>
                                    <div className="bg-c_F7F7F7 h-20 items-center flex mb-1
                                                        px-5 md:px-15">
                                        <div className="text-base leading-14_26 text-center w-1/5">{item.order_date}</div>
                                        <div className="text-base leading-14_26 text-center w-1/5">{item.order_id}</div>
                                        <div className="text-base leading-14_26 text-center w-1/5">{item.order_state}</div>
                                        <div className="text-base leading-14_26 text-center w-1/5">{item.order_tracking}</div>
                                        <div className="flex-1 flex flex-col">
                                            <Button className="h-11 ml-auto
                                                                md:w-28 lg:w-56"
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
                                                <div className="ttcommon_font_bold leading-14_26 text-center w-1/5">Item</div>
                                                <div className="ttcommon_font_bold leading-14_26 text-center w-1/5">Quantity</div>
                                                <div className="ttcommon_font_bold leading-14_26 text-center w-1/5">Price</div>
                                                <div className="ttcommon_font_bold leading-14_26 text-center w-1/5">Reference</div>
                                            </div>
                                            <div className="mt-5">
                                                {item.order_subItem.map((item1, index1) => {
                                                    return <div className="flex items-center mb-3" key={`product_${index1}_${item1.title}`}>
                                                                <div className="flex items-center leading-14_26 text-center w-1/5">
                                                                    <div className="w-25 h-36 px-2 bg-c_CCE7EF flex flex-col">
                                                                        <img src={item1.img} className="w-full my-auto" alt="" />
                                                                    </div>
                                                                    <div className="ml-8">{item1.title}</div>
                                                                </div>
                                                                <div className="text-base leading-14_26 text-center w-1/5">{item1.quantity}</div>
                                                                <div className="text-base leading-14_26 text-center w-1/5">${item1.price}</div>
                                                                <div className="text-base leading-14_26 text-center w-1/5">{item.reference}</div>
                                                            </div>
                                                })}
                                            </div>
                                        </div>
                                    }        
                                </div>
                    })}
                </div>
            </div>
            
            {/* my orders responsive */}
            <div className="py-15 bg-white
                            block md:hidden">
                <div className="ttcommon_font_bold text-2xl leading-24_29 tracking-widest uppercase text-center">My orders</div>
                <div className="mt-7_5">
                    {order_li.map((item, index) => {
                        return <div key={`order_item_${index}`}>
                                    <div className="mb-2 bg-c_F7F7F7 flex flex-col px-5 pt-4 pb-7_5">
                                        <div className="flex items-center my-2">
                                            <div className="text-base leading-none uppercase">Order date</div>
                                            <div className="text-base leading-none ml-auto">{item.order_date}</div>
                                        </div>
                                        <div className="flex items-center my-2">
                                            <div className="text-base leading-none uppercase ">order number</div>
                                            <div className="text-base leading-none ml-auto">{item.order_id}</div>
                                        </div>
                                        <div className="flex items-center my-2">
                                            <div className="text-base leading-none uppercase ">status</div>
                                            <div className="text-base leading-none ml-auto">{item.order_state}</div>
                                        </div>
                                        <div className="flex items-center my-2">
                                            <div className="text-base leading-none uppercase ">tracking</div>
                                            <div className="text-base leading-none ml-auto">{item.order_tracking}</div>
                                        </div>
                                        <div className="mt-7_5 flex flex-col">
                                            <Button className="h-11 w-full"
                                                    onClick={() => {
                                                        let new_array = [...enableShowMore]
                                                        new_array[index] = !enableShowMore[index]
                                                        setEnableShowMore(new_array)
                                                    }}>{enableShowMore[index] ? 'Show Less' : 'Show More'}</Button>
                                        </div>
                                    </div>
                                    { enableShowMore[index] && 
                                        <div className="px-5">
                                            <div className="mt-5">
                                                {item.order_subItem.map((item1, index1) => {
                                                    return  <div key={`sub_item_${index1}`} className="mb-5">
                                                                <div className="w-full flex flex-col">
                                                                    <img src={item1.img} className="w-full my-auto" alt="" />
                                                                </div>
                                                                <div className="flex flex-col w-full">
                                                                    <div className="flex items-center mt-4">
                                                                        <div className="ttcommon_font_bold leading-14_26">Item</div>
                                                                        <div className="text-base leading-none ml-auto">{item1.title}</div>
                                                                    </div>
                                                                    <div className="flex items-center mt-4">
                                                                        <div className="ttcommon_font_bold leading-14_26">Quantity</div>
                                                                        <div className="text-base leading-none ml-auto">{item1.quantity}</div>
                                                                    </div>
                                                                    <div className="flex items-center mt-4">
                                                                        <div className="ttcommon_font_bold leading-14_26">Price</div>
                                                                        <div className="text-base leading-none ml-auto">${item1.price}</div>
                                                                    </div>
                                                                    <div className="flex items-center mt-4">
                                                                        <div className="ttcommon_font_bold leading-14_26">Reference</div>
                                                                        <div className="text-base leading-none ml-auto">{item.reference}</div>
                                                                    </div>
                                                                </div>   
                                                            </div>
                                                    
                                                })}
                                            </div>
                                        </div>
                                    }                       
                                </div>
                    })}
                </div>
                {/* {order_li.length === 0 &&
                    <div className="text-5xl text-c_00080D ttcommon_font text-center my-10">There is no order.</div>
                } */}
            </div>


            {/* product reviews */}
            <div className="bg-c_F5DBDD
                            py-15 md:py-25">
                <div className="px-5 md:px-15 xl:px-172">
                    <div className="ttcommon_font_bold text-2xl leading-24_29 tracking-widest uppercase text-center">Product Reviews</div>
                    <div className="mt-7_5">
                        {review_li.length === 0 && 
                            <div className="text-center text-5xl ttcommon_font mb-25">There is no review.</div>
                        }
                        {review_li.map((item, index) => {
                            return <div className="bg-white p-7_5 mb-2.5
                                        px-5 md:px-7_5
                                        py-10 md:py-7_5" key={`review_${index}`}>
                                        <div className="flex items-center leading-14_17">
                                            <span className="ttcommon_font_bold">{item.product} - {item.title}</span>
                                            <span className="ml-5
                                                            hidden md:block">{item.created_at}</span>
                                            <div className="ml-auto
                                                            hidden md:block">
                                                <RatingView ratingValue={item.rating as number} size={30} className="foo" fillColor="#52B5D3" emptyColor="rgba(82, 181, 211, 0.3)" />
                                            </div>
                                        </div>
                                        <div className="block md:hidden mt-3">
                                            <RatingView ratingValue={item.rating as number} size={30} className="foo" fillColor="#52B5D3" emptyColor="rgba(82, 181, 211, 0.3)" />
                                        </div>
                                        <div className="mt-2.5 leading-14_17 break-words">{item.detail}</div>
                                        <div className="ttcommon_font mt-7_5 leading-14_17 tracking-widest uppercase underline flex items-center">
                                            <button className="uppercase" onClick={() => {showEditReviewModalHandler(index)}}>Edit</button>
                                            <button className="ml-5 uppercase" onClick={() => {showDelReviewModalHandler(index)}}>Delete review</button>
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div className="mt-5">
                        <Button className="h-11
                                            w-full md:w-72" onClick={() => {showAddReviewModalHandler(enableAddReviewModal)}}>Add new review</Button>
                    </div>
                </div>
            </div>
            
            {/* account edit modal */}
            {enableEditAccountModal && 
                <div className="fixed top-0 left-0 w-full h-screen z-50">
                    <div className="relative flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-screen bg-c_00080D bg-opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full h-screen flex flex-col
                                        px-5 md:px-0">
                            <div className="relative my-auto mx-auto bg-white
                                            w-full md:w-162_5
                                            px-5 md:px-28
                                            py-7_5 md:py-15">
                                <div className="ttcommon_font_bold
                                                text-2xl md:text-4xl
                                                leading-tight md:leading-36_26">Edit Information.</div>
                                <div className="text-base leading-14_26
                                                mt-2.5 md:mt-5">Make changes to your account info.</div>
                                <div className="mt-7_5 md:mt-10">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="First Name" defaultValue={selectedAccont.f_name}
                                    onChange={changeUserFNameHandler}/>
                                </div>
                                <div className="mt-5">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="Last Name" defaultValue={selectedAccont.l_name}
                                    onChange={changeUserLNameHandler}/>
                                </div>
                                <div className="mt-5">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="Email" defaultValue={selectedAccont.email}
                                    onChange={changeUserEmailHandler}/>
                                </div>
                                <div className="mt-5">
                                    <Input className="bg-c_F7F7F7" type="number" placeholder="Phone" defaultValue={selectedAccont.mobile}
                                    onChange={changeUserMobileHandler}/>
                                </div>
                                <div className="mt-7_5 flex items-center">
                                    <Button className="text-base h-11 w-64"
                                        onClick={() => {submitUpdatedUserHandler()}}>Submit</Button>
                                    <button className="ttcommon_font uppercase underline tracking-widest ml-7_5"
                                        onClick={() => {showEditAccountModalHandler(enableEditAccountModal)}}>Cancel</button>
                                </div>
                                <button className="absolute top-6 right-6" onClick={() => {showEditAccountModalHandler(enableEditAccountModal)}}>
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
                        <div className="absolute top-0 left-0 w-full h-screen flex flex-col
                                        px-5 md:px-0">
                            <div className="relative my-auto mx-auto bg-white
                                            w-full md:w-162_5
                                            py-7_5 md:py-15
                                            px-5 md:px-28">
                                <div className="ttcommon_font_bold
                                                text-2xl md:text-4xl
                                                leading-tight md:leading-36_26">Add Review.</div>
                                <div className="text-base
                                                leading-tight md:leading-14_26
                                                mt-2.5 md:mt-5">Add a new review from a previous purchase.</div>
                                <div className="
                                                mt-7_5 md:mt-10">
                                    <SelectInput 
                                        enable_underline={true}
                                        default_option="Select Product"
                                        option_li={all_products} 
                                        className="bg-c_F7F7F7"
                                        option_class="bg-c_F5DBDD hover:bg-opacity-80"
                                        returnVal={updateReviewProduct}/>
                                </div>
                                <div className="mt-2.5 md:mt-5">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="Review title" onChange={updateReviewTitle}/>
                                </div>
                                <div className="mt-2.5 md:mt-5">
                                    <textarea className="h-24 border-none bg-c_F7F7F7 w-full pl-5 py-2" placeholder="Write your review"
                                            onChange={(event) => setNewReview({...newReview, detail: event.target.value})}/>
                                </div>
                                <div className="mt-2.5 md:mt-5 flex items-center">
                                    <span>Rating:</span>
                                    <div className="ml-5 mt-2">
                                        <Rating onClick={handleRatingHandler} ratingValue={rating} size={28} stars={5} fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)"/>
                                    </div>
                                </div>
                                <div className="mt-7_5 flex items-center">
                                    <Button className="text-base h-11 w-64"
                                        onClick={() => {submitNewReviewHandler()}}>Submit</Button>
                                    <button className="ttcommon_font uppercase underline tracking-widest ml-7_5"
                                        onClick={() => {showAddReviewModalHandler(enableAddReviewModal)}}>Cancel</button>
                                </div>
                                <button className="absolute top-6 right-6" onClick={() => {showAddReviewModalHandler(enableAddReviewModal)}}>
                                    <Cross/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* edit review modal */}
            {enableEditReviewModal && 
                <div className="fixed top-0 left-0 w-full h-screen z-50">
                    <div className="relative flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-screen bg-c_00080D bg-opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full h-screen flex flex-col
                                        px-5 md:px-0">
                            <div className="relative my-auto mx-auto bg-white
                                            w-full md:w-162_5
                                            px-5 md:px-28
                                            py-7_5 md:py-15">
                                <div className="ttcommon_font_bold
                                                text-2xl md:text-4xl
                                                leading-tight md:leading-36_26">Edit Review.</div>
                                <div className="mt-7_5 md:mt-10">
                                    <SelectInput 
                                        enable_underline={true}
                                        default_option={selectedReview.product}
                                        option_li={all_products} 
                                        className="bg-c_F7F7F7"
                                        option_class="bg-c_F5DBDD hover:bg-opacity-80"
                                        returnVal={updateSelectedReviewProduct}/>
                                </div>
                                <div className="mt-5">
                                    <Input className="bg-c_F7F7F7" type="text" 
                                            placeholder="Review title" 
                                            defaultValue={selectedReview.title} 
                                            onChange={updateSelectedReviewTitle}/>
                                </div>
                                <div className="mt-5">
                                    <textarea className="h-24 border-none bg-c_F7F7F7 w-full pl-5 py-2" 
                                            placeholder="Write your review"
                                            defaultValue={selectedReview.detail}
                                            onChange={(event) => setSelectedReview({...selectedReview, detail: event.target.value})}/>
                                </div>
                                <div className="mt-5 flex items-center">
                                    <span>Rating:</span>
                                    <div className="ml-5 mt-2">
                                        <Rating onClick={updateReviewRatingHandler} 
                                                ratingValue={selectedReview.rating as number} 
                                                size={28} 
                                                stars={5} 
                                                fillColor="#87C1B9" 
                                                emptyColor="rgba(135, 193, 185, 0.3)"/>
                                    </div>
                                </div>
                                <div className="mt-7_5 flex items-center">
                                    <Button className="text-base h-11 w-64"
                                        onClick={() => {submitEditReviewHandler()}}>Submit</Button>
                                    <button className="ttcommon_font uppercase underline tracking-widest ml-7_5"
                                        onClick={() => {closeEditReviewModalHandler()}}>Cancel</button>
                                </div>
                                <button className="absolute top-6 right-6" onClick={() => {closeEditReviewModalHandler()}}>
                                    <Cross/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* delete review modal */}
            {enableDelReviewModal &&
                <div className="fixed top-0 left-0 w-full h-screen flex flex-col z-40 bg-black bg-opacity-50">
                    <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-auto mx-auto">
                        <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div>
                            <i className="fas fa-exclamation-circle text-blue-500"></i>
                            <span className="font-bold text-gray-700 text-lg">Delete</span>
                            </div>
                        <div>
                            <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
                            </div>
                        </div>
                    
                        <div className="px-10 py-5 text-gray-600">Do you want to delete review correctly?</div>
                    
                        <div className="px-5 py-4 flex justify-end">
                            <button className="text-base py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
                                onClick={() => {submitDelReviewHandler()}}>Yes
                            </button>
                            <button className="text-base py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
                                onClick={() => {closeDelReviewModalHandler()}}>Close
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

MyAccount.Layout = Layout