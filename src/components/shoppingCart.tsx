import Image from "next/image";
import { ImageContainer } from "../styles/pages/success";
import image from '../assets/camisas/Camisa-Maratona 1.png'

export default function ShoppingCart () {
    return (
        <div>
            <header>
                <button>X</button>
            </header>
            <main>
                <p>Sacola de compras</p>
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
            </main>
            <footer>
                <div className="shoppingcartTotal">
                        <section><p>Quantidade</p><p>3 itens</p></section>
                        <section><strong>Valor total</strong><strong>R$ 270,00</strong></section>
                </div>
                <button>Finalizar a compra</button>
            </footer>
        </div>
    )
}