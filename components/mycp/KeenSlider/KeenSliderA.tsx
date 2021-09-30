import React, {FC, useEffect, useRef, useState} from 'react'

import cn from 'classnames'
import 'keen-slider/keen-slider.min.css'
import s from './KeenSlider.module.css'

import { useKeenSlider } from 'keen-slider/react'


interface ArrowProps{
    disabled: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
const ArrowLeft:FC<ArrowProps> = ({disabled, onClick}) => {
    const disabeld = disabled ? " arrow--disabled" : ""
    return (
        <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-50' : '')}>
          <svg
              className={"arrow arrow--left w-2 h-2"}
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
            className={"arrow arrow--right w-2 h-2"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
        </button>
    )
}
interface KeenSliderProps{
    render_ele: JSX.Element[],
    navCss: string,
    slidesPerView: Array<number>
}
const KeenSliderA: FC<KeenSliderProps> = ({render_ele, slidesPerView, navCss}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    // const [pause, setPause] = useState(false)
    
    const [slider_ref, slider] = useKeenSlider<HTMLDivElement>({
      spacing: 20,
      loop: true,
      // duration: 1000,
      mode: 'snap',
      breakpoints: {
        '(max-width: 600px)': {
          slidesPerView: slidesPerView[0]
        },
        '(min-width: 600px) and (max-width: 960px)': {
          slidesPerView: slidesPerView[1]
        },
        '(min-width: 960px) and (max-width: 1264px)': {
          slidesPerView: slidesPerView[2]
        },
        '(min-width: 1264px) and (max-width: 1904px)': {
          slidesPerView: slidesPerView[3]
        },
        '(min-width: 1904px)': {
          slidesPerView: slidesPerView[4]
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      },
      // dragStart: () => {
      //   setPause(true)
      // },
      // dragEnd: () => {
      //   setPause(false)
      // }
    })

    // useEffect(() => {
    //   slider_ref.current?.addEventListener("mouseover", () => {
    //     setPause(true)
    //   })
    //   slider_ref.current?.addEventListener("mouseout", () => {
    //     setPause(false)
    //   })
    // }, [slider_ref])

    // useEffect(() => {
    //   const timer: ReturnType<typeof setInterval> = setInterval(() => {
    //     if(!pause && slider) {
    //       slider.next()
    //     }
    //   }, 2000)
    //   return () => {
    //     clearInterval(timer)
    //   }
    // }, [pause, slider])

    return <div className={cn(s.root)}>
            <div className="">
              <div ref={slider_ref} className="keen-slider">
                {render_ele}
              </div>
              {slider && (
                <div className={`${navCss} flex items-center`}>
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
                            className={"dot" + (currentSlide === idx ? " active" : "") + " w-2_5 h-2_5"}
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
          </div>
  }

export default KeenSliderA