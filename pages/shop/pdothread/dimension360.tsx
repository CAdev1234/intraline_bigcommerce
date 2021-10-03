import React, {useEffect, useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import { getCookie } from '@utils/cookie'
import Link from '@components/ui/Link'
import SideReview from '@components/mycp/SideReview'

import {useAppDispatch, useAppSelector} from 'utils/redux/hooks'
import {openSideCart, closeSideCart, addProductToCart} from 'utils/redux/slices/cartSlice'
import {openSideReview, closeSideReview} from 'utils/redux/slices/reviewSlice'

const RenderFAQCollapse = () => {
    var items = [
      {
        'title': 'How does it work?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'How long do the results last?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What is the expected recovery time for my patients?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What are some important safety tips to follow when using this product?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What are the most common side effects?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      }
    ]
    return <FAQCp faq_li={items}/>
}


export default function Dimension360() {
    const [enableSideReview, setEnableSideReview] = useState(false)
    const [logined, setLogined] = useState(false)
    const [numDimension360, setNumDimension360] = useState(1)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    })

    const addToBagHandler = () => {
        dispatch(addProductToCart({title: 'Dimension 360 PDO', amount: numDimension360, price: 100, img: '/assets/img/thread_detail.png'}))
    }
    const decreaseNumHandler = () => {
        if (numDimension360 > 1) {
            setNumDimension360(numDimension360 - 1)
        }else {
            setNumDimension360(1)
        }
    }
    const increaseNumHandler = () => {
        setNumDimension360(numDimension360 + 1)
    }
    const ShowEnableSideReview = (bool_var: boolean) => {
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "hidden"
        setEnableSideReview(bool_var)
    }
    const CloseSideReview = (bool_bar:boolean) => {
        setEnableSideReview(bool_bar);
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "auto"
    }

    

    const renderPDOThreads = () => {
        var items = [0, 1, 2]
        return items.map((item, index) => {
            return <div className="flex flex-col pt-9 pb-12_5 bg-white relative hover:bg-opacity-50" 
                        key={'m' + String(index + 1) + '-product'} style={{height: 472}}>
                        <div className="flex-1 h-0">
                            <img className="mix_blend_multi mx-auto h-full" src="/assets/img/lifting-1-1.png" alt="" />
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">Dimension 360</div>
                        <div className="mt-2 text-sm leading-14_26 text-center">Lorem ipsum doloris sit estimatum estiumen.</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Button className="h-11 w-full text-sm">learn more</Button>
                                </div>
                            </div>
                        </div>
                        {logined && <Button className="ttcommon_font_bold absolute top-0 right-0 text-lg h-11 w-30" variant="primary">$100.00</Button>}
                    </div>
        })
    }
    
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="bg-transparent w-full h-15"></div>
            <div className="h-210 relative bg-c_F5DBDD w-full flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span>Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1">Pdo threads</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1">Lifting threads</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Dimension 360 PDO</span>
                    </div>
                </div>
                <div className="mt-28 mb-15 flex flex-col h-full">
                    <div className="flex my-auto w-full h-full z-10">
                        <div className="w-6/12 flex flex-col ml-172">
                            <div className="">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">The Dimension</div>
                                <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold mt-7" ><span className="ttcommon_font_bold">360</span></div>
                                <div className="ttcommon_font mt-5 text-4xl leading-36_48">Lorem ipsum doloris secantum.</div>
                                <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Dimension 360 has a single premium molded cogged PDO filament. With maximum strenght and hold, ultra thin walls and w-type silicone-coated cannula for ease of insertion, the Dimension 360 PDO Threads are lorem ipsum doloris.</div>
                                <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 1.1ML</span>
                                </div>
                                <div className="mt-5 flex items-center h-11 text-white">
                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numDimension360}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="ml-3 w-52 h-full text-sm" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center justify-center">
                        <span className="uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
                <div className="absolute top-0 right-15 w-131_5 h-full flex flex-col pb-24">
                    <div className="relative h-full w-full flex flex-col">
                        <div className="relative h-131_5 bg-white rounded-full my-auto">
                            {logined && <Button className="absolute top-3 right-14 w-30 h-9 text-lg leading-36_48 ttcommon_font_bold z-10" variant="primary">$100.00</Button>}
                        </div>
                        <div className="h-full absolute top-0 left-0 w-full flex flex-col">
                            <img className="mix_blend_multi ml-auto h-full" src="/assets/img/thread_detail.png" alt="" />
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            {/* Indications */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Indications</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-72 text-sm">download indication chart</Button>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_C6CBDD w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -15 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_8D97BC text-200px leading-200_160" style={{transformOrigin: 'center'}}>Specs.</div>
                </div>
                <div className="ml-172 mr-15 my-32 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="w-1/2 pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">360 PDO</div>
                                    <div className="flex items-center" onClick={() => {ShowEnableSideReview(true)}}>
                                        <RatingView ratingValue={3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                        <div className="text-sm ">(22)</div>
                                    </div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">GRIP COLOUR</div>
                                                <div className="flex items-center mt-2">
                                                    <div className="h-6 w-6 rounded-full bg-c_F297F6"></div>
                                                    <div className="h-6 w-6 rounded-full bg-c_D5CBA1 ml-2"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/2"></div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">NEEDLE GAUGE</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">18G  |  19G</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">NEEDLE LENGTH</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">100 MM</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">THREAD LENGHT</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">150 MM</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">THREAD USP</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">3  |  2</div>
                                            </div>
                                        </div>
                                        <div className="text-sm leading-14_26 mt-7">It comes in 2 different cannula gauges. Each gauge has one option in both cannula and thread length. Each gauge has a different grip or handle colour.</div>
                                    </div>
                                    <div className="mt-10 flex items-center h-11 text-white">
                                        <Button className="h-full flex-1 text-sm">BUY 360 PDO NOW</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Amongst the 360’s effects we can find lifting of the skin, immediate tightening, scaffolding, new collagen production, versatile and correction of fine wrinkles.</div>
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">Dimension 360 Offerings.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">We have 2 different SKU’s of the Dimension 360, they are differenciated by the length of the cannula, the length of the thread and the gauge of the cannula.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* analyse part */}
            <div className="py-24 flex flex-col">
                <div className="mx-auto" style={{
                    backgroundImage: 'url(../../assets/img/analyse-thread.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: 649}}>
                    <div>
                        <div className="flex items-center">
                            <div className="flex">
                                <div>
                                    <div className="ttcommon_font_thin text-4xl text-center leading-36_48">Cannula length</div>
                                    <div className="flex items-center">
                                        <div className="w-px h-5 bg-c_00080D"></div>
                                        <div className=" h-px bg-c_00080D" style={{width: 387}}></div>
                                        <div className="w-px h-5 bg-c_00080D"></div>
                                    </div>
                                    <div className="ttcommon_font_thin text-center text-sm leading-14_26 mt-9">MOLDED BARBS ON THE INSIDE</div>
                                    <div className="ttcommon_font_thin text-center text-sm leading-14_26 mt-20">SMOOTH BREAK IN THREAD</div>
                                    <div className="ttcommon_font_thin text-center text-sm leading-14_26 mt-5">BARBS IN OPPOSITE DIRECTIONS</div>
                                </div>
                                <div className="" style={{marginLeft: 10}}>
                                    <div className="ttcommon_font_thin text-4xl text-center leading-36_48">Grip</div>
                                    <div className="flex items-center">
                                        <div className="w-px h-5 bg-c_00080D"></div>
                                        <div className="h-px bg-c_00080D" style={{width: 196}}></div>
                                        <div className="w-px h-5 bg-c_00080D"></div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Reviews part */}
            <TestimonialCp
                head_line={"Reviews."} 
                bg_color={"bg-c_C3E0DC"} 
                quote_color={"#87C1B9"} 
                testimonial_li={[0,1,2,3]}/>

            
            
            {/* FAQ part */}
            <div className="bg-white">
                <div className="mx-172 py-24">
                <div className="flex text-c_00080D mb-2">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl">Frequently Asked Questions.</div>
                    <div className="flex items-center ml-auto">
                        <Link href="/faq">
                            <div className="flex items-center">
                                <div className="ttcommon_font_bold text-lg">Read More</div>
                                <div className="ml-2">
                                    <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {RenderFAQCollapse()}
                </div>
            </div>

            {/* thread list */}
            <div className="bg-c_F5DBDD">
                <div className="mx-172 py-24">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Lifting PDO Threads.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold text-lg">Learn More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-5">
                        {renderPDOThreads()}
                    </div>
                </div>
            </div>
            
            {enableSideReview && <SideReview closeSideReview={CloseSideReview} />}
        </div>
    )
}

Dimension360.Layout = Layout 