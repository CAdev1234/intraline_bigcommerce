import { Layout } from '@components/common'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'



import { FC, useRef, useState, useEffect } from 'react'



import { RatingView } from 'react-simple-star-rating'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderA from '@components/mycp/KeenSlider/KeenSliderA'
import Button from '@components/mycp/Button'
import TriangleDown from '@components/icons/TriangleDown'
import SelectInput from '@components/mycp/SelectInput'

import {getCookie} from 'utils/cookie'
import Link from '@components/ui/Link'

import {AddToCartByDom} from 'utils/addToCartByDom'

import {useAppSelector} from 'utils/redux/hooks'

type ProductType = {
    title: string,
    detail: string,
    price: number,
    amount: number,
    link: string,
    img: string
}


export async function getStaticProps() {
    let items: Array<ProductType> = []
    for (let index = 0; index < 12; index++) {
        items.push({
            title: "M2 Plus",
            detail: "Lorem ipsum doloris sit estimatum estiumen.",
            price: 100,
            amount: 1,
            link: "/shop/dermalfiller/m2plus",
            img: "/assets/img/product1.png"
        });
    }
    return {
        props: {
            items
        }
    }
}

const RenderCategorySwiper:FC = () => {
    var render_ele = [
        { name: 'M Series', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/70-1.jpg?width=300&name=70-1.jpg", link: "/shop/dermalfiller/mseries" },
        { name: 'Essentials', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/63.jpg?width=300&name=63.jpg", link: "/shop/dermalfiller/essentials" },
        { name: 'Rejuvenation Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/65-1.jpg?width=300&name=65-1.jpg", link: "/shop/pdothread/rejuvenation" },
        { name: 'Lifting Threads', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg?width=400&name=Intraline%20Distributor%20Instagram%20Posts%20%285%29.jpg", link: "/shop/pdothread/liftingthread" },
        { name: 'Skincare', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/7-12.jpg?width=400&name=7-12.jpg", link: "/shop/skincare" },
        { name: 'Scar Kit', img: "https://cdn2.hubspot.net/hub/2718899/hubfs/10-2.jpg?width=3000&name=10-2.jpg", link: "/shop/scarkit" },
    ].map((item, index) => {
        return <div className="keen-slider__slide relative shadow-custom" key={`category_${index}`}>
                    <div className="flex flex-col bg-white pt-5 px-5 pb-12" style={{ height: 472 }}>
                        <div className="flex-1 h-0">
                            <img className="h-full object-contain mx-auto" src={item.img} alt="" />
                        </div>
                        <div className="uppercase text-center text-color_1 tracking-widest font-bold text-2xl mt-auto">{item.name}</div>
                    </div>
                    <div className="absolute top-0 left-0 bg-c_CCE7EF bg-opacity-30 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                        <div className="my-auto flex flex-col">
                            <Link href={item.link}>
                                <Button className="my-auto mx-auto h-11 w-10/12 text-sm">Learn more</Button>
                            </Link>
                        </div>
                    </div>
                </div>
    })
    return <KeenSliderA render_ele={render_ele} slidesPerView={[1,2,3.5,3.5,3.5]} navCss={"mr-10 lg:mr-28 xl:mr-172 2xl:mr-172 mt-10"}/>
  }
  



export default function AllProducts() {
    let all_product_li = useAppSelector((state) => state.product.products)
    const [logined, setLogined] = useState(false)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])
    const addToCartByDom = new AddToCartByDom(all_product_li)
    const decreaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    }
    const increaseNumHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }
    const addToBagHandler = (event:React.MouseEvent<HTMLButtonElement>, index:number) => {
        addToCartByDom.addToBagHandler(event, index)
    }

    const renderProducts = () => {
        return all_product_li.map((item, index) => {
            return <div className="flex flex-col pb-5 bg-white relative hover:bg-opacity-50 shadow-custom" key={`product_${index}`}>
                        {logined && 
                            <Button className="absolute top-0 right-0 h-9 w-30 ttcommon_font_bold text-lg py-1 px-8" variant="primary">${item.price}.00</Button>
                        }
                        <div className="flex">
                            <img className="w-full" src={item.img} alt="" />
                        </div>
                        <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                        <div className="mt-2 text-sm leading-14_26 px-3">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                    </Link>
                                    {logined && <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => decreaseNumHandler(event)}>-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => increaseNumHandler(event)}>+</button>
                                        </div>
                                        <Button className="ml-3 h-full flex-1 text-sm" onClick={(event) => addToBagHandler(event, index)}>Add to bag</Button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
        })
    }
    return (
        <div className="ttcommon_font">
            <div className="bg-transparent w-full h-15"></div>
            {/* our category part */}
            <div className="relative bg-c_CCE7EF w-full flex flex-col pb-15" style={{ height: 900 + 'px' }}>
                <div className="flex items-center cursor-pointer mt-12_5
                                px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                    <span className="ttcommon_font"><Link href="/">Home</Link></span>
                    <span className="ml-1"><ChevronRight className="w-4" /></span>
                    <span className="ml-1 ttcommon_font uppercase">Shop</span>
                    <span className="ml-1"><ChevronRight className="w-4"/></span>
                    <span className="ttcommon_font_bold ml-1 uppercase">All Products</span>
                </div>
                <div className="mt-12_5
                                ml-10 lg:ml-28 xl:ml-172 2xl:ml-172">
                    <div className="ttcommon_font_bold text-4xl leading-36_26">Our Categories.</div>
                    <div className="mt-10">
                        <RenderCategorySwiper />
                    </div>
                </div>
                <div className="mt-auto mx-auto flex items-center justify-center">
                    <div className="uppercase text-sm tracking-widest text-c_00080D">Scroll to browser all</div>
                    <div className="ml-4"><ChevronDown className="w-4 h-4"/></div>
                </div>
            </div>



            {/* Products part */}
            <div className="bg-c_C6CBDD py-25 flex flex-col">
                <div className="flex items-center text-sm tracking-widest uppercase
                                mx-10 lg:mx-28 xl:mx-172 2xl:mx-172">
                    <div className="">SHOWING All products <span className="ttcommon_font_bold">({all_product_li.length})</span></div>
                    <div className="flex items-center ml-auto cursor-pointer">
                        <SelectInput
                            enable_underline={false}
                            default_option="Filters" 
                            option_li={['Filter 1', 'Filter 2', 'Filter 3']} 
                            className={"bg-transparent relative z-10 w-30"} 
                            option_class={"bg-white justify-center hover:bg-gray-100"} 
                            returnVal={setFilter}/>
                    </div>
                    {logined && 
                        <div className="flex items-center ml-10 cursor-pointer">
                            <SelectInput 
                                enable_underline={false}
                                default_option="SORT BY PRICE(LOWEST)" 
                                option_li={['PRICE (LOWEST)', 'PRICE (HIGHEST)', 'TOP RATED', 'NEWEST']} 
                                className={"bg-transparent relative z-10 w-60"} 
                                option_class={"bg-white justify-center hover:bg-gray-100"} 
                                returnVal={setSort}/>
                        </div>
                    }
                    
                </div>
                <div className="mt-10 grid gap-5
                                grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
                                mx-10 lg:mx-28 xl:mx-172 2xl:mx-172">
                    {renderProducts()}
                </div>
                <div className="mt-20 flex items-center mx-auto">
                    <div className="p-2 text-sm tracking-widest mx-4">1</div>
                    <div className="p-2 text-sm tracking-widest mx-4">2</div>
                    <div className="p-2 text-sm tracking-widest mx-4">3</div>
                    <div className="p-2 text-sm tracking-widest mx-4">...</div>
                    <div className="p-2 text-sm tracking-widest mx-4">7</div>
                    <div className="p-2 text-sm tracking-widest mx-4">8</div>
                    <div className="p-2 text-sm tracking-widest mx-4">9</div>
                    <div className="ttcommon_font_bold p-2 text-sm tracking-widest mx-4 uppercase">next</div>
                </div>
            </div>
        </div>
    )
}

AllProducts.Layout = Layout
