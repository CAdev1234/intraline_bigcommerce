import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/common'


const Image = dynamic(import('next/image'))
import AboutUsSec1Img from 'public/assets/img/aboutus_sec_1.webp'
import AboutUsSec2Img from 'public/assets/img/aboutus_sec_2.webp'
import AboutUsSec3Img from 'public/assets/img/aboutus_sec_3.webp'
import AboutUsSec4Img from 'public/assets/img/aboutus_sec_4.webp'
import QuestionForm from '@components/mycp/QuestionForm'




export default function AboutUs() {
    const our_sec = [
        {
            title: 'Education.',
            detail: 'Intraline places a high value on providing proper education on our products and the necessary tools to use them safely and effectively. Intraline supports medical professionals.',
            img: AboutUsSec1Img
        },
        {
            title: 'Confidence.',
            detail: 'Intraline believes in inspiring confidence through the use of safe and effective medical aesthetic products.',
            img: AboutUsSec2Img
        },
        {
            title: 'Individuality.',
            detail: 'Intraline respects that each individual has their own story and desired outcomefrom a treatment. We value listening to the patients and encouraging diversity.',
            img: AboutUsSec3Img
        },
        {
            title: 'Excellence.',
            detail: 'Intraline believes in upholding the highest standards for our high quality products and our genuine customer care with a focus on building long-lasting and trusting relationships.',
            img: AboutUsSec4Img
        }
    ]
    
    return(
        <div className="text-c_00080D flex flex-col ttcommon_font
                        mt-16 md:mt-0">
            <div className="relative w-full flex flex-col mt-15">
                <div className="w-full aspect-w-16 aspect-h-9">
                    <video width="100%" height="100%" controls autoPlay={true} muted={true} loop={true}>
                        <source src="/assets/video/about-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Confidence is Ageless. */}
            <div className="bg-white mx-auto
                            w-full">
                <div className="flex flex-col max-w-2xl mx-auto py-28
                                px-5 md:px-0">
                    <div className="ttcommon_font_bold leading-36_26 text-center
                                    text-2xl md:text-4xl">Confidence is Ageless.</div>
                    <p className="leading-36_48 mt-6 text-center
                                text-2xl md:text-4xl">We believe that people matter, therefore we listen and commit ourselves to excellence in all that we do. Your story is our story, and we are proud to grow together.</p>
                </div>
            </div>

            {/* education part */}
            <div className="py-25 bg-c_CCE7EF
                            px-5 md:px-15">
                <div className="grid gap-x-5 gap-y-12
                                grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                    {our_sec.map((item, index) => {
                        return <div key={`our_sec_${index}`}>
                                    <div className="ttcommon_font_bold leading-36_48 text-4xl">{item.title}</div>
                                    <div className="mt-7_5">
                                        {/* <img className='w-full' src={item.img as sr} alt="" /> */}
                                        <div className='image-container'>
                                            <Image className="image" src={item.img} alt={`aboutus_sec_${index}`} layout="fill"/>
                                        </div>
                                    </div>
                                    <div className="mt-7_5 leading-14_26">{item.detail}</div>
                                </div>
                    })}
                </div>
            </div>

            {/* Question part */}
            <QuestionForm bg_color='bg-white' input_bg='bg-c_F7F7F7'/>
            
            

        </div>
    )
}

AboutUs.Layout = Layout