import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import firebaseApp from '@utils/firebase/initfirebase'
import { fetchApiWithBody, fetchApiWithoutBody } from '@utils/request'
import { encodeEmail, generateUUID } from '@utils/simpleMethod'
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { resetPassword } from '@utils/firebase/auth'
import { resetPWDEmailTemplate } from '@utils/emailtemplate'



export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method === 'POST') {
        console.log(req.body)
        console.log("forgotpassword called")
        console.log(req.headers.origin)
        // const auth = getAuth(firebaseApp)
        // const actionCodeSettings = {
        //     url: `${process.env.NEXT_PUBLIC_PROJECT_HOST}/account/resetpassword`,
        //     handleCodeInApp: true
        // };
        // await resetPassword(JSON.parse(req.body).email)
        // res.status(200).json({status: 'success'})


        // generate reset password verification link and its period is 24hours
        let key = generateUUID()
        let rp_end_time = Number(Date.now().toString()) + 3600 * 24 * 1000
        let verification_link = `${req.headers.origin}/account/resetpassword?key=${key}&email=${encodeEmail(JSON.parse(req.body).email, 156)}&period=${rp_end_time}`
        console.log(verification_link)


        let nodeMailer = require('nodemailer')
        const transporter = nodeMailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: 'wangliewang311@gmail.com',
                pass: 'edenhazard1995',
            },
            secure: true,
        })
        const mailData = {
            from: 'info@intraline.com',
            to: `${JSON.parse(req.body).email}`,
            subject: `Reset Your Intraline Password`,
            html: resetPWDEmailTemplate(verification_link)
        }

        transporter.sendMail(mailData)

        // // create hubspot market email
        // let create_email_body = {
        //     "name": "Password Reset Email",
        //     "subject": "Please check link to reset your intraline password."
        // }
        // let marketing_email = await fetchApiWithBody(
        //     process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME as string, 
        //     `/marketing-emails/v1/emails?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`, 
        //     'POST', 
        //     JSON.stringify(create_email_body)).then(res => res.json())
        // console.log(marketing_email)
        // fetchApiWithBody(process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME, `/email/public/v1/singleEmail/send?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`, 'POST', )

        res.status(200).json({status: 'success', data: {rp_key: key, rp_end_time: rp_end_time}})
    }
}