import React from 'react'

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductItem({_id, title, description, price, images, category, subCategory, size, bestSeller, rating}: ProductItemProps) {
  return (
    <div>
        
    </div>
  )
}
