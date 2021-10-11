import TriangleDown from "@components/icons/TriangleDown";
import TriangleUp from "@components/icons/TriangleUp";
import { FC, useState } from "react";

type ProductObject = {
    id: string,
    title: string,
    price: number,
    amount: number,
    quantity: number,
    img: string,
    detail: string,
    link: string
}

type ReviewObject = {
    id: string,
    product: string,
    title: string,
    created_at: string,
    rating: number,
    detail: string,
}

interface SelectInputProps {
    default_option?: string | ProductObject | ReviewObject,
    option_li?: Array<string> | Array<ProductObject>,
    className?: string,
    option_class?: string,
    enable_underline?: boolean,
    returnVal?: any
}

const SelectInput : FC<SelectInputProps> = ({option_li, className, option_class, default_option, enable_underline, returnVal}) => {
    // let item_li = ['Dermal filler1', 'Dermal filler2', 'Dermal filler3']
    const [enableSelect, setEnableSelect] = useState(false)
    const [currentVal, setCurrentVal] = useState(default_option)
    
    return <div>
                <div className={`border-none pl-5 py-2 relative cursor-pointer ${className}`} onClick={() => {setEnableSelect(!enableSelect)}}>
                    <div className={currentVal === default_option ? `text-c_00080D text-opacity-50` : ''}>{typeof(currentVal) === 'string' ? currentVal : currentVal?.title}</div>
                    <div className="absolute top-0 right-4 flex flex-col h-full">
                        <div className="my-auto">
                            {!enableSelect && <TriangleDown />}
                            {enableSelect && <TriangleUp />}
                        </div>
                    </div>
                    {enableSelect && 
                        <div className="absolute top-11 left-0 w-full">
                            <div className="max-h-80 overflow-y-auto">
                                {(option_li as Array<string> | Array<ProductObject>).map((item, index) => {
                                    return <div key={`index_${index}`} onClick={() => {
                                            typeof(item) === 'string' ? setCurrentVal(item) : setCurrentVal(item.title)
                                            setEnableSelect(false)
                                            typeof(item) === 'string' ? returnVal(item) : returnVal(item.title)
                                        }}> 
                                                {typeof(item) === 'string' && <div className={`h-11 flex items-center px-5 border-c_00080D cursor-pointer ${option_class}`}>{item}</div>}
                                                {typeof(item) !== 'string' && <div className={`h-11 flex items-center px-5 border-c_00080D cursor-pointer ${option_class}`}>{item.title}</div>}
                                                {index !== (option_li as Array<string> | Array<ProductObject>).length - 1 && enable_underline && 
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