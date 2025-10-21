import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Holds all cart items (each item has id, title, quantity, etc.)
  const [cart, setCart] = useState([]);

  // Calculates total number of items in the cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    // Provide cart data and updater functions to all children
    <CartContext.Provider value={{ cart, setCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to easily access cart data in any component
export function useCart() {
  return useContext(CartContext);
}
