"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import LeftSideCollectionFilter from "../components/LeftSideCollectionFilter";
import RightSideCollection from "../components/RightSideCollection";
import Product from "../types/product";

export default function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("relevant");

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = useCallback(() => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilterProducts(productCopy);
  }, [products, category, subCategory]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    const filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }, [sortType, filterProducts, applyFilter]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <section
      data-testid="collection-section"
      className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t max-w-7xl mx-auto"
    >
      {/* ******** LEFT SIDE ******** */}
      <LeftSideCollectionFilter
        data-testid="left-side-filter"
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        toggleCategory={toggleCategory}
        toggleSubCategory={toggleSubCategory}
      />
      {/* ******** RIGHT SIDE ******** */}
      <RightSideCollection
        data-testid="right-side-collection"
        filterProducts={filterProducts}
        setSortType={setSortType}
      />
    </section>
  );
}
