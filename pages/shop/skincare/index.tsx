import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/common'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
const Button = dynamic(import('@components/mycp/Button'))
import Link from '@components/ui/Link'
import { getCookie } from '@utils/cookie'
import { AddToCartByDom } from '@utils/addToCartByDom'
import router from 'next/router'
import Image from 'next/image'



const RenderFAQCollapse = () => {
    var items = [
      {
        'title': 'What is the Masque made of?',
        'detail': 'Intraline’s Masques are made of biocellulose sheets instead of paper products, this helps to increase adherence onto your face as well as absorption. The masque has three main ingredients, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits you can add into your weekly skin routine and complements Intraline Lifestyle Aesthetics other treatments available like our Dermal Fillers. The masques are also enriched with powerful anti-ageing plant complexes, Oldenlandiae Herba, Pomegranate, Peony, Snow Lotus Extract, and Vitamin E that intensely moisturize, renew and rejuvenate the skin.'
      },
      {
        'title': 'How often should I be using the Masque?',
        'detail': 'We recommend using our masque weekly. Additionally. It is great to use directly after a Dermal Filler to PDO Thread Treatment.'
      },
      {
        'title': 'What is Hyaluronic Acid?',
        'detail': 'Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the skin creates volume and elasticity. HA is a naturally occurring sugar found in virtually all species in the animal kingdom and in every tissue of the human body. Just a single gram of Hyaluronic Acid has the ability to hold up to six litres of water.\nThe skin has three layers: The Epidermis, Dermis, and Subcutaneous. The Epidermis is the outer layer, containing cells that are continually renewed. The Dermis is the middle layer, containing Collagen (which provides support to the skin) and Elastin (which provides strength and flexibility). The Subcutaneous is the deepest layer of the skin, and has the job of supporting the two layers above it. HA is naturally found throughout all three layers of the skin. However, as you age, your skin cells renew themselves at a slower rate, providing less HA, Collagen, and Elastin, causing the skin to thin. In combination with external elements such as sun exposure, gravity, repetitive movement, diet, and stress, the skin loses volume, sags, and develops fine lines'
      },
      {
        'title': 'What is Niacinamide?',
        'detail': 'Niacinamide is also known as vitamin B3 and nicotinamide. This water-soluble vitamin combines and works with the natural substances in your skin to help to improve the visible look of enlarged pores, uneven skin tone, fine lines and wrinkles, dullness, and a weakened surface'
      },
      {
        'title': 'What is Snow Lotus Extract?',
        'detail': 'Extractions from a snow lotus is both natural and pure in its form. This product effectively delays skin aging and helps the skin absorb and lock in moisture. Ultimately, giving you long-lasting moisturize to help avoid dry and rough skin.'
      },
      {
        'title': 'How do I use the masque?',
        'detail': 'Clean and dry your face, remove the masque and unfold it to remove the protective layer. Then apply the masque gently to your face. You may need to adjust the masque so it contours to your face. Leave the masque on for 10-20 minutes to allow product to fully absorb into the skin. Once you remove the masque massage leftover material into the skin.'
      },
      {
        'title': 'What skin type if the moisturizer designed for?',
        'detail': 'Intraline’s Restorative Moisturizer is formulated for all skin types, Intraline’s cream features high molecular density Hyaluronic Acid and Sea Buckthorn berry oil, which benefit skin elasticity, water retention, and hydration.'
      },
      {
        'title': 'How often should I use the Restorative Moisturizer?',
        'detail': 'For best results, it is recommended that Intraline’s Restorative Moisturizer be applied to a clean face 1–2 times per day. Regular use may help reduce the effects of ageing due to environmental factors. If irritation occurs, please discontinue use and ensure one avoids contact with eyes.'
      },
      {
        'title': 'What is Sea Buckthorn?',
        'detail': 'Sea Buckthorn is known to aid in alleviating sunburns; healing wounds, including burns & cuts; treating acne, dermatitis, dry skin, eczema, and changes in skin colour; and for protecting mucus membranes. Sea Buckthorn Berries contain over 190 biologically active compounds. They have vitamins B1, B2, K, C (15 times more than an orange), A (3 times more than a carrot), E, and Folic Acid. Sea Buckthorn Berries have over 60 antioxidants and over 20 minerals. They are full of carotenoids, xanthophylls, phenolics, and flavonoids. Perhaps, one of their biggest benefits is their high concentrations of fatty acids including, Omega-3, 6, 9 and the rare Omega-7. Omega-7 fatty acid makes up approximately 40 percent of the berry and is typically only found in fish oil.'
      },
      {
        'title': 'What are carotenoids, xanthophylls, phenolics, and flavonoids?',
        'detail': 'Carotenoids- Carotenoids act as antioxidants for the skin, they protect your skin from UV light exposure, and improve the tone and brightness of your skin and promote firmness. \nXanthophylls - Xanthophylls are yellow pigments that occur widely in nature and are one of the two divisions of the carotenoid group. Xanthophylls stimulates collagen and elastin production which can help repair and regenerate the skin.\nPhenolics – Phenol is sometimes used in chemical peels as it is great to used to penetrate through layers of skin to get rid of old or damaged skin.\nFlavonoids - They are often responsible for the colors in many fruits, vegetables, and flowers. In plants, these pigments protect plants from environmental stress as they are potent antioxidants. Flavonoids are important in cosmetics as they provide strong antioxidant protection and protection from UV radiation for our skin'
      },
      {
        'title': 'What is Hyaluronic Acid (HA)?',
        'detail': 'Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the skin creates volume and elasticity. HA is a naturally occurring sugar found in virtually all species in the animal kingdom and in every tissue of the human body. Just a single gram of Hyaluronic Acid has the ability to hold up to six litres of water.\nThe skin has three layers: The Epidermis, Dermis, and Subcutaneous. The Epidermis is the outer layer, containing cells that are continually renewed. The Dermis is the middle layer, containing Collagen (which provides support to the skin) and Elastin (which provides strength and flexibility). The Subcutaneous is the deepest layer of the skin, and has the job of supporting the two layers above it. HA is naturally found throughout all three layers of the skin. However, as you age, your skin cells renew themselves at a slower rate, providing less HA, Collagen, and Elastin, causing the skin to thin. In combination with external elements such as sun exposure, gravity, repetitive movement, diet, and stress, the skin loses volume, sags, and develops fine lines.'
      },
      
    ]
    return <FAQCp faq_li={items}/>
}



