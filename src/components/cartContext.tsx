import React, { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  id: string;           // unique product id
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {

  // Load cart from localStorage
const [cart, setCart] = useState<CartItem[]>(() => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
});


  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx !== -1) {
        // update quantity
        const updated = [...prev];
        updated[idx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id: string, quantity: number) => setCart(prev =>
    prev.map(i => i.id === id ? { ...i, quantity } : i)
  );
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for usage
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
