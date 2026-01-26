/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  //favorites
  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem("favorites");
    return savedFav ? JSON.parse(savedFav) : [];
  });

  const addToFav = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeIntoFav = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  //cart
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
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        addToFav,
        favorites,
        removeIntoFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
