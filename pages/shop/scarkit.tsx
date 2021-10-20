import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/common'

const ChevronDown = dynamic(import('@components/icons/ChevronDown'))
const ChevronUp = dynamic(import('@components/icons/ChevronUp'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const FAQCp = dynamic(import('@components/mycp/FAQCp/FAQCp'))
const TestimonialCp = dynamic(import('@components/mycp/TestimonialCp/TestimonialCp'))
const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const Link = dynamic(import('@components/ui/Link'))

import { getCookie } from '@utils/cookie'
import { useAppDispatch } from '@utils/redux/hooks'
import { addProductToCart } from '@utils/redux/slices/cartSlice'
import { validateEmail } from '@utils/simpleMethod'

import { ToastContainer, toast} from 'react-toastify'

import scarkitImg from 'public/assets/img/scarkit.webp'
const Image = dynamic(import('next/image'))


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
    let scarkit = {id: 'product_0000-000000-0018', title: 'SCAR KIT', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/scarkit.webp', detail: "The Scar Kit, developed by aesthetics company Intraline, features a revolutionary new type of cannula, designed by Mr. Olivier Amar.This cannula gently treats both the cause and appearance of depressed scars.Indented scars have fibrous tissue that develops under the injury, tethering the skin to underlying tissue and pulling it downwards.", link: '/shop/scarkit'}
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
    const [logined, setLogined] = useState(false)
    const [numScarkit, setNumScarkit] = useState(1)
    const [catalogEmail, setCatalogEmail] = useState('')
    const [enableQues, setEnableQues] = useState(new Array(specific_li.length - 1).fill(false));
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    
    const [enableSpecific, setEnableSpecific] = useState([true, ...new Array(specific_li.length - 1).fill(false)])
    const addToBagHandler = () => {
        let product_detail = scarkit
        product_detail.quantity = numScarkit
        dispatch(addProductToCart(product_detail))
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
    const downloadCatalogHandler = () => {
        if (validateEmail(catalogEmail)) {
            let mimetype = 'application/pdf';
            let filename = 'IntralineCatalog.pdf';

            // Create Dummy A Element
            let a = window.document.createElement('a');

            // createObjectURL for local data as a Blob type
            a.href = '/assets/catalog/intraline_catalog.pdf';
            a.download = filename;

            // Download file and remove dummy element
            document.body.appendChild(a);
            a.click();
            a.remove();
        }else {
            toast.error("Email error.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    const updateSpecParagraMobileHandler = (index: number) => {
        let new_array = [...enableQues]
        new_array[index] = !new_array[index]
        setEnableQues(new_array)
    }
    return(
        <div className="text-c_00080D flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="toast-container"
            />
            <div className="h-15 w-full bg-transparent"></div>
            <div className="relative bg-c_C3E0DC w-full flex flex-col">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer ttcommon_font
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">The Scar Kit</span>
                    </div>
                </div>
                <div className="my-auto w-9/12 mx-auto
                                mt-15 md:mt-0
                                block md:hidden">
                    <div className="relative aspect-h-1 aspect-w-1 bg-white rounded-full">
                        <div className="absolute w-full left-0 top-0">
                            {logined && <Button className="ttcommon_font_bold absolute right-15 top-5 h-9 w-32 text-lg" variant="primary">$100.00</Button>}
                        </div>
                        <div className="flex">
                            <Image className="transform scale-90" src={scarkitImg} alt="scarkit image" layout="fill"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full
                                mt-14 md:mt-20">
                    <div className="flex w-full h-full z-10
                                    pl-5 md:pl-15 xl:pl-172
                                    pr-5 md:pr-15">
                        <div className="flex-1 flex flex-col">
                            <div className="">
                                <div className="hidden md:block">
                                    <div className="ttcommon_font
                                                    text-6xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-200px
                                                    leading-14_17 xl:leading-200_160">Scar</div>
                                    <div className="md:text-9xl lg:text-9xl xl:text-200px
                                                    leading-14_17 xl:leading-200_160" ><span className="ttcommon_font_bold">Kit</span></div>
                                    
                                </div>
                                <div className="block md:hidden text-64px leading-none">
                                    <span className="ttcommon_font">Scar</span>
                                    <span className="ttcommon_font_bold"> Kit</span>
                                </div>
                                <div className="mt-5 leading-36_48
                                                text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">The Scar Kit, developed by aesthetics company Intraline, features a revolutionary new type of cannula, designed by Mr. Olivier Amar.</div>
                                <div className="mt-2 leading-14_26">This cannula gently treats both the cause and appearance of depressed scars. Indented scars have fibrous tissue that develops under the injury, tethering the skin to underlying tissue and pulling it downwards.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Weight: 500GR</span>
                                </div>}
                                {logined && <div className="mt-5 items-center h-12 text-white
                                                            block md:flex">
                                    <div className="bg-c_00080D flex items-center justify-center h-full
                                                    w-full md:w-24">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numScarkit}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="h-full
                                                    w-full md:w-52
                                                    ml-0 md:ml-3
                                                    mt-2_5 md:mt-0" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                        <div className="w-full my-auto
                                        max-w-xl
                                        ml-10 lg:ml-20 xl:ml-36
                                        hidden md:block">
                            <div className="relative aspect-h-1 aspect-w-1 bg-white rounded-full">
                                <div className="absolute w-full left-0 top-0">
                                    {logined && <Button className="ttcommon_font_bold absolute right-15 top-5 h-9 w-32 text-lg" variant="primary">$100.00</Button>}
                                </div>
                                <div className="flex">
                                    <Image className="transform scale-90" src={scarkitImg} alt="scarkit image" layout="fill"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-c_C3E0DC pb-15 pt-9">
                <div className="flex items-center justify-center">
                    <span className="uppercase tracking-widest">Scroll for more details</span>
                    <ChevronDown className="w-4 ml-4" />
                </div>
            </div>


            {/* question part */}
            <div className="bg-white w-full relative
                            hidden md:block">
                <div className="absolute h-full flex flex-col" style={{left: -244}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_F7F7F7 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Scar Kit</div>
                </div>
                <div className="mr-15 my-32 relative z-10
                                ml-15 xl:ml-172">
                    <div className="w-full flex items-center">
                        <div className="lg:w-7/12 xl:w-5/12
                                        md:pr-10 lg:pr-20">
                            <div className="mt-2 bg-c_CCE7EF pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-7_5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Specifics</div>
                                    <div className="leading-14_17 tracking-widest mt-7_5">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {specific_li.map((item, index) => {
                                            return <div key={`specific_${index}}`}>
                                                <button className={`text-4xl leading-36_48 ${index != 0 && 'mt-7_5'} ${enableSpecific[index] ? 'ttcommon_font_bold' : 'ttcommon_font'}`}
                                                    onClick={() => {updateSpecificDetail(index)}}>{item.title}</button>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="flex-1">
                            {specific_li.map((item, index) => {
                                return enableSpecific[index] && 
                                    <div>
                                        <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">{item.title}</div>
                                        <div className="mt-5 leading-14_26 whitespace-pre-wrap">{item.detail}</div>
                                    </div>
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* question part mobile */}
            <div className="bg-white w-full pb-15
                            block md:hidden">
                <div className="h-full flex flex-col">
                    <div className="my-auto ttcommon_font_bold text-c_F7F7F7 text-7xl leading-normal text-center">Scar Kit</div>
                </div>
                <div className="px-5">
                    <div className="w-full flex items-center">
                        <div className="w-full">
                            <div className="bg-c_F7F7F7 py-7_5 px-5 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-4xl leading-tight">Ingredients.</div>
                                    <div className="text-base leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {specific_li.map((item, index) => {
                                            return <div key={`ingredient_${index}`}>
                                                        <div className={`flex items-center w-full ${index != 0 ? 'mt-7' : ''}`}
                                                            onClick={() => {updateSpecParagraMobileHandler(index)}}>
                                                            <button className={`text-2xl leading-36_48 ${enableQues[index] && 'ttcommon_font_bold'}`} 
                                                                >{item.title}</button>
                                                            <div className={`ml-auto h-full ${enableQues[index] ? 'hidden' : 'block'}`}>
                                                                <ChevronDown />
                                                            </div>
                                                            <div className={`ml-auto h-full ${enableQues[index] ? 'block' : 'hidden'}`}>
                                                                <ChevronUp />
                                                            </div>
                                                        </div>
                                                        <div className={`${enableQues[index] ? 'block' : 'hidden'}`}>{item.detail}</div>
                                                               
                                                    </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div className=" bg-c_F5DBDD">
                <div className="my-30 flex flex-col
                                mx-5 md:mx-172">
                    <div className="ttcommon_font_bold leading-36_48
                                    text-2xl md:text-4xl">How the GTI Cannula works.</div>
                    <div className="mt-5 w-full">
                        <div className="w-full aspect-w-16 aspect-h-9">
                            <video width="100%" height="100%" controls autoPlay={true} muted={true} loop={true}>
                                <source src="/assets/video/scarkit-video.mp4" type="video/mp4" />
                            </video>
                        </div>
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
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                    px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
                        <div className="ttcommon_font_bold leading-36_26
                                        text-2xl sm:text-4xl">Download Our Catalog.</div>
                        <p className="mt-5
                                    text-xs sm:text-base 
                                    leading-14_26 sm:leading-14_26">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-7_5 sm:mt-10">
                            <Input type="text" placeholder="Your Email Address" onChange={setCatalogEmail}/>
                        </div>
                        <div className="mt-7_5 sm:mt-10">
                            <Button className="h-11 w-full" onClick={() => {downloadCatalogHandler()}}>SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

ScarKit.Layout = Layout