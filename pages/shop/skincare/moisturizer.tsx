import React, {useEffect, useState} from 'react'

import { Layout } from '@components/common'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import {Button, Input, SelectInput} from '@components/mycp'
import Link from '@components/ui/Link'
import { ChevronDown, ChevronRight } from '@components/icons'
import { getCookie } from '@utils/cookie'

import { useAppDispatch } from '@utils/redux/hooks'
import { addProductToCart } from '@utils/redux/slices/cartSlice'
import Checkbox from '@components/mycp/Checkbox'


export default function Moisturizer() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Claire NewmanIntraline KOL & Brand AmbassadorSOFT TOUCHES AESTHETICS',
            detail: 'I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.'
        },
        {
            title: "Marissa Freeman (patient)",
            detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men"
        },
        {
            title: 'Cole Harrison (patient)',
            detail: 'Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!'
        },
        {
            title: 'Mica Amos Aesthetics by Mica',
            detail: 'Beautiful product giving just perfect results.'
        },
        {
            title: 'Dr. TuğbaYalçın Director Lumière Aesthetics',
            detail: 'Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.'
        },
        {
            title: 'Dr. Mark Homes KOL INTRALINE MEDICAL AESTHETICS',
            detail: 'I was amazed by the extra lift and tightening they generated compared to the already impressive cutting cog of the Intraline Dimension 360 thread. The patient who was previously treated with 19G Dimension 360 threads 18 months ago could not belevie the dramatic improvement in the result compared to last time. I am excited about using these in my practice!'
        },
    ]
    const [logined, setLogined] = useState(false)
    const [numMoisturizer, setNumMoisturizer] = useState(1)
    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [comment, setComment] = useState('')
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    const addToBagHandler = () => {
        dispatch(addProductToCart({title: 'Restorative Moisturizer', amount: numMoisturizer, price: 100, img: '/assets/img/products/moisturizer.png'}))
    }
    const decreaseNumHandler = () => {
        if (numMoisturizer > 1) {
            setNumMoisturizer(numMoisturizer - 1)
        }else {
            setNumMoisturizer(1)
        }
    }
    const increaseNumHandler = () => {
        setNumMoisturizer(numMoisturizer + 1)
    }
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="h-225 relative bg-c_F5DBDD w-full flex flex-col pl-15 pr-20">
                <div className="absolute top-28 left-0 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1"><Link href="/shop/skincare">Skin Care</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Moisturizer</span>
                    </div>
                </div>
                <div className="mt-auto mb-15 flex flex-col">
                    <div className="flex w-full h-full z-10">
                        <div className="flex flex-col max-w-xl">
                            <div className="my-auto">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">Restorative</div>
                                <div className="ttcommon_font_thin text-120px font-semibold mt-2 leading-none" ><span className="ttcommon_font_bold">Moisturizer</span></div>
                                <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Immerse your skin in intense moisture while smoothing, tightening & rejuvenating</div>
                                <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 100ML</span>
                                </div>}
                                {logined && <div className="mt-5 flex items-center h-12 text-white">
                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numMoisturizer}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="ml-3 w-52 h-full text-sm" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center ml-auto my-auto rounded-full bg-c_CCE7EF" style={{height: 576, width: 576}}>
                            {logined && <Button className="ttcommon_font_bold absolute right-14 top-5 h-9 w-32 text-lg" variant="primary">$100.00</Button>}
                            <div className="my-auto relative flex flex-col h-3/4">
                                <img className="h-full" src="/assets/img/skincare3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="ttcommon_font uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
            </div>

            {/* Lorem Ipsum. */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Lorem Ipsum.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64 text-sm">Browse catalog</Button>
                    </div>
                </div>
            </div>

            {/* Testimonials part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-c_C6CBDD"} 
                quote_color={"#87C1B9"} 
                testimonial_li={testimonial_li}/>


            {/* Question part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-auto py-28
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <Input type="text" placeholder="Full Name"/>
                        </div>
                        <div className="mt-5">
                            <Input type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-5">
                            <Input type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-5">
                            <SelectInput 
                                enable_underline={false}
                                default_option="Choose Country or Region"
                                option_li={['United States', 'United Kingdom']} 
                                className="bg-white"
                                option_class="bg-white hover:bg-opacity-80"
                                returnVal={setCountry} />
                        </div>
                        <div className="mt-5">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="ttcommon_font_thin text-xs">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5">
                            <Checkbox id="moisturizer_checkbox" type="checkbox" className="ttcommon_font_thin text-10px" label="I agree to receive other communications from Intraline."></Checkbox>
                        </div>
                        <div className="text-10px leading-extra-loose text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-7_5">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

Moisturizer.Layout = Layout