import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import { HeaderContainer } from '../styles/components/header';
import logo from '../assets/logo.svg'
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";

function Header({ onShoppingCartClick }) {
    const { totalCartItems } = useCart()
    const router = useRouter()
    const isInSuccessOrFail = router.pathname === '/success' || router.pathname === '/fail'
    const Handbag = dynamic(
  () => import('phosphor-react').then((mod) => mod.Handbag),
  { ssr: false }
)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

    return (
        <HeaderContainer className={isInSuccessOrFail ? 'isInSuccessOrFail' : ''}>
            <Link className='imgContainer' href="/" passHref>
                <Image className="logo" src={logo} alt="logo" />
            </Link>
            {isClient && !isInSuccessOrFail && (
        <div className='cartIconWrapper'>
          <button onClick={onShoppingCartClick}>
            <Handbag size={24} />
            {totalCartItems > 0 && (
              <span className='cartItemCount'>{totalCartItems}</span>
            )}
          </button>
        </div>
      )}
        </HeaderContainer>
    );
}

export default Header;
