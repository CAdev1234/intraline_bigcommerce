import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
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
    const [myArray, setMyArray] = useState<Boolean[]>([]);
    
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
    // setMyArray(new Array(items.length).fill(false))
  
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



export default function DemeralFiller() {
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="relative bg-c_CCE7EF w-full px-15 pb-32 flex flex-col" style={{height: 900 + 'px'}}>
                <div className="flex my-auto w-full">
                    <div className="w-1/2">
                        <div className="ttcommon_font_thin font-semibold text-12_5 leading-200_160">Dermal</div>
                        <div className="ttcommon_font_bold text-12_5 leading-200_160" >Fillers</div>
                    </div>
                    <div className="w-1/2 text-4xl ttcommon_font_thin max-w-md" style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="mix_blend_multi h-full" src="/assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>

            <div className="bg-white w-full relative" style={{height: 488 + "px"}}>
                <div className="w-full px-15 flex absolute z-10" style={{top: -224 + 'px'}}>
                    <div className="w-1/2 mr-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">The Essential Series.</div>
                        <div className="mt-10 pt-5 bg-c_C6CBDD w-full border-none flex flex-col" style={{height: 400 + 'px'}}>
                            <div className="flex h-full px-15 justify-center">
                                {[1, 2, 3].map((item, index) => {
                                    return <img key={index} style={{marginLeft: (item + 1) % 2 * -100 + 'px', marginRight: (item + 1) % 2 * -100 + 'px'}} src={"/assets/img/shop-dermalfiller-" + item + ".png"} alt="" />
                                })}
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">Biphasic dermal fillers manufactured with over 30 years of Swedish research.</div>
                    </div>
                    <div className="w-1/2 ml-3">
                        <div className="leading-36_48 text-4xl ttcommon_font_bold text-c_00080D">The M Series.</div>
                        <div className="mt-10 pt-5 bg-c_C6CBDD w-full border-none" style={{height: 400 + 'px'}}>
                            <div className="flex h-full px-15 justify-center">
                                {[4, 5, 6].map((item, index) => {
                                    return <img key={index} style={{marginLeft: (item + 1) % 2 * -100 + 'px', marginRight: (item + 1) % 2 * -100 + 'px'}} src={"/assets/img/shop-dermalfiller-" + item + ".png"} alt="" />
                                })}
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-8 text-4xl text-c_00080D">The next generation of monophasic dermal fillers with lidocaine.</div>
                    </div>
                </div>
            </div>

            
            <div className="bg-c_C3E0DC py-24">
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">Testimonials.</div>
                <div className="mx-60 mt-12 relative">
                    {RenderTestimonialSwiper()}
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill="#87C1B9"/>
                    </div>
                </div>
            </div>

            {/* FAQ part */}
            <div className="bg-white">
                <div className="mx-60 py-24">
                    <div className="flex text-c_00080D mb-2">
                        <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <div className="font-bold text-lg">Read More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    {RenderFAQCollapse()}
                </div>
            </div>
            
            {/* Download Catalog */}
            <div className="bg-c_F5DBDD">
                <div className="mx-60 py-28">
                    <div className="flex flex-col max-w-md mx-auto">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

DemeralFiller.Layout = Layout