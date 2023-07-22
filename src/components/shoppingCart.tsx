import Image from "next/image";
import { ImageContainer } from "../styles/pages/success";
import image from '../assets/camisas/Camisa-Maratona 1.png'
import { ShoppingCartContainer, ShoppingItems } from "../styles/components/shoppingCarts";

export default function ShoppingCart () {
    return (
        <ShoppingCartContainer>
            
                <button>X</button>
            
            <ShoppingItems>
                <p className="title">Sacola de compras</p>
                <div>
                    <div className="product">
                      <ImageContainer>
                            <Image src={image} alt='product image' width={120} height={110} />
                      </ImageContainer>
                      <div className="productInfo">
                        <p>Camiseta beyond Limits</p>
                        <strong>R$ 79,90</strong>
                        <button>Remover</button>
                      </div>
                    </div>
                    <div className="product">
                      <ImageContainer>
                            <Image src={image} alt='product image' width={120} height={110} />
                      </ImageContainer>
                      <div className="productInfo">
                        <p>Camiseta beyond Limits</p>
                        <strong>R$ 79,90</strong>
                        <button>Remover</button>
                      </div>
                    </div>
                    <div className="product">
                      <ImageContainer>
                            <Image src={image} alt='product image' width={120} height={110} />
                      </ImageContainer>
                      <div className="productInfo">
                        <p>Camiseta beyond Limits</p>
                        <strong>R$ 79,90</strong>
                        <button>Remover</button>
                      </div>
                    </div>
                </div>
            </ShoppingItems>
            <footer>
                <div className="shoppingcartTotal">
                        <section><p>Quantidade</p><p>3 itens</p></section>
                        <section><strong>Valor total</strong><strong>R$ 270,00</strong></section>
                </div>
                <button>Finalizar a compra</button>
            </footer>
        </ ShoppingCartContainer>
    )
}