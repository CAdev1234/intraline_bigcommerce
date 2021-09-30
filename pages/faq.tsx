import { Layout } from "@components/common"
import { ChevronRight } from "@components/icons"
import FAQCp from "@components/mycp/FAQCp/FAQCp"

export default function FAQ() {
    const RenderFAQCollapse = () => {
        var items = [
          {
            'title': 'How does it work?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'How long do the results last?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What is the expected recovery time for my patients?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are some important safety tips to follow when using this product?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are the most common side effects?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are some important safety tips to follow when using this product?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are the most common side effects?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are some important safety tips to follow when using this product?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          },
          {
            'title': 'What are the most common side effects?',
            'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
          }
        ]
        return <FAQCp faq_li={items}/>
    }
    return (
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="bg-transparent w-full h-15"></div>
            <div className="bg-c_C3E0DC">
                <div className="mt-12_5 px-15 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="ttcommon_font">Home</span>
                        <span className="ml-1 ttcommon_font"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">FAQ</span>
                    </div>
                </div>
                <div className="mx-172 mt-12_5 mb-25">
                    <div className="ttcommon_font_bold text-4xl leading-36_26">Frequently Asked Questions.</div>
                    {RenderFAQCollapse()}
                </div>
            </div>
        </div>
    )
}

FAQ.Layout = Layout