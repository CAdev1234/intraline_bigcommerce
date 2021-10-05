import { ChevronDown, ChevronUp } from "@components/icons";
import { FC, useState } from "react";

type FAQObjectArray = Array<{
    title: string,
    detail: string
}>

interface FAQCpProps {
    faq_li: FAQObjectArray
}

const FAQCp:FC<FAQCpProps> = ({faq_li}) => {
    const [myArray, setMyArray] = useState<Boolean[]>([]);
    
    const [enable_faq, setFaq] = useState(new Array(faq_li.length).fill(false));
    // setMyArray(new Array(items.length).fill(false))
  
    function renderChevronUpDown(index: any) {
      if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
      else return <ChevronDown className="h-4 w-4" />
    }
    
    function clickChevron(index: any) {
      const new_enable_faq = [...enable_faq]
      new_enable_faq[index] = !new_enable_faq[index]
      setFaq(new_enable_faq)
    }
  
    return <div>
            {faq_li.map((item, index) => {
                return <div className="divide-y divide-c_00080D" key={'faq_' + index}>
                            <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickChevron(index)}>
                            <div className="ttcommon_font text-base uppercase pr-5 leading-14_17 text-c_00080D">{item.title}</div>
                            <div className="ml-auto">
                                {renderChevronUpDown(index)}
                            </div>
                            </div>
                            <div>
                            {enable_faq[index] && <div className="ttcommon_font_thin text-sm pt-5 leading-14_26 text-c_00080D whitespace-pre-wrap">{item.detail}</div>}
                            </div>
                        </div>
            })}
    </div>
  }

  export default FAQCp