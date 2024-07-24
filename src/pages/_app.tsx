import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from '../assets/logo.svg'
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import ShoppingCart from '../components/shoppingCart'
import { Handbag } from "phosphor-react";
import { useState } from "react";
import { CartProvider } from "../context/cartContext";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  const [showShoppingCart, setShowShoppingCart] = useState(false)

  const handleShoppingCartClick = () => {
    setShowShoppingCart(!showShoppingCart)
  }

  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href={`/`} prefetch={false} >
            <Image src={logo} alt="logo" />
          </Link >
          <button onClick={handleShoppingCartClick}>< Handbag size={24} /> </button>
        </Header>
        {showShoppingCart && <ShoppingCart onClose={handleShoppingCartClick} />}
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
