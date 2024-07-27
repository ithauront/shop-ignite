import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useCart } from "../context/cartContext";
import { HeaderContainer } from '../styles/components/header';
import logo from '../assets/logo.svg'
import { useRouter } from "next/router";



function Header({ onShoppingCartClick }) {
    const { totalCartItems } = useCart()
    const router = useRouter()
    const isInSuccessOrFail = router.pathname === '/success' || router.pathname === '/fail'

    return (
        <HeaderContainer className={isInSuccessOrFail ? 'isInSuccessOrFail' : ''}>
            <Link className='imgContainer' href="/" passHref>
                <Image className="logo" src={logo} alt="logo" />
            </Link>
            {!isInSuccessOrFail && (
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
