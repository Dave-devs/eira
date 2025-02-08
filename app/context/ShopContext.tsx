'use client';

import { createContext, ReactNode } from "react";
import { products } from "../utils";
import Product from "../types/product";

interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
}

// ✅ Provide a default value to avoid `null`
export const ShopContext = createContext<ShopContextType>({
  products,
  currency: "&pound;",
  delivery_fee: 30.99,
});

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "$";
  const delivery_fee = 30.99;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};