export default function SkinCare() {
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
    let skincare_li = [
        {title: "Restorative Moisturizer", price: 30, amount: 1, img: "/assets/img/skincare1.webp", link: "/shop/skincare/moisturizer", detail: "Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration."},
        {title: "Biocellulose Masque", price: 30, amount: 1, img: "/assets/img/skincare2.webp", link: "/shop/skincare/masque", detail: "Intraline’s Biocellulose Masque features a natural biocellulose sheet, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits and immerses your skin in intense moisture."},
    ]
    let skincare_li_another_bg = [
        {id: 'product_0000-000000-0016', title: 'MOISTURIZER', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/moisturizer.webp', detail: "Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.", link: '/shop/skincare/moisturizer'},
        {id: 'product_0000-000000-0017', title: 'MASQUE', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/masque.webp', detail: "Intraline’s Biocellulose Masque features a natural biocellulose sheet, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits and immerses your skin in intense moisture.", link: '/shop/skincare/masque'},
    ]
    let question_li = [
        {
            title: 'Sea Buckthorn.', 
            detail: 'Sea Buckthorn is known to aid in alleviating sunburns, healing wounds, including burns & cuts, treating acne, dermatitis, dry skin, eczema, and changes in skin colour;,and for protecting mucus membranes. Sea Buckthorn contains vitamins A, B1, B2, B6, and C, as well as Hyaluronic Acid and several other active ingredients.'
        },
        {
            title: 'Hyaluronic Acid.', 
            detail: 'Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the skin creates volume and elasticity. HA is a naturally occurring sugar found in virtually all species in the animal kingdom and in every tissue of the human body.'
        },
        {
            title: 'Vitamin A, B & C.', 
            detail: 'Vitamin A: Reduces oily skin\nVitamin B1: Develops myelin sheaths (protective covering of the nerves)\nVitamin B2: Helps with dry and itchy skin\nVitamin B6: Helps prevent and treat acne\nVitamin C: Reduces brown spots, boosts healthy collagen'
        },
        {
            title: 'Vitamin B3.', 
            detail: 'Brightens Dark Spots and Blemishes and soothes dull looking skin. Vitamin B3 allows superior absorption of the essential ingredients to intensely hydrate, stressed dehydrated skin. Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the creates volume and elasticity.'
        },
        {
            title: 'Skincare FAQ’s.', 
            detail: 'Skincare FAQ’s is known to aid in alleviating sunburns, healing wounds, including burns & cuts, treating acne, dermatitis, dry skin, eczema, and changes in skin colour;,and for protecting mucus membranes. Sea Buckthorn contains vitamins A, B1, B2, B6, and C, as well as Hyaluronic Acid and several other active ingredients.'
        },
    ]
    const [logined, setLogined] = useState(false)
    const [enableQues, setEnableQues] = useState(new Array(question_li.length - 1).fill(false));

    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    const addToCartByDom = new AddToCartByDom(skincare_li_another_bg)
    const addToBagHandler = (event:React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.addToBagHandler(event, index)
    }
    const decreaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    
    }
    const increaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }

    const loginToPurchaseHandler = () => {
        router.push('/account/login')
    }

    
    const [enableIngredient, setEnableIngredient] = useState([true, ...new Array(question_li.length - 1).fill(false)])
    const updateIngredientParagraHandler = (index:number) => {
        let new_array = new Array(enableIngredient.length).fill(false)
        new_array[index] = true
        setEnableIngredient(new_array)
    }
    const updateIngredientParagraMobileHandler = (index: number) => {
        let new_array = [...enableQues]
        new_array[index] = !new_array[index]
        setEnableQues(new_array)
    }
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col
                        mt-16 md:mt-0">
            <div className="w-full h-15 bg-transparent"></div>
            <div className="bg-c_C6CBDD w-full pb-32 flex flex-col
                            h-160 sm:h-160 md:h-160 lg:h-175 xl:h-210 2xl:h-210
                            px-5 sm:px-15">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="mr-1">Shop</span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">Skin Care</span>
                    </div>
                </div>
                <div className="flex items-end w-full
                                mt-16 sm:mt-10 md:mt-15 lg:mt-28">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold
                                        leading-none xl:leading-200_160
                                        text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px">Skin</div>
                        <div className="ttcommon_font_bold
                                        leading-none xl:leading-200_160
                                        text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px" >Care</div>
                    </div>
                    <div className="max-w-128 w-1/2 ttcommon_font_thin
                                    hidden md:block
                                    text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                        Immerse your skin in intense moisture while smoothing, tightening & rejuvenating.
                    </div>
                </div>
                <div className="max-w-128 ttcommon_font_thin
                                block md:hidden
                                mt-5 md:mt-0
                                text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                    Immerse your skin in intense moisture while smoothing, tightening & rejuvenating.
                </div>
            </div>

            <div className="bg-transparent w-full
                            pb-10 md:pb-20 lg:pb-25">
                <div className="w-full grid gap-x-5 -mt-56
                                grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                                px-5 sm:px-15">
                    {skincare_li.map((item, index) => {
                        return <div className="mb-10 md:mb-0" key={`skincare_${index}`}>
                                    <div className="leading-36_48 ttcommon_font_bold text-c_00080D
                                                    text-2xl xl:text-4xl 2xl:text-4xl">{item.title}.</div>
                                    <div className="relative bg-c_F5DBDD w-full border-none aspect-w-8 aspect-h-5
                                                    mt-5 md:mt-10">
                                        <div className="flex h-full justify-center">
                                            <div className="w-full h-full relative flex justify-center items-center">
                                                {/* <div className="w-full h-full absolute top-0 left-0">
                                                    <div className="w-9/12 aspect-h-1 aspect-w-1 mx-auto">
                                                        <div className="w-full bg-c_F297F6"></div>
                                                    </div>
                                                </div> */}
                                                <Image className="transform scale-x-50 scale-y-75" src={item.img} alt="" layout="fill" />
                                                <div className="absolute top-0 right-0">
                                                    {logined && <Button variant="primary" className="h-9 w-30 ttcommon_font_bold text-lg leading-36_48">${item.price}</Button>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                            <div className="my-auto mx-auto w-10/12">
                                                <div className="flex flex-col text-white w-64 mx-auto">
                                                    <Link href={item.link}>
                                                        <Button className="h-11 w-full">learn more</Button>
                                                    </Link>
                                                    {logined && <div className="mt-2 flex items-center h-12 text-white">
                                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumHandler(event)}}>-</button>
                                                            <div className="mx-auto">1</div>
                                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumHandler(event)}}>+</button>
                                                        </div>
                                                        <Button className="ml-3 flex-1 h-full" onClick={(event) => {addToBagHandler(event, index)}}>Add to bag</Button>
                                                    </div>}
                                                    {!logined && 
                                                        <div className="mt-2 flex items-center h-11 text-white">
                                                            <Button className="h-full w-full" onClick={(event) => {loginToPurchaseHandler()}}>Login in to purchase</Button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="ttcommon_font_thin mt-8 text-c_00080D
                                                    text-xl md:text-2xl">{item.detail}</div>
                                </div>
                    })}
                    
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_CCE7EF w-full relative
                            hidden md:block">
                <div className="absolute h-full flex flex-col" style={{left: -283}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_99CEE0 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Skincare</div>
                </div>
                <div className="mr-15 my-32 relative z-10
                                ml-15 xl:ml-172">
                    <div className="w-full flex items-center">
                        <div className="lg:w-7/12 xl:w-5/12
                                        md:pr-10 lg:pr-20">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-7_5">
                                    <div className="ttcommon_font_bold leading-64_76
                                                    text-2xl md:text-4xl lg:text-5xl xl:text-6xl">Ingredients.</div>
                                    <div className="text-base leading-14_17 tracking-widest mt-7_5">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {question_li.map((item, index) => {
                                            return <div className={`flex items-start w-full ${index != 0 ? 'mt-7' : ''}`} key={`ingredient_${index}`}>
                                                        <button className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-36_48 ${enableIngredient[index] && 'ttcommon_font_bold'}`} onClick={() => {updateIngredientParagraHandler(index)}}>{item.title}</button>
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="flex-1">
                            {question_li.map((item, index) => {
                                return enableIngredient[index] && <div key={`ingredient_detail_${index}`}>
                                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_48">What is {item.title}?</div>
                                            <div className="ttcommon_font_thin mt-5 leading-14_26 whitespace-pre-wrap max-w-128">{item.detail}</div>
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
                    <div className="my-auto ttcommon_font_bold text-c_99CEE0 text-7xl leading-normal text-center">Skincare</div>
                </div>
                <div className="px-5">
                    <div className="w-full flex items-center">
                        <div className="w-full">
                            <div className="bg-white py-7_5 px-5 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-4xl leading-tight">Ingredients.</div>
                                    <div className="text-base leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {question_li.map((item, index) => {
                                            return <div key={`ingredient_${index}`}>
                                                        <div className={`flex items-center w-full ${index != 0 ? 'mt-7' : ''}`}
                                                            onClick={() => {updateIngredientParagraMobileHandler(index)}}>
                                                            <button className={`text-2xl leading-36_48 ${enableQues[index] && 'ttcommon_font_bold'}`} 
                                                                >{item.title}</button>
                                                            <div className={`ml-auto h-full ${enableQues[index] ? 'hidden' : 'block'}`}>
                                                                <ChevronDown />
                                                            </div>
                                                            <div className={`ml-auto h-full ${enableQues[index] ? 'block' : 'hidden'}`}>
                                                                <ChevronUp />
                                                            </div>
                                                        </div>
                                                        <div className={`ttcommon_font_thin ${enableQues[index] ? 'block' : 'hidden'}`}>{item.detail}</div>
                                                               
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>



            {/* testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#C6CBDD"} 
                testimonial_li={testimonial_li}/>

            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="py-15 sm:py-24
                                mx-5 sm:mx-5 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                    
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold text-2xl
                                        block sm:hidden
                                        leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">FAQs.</div>
                        <div className="font-bold text-4xl
                                        hidden sm:block
                                         leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <Link href="/faq">
                                <div className="flex items-center">
                                    <div className="ttcommon_font_bold ml-auto
                                                    text-xs sm:text-lg">Read More</div>
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
        </div>
    )
}

SkinCare.Layout = Layout