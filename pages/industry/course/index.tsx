import { Layout } from "@components/common"
import Button from '@components/mycp/Button'
import Link from "@components/ui/Link"

export default function IndustryCourse() {
    return <div className="ttcommon_font_thin">
                {/* course part */}
                <div className="relative px-15 mt-28 pb-25 bg-white">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">Intraline's Blog.</div>
                    <div className="text-200px leading-200_160">I am</div>
                    <div className="ttcommon_font_bold text-200px leading-200_160">Academy</div>
                    <div className="flex flex-col">
                        <div className="mt-25 grid grid-cols-2 gap-x-5">
                            <div className="flex flex-col">
                                <div className="ttcommon_font_bold text-2xl leading-36_48">I Am Academy Courses.</div>
                                <div className="mt-7_5 bg-c_C3E0DC relative" style={{height: 411}}>
                                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                        <div className="my-auto mx-auto w-64">
                                            <div className="flex flex-col">
                                                <Button className=" h-11 text-sm">Learn more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7_5 text-4xl leading-36_48 pr-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="ttcommon_font_bold text-2xl leading-36_48">Intraline Sponsored Courses.</div>
                                <div className="relative mt-7_5 bg-c_C3E0DC" style={{height: 411}}>
                                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                        <div className="my-auto mx-auto w-64">
                                            <div className="flex flex-col">
                                                <Button className=" h-11 text-sm">Learn more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7_5 text-4xl leading-36_48 pr-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* report part */}
                <div className="bg-c_C6CBDD py-25">
                    <div className="w-106_5 mx-auto">
                        <div className="ttcommon_font_bold text-4xl leading-36_48">Enroll Now.</div>
                        <div className="mt-5 text-sm leading-14_26">See how our MSERIES compares rheologically to the equivalent leading brands. In the report, you will see the data on Viscosity, Phase Angle, Visco-elasticity, and more. Fill out the form and receive a copy.</div>
                        <div className="">
                            <div className="mt-10">
                                <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="First name"/>
                            </div>
                            <div className="mt-5">
                                <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="Email"/>
                            </div>
                            <div className="mt-5">
                                <select className="h-11 border-none bg-c_F7F7F7 w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                    <option value="Choose Country or Region">Choose Country or Region</option>
                                </select>
                            </div>
                            <div className="mt-5">
                                <div className="text-sm leading-14_26">Have you used Intraline M Series Dermal Filler products?</div>
                            </div>
                            <div className="mt-2.5">
                                <div className="flex items-center">
                                    <input type="radio" />
                                    <label htmlFor="" className="text-sm leading-14_26 ml-3">Yes</label>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <input type="radio" />
                                    <label htmlFor="" className="text-sm leading-14_26 ml-3">No</label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <input className="h-11 border-none bg-c_F7F7F7 w-full pl-5 py-2" type="text" placeholder="What is your Dermal Filler of choice?"/>
                            </div>
                            <div className="mt-5">
                                <div className="ttcommon_font_thin text-xs">
                                <Link href="/privacypolicy">
                                    <span className="ttcommon_font_bold underline mr-1">Intraline’s Privacy Policy.</span>
                                </Link> 
                                If you consent to us contacting you for this purpose, please tick below:
                            </div>
                            </div>
                            <div className="mt-5 flex items-center">
                                <div>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="ml-2">I agree to receive other communications from Intraline.</div>
                            </div>
                            <div className="text-xs text-c_00080D mt-5">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                            <div className="mt-10">
                                <Button className="h-11 w-full text-sm">SUBMIT</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

IndustryCourse.Layout = Layout