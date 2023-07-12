import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import camiseta1 from '../assets/camisas/Camisa-Maratona 1.png'
import camiseta2 from '../assets/camisas/IgniteLab-T-shirt 2.png'
import camiseta3 from '../assets/camisas/Igniter-abord-2-t-shirt 1.png'
export default function Home() {
  return (
   <HomeContainer>
   <Product>
    <Image src={camiseta1} alt='camiseta1'  width={520} height={480}/>

    <footer>
      <strong>Camiseta X</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   <Product>
    <Image src={camiseta2} alt='camiseta1' width={520} height={480} />
    <footer>
      <strong>Camiseta Y</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   <Product>
    <Image src={camiseta3} alt='camiseta1'  width={520} height={480}/>
    <footer>
      <strong>Camiseta Z</strong>
      <span>R$ 79,90</span>
    </footer>
   </Product>
   </HomeContainer>
  )
}
