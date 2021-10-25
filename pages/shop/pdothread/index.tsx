import React, {useState} from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/common'
const KeenSliderB = dynamic(import('@components/mycp/KeenSlider/KeenSliderB'))
const TestimonialCp = dynamic(import('@components/mycp/TestimonialCp/TestimonialCp'))
const Button = dynamic(import('@components/mycp/Button'))
const Input = dynamic(import('@components/mycp/Input'))
const ChevronDown = dynamic(import('@components/icons/ChevronDown'))
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const ChevronUp = dynamic(import('@components/icons/ChevronUp'))
const Plus = dynamic(import('@components/icons/Plus'))
const Link = dynamic(import('@components/ui/Link'))
const SelectInput = dynamic(import('@components/mycp/SelectInput'))
const Checkbox = dynamic(import('@components/mycp/Checkbox'))

import { useRouter } from 'next/router'
import {useSpring, animated, useTransition} from '@react-spring/web'
import { validateEmail } from '@utils/simpleMethod'
const Image = dynamic(import('next/image'))




export default function PDOThread() {
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
    let pdo_question_li = [
        {
            title: 'What is PDO?', 
            detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin."
        },
        {
            title: 'What are PDO Threads?', 
            detail: "PDO Thread lifting is a general term which applies to the use of PDO (polydioxanone) sutures to effect an aesthetic benefit that lifts and tightens sagging skin tissues through mechanical lifting and by inducing collagen production. The two main treatment types are skin rejuvenation which relies on collagen production to increase skin health and elasticity for a tighter tone, and lifting treatments which use barbed threads to physically lift/tighten the skin immediately while the long term benefits take time to kick in."
        },
        {
            title: 'What is a PDO Treatment?', 
            detail: "PDO Threads are placed in or just under the skin to stimulate the production of your own collagen, elastin, and hyaluronic acid. They also stimulate the development of new blood vessels and improve lymphatic drainage, giving way to better skin quality with a smoother, brighter, appearance. The results start immediately and will continue to improve for 6-8 months, ultimately lasting up to 18 months. The insertion of the threads will also provide a small amount of lifting and tightening to the skin."
        },
        {
            title: "PDO FAQ's.", 
            detail: "Visit our PDO Frequently asked questions page to learn about treatments, care & more."
        },
    ]
    const [enablePDOQues, setEnablePDOQues] = useState([true, ...new Array(pdo_question_li.length - 1).fill(false)])
    const [f_name, setFName] = useState('')
    const [l_name, setLName] = useState('')
    const [cName, setCName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [enableQuesMobile, setEnableQuesMobile] = useState(new Array(pdo_question_li.length - 1).fill(false));
    const [enableQues, setEnableQues] = useState([true, ...new Array(pdo_question_li.length - 1).fill(false)])
    const router = useRouter()
    const [enableQuesAni, setEnableQuesAni] = useState(false)
    const transitions = useTransition(enableQues, {
        keys: enableQues,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 }
    })
    const fade_in_out_spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500
    })
    const [emailValiObj, setEmailValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [fnameValiObj, setFNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [lnameValiObj, setLNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})
    const [cnameValiObj, setCNameValiObj] = useState({enableValiMsg: false, valiMsgText: ''})

    const getEmailHandler = (str: string) => {
        setEmail(str)
        if (str === '') {
            setEmailValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else if (!validateEmail(str)) {
            setEmailValiObj({enableValiMsg: true, valiMsgText: 'Email is incorrect.'})
        }else {
            setEmailValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getFNameHandler = (str: string) => {
        setFName(str)
        if (str === '') {
            setFNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setFNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getLNameHandler = (str: string) => {
        setLName(str)
        if (str === '') {
            setLNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setLNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }
    const getCNameHandler = (str: string) => {
        setCName(str)
        if (str === '') {
            setCNameValiObj({enableValiMsg: true, valiMsgText: 'Required.'})
        }else {
            setCNameValiObj({enableValiMsg: false, valiMsgText: ''})
        }
    }

    const updatePDOQuesHandler = (index:number) => {
        let new_array = new Array(enablePDOQues.length).fill(false)
        new_array[index] = true
        setEnableQues(new_array)
    }

    const updatePDOQuesMobileHandler = (index: number) => {
        let new_array = [...enableQuesMobile]
        new_array[index] = !new_array[index]
        setEnableQuesMobile(new_array)
    }

    const renderPDOThreadSwiper = () => {
        let pdothread_li = [
            {title: 'Lifting Threads', img: '/assets/img/lifting_thread_1.webp', link: '/shop/pdothread/liftingthread'},
            {title: 'Rejuvenation Threads', img: '/assets/img/lifting_thread_1.webp', link: '/shop/pdothread/rejuvenation'}
        ]
        let render_ele = pdothread_li.map((item, index) => {
            return <div className="keen-slider__slide flex flex-col relative group" 
                        key={`m_${index}_product`}>
                        <div className="">
                            <div className="w-full">
                                <div className="w-full image-container">
                                    <Image src={item.img} alt={`category_img_${index}`} className={'image'} layout="fill" />
                                </div>
                            </div>
                        </div>
                        <div className="uppercase text-2xl leading-24_29 text-center">{item.title}</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100">
                            <button className="my-auto mx-auto w-20 h-20 flex justify-center items-center bg-c_00080D rounded-full text-white"
                                    onClick={() => {router.push(item.link)}}>
                                <Plus />
                            </button>
                            <div className="text-center">Know More</div>
                        </div>
                    </div>
                    
        })
        return <KeenSliderB 
                    render_ele={render_ele} 
                    slidesPerView={[1,1,1,1,1]} 
                    enableDot={true} 
                    prevNavCss={"my-auto"} 
                    nextNavCss={"my-auto"}
                    dotCss={"mt-7_5"}/>
    }

    const scrollToBottomHandler = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    return(
        <div className="text-c_00080D ttcommon_font
                        mt-16 md:mt-0">
            <div className="bg-transparent w-full h-15"></div>
            <div className="relative bg-white w-full flex-col flex">
                <div className="absolute w-full h-full flex">
                    <div className="flex-1 h-full"></div>
                    <div className="h-full
                                    w-full sm:8/12 md:w-1/2
                                    bg-white sm:bg-c_F5DBDD"></div>
                </div>
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest relative">
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold"><Link href="/shop/pdothread">PDO Threads</Link></span>
                    </div>
                </div>
                <div className="z-10 flex flex-col h-full mb-15">
                    <div className="w-full h-full
                                    px-0 sm:px-10 md:px-15 lg:px-15 xl:px-15 2xl:px-15
                                    block sm:flex">
                        <div className="flex flex-col
                                        w-full md:w-7/12
                                        sm:mt-20 md:mt-30 xl:mt-30
                                        px-5 sm:px-0">
                            <div className="">
                                <div className="ttcommon_font
                                                text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                leading-14_17 md:leading-200_160 lg:leading-200_160 xl:leading-200_160">PDO</div>
                                <div className="ttcommon_font_bold
                                                text-6xl sm:text-7xl md:text-7xl lg:text-9xl xl:text-200px
                                                leading-14_17 md:leading-200_160 lg:leading-200_160 xl:leading-200_160" >Threads</div>
                                <div className="leading-36_48 mt-8 mx-auto
                                                max-w-none md:max-w-134_5
                                                text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">An excellent treatment option for combatting facial ageing, skin stress, and other related concerns.</div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <div className='relative mx-auto
                                            w-full sm:w-70 md:w-100'>
                                <div className='px-5 sm:px-0'>
                                    {renderPDOThreadSwiper()}
                                </div>
                                <div className="absolute top-15 bg-c_F5DBDD h-full w-full
                                                block sm:hidden"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer mt-5">
                        <a href='#pdo_thread_catalog' className='flex items-center'>
                            <span className="uppercase tracking-widest">Scroll for more details</span>
                            <ChevronDown className="w-4 ml-4" />
                        </a>
                    </div>
                </div>
                {/* <div className="absolute top-0 right-0 w-5/12">
                    <div className="flex flex-col ml-auto mr-15 h-120_5">
                        <div className="my-auto">
                            {renderPDOThreadSwiper()}
                        </div>
                    </div>
                </div> */}
            </div>


            

            <div id='pdo_thread_catalog' className="bg-white relative z-10">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold text-center
                                    text-2xl md:text-4xl
                                    leading-none md:leading-36_26">Polydioxanone Threads.</div>
                    <p className="leading-36_48 mt-6 text-center
                                px-5 md:px-15
                                text-2xl md:text-4xl">Intraline’s PDO threads are CE marked with an excellent safety profile and virtually non-allergenic. PDO suture use has nearly 40 years of medical history supporting its use.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64">Browse catalog</Button>
                    </div>
                </div>
            </div>


            
            


            {/* cart part */}
            <div className="bg-c_CCE7EF w-full relative
                            hidden md:block">
                <div className="absolute h-full flex flex-col" style={{left: -470}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_99CEE0 text-200px leading-200_160" 
                        style={{transformOrigin: 'center'}}>PDO Threads</div>
                </div>
                <div className="pr-15 py-60 relative z-10
                                pl-15 xl:pl-172">
                    <div className="w-full flex items-center">
                        <div className="lg:w-7/12 xl:w-6/12
                                        md:pr-10 lg:pr-20">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-7_5">
                                    <div className="ttcommon_font_bold leading-64_76
                                                    text-2xl md:text-4xl lg:text-5xl xl:text-6xl">PDO Threads.</div>
                                    <div className="text-base leading-14_17 tracking-widest mt-7_5">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {pdo_question_li.map((item, index) => {
                                            return <div className={`flex items-start w-full ${index != 0 ? 'mt-7' : ''}`} key={`ingredient_${index}`}>
                                                        <button className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-36_48 ${enableQues[index] && 'ttcommon_font_bold'}`} 
                                                                onClick={() => {updatePDOQuesHandler(index)}}>{item.title}</button>
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="flex-1">
                            {pdo_question_li.map((item, index) => {
                                return <div key={`ingredient_detail_${index}`} className={`${enableQues[index] ? 'block' : 'hidden'}`}>
                                        <animated.div style={fade_in_out_spring}>
                                            <div className="ttcommon_font_bold text-4xl leading-36_48">{item.title}</div>
                                            <div className="mt-5 leading-14_26 whitespace-pre-wrap max-w-128">{item.detail}</div>
                                        </animated.div>
                                            
                                        
                                        {/* <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_48">{item.title}</div>
                                        <div className="mt-5 leading-14_26 whitespace-pre-wrap max-w-128">{item.detail}</div> */}
                                    </div>
                            })}
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* cart part mobile */}
            <div className="bg-c_CCE7EF w-full pb-15
                            block md:hidden">
                <div className="h-full flex flex-col">
                    <div className="my-auto ttcommon_font_bold text-c_99CEE0 text-7xl leading-normal text-center whitespace-nowrap overflow-x-hidden">PDO Threads</div>
                </div>
                <div className="px-5">
                    <div className="w-full flex items-center">
                        <div className="w-full">
                            <div className="bg-white py-7_5 px-5 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-4xl leading-tight">PDO Threads.</div>
                                    <div className="text-base leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {pdo_question_li.map((item, index) => {
                                            return <div key={`ingredient_${index}`}>
                                                        <div className={`flex items-center w-full ${index != 0 ? 'mt-7' : ''}`}
                                                            onClick={() => {updatePDOQuesMobileHandler(index)}}>
                                                            <button className={`text-2xl leading-36_48 ${enableQuesMobile[index] && 'ttcommon_font_bold'}`} 
                                                                >{item.title}</button>
                                                            <div className={`ml-auto h-full ${enableQuesMobile[index] ? 'hidden' : 'block'}`}>
                                                                <ChevronDown />
                                                            </div>
                                                            <div className={`ml-auto h-full ${enableQuesMobile[index] ? 'block' : 'hidden'}`}>
                                                                <ChevronUp />
                                                            </div>
                                                        </div>
                                                        <div className={`${enableQuesMobile[index] ? 'block' : 'hidden'}`}>{item.detail}</div>
                                                               
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>


            
            {/* Testimonials */}
            <div className="relative">
                <TestimonialCp
                    head_line={"Testimonials."} 
                    bg_color={"bg-white"} 
                    quote_color={"#F5DBDD"} 
                    testimonial_li={testimonial_li}/>
            </div>

            
            
            {/* Question part */}
            <div className=" bg-c_C6CBDD">
                <div className="mx-auto
                                py-15 md:py-25
                                px-5 md:px-0
                                w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold
                                        leading-none md:leading-36_26
                                        text-2xl md:text-4xl">Any more questions?</div>
                        <p className="leading-14_26
                                        mt-2_5 md:mt-5">We are here to help --- reach out with any questions.</p>
                        <div className="mt-7_5 md:mt-10">
                            <Input 
                                className='bg-white' 
                                type="text" 
                                placeholder="First Name"
                                enableValiMsg={fnameValiObj.enableValiMsg}
                                valiMsgText={fnameValiObj.valiMsgText}
                                onChange={getFNameHandler}/>
                        </div>
                        <div className="mt-5">
                            <Input 
                                className='bg-white' 
                                type="text" 
                                placeholder="Last Name"
                                enableValiMsg={lnameValiObj.enableValiMsg}
                                valiMsgText={lnameValiObj.valiMsgText}
                                onChange={getLNameHandler}/>
                        </div>
                        <div className="mt-5">
                            <Input 
                                className='bg-white' 
                                type="text" 
                                placeholder="Company Name"
                                enableValiMsg={cnameValiObj.enableValiMsg}
                                valiMsgText={cnameValiObj.valiMsgText}
                                onChange={getCNameHandler}/>
                        </div>
                        <div className="mt-5">
                            <Input 
                                className='bg-white' 
                                type="text" 
                                placeholder="Email" 
                                enableValiMsg={emailValiObj.enableValiMsg}
                                valiMsgText={emailValiObj.valiMsgText}
                                onChange={getEmailHandler}/>
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
                            <div className="leading-14_17">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font_bold underline mr-2">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                        </div>
                        <div className="mt-5">
                            <Checkbox id="pdo_thread_checkbox" type="checkbox" defaultChecked={true} className="ttcommon_font" label="I agree to receive other communications from Intraline."></Checkbox>
                        </div>
                        <div className="leading-14_17 text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-7_5">
                            <Button className="h-11 w-full">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

PDOThread.Layout = Layout