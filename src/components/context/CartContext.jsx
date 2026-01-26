/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addItem = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
