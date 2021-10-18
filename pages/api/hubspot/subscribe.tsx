import type { NextApiRequest, NextApiResponse } from 'next'
import {fetchApiWithoutBody} from'utils/request'


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
