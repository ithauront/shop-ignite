import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from '../assets/logo.svg'
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

import { Handbag } from "phosphor-react";

export default function App({ Component, pageProps }:AppProps) {  
  globalStyles()
  return(
<Container>
<Header>
  <Image src={logo} alt="logo" />
  <div>< Handbag size={24}/> </div>
 
</Header>
<Component {...pageProps} />
</Container>

  ) 
}
