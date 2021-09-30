import { Layout } from "@components/common";
import { ChevronRight } from "@components/icons";
import Button from '@components/mycp/Button'
import Link from "@components/ui/Link";

export default function MseriesShop() {
    const RenderMseries = () => {
        var items = [0, 1, 2]
        return items.map((item, index) => {
            return <div className="flex flex-col pt-5 pb-12 bg-white relative hover:bg-opacity-50" 
                        key={'m' + String(index + 1) + '-product'}>
                        <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">$100.00</div>
                        <div className="flex">
                            <img className="mix_blend_multi mx-auto " src="/assets/img/product1.png" alt="" />
                        </div>
                        <div className="ttcommon_font_bold uppercase text-center text-color_1 tracking-widest text-2xl">M{index + 1} PLUS</div>
                        <div className="mt-2 text-sm leading-14_26 text-center">Lorem ipsum doloris sit estimatum estiumen.</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href="/shop/dermalfiller/detail">
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                    </Link>
                                    <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1">-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1">+</button>
                                        </div>
                                        <Button className="ml-3 flex-1 h-full text-sm">Add to bag</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        })
    }
    return (
        <div className="ttcommon_font h-225 flex flex-col">
            <div className="w-full min-h-15 bg-transparent"></div>
            <div className="bg-c_F5DBDD w-full flex flex-col pb-40">
                <div className="px-15 mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="ttcommon_font">Home</span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1 ttcommon_font">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Monophasic dermal fillers</span>
                    </div>
                </div>
                <div className="mx-172 mt-20">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">The M Series.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold text-lg">Learn More</div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-5">
                        {RenderMseries()}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

MseriesShop.Layout = Layout