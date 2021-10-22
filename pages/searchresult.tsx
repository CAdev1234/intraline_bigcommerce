import { Layout } from "@components/common";
import dynamic from 'next/dynamic'
import { useAppDispatch, useAppSelector } from "@utils/redux/hooks";
import { search } from "@utils/redux/slices/productSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductObject } from 'utils/types'


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
    const gotoProductHandler = (path: string) => {
        router.push(path)
    }
    return (
        <div className="text-c_00080D bg-white flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <div className="bg-transparent w-full h-15"></div>
            <div className="ttcommon_font_bold py-10 bg-white
                            text-4xl sm:text-5xl md:text-6xl
                            text-left sm:text-center
                            px-5 md:px-15 lg:px-172">SEARCH: {router.query.keyword}</div>
            <div className="bg-c_F7F7F7 flex-1">
                <div className="py-15
                                px-5 md:px-15 lg:px-172">
                    {searchResult.length === 0 && 
                        <div className="text-2xl">There is no item.</div>
                    }
                    {searchResult.map((item, index) => {
                        return <div key={`search_result_${index}`}>
                                    <div className="bg-white p-5 mb-5 hover:bg-black hover:text-white cursor-pointer" onClick={() => {gotoProductHandler(item.link as string)}}>
                                        <div className="ttcommon_font_bold text-4xl leading-36_26">{item.title}</div>
                                        <div className="mt-5 leading-14_26">{item.detail}</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}

SearchResult.Layout = Layout