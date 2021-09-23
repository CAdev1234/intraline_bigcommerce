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

const renderMseries = () => {
    var items = [0, 1, 2]
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


export default function DermalFillerDetail() {
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="relative bg-c_CCE7EF w-full flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full h-full z-10">
                    <div className="w-6/12 flex flex-col pl-15">
                        <div className="my-auto">
                            <div className="ttcommon_font_bold text-4xl leading-36_48">The minimalist.</div>
                            <div className="ttcommon_font_thin text-12_5 leading-200_160 font-semibold mt-7" ><span className="ttcommon_font_bold">M2</span> Plus</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Enhancing more of what you love.</div>
                            <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Minimalism is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love. This style sets out to expose the true essence, essentials or identity of individuals.</div>
                            <div className="ttcommon_font_bold mt-5 flex items-center">
                                <span>USD $100.00</span>
                                <span className="ml-5">Volume: 1.1ML</span>
                            </div>
                            <div className="mt-5 flex items-center h-12 text-white">
                                <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                    <button className="mx-auto bg-transparent border-none p-1">-</button>
                                    <div className="mx-auto">1</div>
                                    <button className="mx-auto bg-transparent border-none p-1">+</button>
                                </div>
                                <div className="ml-3 bg-c_00080D flex items-center justify-center w-52 h-full uppercase">Add to cart</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex flex-col items-end">
                        <div className="mb-auto h-full bg-c_CCE7EF relative flex flex-col">
                            <img className="mix_blend_multi ml-auto h-full" src="/assets/img/SmokeM2.png" alt="" />
                            <div className="w-full h-full flex absolute">
                                <img className="m-auto" src="/assets/img/mseries_3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indications */}
            <div className="bg-white px-40">
                <div className="flex flex-col max-w-2xl mx-auto py-28">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Indications</div>
                    <p className="leading-36_48 mt-6 text-4xl ttcommon_font_thin text-center">M2 Plus with lidocaine is best suited for treatment of fine to medium wrinkles in the frown lines, cupid’s bow, labial commissure, neck folds and lip definition.</p>
                    <div className="mt-8">
                        <button className="mx-auto ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-64 flex items-center justify-center text-sm">download indication chart</button>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_C6CBDD w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -15 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_8D97BC text-12_5 leading-200_160" style={{transformOrigin: 'center'}}>Specs.</div>
                </div>
                <div className="ml-172 mr-15 my-32">
                    <div className="w-full flex items-center">
                        <div className="w-1/2 pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">M2 Plus.</div>
                                    <div className="flex items-center">
                                        <RatingView ratingValue={3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                        <div className="text-sm ">(22)</div>
                                    </div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Type</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Monophasic dermal filler.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">TOTAL HA CONCENTRATION</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">24 MG/ML</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Average gel particle size</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Small</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Cross linking</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">BODE(1UG/ML)</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Level of injection</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Upper dermis.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">PACKAGING</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">1 Syringe & 2 Sterile Needles.</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Volume</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">11ML</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Lidocaine</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">3MG/ML</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex items-center h-12 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1">-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1">+</button>
                                        </div>
                                        <div className="ml-3 bg-c_00080D flex items-center justify-center h-full uppercase flex-1">Add to cart</div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Monophasic dermal filler with lidocaine.For fine to medium wrinkles.Each unit comes with two different needles .</div>
                            <div className="ttcommon_font_bold mt-12 text-4xl leading-36_26">Rheology.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Low viscosity.<br />Low complex modulus.<br />Low phase angle.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            
            
            {/* Reviews part */}
            <div className="bg-white py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Reviews.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#CCE7EF"/>
                    </div>
                </div>
            </div>
            
            
            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="mx-172 py-24">
                <div className="flex text-c_00080D mb-2">
                    <div className="ttcommon_font_bold leading-36_26 text-4xl">Frequently Asked Questions.</div>
                    <div className="flex items-center ml-auto">
                    <div className="ttcommon_font_bold text-lg">Read More</div>
                    <div className="ml-2">
                        <ChevronRight className="h-4 w-4" />
                    </div>
                    </div>
                </div>

                {renderFAQCollapse()}
                </div>
            </div>

            {/* MSeries */}
            <div className="bg-c_F5DBDD">
                <div className="mx-172 py-24">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">The M Series.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold text-lg">Learn More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-5">
                        {renderMseries()}
                    </div>
                </div>
            </div>
            

        </div>
    )
}

DermalFillerDetail.Layout = Layout