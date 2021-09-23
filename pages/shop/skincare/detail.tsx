import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'


const RenderTestimonialSwiper = () => {
    let render_ele = [0, 1, 2, 3, 4].map((item, index) => {
      return <div className="keen-slider__slide" key={`testimonial_${index}`}>
                <p className="ttcommon_font_thin text-sm text-center mx-auto" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="text-sm text-center mt-7" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
            </div>
    })
    return <KeenSliderB render_ele={render_ele} slidesPerView={1} />
}

const renderFAQCollapse = () => {
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
    const [enable_faq, setFaq] = useState(new Array(items.length).fill(false));
  
    function renderChevronUpDown(index: any) {
      if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
      else return <ChevronDown className="h-4 w-4" />
    }
    
    function clickChevron(index: any) {
      const new_enable_faq = [...enable_faq]
      new_enable_faq[index] = !new_enable_faq[index]
      setFaq(new_enable_faq)
    }

    return items.map((item, index) => {
      return <div className="divide-y divide-c_00080D" key={'faq_' + index}>
        <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickChevron(index)}>
          <div className="text-base">{item.title}</div>
          <div className="ml-auto">
            {renderChevronUpDown(index)}
          </div>
        </div>
        <div>
          {enable_faq[index] && <div className="text-sm pt-5">{item.detail}</div>}
        </div>
      </div>
    })
  
}

const renderPDOThreads = () => {
    var items = [0, 1, 2]
    return items.map((item, index) => {
        return <div className="flex flex-col pt-9 pb-13 bg-white relative hover:bg-opacity-50" 
                    key={'m' + String(index + 1) + '-product'}>
                    <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">$100.00</div>
                    <div className="flex">
                        <img className="mix_blend_multi mx-auto " src="/assets/img/lifting-1-1.png" alt="" />
                    </div>
                    <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">Dimension 360</div>
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


export default function SkinCareDetail() {
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="relative bg-c_F5DBDD w-full flex flex-col pl-15 pr-20" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full h-full z-10">
                    <div className="flex flex-col ml-15 max-w-xl">
                        <div className="my-auto">
                            <div className="ttcommon_font_bold text-4xl leading-36_48">Restorative</div>
                            <div className="ttcommon_font_thin text-120 font-semibold mt-2 leading-none" ><span className="ttcommon_font_bold">Moisturizer</span></div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Sed ut perspiciatis unde omnis iste.</div>
                            <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.</div>
                            <div className="ttcommon_font_bold mt-5 flex items-center">
                                <span>USD $100.00</span>
                                <span className="ml-5">Volume: 100ML</span>
                            </div>
                            <div className="mt-5 flex items-center h-12 text-white">
                                <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                    <button className="mx-auto bg-transparent border-none p-1">-</button>
                                    <div className="mx-auto">1</div>
                                    <button className="mx-auto bg-transparent border-none p-1">+</button>
                                </div>
                                <button className="ml-3 bg-c_00080D flex items-center justify-center w-52 h-full uppercase">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center ml-auto my-auto rounded-full bg-c_CCE7EF" style={{height: 576, width: 576}}>
                        <button className="ttcommon_font_bold absolute right-14 top-5 h-9 w-32 bg-c_52B5D3 flex justify-center items-center text-lg leading-tight">$100.00</button>
                        <div className="my-auto relative flex flex-col h-3/4">
                            <img className="h-full" src="/assets/img/skincare3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lorem Ipsum. */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Lorem Ipsum.</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                    <div className="mt-8">
                        <button className="mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-64 flex items-center justify-center text-sm">Browse catalog</button>
                    </div>
                </div>
            </div>

            {/* Testimonials part */}
            <div className="bg-c_C6CBDD py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Testimonials.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#87C1B9"/>
                    </div>
                </div>
            </div>

            {/* Question part */}
            <div className="bg-c_C3E0DC">
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
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

SkinCareDetail.Layout = Layout