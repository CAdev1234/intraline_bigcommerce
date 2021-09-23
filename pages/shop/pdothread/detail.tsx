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

const RenderFAQCollapse = () => {
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
  
    function RenderChevronUpDown(index: any) {
      if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
      else return <ChevronDown className="h-4 w-4" />
    }
    
    function ClickChevron(index: any) {
      const new_enable_faq = [...enable_faq]
      new_enable_faq[index] = !new_enable_faq[index]
      setFaq(new_enable_faq)
    }

    return items.map((item, index) => {
      return <div className="divide-y divide-c_00080D" key={'faq_' + index}>
        <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => ClickChevron(index)}>
          <div className="text-base">{item.title}</div>
          <div className="ml-auto">
            {RenderChevronUpDown(index)}
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


export default function PDOThreadDetail() {
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="relative bg-c_F5DBDD w-full flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full h-full z-10">
                    <div className="w-6/12 flex flex-col ml-172">
                        <div className="my-auto">
                            <div className="ttcommon_font_bold text-4xl leading-36_48">The Dimension</div>
                            <div className="ttcommon_font_thin text-12_5 leading-200_160 font-semibold mt-7" ><span className="ttcommon_font_bold">720</span></div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Lorem ipsum doloris secantum.</div>
                            <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Dimension 720 has a single premium molded cogged PDO filament. With maximum strenght and hold, ultra thin walls and w-type silicone-coated cannula for ease of insertion, the Dimension 720 PDO Threads are lorem ipsum doloris.</div>
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
                    <div className="relative flex flex-1 flex-col items-end mr-15">
                        <div className="absolute h-full flex flex-col">
                            <div className="bg-white rounded-full my-auto" style={{width: 526, height: 526}}></div>
                        </div>
                        <div className="mb-auto h-full relative flex flex-col">
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
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">720 PDO</div>
                                    <div className="flex items-center">
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
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Amongst the 720’s effects we can find lifting of the skin, immediate tightening, scaffolding, new collagen production, versatile and correction of fine wrinkles.</div>
                            <div className="ttcommon_font_bold mt-12 text-4xl leading-36_26">Dimension 720 Offerings.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">We have 2 different SKU’s of the Dimension 720, they are differenciated by the length of the cannula, the length of the thread and the gauge of the cannula.</div>
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
            <div className="bg-c_C3E0DC py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Reviews.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#87C1B9"/>
                    </div>
                </div>
            </div>

            
            
            {/* FAQ part */}
            <div className="bg-white">
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
            

        </div>
    )
}

PDOThreadDetail.Layout = Layout