import { render, screen } from "@testing-library/react";
import Product from '../../types/product';
import { ShopContext } from '../../context/ShopContext';
import BestSeller from '../../components/BestSeller';

const mockProducts: Product[] = [
    {
        _id: "prod_7a9b2c3d4e",
        title: "Premium Cotton Oxford Shirt",
        description: "Classic button-down oxford shirt in breathable cotton",
        price: 79.99,
        images: [
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/747506e8ee6895d19c0c2f3960d7bbf6.jpg",
        ],
        category: "Men",
        subCategory: "topwear",
        size: ["S", "M", "L", "XL", "XXL"],
        bestSeller: true,
        rating: 4.8,
    },
    {
        _id: "prod_8b2c3d4e5f",
        title: "Casual Denim Jacket",
        description: "Stylish denim jacket for everyday wear",
        price: 99.99,
        images: [
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/sample.jpg",
        ],
        category: "Men",
        subCategory: "outerwear",
        size: ["M", "L", "XL"],
        bestSeller: false,
        rating: 4.5,
    },
];

describe("BestSeller Component", () => {
    it("renders best sellers section", () => {
        render(
            <ShopContext.Provider value={{ products: mockProducts, currency: "$", delivery_fee: 30.99 }}>
                <BestSeller />
            </ShopContext.Provider>
        );

        expect(screen.getByTestId("bestseller-section")).toBeInTheDocument();
        expect(screen.getByTestId("bestseller-description")).toBeInTheDocument();
    });

    it("renders only best-selling products", () => {
        render(
            <ShopContext.Provider value={{ products: mockProducts, currency: "$", delivery_fee: 30.99 }}>
                <BestSeller />
            </ShopContext.Provider>
        );

        // Ensure only one best seller is displayed
        const bestSellerItems = screen.getAllByTestId("bestseller-grid");
        expect(bestSellerItems[0].children.length).toBe(1);

        expect(screen.getByText("Premium Cotton Oxford Shirt")).toBeInTheDocument();
        expect(screen.queryByText("Casual Denim Jacket")).not.toBeInTheDocument();
    });});
