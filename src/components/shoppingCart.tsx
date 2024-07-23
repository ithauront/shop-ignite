import Image from "next/image";
import { ImageContainer } from "../styles/pages/success";
import image from '../assets/camisas/Camisa-Maratona 1.png'
import { ShoppingCartContainer } from "../styles/components/shoppingCarts";

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>



      <main>
        <button className="close-button">X</button>
        <p className="title">Sacola de compras</p>
        <div className="product">
          <ImageContainer className="imageContainer">
            <Image src={image} alt='product image' width={120} height={110} />
          </ImageContainer>
          <div className="productInfo">
            <p>Camiseta beyond Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </div>
        <div className="product">
          <ImageContainer className="imageContainer">
            <Image src={image} alt='product image' width={120} height={110} />
          </ImageContainer>
          <div className="productInfo">
            <p>Camiseta beyond Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </div>
        <div className="product">
          <ImageContainer className="imageContainer">
            <Image src={image} alt='product image' width={120} height={110} />
          </ImageContainer>
          <div className="productInfo">
            <p>Camiseta beyond Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="shoppingCartTotal">
          <section><p>Quantidade</p><p>3 itens</p></section>
          <section><strong>Valor total</strong><strong className="price">R$ 270,00</strong></section>
        </div>
        <button>Finalizar a compra</button>
      </footer>
    </ ShoppingCartContainer>
  )
}