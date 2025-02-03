import { createContext, ReactNode } from "react";
import { products } from "../utils";
import Product from "../types/product";

interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
}

export const ShopContext = createContext<ShopContextType | null>(null);

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "&pound;";
  const delivery_fee = 30.99;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
