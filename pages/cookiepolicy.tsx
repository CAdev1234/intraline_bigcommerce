import { Layout } from "@components/common";
import dynamic from 'next/dynamic'
const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const Link = dynamic(import('@components/ui/Link'));

export default function CookiePolicy() {
    return <div className="text-c_00080D0 ttcommon_font bg-white
                           mt-16 md:mt-0">
                <div className="bg-transparent w-full h-15"></div>
                <div className="mt-12_5 flex items-center uppercase leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4" /></span>
                        <span className="ttcommon_font_bold">cookie policy</span>
                    </div>
                </div>
                <div className="flex flex-col pt-10 pb-25 mx-auto
                                w-full md:w-146
                                px-5 md:px-0">
                    <div className="ttcommon_font_bold text-center
                                    text-2xl md:text-4xl
                                    leading-tight md:leading-36_48">Intraline's Cookie Policy</div>
                    <p className="mt-12_5 leading-14_26">
                        This privacy notice discloses the privacy practices for (www.intraline.com). This privacy notice applies solely to information collected by this website. It will notify you of the following:
                    </p>
                    <p className="mt-12_5 leading-14_26">
                        1. What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.<br/>
                        2. What choices are available to you regarding the use of your data.<br />
                        3. The security procedures in place to protect the misuse of your information.
                    </p>
                    <p className="mt-12_5 leading-14_26">
                        Information Collection, Use, and Sharing<br/>
                        We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.<br />
                        We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. selling product to you.<br />
                        Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy. Please note you can unsubscribe at anytime.<br />
                    </p>
                    <p className="mt-12_5 leading-14_26">
                        Your Access to and Control Over Information<br/>
                        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address (info@intraline.com) given on our website:<br /><br />
                        See what data we have about you, if any.<br />
                        Change/correct any data we have about you.<br />
                        Have us delete any data we have about you.<br />
                        Express any concern you have about our use of your data.
                    </p>
                </div>      
            </div>
}

CookiePolicy.Layout = Layout