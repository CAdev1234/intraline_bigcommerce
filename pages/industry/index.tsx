import { Layout } from "@components/common"
import { ChevronRight } from "@components/icons"
import { Button, Input} from '@components/mycp'
import Link from "@components/ui/Link"
import Image from 'next/image'
import doctor1Img from 'public/assets/img/doctor-1.webp'
import reportImg from 'public/assets/img/report.webp'

export default function IndustryIndex() {
    return <div className="ttcommon_font_thin relative">
                <div className="absolute top-28 left-0 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="ttcommon_font">Home</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Industry</span>
                    </div>
                </div>
                <div className="bg-white pt-40 pb-25 px-15">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">Intraline's Blog.</div>
                    <div className="mt-2_5">Read the latest industry news.</div>
                    <div className="mt-10 flex items-center">
                        <div className="w-1/2 bg-c_F5DBDD" style={{height: 411}}></div>
                        <div className="w-1/2" style={{paddingInline: 132}}>
                            <div className="text-base leading-14_17 tracking-widest uppercase">Posted 30 January 2021 by Dr. Tukba Yalcin</div>
                            <div className="ttcommon_font_bold mt-5 text-2xl leading-36_48 uppercase">THE IMPACT OF AESTHETIC TREATMENTS ON CONFIDENCE & WELLBEING</div>
                            <div className="mt-5 leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                            <Button className="mt-7_5 w-60 h-11">Start Reading</Button>
                        </div>
                    </div>
                    <div className="mt-15 grid grid-cols-3 gap-x-5">
                        {[0, 1, 2].map((item, index) => {
                            return <div key={`article_${index}`}>
                                        <div className="bg-c_F5DBDD w-full" style={{height: 270}}></div>
                                        <div className="mt-12 uppercase leading-14_17 tracking-widest">Posted 30 January 2021 by Dr. Tukba Yalcin</div>
                                        <div className="ttcommon_font_bold mt-5 text-2xl leading-36_48 uppercase">THE IMPACT OF AESTHETIC TREATMENTS ON CONFIDENCE & WELLBEING</div>
                                        <div className="mt-5 leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                                        <Button className="mt-7_5 w-full h-11">Start Reading</Button>
                                    </div>
                        })}
                    </div>
                    <div className="mt-15 flex items-center justify-center">
                        <div className="text-base uppercase tracking-widest">Browse All Articles</div>
                        <ChevronRight className="ml-3 w-3 h-3"/>
                    </div>
                </div>

                {/* course part */}
                <div className="relative px-15 py-25 bg-c_CCE7EF">
                    <div className="flex flex-col">
                        <div className="mx-auto text-center flex flex-col">
                            <div className="ttcommon_font_bold text-4xl leading-36_26">Intraline’s Courses.</div>
                            <div className="mt-6 text-4xl leading-36_48" style={{maxWidth: 650}}>Boost your skills, increase patient satisfaction, and accelerate your growth. I AM Academy was designed with you in mind.</div>
                            <Button className="mt-7_5 mx-auto w-60 h-11">Enroll Now</Button>
                        </div>
                        <div className="mt-25 grid grid-cols-2 gap-x-5 relative z-10">
                            <div className="flex flex-col">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-36_48">Dermal Filler Course.</div>
                                <div className="mt-7_5 bg-c_C6CBDD relative" style={{height: 411}}>
                                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                        <div className="my-auto mx-auto w-10/12">
                                            <div className="flex flex-col text-white w-64 mx-auto">
                                                <Button className="h-11 w-full">learn more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7_5 leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="ttcommon_font_bold uppercase text-2xl leading-36_48">PDO Thread COURSE.</div>
                                <div className="mt-7_5 bg-c_C6CBDD relative" style={{height: 411}}>
                                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                                        <div className="my-auto mx-auto w-10/12">
                                            <div className="flex flex-col text-white w-64 mx-auto">
                                                <Button className="h-11 w-full">learn more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7_5 leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full">
                        <div className="bg-white h-96"></div>
                    </div>
                </div>

                {/* partner part */}
                <div className="bg-c_C3E0DC px-15 py-25 flex flex-col">
                    <div className="mx-auto">
                        <div className="ttcommon_font_bold text-4xl leading-36_48 text-center">Intraline's Partners.</div>
                        <div className="mt-2_5 text-center">Learn more about our Medical Director, Key Opinion Leaders & Brands Ambassadors.</div>
                        <div className="mt-7_5 flex items-center justify-center">
                            <div className="uppercase leading-14_17 mx-4">DR. HUW JONES</div>
                            <div className="uppercase leading-14_17 mx-4">DR. HUW JONES</div>
                            <div className="uppercase leading-14_17 mx-4">DR. HUW JONES</div>
                            <div className="uppercase leading-14_17 mx-4">DR. HUW JONES</div>
                        </div>
                        <div className="flex mt-15">
                            <img src="/assets/img/doctor-1.webp" alt="" />
                            <Image src={doctor1Img} alt="doctor-1-image" />
                            <div className="ml-16 flex-1 flex flex-col">
                                <div className="ttcommon_font_bold text-2xl leading-36_48">DR. HUW JONES, MEDICAL DIRECTOR</div>
                                <div className="mt-2_5">Dr. Huw Jones qualified from Sheffield University Medical School in 1986. Having completed his post graduate General Practice Training he worked as a full time General Practitioner in an innovative partnership in North London for 10 years. In 1989 he first started using dermal fillers in the form of bovine collagen, then superseded by the Q Med fillers. Gradually, with considerable training and clinical treatments, Dr Jones has developed an extensive range of non-surgical treatments. In 2002 he was the lead physician in the development of the Boots plc Botox services and in 2007 helped to launch the Merz Belotero range of Dermal Fillers in the UK. He has been highly regarded as a trainer for Dermal Fillers, Toxins and PDO Threads at both introductory and advanced level. His extensive knowledge of aesthetic and anti-ageing treatments combined with his holistic medical approach has allowed him to help his patients manage their concerns with expectations addressed appropriately. "It is just as important for the practitioner to realise the limits of their skills and the treatments they provide.”</div>
                                <Button className="mt-auto h-11 w-60">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* report part */}
                <div className="bg-white mx-172 py-25">
                    <div className="flex items-center">
                        <div className="w-106_5">
                            <div className="ttcommon_font_bold text-4xl leading-36_48">Intraline's Rheology Report</div>
                            <div className="mt-5 leading-14_26">See how our MSERIES compares rheologically to the equivalent leading brands. In the report, you will see the data on Viscosity, Phase Angle, Visco-elasticity, and more. Fill out the form and receive a copy.</div>
                            <div className="">
                                <div className="mt-10">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="First name"/>
                                </div>
                                <div className="mt-5">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="Email"/>
                                </div>
                                <div className="mt-5">
                                    <select className="h-11 border-none bg-c_F7F7F7 w-full pl-5 pr-3 py-2 text-c_8D97BC" name="" id="">
                                        <option value="Choose Country or Region">Choose Country or Region</option>
                                    </select>
                                </div>
                                <div className="mt-5">
                                    <div className="text-base leading-14_26">Have you used Intraline M Series Dermal Filler products?</div>
                                </div>
                                <div className="mt-2_5">
                                    <div className="flex items-center">
                                        <input type="radio" />
                                        <label htmlFor="" className="text-base leading-14_26 ml-3">Yes</label>
                                    </div>
                                    <div className="mt-1 flex items-center">
                                        <input type="radio" />
                                        <label htmlFor="" className="text-base leading-14_26 ml-3">No</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Input className="bg-c_F7F7F7" type="text" placeholder="What is your Dermal Filler of choice?"/>
                                </div>
                                <div className="mt-5">
                                    <div className="ttcommon_font_thin leading-extra-loose">
                                        <Link href="/privacypolicy">
                                            <span className="ttcommon_font_bold underline mr-1">Intraline’s Privacy Policy.</span>
                                        </Link> 
                                        If you consent to us contacting you for this purpose, please tick below:
                                    </div>
                                </div>
                                <div className="mt-5 flex items-center">
                                    <div className="flex">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="ml-2 leading-extra-loose">I agree to receive other communications from Intraline.</div>
                                </div>
                                <div className="text-c_00080D mt-5 leading-extra-loose">You can unsubscribe from these communications at any time. By clicking submit below, you consent to allow Intraline to store and process the personal information submitted above to provide you the content requested.</div>
                                <div className="mt-10">
                                    <Button className="h-11 w-full">SUBMIT</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1" style={{marginLeft: 132}}>
                            <Image className="w-full" src={reportImg} />
                        </div>
                    </div>
                </div>
            </div>
}

IndustryIndex.Layout = Layout