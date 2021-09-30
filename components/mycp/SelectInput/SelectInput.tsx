import TriangleDown from "@components/icons/TriangleDown";
import TriangleUp from "@components/icons/TriangleUp";
import { FC, useState } from "react";

interface SelectInputProps {
    option_li: Array<string>,
    className: string,
    option_class: string
}

const SelectInput : FC<SelectInputProps> = ({option_li, className, option_class}) => {
    // let item_li = ['Dermal filler1', 'Dermal filler2', 'Dermal filler3']
    const [enableSelect, setEnableSelect] = useState(false)
    const [currentVal, setCurrentVal] = useState(option_li[0])
    
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
                            <div className={option_class}>
                                {option_li.map((item, index) => {
                                    return <div key={`index_${index}`} onClick={() => {
                                        setCurrentVal(item)
                                        setEnableSelect(false)
                                        }}> 
                                                <div className={`h-11 flex items-center mx-5 border-c_00080D cursor-pointer ${index !== option_li.length - 1 ? 'border-b' : ''}`}>{item}</div>
                                            </div>
                                })}
                            </div>
                        </div>
                    }
                </div>        
            </div>
}

export default SelectInput