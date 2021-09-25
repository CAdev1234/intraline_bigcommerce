import KeenSliderB from "@components/common/KeenSlider/KeenSliderB"
import QuoteSvg from "@components/icons/QuoteSvg"
import { FC } from "react"

// type TestimonialArray = Array<{
//     title: string,
//     detail: string
// }>

interface TestimonialProps{
    bg_color: string,
    quote_color: string,
    head_line: string,
    testimonial_li: Array<number>
}

const TestimonialCp:FC<TestimonialProps> = ({head_line, bg_color, quote_color, testimonial_li}) => {
    let render_ele = testimonial_li.map((item, index) => {
      return <div className="keen-slider__slide text-center" key={`testimonial_${index}`}>
                <div className="w-full flex justify-center items-center">
                    <p className="ttcommon_font_thin text-sm text-center" style={{maxWidth: 426 + 'px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
                <div className="text-sm text-center mt-7 tracking-widest" style={{lineHeight: 17 + 'px'}}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
            </div>
    })
    return <div className={`py-24 ${bg_color}`}>
                <div className="ttcommon_font_bold leading-36_26 text-4xl text-center">{head_line}</div>
                    <div className="mt-12_5 relative
                                    mx-5 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                        <KeenSliderB 
                            render_ele={render_ele} 
                            slidesPerView={1} 
                            enableDot={true} 
                            prevNavCss={"top-0 left-0"} 
                            nextNavCss={"top-0 right-0"} 
                            dotCss={"mt-7_5"}/>
                        <div className="absolute right-1/4 bottom-1/4">
                            <QuoteSvg fill={quote_color}/>
                        </div>
                    </div>
                </div> 
    
}

export default TestimonialCp