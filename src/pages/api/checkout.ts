import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { items } = req.body;

    if (!items || items.length === 0) {
        return res.status(400).json({ error: 'Items not found' });
    }

    const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${process.env.NEXT_URL}/cancel?session_id={CHECKOUT_SESSION_ID}`;

    try {
      console.log('items:', items)
        const checkoutSession = await stripe.checkout.sessions.create({
            line_items: items.map(item => ({
                price: item.priceID, 
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url,
            cancel_url,
        });

        return res.status(201).json({ checkoutUrl: checkoutSession.url });
    } catch (error) {
        console.error('Failed to create checkout session:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
