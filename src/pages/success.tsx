import Link from "next/link";
import { ImageContainerSuccess, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";



interface SuccessProps {
  customerName: string;
  totalItems: number;
  products: {
    name: string;
    imageUrl: string;
    quantity: number;
  }[];
}

export default function Success({ customerName, products, totalItems }: SuccessProps) {

    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <div className="image-array-container">
                    {products.map((product, index) => (
                        <ImageContainerSuccess key={index}>
                            <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
                        </ImageContainerSuccess>
                    ))}
                </div>
                <h1>Compra efetuada!</h1>
                <p>
                    Uhull <strong>{customerName}</strong>, sua compra de
                    {products.length > 1 ? ` ${totalItems} camisetas já está a caminho da sua casa.` :
                        ` a camiseta ${products[0].name} já está a caminho da sua casa.`}
                </p>
                <Link href="/">
                    Voltar ao catalogo
                </Link>
            </SuccessContainer>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!sessionId) {
    console.warn('[Stripe] session_id não encontrado na query.')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    })


    const customerName = session.customer_details?.name ?? 'Cliente'

    const products = session.line_items?.data.map(item => {
      const product = item.price.product as Stripe.Product

      return {
        name: product.name,
        imageUrl: product.images?.[0] ?? '/fallback-image.png',
        quantity: item.quantity ?? 1,
      }
    }) ?? []

    const totalItems = products.reduce((acc, item) => acc + item.quantity, 0)


    return {
      props: {
        customerName,
        products,
        totalItems
      }
    }

  } catch (err) {
    console.error('[Stripe] Erro ao recuperar sessão:', err)

    return {
      redirect: {
        destination: '/fail',
        permanent: false,
      },
    }
  }
}
