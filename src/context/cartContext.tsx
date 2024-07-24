import React, { createContext, useContext, useState } from 'react';

type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
};

type CartItem = Product & {
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
}

const cartContextDefaultValues: CartContextType = {
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { }
};

const CartContext = createContext<CartContextType>(cartContextDefaultValues);

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const isProductInCart = prevItems.find(item => item.id === product.id);
            if (isProductInCart) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems =>
            prevItems.reduce((acc, item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        return [...acc, { ...item, quantity: item.quantity - 1 }];
                    }
                    return acc;
                }
                return [...acc, item];
            }, [])
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
