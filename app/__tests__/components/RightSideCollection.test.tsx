import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RightSideCollection from '../../components/RightSideCollection';
import Product from '../../types/product';

describe('RightSideCollection', () => {
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

    const mockSetSortType = jest.fn();

    beforeEach(() => {
        mockSetSortType.mockClear();
    });

    test('renders collection section with products', () => {
        render(
            <RightSideCollection
                filterProducts={mockProducts}
                setSortType={mockSetSortType}
            />
        );

        expect(screen.getByTestId('collection-section')).toBeInTheDocument();
        expect(screen.getByTestId('collection-header')).toBeInTheDocument();
        expect(screen.getByText('ALL')).toBeInTheDocument();
        expect(screen.getByText('COLLECTIONS')).toBeInTheDocument();
    });

    test('renders correct number of product items', () => {
        render(
            <RightSideCollection
                filterProducts={mockProducts}
                setSortType={mockSetSortType}
            />
        );

        const productItems = screen.getAllByTestId('product-item');
        expect(productItems).toHaveLength(mockProducts.length);
    });

    test('handles empty products array', () => {
        render(
            <RightSideCollection
                filterProducts={[]}
                setSortType={mockSetSortType}
            />
        );

        const productsGrid = screen.getByTestId('products-grid');
        expect(productsGrid.children).toHaveLength(0);
    });

    test('sort select triggers setSortType with correct value', () => {
        render(
            <RightSideCollection
                filterProducts={mockProducts}
                setSortType={mockSetSortType}
            />
        );

        const sortSelect = screen.getByTestId('sort-select');

        fireEvent.change(sortSelect, { target: { value: 'low-high' } });
        expect(mockSetSortType).toHaveBeenCalledWith('low-high');

        fireEvent.change(sortSelect, { target: { value: 'high-low' } });
        expect(mockSetSortType).toHaveBeenCalledWith('high-low');

        fireEvent.change(sortSelect, { target: { value: 'relevant' } });
        expect(mockSetSortType).toHaveBeenCalledWith('relevant');
    });

    test('renders all sort options', () => {
        render(
            <RightSideCollection
                filterProducts={mockProducts}
                setSortType={mockSetSortType}
            />
        );

        expect(screen.getByTestId('sort-option-relevant')).toBeInTheDocument();
        expect(screen.getByTestId('sort-option-low-high')).toBeInTheDocument();
        expect(screen.getByTestId('sort-option-high-low')).toBeInTheDocument();
    });
});