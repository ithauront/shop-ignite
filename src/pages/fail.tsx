import Link from "next/link";
import { ImageContainerSuccess, SuccessContainer } from "../styles/pages/success";
import Head from "next/head";
import { WarningOctagon } from "phosphor-react";




export default function Fail() {
    return (
        <>
            <Head>
                <title>Erro | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Erro</h1>
                <ImageContainerSuccess>
                    <WarningOctagon size={120} />
                </ImageContainerSuccess>

                <p>
                    Ops, infelizmente houve um erro no seu pedido. Por favor entre em contato conosco para que possamos reslver o problema.
                </p>

                <Link href="/">
                    Voltar ao catalogo
                </Link>
            </SuccessContainer>
        </>
    )
}

