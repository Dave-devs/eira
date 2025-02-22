/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BiCartDownload } from "react-icons/bi";
import { ShopContext } from "../context/ShopContext";

interface ProductItemProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category?: string;
  subCategory?: string;
  size?: string[];
  bestSeller?: boolean;
  rating?: number;
}

export default function ProductItem({
  _id,
  title,
  description,
  price,
  images,
  category,
  subCategory,
  size,
  bestSeller,
  rating,
}: ProductItemProps) {
  const { currency } = useContext(ShopContext);

  return (
    <div data-testid="product-item">
      <Link
        href={`/product/${_id}`}
        className="group-hover:cursor-pointer"
        data-testid="product-link"
      >
        <div className="relative group">
          <Image
            src={images[0]}
            alt={title}
            width={260}
            height={360}
            className="object-cover sm:w-[530px] sm:h-[360px] md:w-[210px] md:h-[360px] lg:w-[260px] lg:h-[360px] mx-auto"
            data-testid="product-image"
          />
          <div className="absolute inset-0 sm:inset-1 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="p-4 bg-gray-50 text-gray-700 hover:text-gray-50 hover:bg-[#780000] rounded-full shadow-md hover:rotate-[360deg] transition-transform duration-700"
              data-testid="expand-button"
            >
              <CgArrowsExpandRight size={20} />
            </button>
            <button
              className="p-4 bg-gray-50 text-gray-700 hover:text-gray-50 hover:bg-[#780000] rounded-full shadow-md hover:rotate-[360deg] transition-transform duration-700"
              data-testid="wishlist-button"
            >
              <FaRegHeart size={20} />
            </button>
            <button
              className="p-4 bg-gray-50 text-gray-700 hover:text-gray-50 hover:bg-[#780000] rounded-full shadow-md hover:rotate-[360deg] transition-transform duration-700"
              data-testid="cart-button"
            >
              <BiCartDownload size={20} />
            </button>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-medium truncate" data-testid="product-title">
              {title}
            </h3>
            <p className="text-xs truncate" data-testid="product-description">
              {description}
            </p>
            <p
              className="text-lg font-semibold mt-1"
              data-testid="product-price"
            >
              {currency}
              {price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
