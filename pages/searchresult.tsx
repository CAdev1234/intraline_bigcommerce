import { Layout } from "@components/common";
import Link from "@components/ui/Link";
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks";
import { search } from "@utils/redux/slices/productSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


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

export default function SearchResult() {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchResult = useAppSelector((state) => state.product.searchResult) as Array<ProductObject>
    useEffect(() => {
        if (router.query !== {}) {
            let search_keyword = router.query.keyword as string;
            dispatch(search(search_keyword))
            setKeyword(search_keyword)
        }
    }, [])
    return (
        <div className="ttcommon_font text-c_00080D bg-white flex flex-col
                        mt-16 md:mt-0">
            <div className="bg-transparent w-full h-15"></div>
            <div className="ttcommon_font_bold text-6xl mt-10 mb-10 text-center
                            mx-5 md:mx-15 lg:mx-172">SEARCH: {keyword}</div>
            <div className="bg-c_F7F7F7 flex-1">
                <div className="py-15
                                px-5 md:px-15 lg:px-172">
                    {searchResult.length === 0 && 
                        <div className="ttcommon_font text-2xl">There is no item.</div>
                    }
                    {searchResult.map((item, index) => {
                        return <div key={`search_result_${index}`}>
                                    <Link href={item.link}>
                                        <div className="bg-white p-5 mb-5 hover:bg-black hover:text-white cursor-pointer">
                                            <div className="ttcommon_font_bold text-4xl leading-36_26">{item.title}</div>
                                            <div className="mt-5 ttcommon_font_thin text-sm leading-14_26">{item.detail}</div>
                                        </div>
                                    </Link>
                                    
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}

SearchResult.Layout = Layout