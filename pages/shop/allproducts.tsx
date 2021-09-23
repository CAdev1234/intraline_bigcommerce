import { Layout } from '@components/common'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'



import { useRef, useState } from 'react'



import { RatingView } from 'react-simple-star-rating'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderA from '@components/common/KeenSlider/KeenSliderA'




const renderCategorySwiper = () => {
    var render_ele = [
        { name: 'Dermal Fillers', img: "/assets/img/mseries_1.png" },
        { name: 'PDO Threads', img: "/assets/img/lifting-1-1.png" },
        { name: 'Skincare', img: "/assets/img/skin-care.png" },
        { name: 'Dermal Fillers', img: "/assets/img/mseries_5.png" },
        { name: 'Dermal Fillers', img: "/assets/img/mseries_4.png" },
        { name: 'Dermal Fillers', img: "/assets/img/mseries_3.png" },
        { name: 'Dermal Fillers', img: "/assets/img/mseries_2.png" },
    ].map((item, index) => {
        return <div className="keen-slider__slide" key={`category_${index}`}>
                    <div className="flex flex-col bg-white pt-5 pb-12" style={{ height: 472 }}>
                        <div className="flex-1 px-20 h-0">
                            <img className="h-full object-contain mx-auto" src={item.img} alt="" />
                        </div>
                        <div className="uppercase text-center text-color_1 tracking-widest font-bold text-2xl mt-auto">{item.name}</div>
                    </div>
                </div>
    })
    return <KeenSliderA render_ele={render_ele} slidesPerView={4} navCss={"mr-172"}/>
}

const renderProducts = () => {
    var items = [];
    for (let index = 0; index < 12; index++) {
        items.push(index);
    }
    return items.map((item, index) => {
        return <div className="flex flex-col pt-5 pb-12 bg-white relative hover:bg-opacity-50"
            key={'m' + String(index + 1) + '-product'}>
            <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">$100.00</div>
            <div className="flex">
                <img className="mix_blend_multi mx-auto " src="/assets/img/product1.png" alt="" />
            </div>
            <div className="ttcommon_font_bold uppercase text-center text-color_1 tracking-widest text-2xl">M{index + 1} PLUS</div>
            <div className="mt-2 text-sm leading-14_26 text-center">Lorem ipsum doloris sit estimatum estiumen.</div>
            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                <div className="my-auto mx-auto w-10/12">
                    <div className="flex flex-col">
                        <button className=" bg-c_00080D flex items-center justify-center h-12 text-white uppercase">learn more</button>
                        <div className="mt-2 flex items-center h-12 text-white">
                            <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                <button className="mx-auto bg-transparent border-none p-1">-</button>
                                <div className="mx-auto">1</div>
                                <button className="mx-auto bg-transparent border-none p-1">+</button>
                            </div>
                            <button className="ml-3 bg-c_00080D flex items-center justify-center flex-1 h-full uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })
}

export default function AllProducts() {
    return (
        <div className="ttcommon_font">

            {/* our category part */}
            <div className="relative bg-c_CCE7EF w-full flex flex-col" style={{ height: 900 + 'px' }}>
                <div className="ml-172 my-auto">
                    <div className="ttcommon_font_bold text-4xl leading-36_26">Our Categories.</div>
                    <div className="mt-10">
                        {renderCategorySwiper()}
                    </div>
                    <div className="mt-10 flex items-center relative mx-60">
                        <div className="swiper-button-prev absolute"></div>
                        <div className="swiper-button-next absolute"></div>
                        <div className="category-pagination-div flex justify-center"></div>
                    </div>
                </div>
            </div>



            {/* Products part */}
            <div className="bg-c_C6CBDD py-24 flex flex-col">
                <div className="mx-172 flex items-center text-sm tracking-widest uppercase">
                    <div className="">SHOWING All products <span className="ttcommon_font_bold">(250)</span></div>
                    <div className="flex items-center ml-auto">
                        <div className="">Filter</div>
                        <div className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="flex items-center ml-10">
                        <div className="">Sort by price(lowest)</div>
                        <div className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-172 grid grid-cols-3 gap-5">
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
