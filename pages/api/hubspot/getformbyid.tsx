import { fetchApiWithoutBody } from '@utils/request'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(`/forms/v2/fields/${process.env.NEXT_PUBLIC_HUBSPOT_FOMRID}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`)
        let hubspotForm = await fetchApiWithoutBody(
            process.env.NEXT_PUBLIC_HUBSPOT_HOSTNAME as string,
            `/forms/v2/fields/${process.env.NEXT_PUBLIC_HUBSPOT_FOMRID}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`,
            'GET'
        ).then(res => res.json())
        res.status(200).json({status: 'success', data: hubspotForm})
    }
}   