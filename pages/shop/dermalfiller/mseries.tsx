import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'
import KeenSliderA from '@components/common/KeenSlider/KeenSliderA'

const renderMSeriesSwiper = () => {
    let render_ele = [0, 1].map((item, index) => {
        return <div className="keen-slider__slide flex flex-col" key={`mseries_${index}`}>
                    <div className="my-auto">
                        <img className="mx-auto" src={"/assets/img/mseries_" + String(item + 1) + ".png"} alt="" />
                        <div className="uppercase text-2xl text-center tracking-widest font-semibold">M2 Plus | $100.00</div>
                    </div>
                </div>
    })
    return <KeenSliderB 
                render_ele={render_ele} 
                slidesPerView={1} 
                enableDot={true} 
                prevNavCss={"top-1/2 transform -translate-x-1/2 left-0"} 
                nextNavCss={"top-1/2 transform -translate-x-1/2 right-0"}
                dotCss={"mt-7_5"}/>
}

const RenderTestimonialSwiper = () => {
    let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
      return <div className="keen-slider__slide" key={`testimonial_${index}`}>
                <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
            </div>
    })
    return <KeenSliderB 
                render_ele={render_ele} 
                slidesPerView={1} 
                enableDot={true} 
                prevNavCss={"top-0 left-0"} 
                nextNavCss={"top-0 right-0"}
                dotCss={"mt-7_5"}/>
}


export default function MSeries() {
    return(
        <div className="ttcommon_font text-c_00080D flex flex-col">
            <div className="relative bg-white w-full flex flex-col" style={{height: 900 + 'px'}}>
                <div className="absolute w-full h-full flex">
                    <div className="w-5/12 h-full"></div>
                    <div className="w-7/12 h-full bg-c_CCE7EF" style={{borderTopLeftRadius: 70 + '%', borderBottomLeftRadius: 40 + '%'}}></div>
                </div>
                <div className="flex my-auto w-full h-full px-15 z-10">
                    <div className="w-7/12 flex flex-col">
                        <div className="my-auto">
                            <div className="ttcommon_font_thin text-12_5 leading-200_160 font-semibold">The</div>
                            <div className="ttcommon_font_bold text-12_5 leading-200_160" >M Series</div>
                            <div className="leading-36_48 ttcommon_font_thin w-7/12 font-semibold mt-8 ml-28 text-4xl text-c_00080D">The M Series from Intraline is the next generation of monophasic dermal fillers with lidocaine. </div>
                        </div>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className="my-auto">
                            {renderMSeriesSwiper()}
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* pure part */}
            <div className="bg-c_C6CBDD w-full">
                <div className="mt-12 mx-172">
                    <div className="w-full flex items-center">
                        <div className="w-1/2 pr-32">
                            <div className="ttcommon_font_bold text-6xl leading-64_76">Pure.</div>
                            <div className="mt-2 bg-white py-12 px-10">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 text-c_00080D tracking-widest">PURELY HYALURONIC ACID</div>
                                <div className="mt-2 text-sm leading-14_26 text-c_00080D">M Series by Intraline is made of non-animal derived hyaluronic acid (HA), in the highest form of purity. It’s a completely natural substance that is optimized to harmonize with a person’s skin tissue. Over time, a person will break down and fully reabsorb the HA gel.</div>
                            </div>
                            <div className="ttcommon_font_bold mt-7 text-6xl leading-64_76">Innovative.</div>
                            <div className="mt-2 bg-white py-12 px-10">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-24_29 text-c_00080D tracking-widest">UNIQUE CROSS-LINKED TECHNOLOGY</div>
                                <div className="mt-2 text-sm leading-14_26 text-c_00080D">The M Series has been manufactured using a patent-pending exclusive cross-linking technology that harnesses the power of hyaluronic acid to significantly increase both the volume and the duration of our dermal fillers once injected into the skin.</div>
                            </div>
                            <div className="ttcommon_font_bold mt-7 text-6xl leading-64_76">Volume.</div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="text-sm tracking-widest">THE M SERIES were created for maximum</div>
                            <div className="ttcommon_font_bold text-4xl leading-36_48">Function, versatility & impact.</div>
                            <div className="ttcommon_font_thin mt-7 leading-36_48 text-4xl">Our fillers are made using patent-pending technology to harness the power of a highly pure, highly cross-linked hyaluronic acid; a completely natural substance that harmonizes with the skin, creating long-lasting and natural looking results.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Mesmerizing, Modern, and Memorable */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Mesmerizing, Modern, and Memorable.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Intraline M Series dermal fillers have high visco-elasticity levels to give long-lasting volume.</p>
                    <div className="mt-8">
                        <button className="mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-64 flex items-center justify-center text-sm">Shop now the m series</button>
                    </div>
                </div>
            </div>
            
            {/* Testimonials part */}
            <div className="bg-c_C3E0DC py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Testimonials.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#87C1B9"/>
                    </div>
                </div>
            </div>

            
            
            {/* Question part */}
            <div className=" bg-c_C6CBDD">
                <div className="mx-60 py-28">
                    <div className="flex flex-col max-w-lg mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Any more questions?</div>
                        <p className="mt-5 text-sm">We are here to help --- reach out with any questions.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="First name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Company Name"/>
                        </div>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Email"/>
                        </div>
                        <div className="mt-10">
                            <select className="h-11 border-none bg-white w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                <option value="Choose Country or Region">Choose Country or Region</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <textarea className="h-24 border-none bg-white w-full pl-5 py-2" placeholder="Write Your Comment!"></textarea>
                        </div>
                        <div className="mt-5">
                            <div className="text-xs"><strong className="underline">Intraline’s Privacy Policy.</strong> If you consent to us contacting you for this purpose, please tick below:</div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="ml-2">I agree to receive other communications from Intraline.</div>
                        </div>
                        <div className="text-xs text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase tracking-widest bg-c_00090D text-white h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

MSeries.Layout = Layout