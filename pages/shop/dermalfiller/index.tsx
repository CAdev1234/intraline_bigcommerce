import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'
import ChevronRight from '@components/icons/ChevronRight'
import { ChevronUp } from '@components/icons'
import ChevronDown from '@components/icons/ChevronDown'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import { Button, Input, TestimonialCp, FAQCp } from '@components/mycp'
import Link from '@components/ui/Link'




const RenderFAQCollapse = () => {
    var items = [
      {
        'title': 'What are the benefits of Dermal Fillers?',
        'detail': 'Generally, Dermal Fillers help patients to achieve a more youthful, rejuvenated look by filling out wrinkles and fine lines in certain areas (currently, the most common treatment area is the face). Patients say the largest benefit of Dermal Fillers is the immediate results they see, you can expect to see your desired results with little to no waiting time post treatment. Patients tend to opt for Dermal Fillers over other alternative treatments that use Neurotoxins (most common brand is Botox®) because of the more natural results achieved by Dermal Fillers and the longer lasting results reached with Dermal Fillers over Neurotoxin treatments. Dermal Fillers are made up of natural properties, like Hyaluronic Acid that is naturally found in the body. Additionally, unlike Neurotoxins, Dermal Fillers are also completely reversible. Dermal Filler treatments can be expected to last for several months, this is dependent on the treatment area, age and lifestyle. Your doctor or injector will be able to give you a more accurate timeline on your results duration. Intraline provides patients with the best of both worlds: A long lasting, beautiful result without the commitment of an irreversible procedure – the perfect introduction to a dermatological aesthetics treatment program.'
      },
      {
        'title': 'How do Dermal Fillers work?',
        'detail': 'There are many types of Dermal Fillers available, Intraline’s Dermal Fillers are produced through a proprietary bacterial fermentation process and never animal-derived, Intraline’s Hyaluronic Acid (HA) is both effective and environmentally responsible. Intraline’s Dermal Fillers work by to repair this damage by temporarily adding HA to the skin, restoring volume and filling in fine lines, wrinkles, and hollows. Intraline’s Dermal Fillers are low-viscosity gels that integrate themselves naturally into the injected tissue, allowing oxygen and hormones to easily pass through them. As time goes on, the injected HA is naturally broken down and absorbed by your body. Intraline’s Dermal Fillers have been developed utilizing the finest ingredients and specifically formulated at a molecular level to provide the smoothest, most natural results available today. Following years of Swedish research, Intraline’s Dermal Fillers utilize our innovative spherification technology, which smoothes HA’s traditionally angular rhomboid molecular structure. This formulation technique provides Intraline’s fillers with some of the highest molecular densities of any product on the market today, leading to smoother, more natural results than ever before possible.'
      },
      {
        'title': 'What is HA?',
        'detail': 'a. Hyaluronic Acid (HA) is the skin’s key tool in retaining water, and its presence in the skin creates volume and elasticity. HA is a naturally occurring sugar found in virtually all species in the animal kingdom and in every tissue of the human body. Just a single gram of Hyaluronic Acid has the ability to hold up to six litres of water.\nb. The skin has three layers: The Epidermis, Dermis, and Subcutaneous. The Epidermis is the outer layer, containing cells that are continually renewed. The Dermis is the middle layer, containing Collagen (which provides support to the skin) and Elastin (which provides strength and flexibility). The Subcutaneous is the deepest layer of the skin, and has the job of supporting the two layers above it. HA is naturally found throughout all three layers of the skin. However, as you age, your skin cells renew themselves at a slower rate, providing less HA, Collagen, and Elastin, causing the skin to thin. In combination with external elements such as sun exposure, gravity, repetitive movement, diet, and stress, the skin loses volume, sags, and develops fine lines.'
      },
      {
        'title': 'Who is a good candidate for Dermal Fillers?',
        'detail': 'Dermal Fillers can be used on people in all age ranges, the ideal candidate should be in good physical and psychological health. Generally, compared to PDO thread treatments Dermal Filler treatments are performed on younger patients. However, this is all dependent on the desired results. It is important for candidates to have realistic expectations of results. Dermal Fillers are a great solution to prevent the early signs of aging in the face (i.e. crows feet, frown lines, smile lines, etc.) as well as plumping and shaping the lips, cheeks and jawline.'
      },
      {
        'title': 'How should I prepare for a Dermal Filler treatment?',
        'detail': 'Before your treatment, it’s wise to sit down with your Clinician in a consultation appointment to discuss your expectations and ensure your understanding of the procedure. Be sure to communicate your specific desires for your appearance, as well as your complete medical history. Talk to your clinician candidly about timelines you may have, or specific events or dates that you would like to see results achieved by. In more general terms, patients want to ensure they do not consume alcoholic beverages for at least 24 hours before the treatment. We also recommend that patients eat and drink prior to their appointments to avoid nausea or lightheadedness. Certain blood thinning medications should also be avoided, for more specifics on this, we recommend contacting your doctor.'
      },
      {
          'title': 'What can I expect during my treatment?',
          'detail': 'Come to your appointment prepared by having followed any instructions provided to you by your Clinician during your consultation. Your Clinician will clean and sterilize the injection site thoroughly. You can expect to experience some mild discomfort during the procedure, but the injection site will be numbed using a topical, or local anesthetic, for your comfort.'
      },
      {
          'title': 'What can I expect after my treatment?',
          'detail': 'a. You can expect to feel some mild discomfort at the injection site after the treatment. Your Clinician will provide you with a list of “Do’s and Don’ts” for post-treatment care. Follow these instructions carefully to avoid excess bruising and swelling, and to guarantee the best possible results. Most commonly, patients are advised to avoid strenuous exercise for one or two days post treatment and alcohol for two to three days. Patients should not expose the injection site to extreme temperatures (cold, heat, or sun) for the first week, and should avoid touching the injection site as much as possible.\nb. One of the benefits of dermal fillers is that you will begin to see results immediately after your treatment. That being said, you can expect some swelling and mild bruising in the days following, so always be sure to book your treatment well in advance of any important events you may need to attend. Your results will last several months, however, if you are unhappy with your new look, dermal fillers are also completely reversible. Intraline provides patients with the best of both worlds: A long lasting result without the commitment of an irreversible procedure – the perfect introduction to a dermatological aesthetics treatment program.'
      },
      {
          'title': 'Recommended questions to ask your clinician',
          'detail': 'a. What products do you recommend, and why?\nb. What specifically are the results that I should I expect?\nc. How long can I expect the results to last?\nd. What side effects should I expect?e.How much will the treatment cost?\nf. How much pain can I expect during and after the treatment?\ng. What type of care will be required after my procedure?\nh. Any additional special instructions?'
      },
      {
          'title': 'How long to the results last?',
          'detail': 'The result duration really depends on treatment, individual and their lifestyle. However, you can expect results on average to last between 4-12 months.'
      },
      {
          'title': 'Are there side effects from Dermal Filler treatments?',
          'detail': 'With any cosmetic procedure there is a range of potential side effects. The most common side effects include temporary reactions at the treatment site such as tenderness, swelling, firmness, lumps/bumps, bruising, pain, redness, discoloration, and itching. The reactions normally appear shortly after treatment and may last up to 7 days for injections into the skin and up to 14 for injection into the lips. If you determine that the discomfort experienced is severe or if the site gives rise to other conditions, such as oedema or prolonged swelling, contact the physician who administered the treatment immediately. Although most side effects will resolve with time, some side effects may persist longer than 30 days. Your doctor may choose to treat them with medications, such as antibiotics, steroids, or hyaluronidase (an enzyme that breaks down HA and essentially removes the product). The risks associated with dermal fillers are low, but it is important to be aware.'
      }
    ]
    return <FAQCp faq_li={items}/>
}



