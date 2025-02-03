export default interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subCategory: string;
  size: string[];
  bestSeller: boolean;
  rating: number;
}
