import { Layout } from "@components/common";
import TreatmentSlider from "@components/mycp/KeenSlider/TreatmentSlider";
import TestimonialCp from "@components/mycp/TestimonialCp/TestimonialCp";



export default function Treatments() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Dr Amrit Thiara,Intraline KOL Cosmetic Doctor and Trainer in Aesthetic Medicine Tiara Aesthetics',
            detail: 'Intraline One is a product I enjoy using for all of my tear trough filler treatments. I regularly perform these procedures and have tried a variety of competitor products but none compare to the consistency, and predictable results that Intraline One gives. With its minimally hydrophilic properties its ideal for use in tear troughs as post procedure little water retention/ attraction occurs, hence avoiding any "puffiness" in the area. Great durability thanks to its highly cross-linked nature means my clients have lasting results with excellent value for money.'
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
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_1.jpg',
        },
        {
            title: 'Chin.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_2.jpg',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_3.jpg',
        },
        {
            title: 'Tear Trough.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_4.jpg',
        },
        {
            title: 'Jawline.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_5.jpg',
        },
        {
            title: 'Cheek.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_6.jpg',
        },
        {
            title: 'Nasolabial Folds.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_7.jpg',
        },
        {
            title: 'Nose.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_8.jpg',
        },
        {
            title: 'Forhead.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_9.jpg',
        },
    ]
    const body_treatment_li = [
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_1.jpg',
        },
        {
            title: 'Breast.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_2.jpg',
        },
        {
            title: 'Buttock.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_3.jpg',
        },
        {
            title: 'Chest.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_4.jpg',
        },
        {
            title: 'Thigh & Knee.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_5.jpg',
        },
        {
            title: 'Stomach.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_6.jpg',
        },
    ]
    const render_ele = facial_treatment_li.map((item, index) => {
        return <div key={`face_${index}`} className="keen-slider__slide">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">0{index + 1}</div>
                    <div className="ttcommon_font_bold text-4xl leading-36_48">{item.title}</div>
                    <div className="ttcommon_font_thin mt-5 text-sm leading-14_26 max-w-xs">{item.detail}</div>
                </div>
    })
    return <div className="ttcommon_font flex flex-col">

                <TreatmentSlider 
                    headline={"Facial Treatments."}
                    sub_headline={"The choice is yours. Find the perfect treatment for you."}
                    treatment_item_li={facial_treatment_li}
                    leftside_bg={"bg-c_F5DBDD"}
                    rightside_bg={"bg-white"}/>
                <TreatmentSlider 
                    headline={"Body Treatments."}
                    sub_headline={"The choice is yours. Find the perfect treatment for you."}
                    treatment_item_li={body_treatment_li}
                    leftside_bg={"bg-c_white"}
                    rightside_bg={"bg-c_CCE7EF"}/>
                {/* Reviews part */}
                <TestimonialCp 
                    head_line={"Testimonials."} 
                    bg_color={"bg-c_C3E0DC"} 
                    quote_color={"#87C1B9"} 
                    testimonial_li={testimonial_li}/>
            </div>
}

Treatments.Layout = Layout