import React, {useEffect, useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import {Button, Input, TestimonialCp} from '@components/mycp'
import Link from '@components/ui/Link'
import { ChevronRight } from '@components/icons'
import SelectInput from '@components/mycp/SelectInput'
import { AddToCartByDom } from '@utils/addToCartByDom'
import { getCookie } from '@utils/cookie'
import Checkbox from '@components/mycp/Checkbox'




export default function Rejuvenation() {
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
    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [comment, setComment] = useState('')
    const [logined, setLogined] = useState(false)
    let thread_li = [
        {id: 'product_0000-000000-0010', title: 'MONOS', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_monos.png', detail: "Explore Intraline Mono PDO Threads.", link: '/shop/pdothread/rejuvenation/monos'},
        {id: 'product_0000-000000-0011', title: 'DOUBLES', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_doubles.png', detail: "A Double PDO Thread is two smooth PDO filaments twisted around each other and folded in half. Learn more about Intraline Double PDO Threads.", link: '/shop/pdothread/rejuvenation/doubles'},
        {id: 'product_0000-000000-0012', title: 'TRIPLES', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_triples.png', detail: "A Triple PDO Thread is three smooth PDO filaments twisted around each other and folded in half. Learn more about Intraline Triple PDO Threads.", link: '/shop/pdothread/rejuvenation/triples'},
        {id: 'product_0000-000000-0013', title: 'DOUBLE SPIRALS', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_double_spirals.png', detail: "A Double Spiral is two smooth PDO filaments twisted around each other and around the needle. Learn more about Intraline Double Spiral PDO Threads.", link: '/shop/pdothread/rejuvenation/doublespirals'},
        {id: 'product_0000-000000-0014', title: 'SPIRALS', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_spirals.png', detail: "A Spiral PDO Thread is one smooth filament that is wrapped around the needle. Learn more about Intraline Spiral PDO Threads.", link: '/shop/pdothread/rejuvenation/spirals'},
        {id: 'product_0000-000000-0015', title: 'MICRO CANNULAS', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/rejuvenation_micro_cannulas.png', detail: "A Micro Cannula is a smooth Rejuvenation PDO Thread that comes in a cannula instead of a sharp tip needle. Learn more about Intraline's Micro Cannula PDO Threads.", link: '/shop/pdothread/rejuvenation/microcannulas'},
    ]
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    
    const addToCartByDom = new AddToCartByDom(thread_li)
    const decreaseNumHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    }
    const increaseNumHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }
    const addToBagHandler = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.addToBagHandler(event, index)
    }
    const renderLiftingThreadSwiper = () => {
        let render_ele = thread_li.map((item, index) => {
            return <div className="keen-slider__slide relative" key={`pdo_thread_${index}`}>
                        <div className="">
                            <div className="ttcommon_font_bold text-4xl leading-36_48">{item.title}</div>
                            <div className="bg-c_CCE7EF w-full mt-10">
                                <div className="relative">
                                    <div className="w-full aspect-w-8 aspect-h-5">
                                        <img className="w-full" src={item.img} alt="" />
                                    </div>
                                    
                                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                        <div className="my-auto mx-auto w-10/12">
                                            <div className="flex flex-col text-white w-64 mx-auto">
                                                <Link href={item.link}>
                                                    <Button className="h-11 w-full text-sm">learn more</Button>
                                                </Link>
                                                {logined && <div className="mt-2 flex items-center h-11 text-white">
                                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                                        <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                                        <div className="mx-auto">1</div>
                                                        <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                                    </div>
                                                    <Button className="ml-3 flex-1 h-full text-sm" onClick={(event) => {addToBagHandler(event, index)}}>Add to bag</Button>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="ttcommon_font_thin textellipsis_2 mt-7 leading-36_48
                                            md:text-2xl lg:text-3xl">{item.detail}</div>
                        </div>
                        
                    </div>
        })
        return <KeenSliderB 
                    render_ele={render_ele} 
                    slidesPerView={[1, 2, 3, 3, 3]} 
                    enableDot={false} 
                    prevNavCss={"my-auto ml-7_5"} 
                    nextNavCss={"my-auto mr-22_5"}
                    dotCss={"mt-7_5"}/>
    }
    return(
        <div className="ttcommon_font text-c_00080D
                        mt-16 md:mt-0">
            <div className="bg-transparent w-full h-15"></div>
            <div className="relative bg-c_F5DBDD w-full flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center flex-wrap cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15
                                    md:w-100 lg:w-full">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1"><Link href="/shop/pdothread">PDO Threads</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">Rejuvenation Thread</span>
                    </div>
                </div>
                <div className="flex w-full z-10
                                mt-10 md:mt-28
                                mb-72 md:mb-86
                                px-5 md:px-15">
                    <div className="items-end
                                    block md:flex">
                        <div className="flex flex-col
                                        w-full md:w-7/12">
                            <div className="">
                                <div className="ttcommon_font_thin font-semibold
                                                text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px 2xl:text-200px
                                                leading-14_17 md:leading-14_17 xl:leading-200_160">Rejuvenation</div>
                                <div className="ttcommon_font_bold
                                                text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px 2xl:text-200px
                                                leading-14_17 md:leading-14_17 xl:leading-200_160" >Threads</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col
                                        mt-5 md:mt-0">
                            <div className="ttcommon_font_thin leading-36_48
                                            text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">The goal of Rejuvenation Threads is to provide a small amount of lift while also stimulating skin rejuvenation.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-15 pb-24
                            hidden md:block" style={{marginTop: -240}}>
                {renderLiftingThreadSwiper()}
            </div>
            <div className="relative z-10 px-5
                            block md:hidden" style={{marginTop: -240}}>
                {thread_li.map((item, index) => {
                    return <div key={`thread_${index}`} className="w-full mb-10">
                                <div className="ttcommon_font_bold">{item.title}</div>
                                <div className="mt-5">
                                    <Link href={item.link}>
                                        <img className="w-full" src={item.img} alt="" />
                                    </Link>
                                </div>
                                <div className="mt-5">{item.detail}</div>
                            </div>
                })}
            </div>
            
            <div className=" bg-c_C6CBDD
                            px-5 md:px-15
                            py-15 md:py-24">
                <div className="ttcommon_font_bold
                                text-2xl md:text-4xl
                                leading-none md:leading-36_26">Rejuvenation PDO Threads.</div>
                <div className="mt-6 items-center
                                block md:flex">
                    <div className="ttcommon_font_thin leading-36_48
                                    w-full md:w-1/2
                                    text-2xl md:text-4xl
                                    pr-0 md:pr-10 xl:pr-28">Rejuvenation threads have barbs, also known as Cogs along the length of the thread with the aim of affixing the skin in a position to give the appearance of a minor facelift. </div>
                    <div className="bg-white ttcommon_font_thin text-base leading-14_26
                                    w-full md:w-1/2
                                    mt-12_5 md:mt-0
                                    px-5 md:px-10
                                    py-7_5 md:py-10">Typically, depth of placement for a Cog PDO Thread is the subcutaneous tissue and the effect is twofold with an immediate lift due to the barbs being activated and hooking into the underside of the skin and long-lasting effect due to the gradual metabolism of the thread which leads to skin rejuvenation. The amount of lift provided from a Cog PDO Thread treatment is typically only a few centimeters and results are not permanent. There are many types and sizes of Cog PDO Threads but Intraline focuses on the most effectively used types for classic multiple point lifting and non-surgical rhinoplasty.</div>
                </div>
            </div>


            {/* Testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#F5DBDD"} 
                testimonial_li={testimonial_li}/>
            
            
            {/* Question part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-auto
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                px-5 md:px-0
                                py-15 md:py-28">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold
                                        text-2xl md:text-4xl
                                        leading-none md:leading-36_26">Any more questions?</div>
                        <p className="ttcommon_font_thin text-sm leading-14_26
                                    mt-2.5 md:mt-5">We are here to help --- reach out with any questions.</p>
                        <div className="mt-7_5 md:mt-10">
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
                            <div className="ttcommon_font_thin text-10px leading-extra-loose">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5">
                            <Checkbox id="lifting_thread_checkbox" type="checkbox" className="ttcommon_font_thin text-10px" label="I agree to receive other communications from Intraline."></Checkbox>
                        </div>
                        <div className="ttcommon_font_thin text-10px leading-extra-loose text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-7_5">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

Rejuvenation.Layout = Layout