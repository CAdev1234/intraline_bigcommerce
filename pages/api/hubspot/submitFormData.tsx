import { fetchApiWithBody } from '@utils/request'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        let req_body = req.body
        let hubspotForm = await fetchApiWithBody(
            process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME as string,
            `/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTALID}/${process.env.NEXT_PUBLIC_HUBSPOT_FOMRID}`,
            'POST',
            req_body
        ).then(res => res.json())
        console.log(hubspotForm)
        res.status(200).json({status: 'success', data: hubspotForm})
    }
}