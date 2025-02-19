'use client';

import { createContext, ReactNode, useState } from "react";
import { products } from "../utils";
import Product from "../types/product";

interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: (search: string) => void;
  showSearch: boolean;
  setShowSearch: (showSearch: boolean) => void;
}

// ✅ Provide a default value to avoid `null`
export const ShopContext = createContext<ShopContextType>({
  products,
  currency: "&pound;",
  delivery_fee: 30.99,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
});

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "$";
  const delivery_fee = 30.99;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(true);

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};