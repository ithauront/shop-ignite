import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

import Head from "next/head";
import { WarningOctagon } from "phosphor-react";




export default function Success() {
    return(
        <>
<Head>
  <title>Erro | Ignite Shop</title>

  <meta name="robots" content="noindex"/>
</Head>
        
        <SuccessContainer>
            <h1>Erro</h1>
            <ImageContainer>
               <WarningOctagon size={50}/>
            </ImageContainer>

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

