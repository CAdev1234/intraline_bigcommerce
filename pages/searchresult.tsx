import { Layout } from "@components/common";
import Link from "@components/ui/Link";
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks";
import { search } from "@utils/redux/slices/productSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Product = {
    title: string,
    price: number,
    amount: number,
    img: string,
    detail: string,
    link: string
}

export default function SearchResult() {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchResult = useAppSelector((state) => state.product.searchResult) as Array<Product>
    useEffect(() => {
        if (router.query !== {}) {
            let search_keyword = router.query.keyword as string;
            dispatch(search(search_keyword))
            setKeyword(search_keyword)
        }
    }, [])
    return (
        <div className="ttcommon_font text-c_00080D bg-white flex flex-col" style={{minHeight: 'calc(100vh - 452px)'}}>
            <div className="ttcommon_font_bold text-6xl mx-172 mt-25 mb-10">SEARCH: {keyword}</div>
            <div className="bg-c_F7F7F7 flex-1">
                <div className="mx-172 py-15">
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