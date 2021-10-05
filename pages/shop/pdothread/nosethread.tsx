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



export default function NoseThread() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Dr Amrit Thiara,Intraline KOL Cosmetic Doctor and Trainer in Aesthetic Medicine Tiara Aesthetics',
            detail: 'Intraline One is a product I enjoy using for all of my tear trough filler treatments. I regularly perform these procedures and have tried a variety of competitor products but none compare to the consistency, and predictable results that Intraline One gives. With its minimally hydrophilic properties its ideal for use in tear troughs as post procedure little water retention/ attraction occurs, hence avoiding any "puffiness" in the area. Great durability thanks to its highly cross-linked nature means my clients have lasting results with excellent value for money.'
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
    const [numNoseThread, setNumNoseThread] = useState(1)
    const [enableSideReview, setEnableSideReview] = useState(false)
    const [logined, setLogined] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    const RenderFAQCollapse = () => {
        var items = [
            {
              'title': 'WHAT IS A PDO THREAD?',
              'detail': 'An Intraline PDO Thread treatment uses the highest quality CE market PDO (Polydioxanone). Threads which are specially designed for accurate insertion and effective dermal retention providing optimum results. Polydioxanone (PDO) has been used in medicine for over 30 years as sutures in both Cardiovascular and Orthopedic surgery due to its high degree of safety, predictability and reliability. PDO Threads are surgical threads made from Polydioxanone which is a colorless, crystalline, biodegradable synthetic polymer. Polydioxanone, the material in which the Threads are made up, once inserted into the skin tissue ultimately lift, tighten and rejuvenate the overall appearance of the skin.'
            },
            {
              'title': 'WHAT ARE THE BENEFITS OF PDO THREAD TREATMENTS?',
              'detail': 'The Intraline PDO Thread Treatment is designed to combat facial ageing, skin stress, asymmetry and other related concerns. Once inserted, the Intraline PDO Threads will form part of an integrated support structure for the tissue of the face and body due to collagen synthesis which biologically rejuvenates the quality of the skin and slows down the ageing process. Specifically, PDO Threads:\nImproved skin laxity and reduced pore size, enhancing overall skin tone.\nStimulation of the hypodermis, which increases the production of collagen, elastin and hyaluronic acid (HA), while accelerating skin metabolism.\nCollagen regeneration accelerates over time, improving the appearance of wrinkles and folds, enhancing elasticity and brightening the patient’s complexion of ageing skin.\nImproved blood and lymph circulation. The results show a significant improvement in the complexion and skin texture, providing a more relaxed, rested appearance.\nThe activation of the circulation and lymph channels help mobilize and eliminate fatty deposits.\nThe implanted threads stimulate the macrophagues. The stimulation of these cells result in a reduction in inflammation and a stimulation of the immune system, which aids in natural healing.'
            },
            {
              'title': 'HOW DO PDO THREAD’S WORK?',
              'detail': 'The treatment method is based on implanting the biodegradable, absorbable and nonallergenic medical “sutures”, otherwise known as threads into the skin that stimulate collagen production. The PDO Threads are slowly broken down and bio-absorbed naturally in the skin tissue over a four to six-month time period. Intraline PDO Threads have a powerful dual effect. The first is to provide immediate tightening of the skin. The second is to stimulate your body’s own ability to generate collagen, elastin and hyaluronic acid (HA). Collagen is a protein responsible for the tension and firmness of skin. Elastin is responsible for skin firmness and elasticity. HA causes the skin to rehydrate. Stimulating HA growth, resulting in improved skin moisture and the reduction of fine lines and wrinkles. An Intraline PDO Thread treatment is clinically proven to tighten, rejuvenate and restore sagging and loose skin, ultimately enhancing the integrity and appearance of the skin. '
            },
            {
              'title': 'WHO IS A GOOD CANDIDATE FOR A PDO THREAD TREATMENT?',
              'detail': 'The best candidates are men and women who are experiencing the appearance of drooping brow, lines to the forehead, skin laxity or skin sagging to the mid or lower face, visible jowls and loose skin to the neck and other areas of the body. he Thread treatment is intended for men and women age 30 and above.'
            },
            {
              'title': 'WHEN WILL A NOTICE THE RESULTS?',
              'detail': 'The Intraline PDO Thread treatment results will depend on the patient’s age, lifestyle, medical background and skin quality. You will notice some visible results immediately after treatment, however results will improve over of a period of 2 to 6 weeks as the Intraline PDO Threads will stimulate the body’s natural ability to produce new collagen, elastin and hyaluronic acid (HA).'
            },
            {
                'title': 'HOW LONG WILL THE RESULTS OF MY PDO THREAD TREATMENT LAST?',
                'detail': 'The Intraline PDO Threads will gradually bio-absorb over a 6 month period leaving your skin younger and more radiant, lasting on average for 12-18 months. For longer lasting results it is recommended to have additional threads injected at regular intervals after the initial treatment. Your clinician can advise you on the appropriate timing for additional injections.'
            },
            {
                'title': 'HOW SHOULD I PREPARE FOR A PDO THREAD TREATMENT?',
                'detail': 'Generally, we recommend speaking with your clinician on specifics of before treatment care. However, we have created a list of best practice here.\nAvoid taking any anti-inflammatory medications for 24 hours\nAvoid taking Vitamins C & E for 10 days\nDo not exercise for at least 24 hours\nDo not drink alcohol for at least 24 hours\nThe Intraline PDO Thread treatment must be carried out by a qualified and trained medical\npractitioner\nIf you are having a treatment prior to an event, discuss your scheduling needs with your\npractitioner to allow for sufficient recovery time'
            },
            {
                'title': 'WHAT CAN I EXPECT DURING MY TREATMENT?',
                'detail': 'Come prepared to your appointment by following any instructions provided to you by your clinician during your consultation. Your clinician will clean the injection site thoroughly. You can expect to experience some mild discomfort at the injection site during your treatment, but most sensation will be numbed by the use of local and/or topical anesthetic which will be applied prior to your treatment. Threads are inserted through needles, if barbed threads are used these cogs or barbs will grasp, lift and suspend the skin. Needles are withdrawn and tissue is gathered over the threads. The excess thread is cut at the end of the treatment.'
            },
            {
                'title': 'WHAT CAN I EXPECT AFTER MY TREATMENT?',
                'detail': 'You can expect to feel some mild discomfort at the injection site after the treatment. Your clinician will provide you a list of “Do’s and Don’ts” for post-treatment care which will be outlined in the aftercare card. Follow these instructions carefully to avoid excess bruising and swelling, and to guarantee the best possible results. In order to maximize results and decrease recovery time it is essential that you read, understand and follow the Intraline PDO Thread aftercare leaflet provided by your clinician.'
            },
            {
                'title': 'WHAT IS THE RECOVERY TIME FOR AN PDO THREAD TREATMENT?',
                'detail': 'The Intraline PDO Thread treatment is a minimally invasive procedure and requires little recovery time. Side effects may include bruising, swelling and mild discomfort. Your practitioner may advise you to take medications (pre or post treatment) to reduce the chances of infection or complications.'
            },
            {
                'title': 'WHAT ARE THE RISKS OR POTENTIAL COMPLICATIONS OF A PDO THREAD TREATMENT?',
                'detail': 'PDO thread lifting is a relatively new procedure, however, results continue to improve as aesthetic practitioners become more and more experienced. Some risks and complications associated with treatment are \nAsymmetry\nThreads become visible underneath their skin shortly after the procedure\nRippling\nLack of sensitivity or numbness in the treated area, which usually subsides within weeks of the procedure\nInfection in the treatment area, however this is a less frequent complication.We recommend that all patients interested in a PDO Thread lift source a clinician that has professional and accredited PDO Thread Training to avoid risks or complications.'
            },
        ]
        return <FAQCp faq_li={items}/>
    }

    const ShowEnableSideReview = (bool_var: boolean) => {
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "hidden"
        setEnableSideReview(bool_var)
    }
    const CloseSideReview = (bool_bar:boolean) => {
        setEnableSideReview(bool_bar);
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "auto"
    }

    const addToBagHandler = () => {
        dispatch(addProductToCart({title: 'Dimension Nose PDO', amount: numNoseThread, price: 100, img: '/assets/img/thread_detail.png'}))
    }
    const decreaseNumHandler = () => {
        if (numNoseThread > 1) {
            setNumNoseThread(numNoseThread - 1)
        }else {
            setNumNoseThread(1)
        }
    }
    const increaseNumHandler = () => {
        setNumNoseThread(numNoseThread + 1)
    }

    const renderPDOThreads = () => {
        var items = [0, 1, 2]
        return items.map((item, index) => {
            return <div className="flex flex-col pt-9 pb-12_5 bg-white relative hover:bg-opacity-50" 
                        key={'m' + String(index + 1) + '-product'} style={{height: 472}}>
                        <div className="flex-1 h-0">
                            <img className="mix_blend_multi mx-auto h-full" src="/assets/img/lifting-1-1.png" alt="" />
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">Dimension Nose</div>
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
                    <div className="flex items-center cursor-pointer
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1"><Link href="/shop/pdothread">Pdo threads</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1"><Link href="/shop/pdothread/liftingthread">Lifting threads</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Dimension Nose PDO</span>
                    </div>
                </div>
                <div className="mt-28 mb-15 flex flex-col h-full">
                    <div className="flex my-auto w-full h-full z-10">
                        <div className="w-6/12 flex flex-col ml-172">
                            <div className="">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">The Dimension</div>
                                <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold mt-7" ><span className="ttcommon_font_bold">Nose</span></div>
                                <div className="ttcommon_font mt-5 text-4xl leading-36_48">Lorem ipsum doloris secantum.</div>
                                <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Dimension Nose has a single premium molded cogged PDO filament. With maximum strenght and hold, ultra thin walls and w-type silicone-coated cannula for ease of insertion, the Dimension Nose PDO Threads are lorem ipsum doloris.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 1.1ML</span>
                                </div>}
                                {logined && <div className="mt-5 flex items-center h-11 text-white">
                                    <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numNoseThread}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="ml-3 w-52 h-full text-sm" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
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
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Nose PDO</div>
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
                                        <Button className="h-full flex-1 text-sm">BUY Nose PDO NOW</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Amongst the Nose's effects we can find lifting of the skin, immediate tightening, scaffolding, new collagen production, versatile and correction of fine wrinkles.</div>
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">Dimension Nose Offerings.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">We have 2 different SKU’s of the Dimension Nose, they are differenciated by the length of the cannula, the length of the thread and the gauge of the cannula.</div>
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
                testimonial_li={testimonial_li}/>

            
            
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

NoseThread.Layout = Layout 