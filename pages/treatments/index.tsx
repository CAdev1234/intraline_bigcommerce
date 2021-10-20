import { Layout } from "@components/common";
import dynamic from 'next/dynamic'

const ChevronRight = dynamic(import('@components/icons/ChevronRight'))
const KeenSliderA = dynamic(import('@components/mycp/KeenSlider/KeenSliderA'))
const TreatmentSlider = dynamic(import("@components/mycp/KeenSlider/TreatmentSlider"))
const TestimonialCp = dynamic(import('@components/mycp/TestimonialCp/TestimonialCp'))
const Link = dynamic(import('@components/ui/Link'));

const Image = dynamic(import('next/image'))


export default function Treatments() {
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
    const facial_treatment_li = [
        {
            title: 'Neck.',
            detail: 'PDO Threads and Dermal Fillers can be used to tighten, lift and reshape the Décolletage area (otherwise known as the neck, shoulders, and upper chest, that is exposed by the neckline of clothing). Intraline Two and M2 Plus can be used to treat Neck Folds.',
            img: '/assets/img/treatment_face_1.webp',
        },
        {
            title: 'Chin.',
            detail: 'Intraline Two, M3 Plus and M4 Plus Dermal Filler can all be used to help restore volume and correct facial proportions. Ideally in a profile view of the face the bridge of the nose should be in line with.',
            img: '/assets/img/treatment_face_2.webp',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_3.webp',
        },
        {
            title: 'Tear Trough.',
            detail: 'A tear trough treatment with Intraline One Dermal Filler is a safe, minimally invasive and instant correction to fix dark under eye circles.',
            img: '/assets/img/treatment_face_4.webp',
        },
        {
            title: 'Jawline.',
            detail: 'One of the most common complaints as people age is the appearance of jowls, ie. lost definition in the jawline. Intraline Two & M4 Plus Dermal Filler both have the ability to define, sculpt, and shape the jawline.',
            img: '/assets/img/treatment_face_5.webp',
        },
        {
            title: 'Cheek.',
            detail: 'Intraline M4 Plus and Intraline Two can both be used to restore lost volume in the cheek. One of the earliest signs of ageing is the sagging in the mid-face. As we age two things occur with our cheeks. The first is the malar fat pad begins to fall which creates a deepening of the Nasolabial.',
            img: '/assets/img/treatment_face_6.webp',
        },
        {
            title: 'Nasolabial Folds.',
            detail: 'Intraline One, Intraline Two and M3 Plus can all be used to treatment the wrinkles and fine lines around your mouth known as nasolabial folds, "smile lines" or "laugh lines". Some patients wish to lessen or smooth out the skin around the side of the mouth running up to the nose.',
            img: '/assets/img/treatment_face_7.webp',
        },
        {
            title: 'Nose.',
            detail: 'M4 Plus Dermal Filler can be injected on and around the nose to help restore volume and diminish the look of lines that form on either side of the nose or on the nose.',
            img: '/assets/img/treatment_face_8.webp',
        },
        {
            title: 'Forhead.',
            detail: 'Intraline One, Two or M2 Plus Dermal Filler can be injected into the forehead to help restore volume and diminish the look of lines. For wrinkles due to volume loss, Intraline Dermal Fillers are an excellent solution.',
            img: '/assets/img/treatment_face_9.webp',
        },
    ]
    const body_treatment_li = [
        {
            title: 'ARMS & ELBOWS.',
            detail: 'A PDO Thread Treatment is a great solution to tighten the skin on basically any part of your body. PDO Threads stimulate the production of your own collagen, elastin and hyaluronic acid.',
            img: '/assets/img/treatment_body_1.webp',
        },
        {
            title: 'Breast.',
            detail: 'Many people don’t know that undergoing a Breast Lift using PDO Threads is a great solution to tighten, lift and reshape the breast. However, due to the complicated anatomy of the breast an advanced practitioner should always be selected.',
            img: '/assets/img/treatment_body_2.webp',
        },
        {
            title: 'Buttock.',
            detail: 'PDO Threads can be used to tighten, lift and reshape the Buttocks. PDO thread butt lifts are an effective way to lift loose skin without costly surgery or downtime.',
            img: '/assets/img/treatment_body_3.webp',
        },
        {
            title: 'Chest.',
            detail: 'PDO Threads can be used to tighten, lift and reshape the Décolletage area (otherwise known as the neck, shoulders, and upper chest, that is exposed by the neckline of clothing). PDO Threads stimulate the production of your own collagen, elastin and hyaluronic acid.',
            img: '/assets/img/treatment_body_4.webp',
        },
        {
            title: 'Thigh & Knee.',
            detail: 'As we age, fat naturally atrophies and the skin begins to loosen, making the skin on the thighs start to sag. As skin and fat change, cellulite becomes more apparent. Plus, we lose an average of 5% of muscle mass every 10 years after the age of 35, which also affects the shape of your thighs.',
            img: '/assets/img/treatment_body_5.webp',
        },
        {
            title: 'Stomach.',
            detail: 'Many people don’t know that a PDO Thread treatment can tighten and lift the stomach. The treatment can be used to immediately restore a sagging stomach to its original form.',
            img: '/assets/img/treatment_body_6.webp',
        },
    ]
    let facial_render_ele = facial_treatment_li.map((item, index) => {
        return <div className="keen-slider__slide" key={`category_${index}`}>
                    <div className="flex flex-col">
                        <div className="w-full aspect-w-1 aspect-h-1">
                            <div className="h-full w-full">
                                <Image className="" src={item.img} alt="" layout="fill"/>
                            </div>
                        </div>
                        <div className="ttcommon_font_bold mt-7_5 text-left">0{index + 1}</div>
                        <div className="ttcommon_font_bold uppercase text-left">{item.title}</div>
                        <div className="mt-2_5 mb-7_5">{item.detail}</div>
                    </div>
                </div>
    })
    let body_render_ele = body_treatment_li.map((item, index) => {
        return <div className="keen-slider__slide relative" key={`category_${index}`}>
                    <div className="flex flex-col">
                        <div className="w-full aspect-w-1 aspect-h-1">
                            <div className="h-full w-full">
                                <Image className="" src={item.img} alt="" layout="fill"/>
                            </div>
                        </div>
                        <div className="ttcommon_font_bold mt-7_5 text-left">0{index + 1}</div>
                        <div className="ttcommon_font_bold uppercase text-left">{item.title}</div>
                        <div className="mt-2_5 mb-7_5">{item.detail}</div>
                    </div>
                </div>
    })
    return <div className="flex flex-col ttcommon_font
                            mt-16 md:mt-0">
                <div className="h-15 w-full bg-transparent"></div>
                <div className="hidden md:block">
                    <TreatmentSlider 
                        headline={"Facial Treatments."}
                        sub_headline={"The choice is yours. Find the perfect treatment for you."}
                        treatment_item_li={facial_treatment_li}
                        leftside_bg={"bg-c_F5DBDD"}
                        rightside_bg={"bg-white"}
                        enable_path={true}/>
                </div>
                <div className="hidden md:block">
                    <TreatmentSlider 
                        headline={"Body Treatments."}
                        sub_headline={"The choice is yours. Find the perfect treatment for you."}
                        treatment_item_li={body_treatment_li}
                        leftside_bg={"bg-c_white"}
                        rightside_bg={"bg-c_CCE7EF"}
                        enable_path={false}/>
                </div>
                
                {/* responsive part */}
                <div className="block md:hidden px-5 bg-c_F5DBDD pb-15">
                    <div className="flex items-center mt-7_5">
                        <span className="mr-1"><Link href="/">Home</Link></span>
                        <span className="mr-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold">Treatments</span>
                    </div>
                    <div className="mt-10 ttcommon_font_bold text-2xl">Facial Treatments</div>
                    <div className="mt-2_5 ttcommon_font">The choice is yours. Find the perfect treatment for you.</div>
                    <div className="mt-7_5">
                        <KeenSliderA 
                            slidesPerView={[1,1,1,1,1]} 
                            render_ele={facial_render_ele} 
                            navCss={"mt-0"}/>
                    </div>
                </div>


                <div className="block md:hidden px-5 bg-white pb-15">
                    <div className="mt-10 ttcommon_font_bold text-2xl">Body Treatments.</div>
                    <div className="mt-2_5 ttcommon_font">The choice is yours. Find the perfect treatment for you.</div>
                    <div className="mt-7_5">
                        <KeenSliderA 
                            slidesPerView={[1,1,1,1,1]} 
                            render_ele={body_render_ele} 
                            navCss={"mt-0"}/>
                    </div>
                </div>

                {/* Reviews part */}
                <TestimonialCp 
                    head_line={"Testimonials."} 
                    bg_color={"bg-c_C3E0DC"} 
                    quote_color={"#87C1B9"} 
                    testimonial_li={testimonial_li}/>
            </div>
}

Treatments.Layout = Layout