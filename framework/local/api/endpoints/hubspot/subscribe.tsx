import type { NextApiRequest, NextApiResponse } from 'next'

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        res.status(200).json({name: 'Eden Hazard'})
    }
    
}