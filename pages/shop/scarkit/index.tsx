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
import {Button, Input, TestimonialCp} from '@components/mycp'
import { getCookie } from '@utils/cookie'
import ReactPlayer from 'react-player'
import { useAppDispatch } from '@utils/redux/hooks'
import { addProductToCart } from '@utils/redux/slices/cartSlice'
import TriangleRight from '@components/icons/TriangleRight'
import Link from '@components/ui/Link'
import ResponsivePlayer from '@components/mycp/ResponsivePlayer'


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

export default function ScarKit() {
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
    const [numScarkit, setNumScarkit] = useState(1)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    let specific_li = [
        {
            title: 'Product Specifics.', 
            detail: "A specially designed single-use GTI Cannula® for precise control through higher density and fibrotic tissue, for the subcision of minor facial surface defects. The GTI Cannula is a revolutionary new device designed by Dr. Olivier Amar in partnership with Sterimedix, which makes the treatments of small facial and body scars or surface defects safer and easier to perform. The GTI is a smooth cannula with a precision manufactured groove in the tip. The grooved tip was designed to reduce the risk of damage to nerves or important vessels which might otherwise be at risk from a sharp cutting device. The Cannula’s tip gives greater control to the practitioner as it passes through the fibrous tissue aiding the treatment of small scars or defects. The precise design of the grooved tip is to release the surface indentation and allow the lifting of the scar with Intraline Two Dermal Filler. After the subcision, the GTI Cannula can then be used to inject Intraline Two Dermal Filler into the space under the elevated skin."
        },
        {
            title: 'How to use Scar Kit.', 
            detail: "First, apply anaesthetic numbing cream to numb the skin around the entry point.\nSecondly, make the initial entry point using the sharp 23-gauge hypodermic needle supplied with the GTI Cannula.\nNext, insert the GTI Cannula, which has been attached to a syringe of Intraline Two Dermal Filler, and gently advance the cannula along the line of the scar or defect. The unique grooved tip will help the cannula to perform a micro-subcision which releases the denser or fibrous tissue.\n"
        },
        {
            title: 'Who is it for.', 
            detail: "The Scar Kit was designed for doctors and qualified medical practitioners who don’t otherwise have access to the same medical equipment as a plastic surgeon for treating small scars and surface defects. The scar kit is a complete kit with everything a doctor needs to treat their patient, making the scar kit especially ideal for practitioners in more remote regions where their patients may not have access to plastic surgeons. The Scar Kit is designed to treat any small subcision scar, but it is particularly beneficial for treating acne scars and scars from sutures. The smooth cannula reduces the risk of damage to important structures, but it will still sever or disrupt the higher density scar tissue. After the subcision, the GTI Cannula® can then be used to inject Intraline Dermal Filler in the space under the elevated skin."
        },
        {
            title: 'How it works.', 
            detail: "The smooth cannula reduces the risk of damage to important structures, but it will still sever or disrupt the higher density scar tissue. After the subcision, the GTI Cannula® can then be used to inject Intraline Dermal Filler in the space under the elevated skin."
        },
        {
            title: "Scar Kit FAQ's.", 
            detail: "A specially designed single-use GTI Cannula® for precise control through higher density and fibrotic tissue, for the subcision of minor facial surface defects.The GTI Cannula is a revolutionary new device designed by Dr. Olivier Amar in partnership with Sterimedix, which makes the treatments of small facial and body scars or surface defects safer and easier to perform. The GTI is a smooth cannula with a precision manufactured groove in the tip. The grooved tip was designed to reduce the risk of damage to nerves or important vessels which might otherwise be at risk from a sharp cutting device. The Cannula’s tip gives greater control to the practitioner as it passes through the fibrous tissue aiding the treatment of small scars or defects. The precise design of the grooved tip is to release the surface indentation and allow the lifting of the scar with Intraline Two Dermal Filler. After the subcision, the GTI Cannula can then be used to inject Intraline Two Dermal Filler into the space under the elevated skin."
        },
    ]
    const [enableSpecific, setEnableSpecific] = useState([true, ...new Array(specific_li.length - 1).fill(false)])
    const addToBagHandler = () => {
        dispatch(addProductToCart({title: 'ScarKit', amount: numScarkit, price: 100, img: '/assets/img/products/scarkit.png'}))
    }
    const decreaseNumHandler = () => {
        if (numScarkit > 1) {
            setNumScarkit(numScarkit - 1)
        }else {
            setNumScarkit(1)
        }
    }
    const increaseNumHandler = () => {
        setNumScarkit(numScarkit + 1)
    }
    const updateSpecificDetail = (index:number) => {
        let new_array = new Array(enableSpecific.length).fill(false)
        new_array[index] = true
        setEnableSpecific(new_array)
    }
    const play_icon = () => {
        return <div>
                  <div className="w-25 h-25 rounded-full border border-white text-white flex justify-center items-center">
                    <TriangleRight className="text-white"/>
                  </div>     
              </div>
    }
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="h-15 w-full bg-transparent"></div>
            <div className="h-210 relative bg-c_C3E0DC w-full flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">The Scar Kit</span>
                    </div>
                </div>
                <div className="mt-20 flex flex-col mb-15 h-full">
                    <div className="flex w-full h-full z-10">
                        <div className="w-6/12 flex flex-col ml-172">
                            <div className="">
                                <div className="ttcommon_font_thin text-200px leading-200_160">Scar</div>
                                <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold" ><span className="ttcommon_font_bold">Kit</span></div>
                                <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Lorem ipsum doloris secantum.</div>
                                <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Dimension 720 has a single premium molded cogged PDO filament. With maximum strenght and hold, ultra thin walls and w-type silicone-coated cannula for ease of insertion, the Dimension 720 PDO Threads are lorem ipsum doloris.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Weight: 500GR</span>
                                </div>}
                                {logined && <div className="mt-5 flex items-center h-12 text-white">
                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numScarkit}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="ml-3 w-52 h-full text-sm" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                        <div className="relative flex flex-1 flex-col items-end mr-15">
                            <div className="absolute h-full flex flex-col">
                                <div className="bg-white rounded-full my-auto relative" style={{width: 526, height: 526}}>
                                    <img className="mix_blend_multi ml-auto h-full" src="/assets/img/scarkit.png" alt="" />
                                    {logined && <Button className="ttcommon_font_bold absolute right-16 top-0 h-9 w-30" variant="primary">$100.00</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="ttcommon_font uppercase text-sm tracking-widest">Scroll for more details</span>
                        <ChevronDown className="w-4 ml-4" />
                    </div>
                </div>
            </div>


            {/* cart part */}
            <div className="bg-white w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -17 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_F7F7F7 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Scar Kit</div>
                </div>
                <div className="ml-172 mr-15 my-32 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="w-1/2 pr-32">
                            <div className="mt-2 bg-c_CCE7EF pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Specifics</div>
                                    <div className="ttcommon_font_thin text-sm leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {specific_li.map((item, index) => {
                                            return <div key={`specific_${index}}`}>
                                                <button className={`text-4xl leading-36_48 ${index != 0 && 'mt-7_5'} ${enableSpecific[index] ? 'ttcommon_font_bold' : 'ttcommon_font_thin'}`}
                                                    onClick={() => {updateSpecificDetail(index)}}>{item.title}</button>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="flex-1 mr-32">
                            {specific_li.map((item, index) => {
                                return enableSpecific[index] && 
                                    <div>
                                        <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">{item.title}</div>
                                        <div className="ttcommon_font_thin mt-5 text-sm leading-14_26 whitespace-pre-wrap">{item.detail}</div>
                                    </div>
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className=" bg-c_F5DBDD">
                <div className="mx-172 my-30 flex flex-col">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">How the GTI Cannula works.</div>
                    <div className="mt-5 w-full">
                        <ResponsivePlayer url="https://www.youtube.com/watch?v=nnexOCQOa0w"/>
                    </div>
                </div>
            </div>

            {/* Testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#C3E0DC"} 
                testimonial_li={testimonial_li}/>

            
            
            {/* Download Catalog */}
            <div className="bg-c_C6CBDD">
                <div className="py-28">
                    <div className="flex flex-col mx-auto
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <Input type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

ScarKit.Layout = Layout