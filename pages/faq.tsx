import dynamic from 'next/dynamic'
import { Layout } from "@components/common"

const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const FAQCp = dynamic(import('@components/mycp/FAQCp/FAQCp'))

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
        <div className="text-c_00080D flex flex-col ttcommon_font
                        mt-16 sm:mt-0">
            <div className="bg-transparent w-full h-15"></div>
            <div className="bg-c_C3E0DC">
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest
                                px-5 sm:px-15">
                    <div className="flex items-center">
                        <span className="mr-1">Home</span>
                        <span className="mr-1 ttcommon_font"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">FAQ</span>
                    </div>
                </div>
                <div className="mt-12_5 mb-25
                                mx-5 sm:mx-15 md:mx-172">
                    <div className="ttcommon_font_bold text-4xl leading-36_26
                                    hidden sm:block">Frequently Asked Questions.</div>
                    <div className="ttcommon_font_bold text-4xl leading-36_26
                                    block sm:hidden">FAQs.</div>
                    {RenderFAQCollapse()}
                </div>
            </div>
        </div>
    )
}

FAQ.Layout = Layout