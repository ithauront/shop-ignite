import Image from "next/image";
import { ImageContainer } from "../styles/components/shoppingCarts";
import { ShoppingCartContainer } from "../styles/components/shoppingCarts";
import { useCart } from "../context/cartContext";
import axios from "axios";

export default function ShoppingCart({ onClose }) {
  const { cartItems, removeFromCart, totalCartItems } = useCart()
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity)
  }, 0)

  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalPrice);

  async function finalizePurchase(cartItems) {
    try {
      const items = cartItems.map(item => ({
        priceID: item.defaultPriceId,
        quantity: item.quantity
      }))
      const response = await axios.post('/api/checkout', { items })
      if (response.data.checkoutUrl) {
        window.location.href = response.data.checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
      alert("Failed to initiate checkout process");
    }
  }
  return (
    <ShoppingCartContainer>

      <main>
        <button className="close-button" onClick={onClose} >X</button>
        <p className="title">Sacola de compras</p>
        {cartItems.map(item => {
          return (
            <div key={item.id} className="product">
              <ImageContainer className="imageContainer">
                <Image src={item.imageUrl} alt='product image' width={120} height={110} />
              </ImageContainer>
              <div className="productInfo">
                <p>{item.name}</p>
                <strong>{item.price}</strong> <p>x{item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          )
        })}
      </main>

      <footer>
        <div className="shoppingCartTotal">
          <section><p>Quantidade</p><p>{totalCartItems} itens</p></section>
          <section><strong>Valor total</strong><strong className="price">{formattedTotal}</strong></section>
        </div>
        <button onClick={() => finalizePurchase(cartItems)}>Finalizar a compra</button>
      </footer>
    </ ShoppingCartContainer>
  )
}