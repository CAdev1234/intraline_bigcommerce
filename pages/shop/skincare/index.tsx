import React, {useEffect, useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import Link from '@components/ui/Link'
import { getCookie } from '@utils/cookie'
import { AddToCartByDom } from '@utils/addToCartByDom'



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
        {title: "Restorative Moisturizer", price: 30, amount: 1, img: "/assets/img/skincare1.png", link: "/shop/skincare/moisturizer", detail: "Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration."},
        {title: "Biocellulose Masque", price: 30, amount: 1, img: "/assets/img/skincare2.png", link: "/shop/skincare/masque", detail: "Intraline’s Biocellulose Masque features a natural biocellulose sheet, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits and immerses your skin in intense moisture."},
    ]
    let skincare_li_another_bg = [
        {title: "Restorative Moisturizer", price: 30, amount: 1, img: "/assets/img/products/moisturizer.png", link: "/shop/skincare/moisturizer", detail: "Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration."},
        {title: "Biocellulose Masque", price: 30, amount: 1, img: "/assets/img/products/masque.png", link: "/shop/skincare/masque", detail: "Intraline’s Biocellulose Masque features a natural biocellulose sheet, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits and immerses your skin in intense moisture."},
    ]
    const [logined, setLogined] = useState(false)
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
    let ingredient_li = [
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
    const [enableIngredient, setEnableIngredient] = useState([true, ...new Array(ingredient_li.length - 1).fill(false)])
    let updateIngredientParagra = (index:number) => {
        let new_array = new Array(enableIngredient.length).fill(false)
        new_array[index] = true
        setEnableIngredient(new_array)
    }
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="w-full h-15 bg-transparent"></div>
            <div className="h-210 bg-c_C6CBDD w-full px-15 pb-32 flex flex-col">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center cursor-pointer">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Skin Care</span>
                    </div>
                </div>
                <div className="mt-28 flex items-end w-full">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold text-200px leading-200_160">Skin</div>
                        <div className="ttcommon_font_bold text-200px leading-200_160" >Care</div>
                    </div>
                    <div className="max-w-128 w-1/2 text-4xl ttcommon_font_thin">
                        Immerse your skin in intense moisture while smoothing, tightening & rejuvenating.
                    </div>
                </div>
            </div>

            <div className="bg-white w-full relative h-122">
                <div className="w-full px-15 absolute z-10 -top-56 grid grid-cols-2 gap-x-5">
                    {skincare_li.map((item, index) => {
                        return <div className="" key={`skincare_${index}`}>
                                    <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">{item.title}.</div>
                                    <div className="relative mt-10 pt-5 bg-c_F5DBDD w-full border-none h-100">
                                        <div className="flex h-full px-15 justify-center">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                            <div className="my-auto mx-auto w-10/12">
                                                <div className="flex flex-col text-white w-64 mx-auto">
                                                    <Link href={item.link}>
                                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                                    </Link>
                                                    {logined && <div className="mt-2 flex items-center h-12 text-white">
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
                                        <div className="absolute top-0 right-0">
                                            {logined && <Button variant="primary" className="h-9 w-30 ttcommon_font_bold text-lg leading-36_48">${item.price}</Button>}
                                        </div>
                                    </div>
                                    <div className="ttcommon_font_thin mt-8 text-2xl text-c_00080D">{item.detail}</div>
                                </div>
                    })}
                    
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_CCE7EF w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -20 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_99CEE0 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Skincare</div>
                </div>
                <div className="ml-172 mr-15 my-32 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="w-5/12 pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Ingredients.</div>
                                    <div className="text-sm leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        {ingredient_li.map((item, index) => {
                                            return <div className={`flex items-start w-full ${index != 0 ? 'mt-7' : ''}`} key={`ingredient_${index}`}>
                                                        <button className={`text-4xl leading-36_48 ${enableIngredient[index] && 'ttcommon_font_bold'}`} onClick={() => {updateIngredientParagra(index)}}>{item.title}</button>
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            {ingredient_li.map((item, index) => {
                                return enableIngredient[index] && <div key={`ingredient_detail_${index}`}>
                                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_48">What is {item.title}?</div>
                                            <div className="ttcommon_font_thin mt-5 text-sm leading-14_26 whitespace-pre-wrap">{item.detail}</div>
                                        </div>
                            })}
                            
                            
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
                <div className="mx-60 py-24">
                    <div className="flex text-c_00080D mb-2">
                        <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
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
        </div>
    )
}

SkinCare.Layout = Layout