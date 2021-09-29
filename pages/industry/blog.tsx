import { Layout } from "@components/common"
import Button from '@components/mycp/Button'

export default function IndustryBlog() {
    const tag_li = ['all articles', 'intraline', 'dermal filler', 'aesthetics education', 'medical aesthetics', 'anti-ageing', 'moisturizer', 'treatments', 'moisturizer', 'news & media', 'biocellulose', 'skincare', 'faq']
    return <div className="ttcommon_font_thin">
                <div className="bg-white pt-40 pb-25 px-15">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">Intraline's Blog.</div>
                    <div className="mt-2.5">Read the latest industry news.</div>
                    <div className="mt-7_5 flex w-9/12 flex-wrap gap-y-2">
                        {tag_li.map((item, index) => {
                            return <div className="bg-c_F7F7F7 rounded-2xl px-6 py-2 mr-2.5 uppercase text-sm leading-14_17" key={`tag_${index}`}>{item}</div>
                        })}
                    </div>
                    <div className="mt-12_5 flex items-center">
                        <div className="w-1/2 bg-c_F5DBDD" style={{height: 411}}></div>
                        <div className="w-1/2" style={{paddingInline: 132}}>
                            <div className="text-sm leading-14_17 tracking-widest uppercase">Posted 30 January 2021 by Dr. Tukba Yalcin</div>
                            <div className="ttcommon_font_bold mt-5 text-2xl leading-36_48 uppercase">THE IMPACT OF AESTHETIC TREATMENTS ON CONFIDENCE & WELLBEING</div>
                            <div className="mt-5 text-sm leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                            <Button className="mt-7_5 w-60 h-11 text-sm">Start Reading</Button>
                        </div>
                    </div>
                    <div className="mt-15 grid grid-cols-3 gap-x-5 gap-y-14">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return <div key={`article_${index}`}>
                                        <div className="bg-c_F5DBDD w-full" style={{height: 270}}></div>
                                        <div className="mt-12 uppercase text-sm leading-14_17 tracking-widest">Posted 30 January 2021 by Dr. Tukba Yalcin</div>
                                        <div className="ttcommon_font_bold mt-5 text-2xl leading-36_48 uppercase">THE IMPACT OF AESTHETIC TREATMENTS ON CONFIDENCE & WELLBEING</div>
                                        <div className="mt-5 text-sm leading-14_26">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</div>
                                        <Button className="mt-7_5 w-full h-11 text-sm">Start Reading</Button>
                                    </div>
                        })}
                    </div>

                    <div className="mt-20 flex items-center justify-center">
                        <div className="p-2 text-sm tracking-widest mx-4">1</div>
                        <div className="p-2 text-sm tracking-widest mx-4">2</div>
                        <div className="p-2 text-sm tracking-widest mx-4">3</div>
                        <div className="p-2 text-sm tracking-widest mx-4">...</div>
                        <div className="p-2 text-sm tracking-widest mx-4">7</div>
                        <div className="p-2 text-sm tracking-widest mx-4">8</div>
                        <div className="p-2 text-sm tracking-widest mx-4">9</div>
                        <div className="ttcommon_font_bold p-2 text-sm tracking-widest mx-4 uppercase">next</div>
                    </div>
                </div>

                
            </div>
}

IndustryBlog.Layout = Layout