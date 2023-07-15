import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"

export default function Products() {
    const {query} = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 10,00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, harum! Labore suscipit placeat dolorem similique facere libero neque quidem non officiis! Velit eius, molestiae eveniet iusto nihil aperiam eum doloribus.</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}