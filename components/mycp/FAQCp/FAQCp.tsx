import { ChevronDown, ChevronUp } from "@components/icons";
import { FC, useState } from "react";
import { useSpring, animated} from '@react-spring/web'

type FAQObjectArray = Array<{
    title: string,
    detail: string
}>

interface FAQCpProps {
    faq_li: FAQObjectArray
}

const FAQCp:FC<FAQCpProps> = ({faq_li}) => {
    const [enable_faq, setFaq] = useState(new Array(faq_li.length).fill(false));
    const [flip, setFlip] = useState(false)
    const ani_props = useSpring({
      from: {opacity: 0,},
      to: {opacity: 1,},
      loop: false,
      reset: true,
    })
    function renderChevronUpDown(index: any) {
      if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
      else return <ChevronDown className="h-4 w-4" />
    }
    
    function clickChevron(index: any) {
      const new_enable_faq = [...enable_faq]
      new_enable_faq[index] = !new_enable_faq[index]
      setFaq(new_enable_faq)
      setFlip(!flip)
    }
  
    return <div>
            {faq_li.map((item, index) => {
                return <div className="" key={'faq_' + index}>
                          <div className="flex items-center w-full cursor-pointer
                                          mt-7_5 sm:mt-10
                                          pb-2.5 sm:pb-5" onClick={() => clickChevron(index)}>
                            <div className="uppercase pr-5 text-c_00080D
                                            text-xs sm:text-base
                                            leading-tight sm:leading-14_17">{item.title}</div>
                            <div className="ml-auto">
                                {renderChevronUpDown(index)}
                            </div>
                          </div>
                          <div className="bg-c_00080D h-px w-full"></div>
                          <animated.div style={ani_props}>
                            {
                              <div className={`text-c_00080D whitespace-pre-wrap transition-all duration-500 ease-linear
                                                text-base sm:text-base ${enable_faq[index] ? 'block' : 'hidden'}
                                                pt-5 
                                                leading-relaxed sm:leading-14_26`}>{item.detail}</div>
                            }
                          </animated.div>
                        </div>
            })}
    </div>
  }

  export default FAQCp