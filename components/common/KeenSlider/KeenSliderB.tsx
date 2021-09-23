import React, {FC, useState} from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


interface ArrowProps{
    disabled: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
const ArrowLeft:FC<ArrowProps> = ({disabled, onClick}) => {
    const disabeld = disabled ? " arrow--disabled" : ""
    return (
        <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-75' : '')}>
        <svg
            className={"arrow arrow--left w-4 h-4" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
        </button>
    )
}
  
const ArrowRight:FC<ArrowProps> = ({disabled, onClick}) => {
    const disabeld = disabled ? " arrow--disabled" : ""
    return (
        <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-75' : '')} >
        <svg
            className={"arrow arrow--right w-4 h-4"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
        </button>
    )
}
interface KeenSliderBProps{
    render_ele: JSX.Element[],
    slidesPerView: number
}
const KeenSliderB: FC<KeenSliderBProps> = ({render_ele, slidesPerView}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [ele_ref, slider] = useKeenSlider<HTMLDivElement>({
      slidesPerView: slidesPerView,
      spacing: 20,
      loop: true,
      slideChanged(s) {
        console.log("slide changed")
        setCurrentSlide(s.details().relativeSlide)
      }
    })
      return <>
              <div className="relative">
                <div ref={ele_ref} className="keen-slider">
                  {render_ele}
                </div>
                {slider && (
                  <div className="flex items-center">
                    <ArrowLeft
                      onClick={(e:any) => e.stopPropagation() || slider.prev()}
                      disabled={currentSlide === 0}
                    />
                    {slider && (
                      <div className="dots mx-auto">
                        {[...Array(slider.details().size).keys()].map((idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                slider.moveToSlideRelative(idx)
                              }}
                              className={"dot" + (currentSlide === idx ? " active" : "") + " h-4 w-4"}
                            ></button>
                          )
                        })}
                      </div>
                    )}
                    <ArrowRight
                      onClick={(e:any) => e.stopPropagation() || slider.next()}
                      disabled={currentSlide === slider.details().size - 1}
                    />
                  </div>
                )}
              </div>
            </>
  }

export default KeenSliderB