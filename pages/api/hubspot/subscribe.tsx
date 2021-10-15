import type { NextApiRequest, NextApiResponse } from 'next'

const fetchApi = (endpoint: string, method: string, body?: string) => {
    return fetch(`https://api.hubapi.com${endpoint}`, {
        'headers': {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
        },
        'method': method,
        // 'body': body
    })
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    // let hapikey = 'eu1-4ca7-45d1-4703-9402-a2de0e6d1e5a'
    let hapikey = process.env.NEXT_PUBLIC_HUBSPOT_API_KEY
    // let hapikey = 'fe07f085-692d-41ac-b86e-d9a586f18f1d'
    let potalID = '2718899'
    if (req.method === 'POST') {
        let body = JSON.parse(req.body)
        console.log(body)
        // let getSubscribeTypes = await fetchApi(`/email/public/v1/subscriptions?hapikey=${hapikey}`, 'GET').then(res => {res.json()})
        let getSubscribeTypes = await fetchApi(`/email/public/v1/subscriptions?hapikey=${hapikey}`, 'GET').then(res => {res.json()})
        console.log(getSubscribeTypes)

        let getSubscribeStatus = await fetchApi(`/email/public/v1/subscriptions/${body.email}?hapikey=${hapikey}`, 'GET').then(res => res.json())
        console.log(getSubscribeStatus)
        
        if (getSubscribeStatus.subscribed === undefined) {
            res.status(401).json({status: 'failed', msg: 'Please check your email'})
        }
        else if (getSubscribeStatus.subscribed) {
            res.status(400).json({status: 'failed', msg: 'You are already subscribed.'})
        }else {
            let update_subscribe = await fetchApi(`/email/public/v1/subscriptions/${body.email}?hapikey=${hapikey}`, 'POST', JSON.stringify(
                {
                    "subscriptionStatuses": [
                        {
                            "id": 7,
                            "subscribed": true,
                            "optState": "OPT_IN",
                            "legalBasis": "PERFORMANCE_OF_CONTRACT",
                            "legalBasisExplanation": "We need to send them these emails as part of our agreement with them."
                        }
                    ],
                    "portalSubscriptionLegalBasis": "LEGITIMATE_INTEREST_CLIENT",
                    "portalSubscriptionLegalBasisExplanation": "They told us at a conference that they're interested in receiving communications."
                }
            )).then(response => response.json())
            res.status(200).json({status: 'success', msg: 'Success'})
        }
    }
    
}
