import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import ShoppingCart from '../components/shoppingCart'
import { useState } from "react";
import { CartProvider } from "../context/cartContext";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  const [showShoppingCart, setShowShoppingCart] = useState(false)

  const handleShoppingCartClick = () => {
    setShowShoppingCart(!showShoppingCart)
  }

  return (
    <CartProvider>
      <Container>
        <Header onShoppingCartClick={handleShoppingCartClick} />
        {showShoppingCart && <ShoppingCart onClose={handleShoppingCartClick} />}
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
