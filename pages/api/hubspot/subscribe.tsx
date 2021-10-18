import type { NextApiRequest, NextApiResponse } from 'next'
import dynamic from 'next/dynamic'
import {fetchApiWithoutBody} from'utils/request'

// const fetchApi = (hostname:string, endpoint: string, method: string, body?: string) => {
//     let url = hostname + endpoint
//     return fetch(`${url}`, {
//         'headers': {
//             "accept": "application/json, text/javascript, */*; q=0.01",
//             "accept-language": "en-US,en;q=0.9",
//             "content-type": "application/json",
//             "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "x-requested-with": "XMLHttpRequest",
//         },
//         'method': method,
//         'body': body
//     })
// }

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    let hapikey = process.env.NEXT_PUBLIC_HUBSPOT_API_KEY
    if (req.method === 'POST') {
        let body = JSON.parse(req.body)
        console.log(body)
        console.log(`/email/public/v1/subscriptions/${body.email}?hapikey=${hapikey}`)
        let getSubscribeTypes = await fetchApiWithoutBody(
            process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME as string, 
            `/email/public/v1/subscriptions/${body.email}?hapikey=${hapikey}`, 
            'GET')
            .then(res => {res.json()})
        
        let getSubscribeStatus = await fetchApiWithoutBody(
            process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME as string, 
            `/email/public/v1/subscriptions/${body.email}?hapikey=${hapikey}`, 
            'GET')
            .then(res => res.json())
        console.log(getSubscribeStatus)
        
        // if (getSubscribeStatus.subscribed === undefined) {
        //     res.status(401).json({status: 'failed', msg: 'Please check your email'})
        // }
        if (getSubscribeStatus.subscribed) {
            res.status(200).json({status: 'success', msg: 'You are subscribed successfully.'})
        }else {
            res.status(400).json({status: 'failed', msg: 'Subscribe failed'})
        }
    }
    
}
