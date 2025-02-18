import React from "react";
import Title from "./Title";
import Product from "../types/product";
import ProductItem from "./ProductItem";

interface RightSideCollection {
  filterProducts: Product[];
  setSortType: (e: string) => void;
}

export default function RightSideCollection({
  filterProducts,
  setSortType,
}: RightSideCollection) {
  return (
    <section className="flex-1 mt-20" data-testid="collection-section">
      <div
        className="flex justify-between text-base sm:text-2xl mb-4"
        data-testid="collection-header"
      >
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        {/* Product Sort */}
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border-2 border-gray-300 text-sm px-2"
          data-testid="sort-select"
        >
          <option value="relevant" data-testid="sort-option-relevant">
            Sort by: Relevant
          </option>
          <option value="low-high" data-testid="sort-option-low-high">
            Sort by: Low to High
          </option>
          <option value="high-low" data-testid="sort-option-high-low">
            Sort by: High to Low
          </option>
        </select>
      </div>
      {/* Product Card */}
      <div
        className="grid grid:cols-2 md:grid-cols3 lg:grid-cols-4 gap-4 gap-y-6"
        data-testid="products-grid"
      >
        {filterProducts.map((product, index) => (
          <ProductItem
            key={index}
            _id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.images}
            data-testid={`product-item-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