export default function DemeralFiller() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Claire NewmanIntraline KOL & Brand AmbassadorSOFT TOUCHES AESTHETICS',
            detail: 'I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.'
        },
        {
            title: "Marissa Freeman (patient)",
            detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men"
        },
        {
            title: 'Cole Harrison (patient)',
            detail: 'Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!'
        },
        {
            title: 'Mica Amos Aesthetics by Mica',
            detail: 'Beautiful product giving just perfect results.'
        },
        {
            title: 'Dr. TuğbaYalçın Director Lumière Aesthetics',
            detail: 'Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.'
        },
        {
            title: 'Dr. Mark Homes KOL INTRALINE MEDICAL AESTHETICS',
            detail: 'I was amazed by the extra lift and tightening they generated compared to the already impressive cutting cog of the Intraline Dimension 360 thread. The patient who was previously treated with 19G Dimension 360 threads 18 months ago could not belevie the dramatic improvement in the result compared to last time. I am excited about using these in my practice!'
        },
    ]
    return(
        <div className="ttcommon_font text-c_00080D">
            <div className="bg-transparent w-full h-15"></div>
            <div className="relative bg-c_CCE7EF w-full pb-32 flex flex-col
                             h-150 lg:h-210 xl:h-210 2xl:h-210
                             px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                <div className="mt-12_5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                    <div className="flex items-center
                                    px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                        <span><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">Dermal fillers</span>
                    </div>
                </div>
                <div className="mt-28 w-full items-end
                                block sm:flex md:flex lg:flex xl:flex 2xl:flex">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                        <div className="ttcommon_font_thin font-semibold leading-200_160
                                        text-200px">Dermal</div>
                        <div className="ttcommon_font_bold leading-200_160
                                        text-200px" >Fillers</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2
                                    leading-36_48 ttcommon_font_thin
                                    text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl
                                    mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0
                                    " style={{maxWidth: 427 + 'px'}}>
                        Carefully developed after years of research, Intraline's line up of six dermal fillers are CE marked and designed to treat all areas.
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full">
                    <img className="mix_blend_multi h-full" src="/assets/img/BluePurpleSmoke.png" alt="" />
                </div>
            </div>

            <div className="bg-white w-full relative
                                h-175 sm:h-225 md:h-96 lg:h-96 xl:h-122 2xl:h-122">
                <div className="w-full grid gap-6 absolute z-10
                                grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                                -top-44 sm:-top-224 lg:-top-224 xl:-top-224 2xl:-top-224
                                px-5 md:px-15 lg:px-15 xl:px-15 2xl:px-15">
                    <div className="">
                        <div className="leading-36_48 ttcommon_font_bold text-c_00080D
                                        text-3xl xl:text-4xl 2xl:text-4xl">The Essential Series.</div>
                        <div className="relative mt-10 bg-c_C6CBDD w-full border-none flex flex-col">
                            <img className="max-h-96" src="/assets/img/essential_series.jpg" alt="" />
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                <div className="my-auto mx-auto w-64">
                                    <div className="flex flex-col">
                                        <Link href="/shop/dermalfiller/essentials">
                                            <Button className="w-full h-11 text-sm">Learn more</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-c_00080D
                                        text-2xl xl:text-4xl 2xl:text-4xl">Biphasic dermal fillers manufactured with over 30 years of Swedish research.</div>
                    </div>
                    <div className="">
                        <div className="leading-36_48 ttcommon_font_bold text-c_00080D
                                        text-3xl xl:text-4xl 2xl:text-4xl">The M Series.</div>
                        <div className="relative mt-10 w-full border-none flex flex-col">
                            <img className="max-h-96" src="/assets/img/m_series.jpg" alt="" />
                            <div className="absolute top-0 w-full h-full flex flex-col opacity-0 bg-opacity-50 hover:opacity-100">
                                <div className="my-auto mx-auto w-64">
                                    <div className="flex flex-col">
                                        <Link href="/shop/dermalfiller/mseries">
                                            <Button className="w-full h-11 text-sm">Learn more</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leading-36_48 ttcommon_font_thin mt-7_5 text-c_00080D
                                        text-2xl xl:text-4xl 2xl:text-4xl">The next generation of monophasic dermal fillers with lidocaine.</div>
                    </div>
                </div>
            </div>

            
            {/* Testimonial part */}
            <TestimonialCp 
                head_line={"Testimonials."} 
                bg_color={"bg-c_C3E0DC"} 
                quote_color={"#87C1B9"} 
                testimonial_li={testimonial_li}/>

            {/* FAQ part */}
            <div className="bg-white">
                <div className="py-24
                                mx-5 sm:mx-10 md:mx-20 lg:mx-60 xl:mx-60 2xl:mx-60">
                    <div className="flex text-c_00080D mb-2">
                        <div className="font-bold text-4xl
                                         leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <Link href="/faq">
                                <div className="flex items-center">
                                    <div className="font-bold text-lg ml-auto">Read More</div>
                                    <div className="ml-2">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {RenderFAQCollapse()}
                </div>
            </div>
            
            {/* Download Catalog */}
            <div className="bg-c_F5DBDD">
                <div className="py-28">
                    <div className="flex flex-col mx-auto
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5
                                    px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <Input type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <Button className="h-11 w-full text-sm">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

DemeralFiller.Layout = Layout