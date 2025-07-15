import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useCart } from "../context/cartContext"
import dynamic from 'next/dynamic'


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })
    const Handbag = dynamic(
  () => import('phosphor-react').then((mod) => mod.Handbag),
  { ssr: false }
)
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>

      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">


        {products.map(product => {
          return (
            <>
              <Product key={product.id} className="keen-slider__slide">
                <Link href={`/product/${product.id}`} key={product.id} prefetch={false} >
                  <Image src={product.imageUrl} alt='camiseta' width={520} height={480} priority={true} />
                </Link>
                <footer>
                  <div className="info">
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                    <div className="shoppingCart"> test</div>
                  </div>

                  <div onClick={() => addToCart(product)} className="shoppingCart">< Handbag size={24} /> </div>
                </footer>
              </Product>
            </>
          )

        })}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}