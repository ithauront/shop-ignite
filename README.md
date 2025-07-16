# 🛒 Ignite Shop

An e-commerce application built with Next.js and Stripe for handling payments. This project was developed as a learning exercise to explore fullstack capabilities using Next.js API routes and static site generation.

## 🛫 Deploy

This project is deployed on Vercel, which provides seamless integration with Next.js.

Live URL:
👉 https://shop-ignite-mu.vercel.app

You can test the entire purchase flow using Stripe test cards (see “Test Payments” section). After checkout, you will be redirected to a success or fail page based on the payment result.
Note that in most error scenarios, Stripe itself prevents the checkout from completing and displays an error message within the Stripe interface.

## ✨ Features

   🧾 Product catalog fetched from Stripe

   🛍️ Shopping cart with quantity control (React Context API)

   💳 Checkout integration with Stripe Checkout

   🧠 Static generation (getStaticProps, getStaticPaths) and SSR (getServerSideProps)

   ✅ Success and fail pages for purchases

   📦 Responsive layout and optimized images with next/image

   🔐 Mock payments using Stripe's

## 🧱 Tech Stack

   * Next.js

   * React

   * Axios

   * Stripe API

   * Phosphor Icons

   * Keen Slider

   * Stiches


## ▶️ Getting Started

   * Clone the repository
```bash
git clone https://github.com/ithauront/shop-ignite.git
```

   * Install dependencies
```bash
pnpm install
```

   * Set up environment variables
    Create a .env.local file with:
```bash
# APP
NEXT_URL=http://localhost:3000

# STRIPE
STRIPE_PUBLIC_KEY=Your_stripe_public_key
STRIPE_SECRET_KEY=Your_stripe_secret_key
```

Run the development server
```bash
pnpm dev
```

Access at ```http://localhost:3000```


### 🧪 Test Payments

Use Stripe's test cards during checkout:

Card number: 4242 4242 4242 4242

Expiry: any future date

CVC: any 3 digits

ZIP: any 5 digits


## 🚀 What I Learned

How to use Next.js API routes to simulate a backend

Managing global cart state with React Context API

Dynamic routing and fallback pages

Integrating Stripe Checkout

Using SSG and SSR depending on the page needs

Making a carousel using keen-slider lib

Using Stitches for styling

Deploying a fullstack Next.js app on Vercel and managing environment variables


