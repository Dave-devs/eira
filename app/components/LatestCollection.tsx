/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Product from "../types/product";
import ProductItem from "./ProductItem";

interface LatestCollectionProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function LatestCollection({
  isDarkMode,
  setIsDarkMode,
}: LatestCollectionProps) {
  const { products } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState<Product[]>([]);

  const LATEST_COLLECTION_LIMIT = 8;

  useEffect(() => {
    setLatestCollection(products.slice(0, LATEST_COLLECTION_LIMIT));
  }, [products]);

  return (
    <section data-testid="latest-collection-section" className="my-10">
      <div data-testid="title-section" className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p data-testid="collection-description" className="w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Discover our latest collection—trendy, stylish, and crafted for every
          occasion. Shop now and upgrade your wardrobe!
        </p>
      </div>

      <div data-testid="products-container" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div data-testid="products-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5">
          {latestCollection.map((item, index) => (
            <div data-testid={`product-item-${index}`} key={index}>
              <ProductItem
                _id={item._id}
                images={item.images}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
