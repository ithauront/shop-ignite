import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"

import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import axios from "axios"
import { useState } from "react"

interface ProductProps {
    product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    }
}

export default function Products({product}: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct () {
      try {
        setIsCreatingCheckoutSession(true)
        const reponse = await axios.post('/api/checkout', {
            priceID: product.defaultPriceId
        })

        const {checkoutUrl} = reponse.data
        window.location.href = checkoutUrl
      } catch (err) {
        
        //conectar isso a uma feramenta de observabilidade como (Datadog / sentry)
        setIsCreatingCheckoutSession(false)
        alert('falha ao redirecionar ao checkout')
      }     
    }  

    const { isFallback } = useRouter()
    if (isFallback) {
        return <p>Loading...</p>
        }
    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    return {
        paths: [
            {params: {id: "prod_OFcT8N1YUwVN0t"}},
                     
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price
      return {
        props: {
         product:   {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                        }).format(price.unit_amount / 100), 
                description: product.description,
                defaultPriceId: price.id,
              }
        },
        revalidate: 60* 60 * 1 // apesar do 1 não mudar o calculo ele é interessante para a visualização rapida de quanto tempo esta se passando, se quisermos aumentar passamos ele para 2, 3 etc.
    }
}