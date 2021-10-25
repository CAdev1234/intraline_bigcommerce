import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method === 'POST') {
        console.log(req.body)
        console.log(req.headers.origin)



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
            to: 'info@intraline.com',
            from: `${JSON.parse(req.body).email}`,
            subject: `Reset Your Intraline Password`,
            html: ''
        }

        transporter.sendMail(mailData)
        res.status(200).json({status: 'success'})
    }
}