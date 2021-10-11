import KeenSliderB from "@components/mycp/KeenSlider/KeenSliderB"
import QuoteSvg from "@components/icons/QuoteSvg"
import { FC } from "react"
import { RatingView } from "react-simple-star-rating"

type TestimonialArray = Array<{
    title: string,
    detail: string,
    img?: string,
    rate?: number
}>

interface TestimonialProps{
    bg_color?: string,
    quote_color?: string,
    head_line?: string,
    testimonial_li: TestimonialArray,
}

const TestimonialCp:FC<TestimonialProps> = ({head_line, bg_color, quote_color, testimonial_li}) => {
    let render_ele = testimonial_li.map((item, index) => {
      return <div className="keen-slider__slide text-center" key={`testimonial_${index}`}>
                <div className="w-full flex justify-center items-center">
                    <p className="ttcommon_font_thin text-base text-center" style={{maxWidth: 426}}>{item.detail}</p>
                </div>
                {Object.keys(item).includes('rate') && 
                    <div className="flex justify-center mt-7_5">
                        <RatingView ratingValue={5} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)" />
                    </div>
                }
                <div className="text-sm leading-14_17 text-center mt-7 tracking-widest mx-auto" style={{maxWidth: 426}}>{item.title}</div>
            </div>
    })
    return <div className={`py-24 ${bg_color}`}>
                <div className="ttcommon_font_bold leading-36_26 text-center 
                                text-2xl sm:text-4xl">{head_line}</div>
                <div className="relative
                                mt-5 sm:mt-12_5
                                mx-5 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                    <KeenSliderB 
                        render_ele={render_ele} 
                        slidesPerView={[1,1,1,1,1]} 
                        enableDot={true} 
                        prevNavCss={"top-0 left-0 mt-auto sm:mt-auto sm:mb-auto"} 
                        nextNavCss={"top-0 right-0 mt-auto sm:mt-auto sm:mb-auto"} 
                        dotCss={"mt-7_5"}/>
                    <div className="absolute right-1/4 bottom-1/4">
                        <QuoteSvg fill={quote_color}/>
                    </div>
                </div>
            </div> 
    
}

export default TestimonialCp