import TriangleDown from "@components/icons/TriangleDown";
import TriangleUp from "@components/icons/TriangleUp";
import { FC, useState } from "react";

interface SelectInputProps {
    default_option: string,
    option_li: Array<string>,
    className: string,
    option_class: string,
    enable_underline: boolean,
    returnVal: any
}

const SelectInput : FC<SelectInputProps> = ({option_li, className, option_class, default_option, enable_underline, returnVal}) => {
    // let item_li = ['Dermal filler1', 'Dermal filler2', 'Dermal filler3']
    const [enableSelect, setEnableSelect] = useState(false)
    const [currentVal, setCurrentVal] = useState(default_option)
    
    return <div>
                <div className={`border-none pl-5 py-2 relative cursor-pointer ${className}`} onClick={() => {setEnableSelect(!enableSelect)}}>
                    <div>{currentVal}</div>
                    <div className="absolute top-0 right-4 flex flex-col h-full">
                        <div className="my-auto">
                            {!enableSelect && <TriangleDown />}
                            {enableSelect && <TriangleUp />}
                        </div>
                    </div>
                    {enableSelect && 
                        <div className="absolute top-11 left-0 w-full">
                            <div>
                                {option_li.map((item, index) => {
                                    return <div key={`index_${index}`} onClick={() => {
                                        setCurrentVal(item)
                                        setEnableSelect(false)
                                        returnVal(item)
                                        return item
                                        }}> 
                                                <div className={`h-11 flex items-center px-5 border-c_00080D cursor-pointer ${option_class}`}>{item}</div>
                                                {index !== option_li.length - 1 && enable_underline && 
                                                    <div className="h-px bg-transparent mx-5"></div>    
                                                }
                                            </div>
                                })}
                            </div>
                        </div>
                    }
                </div>        
            </div>
}

export default SelectInput