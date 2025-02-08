"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Product from "../types/product";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(() => {
      setBestSeller(products.filter((item) => item.bestSeller === true))
  }, [products]);

  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our best-selling products—top-rated, customer-approved, and
          in high demand. Shop now before they sell out!
        </p>
      </div>
      {/* ******** Render Best Sellers ******** */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5">
            {bestSeller.map((item, index) => (
                <ProductItem key={index} _id={item._id} title={item.title} description={item.description} price={item.price} images={item.images} />
            ))}
        </div>
      </div>
    </section>
  );
}
