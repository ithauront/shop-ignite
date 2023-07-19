import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { METHODS } from "http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {priceID} = req.body

    if (!priceID) {
      return res.status(400).json({ error : 'Price not found'})
    }

    if (req.method != 'POST') {
      return res.status(405).json({ error : 'Method not allowed'})
    }

    const success_url = `${process.env.NEXT_URL}/success`
    const cancel_url = `${process.env.NEXT_URL}/success`
  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: success_url,
    success_url: cancel_url,
    mode: "payment",
    line_items: [
        {
            price: priceID,
            quantity: 1,
        }
    ],  
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}