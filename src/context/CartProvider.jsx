import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children, initialCartItems}) => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    useEffect(()=>{
        let items= localStorage.getItem('carts');
        if(items){
          setCartItems(JSON.parse(items));
        }
    },[]);
    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
};