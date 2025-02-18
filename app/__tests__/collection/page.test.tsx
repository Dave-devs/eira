import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ShopContext } from '../../context/ShopContext'
import Collection from '../../collection/page';
import Product from '../../types/product';

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
    }
];

const MockShopProvider = ({ children }: { children: React.ReactNode }) => (
  <ShopContext.Provider value={{ products: mockProducts }}>
        {children}
    </ShopContext.Provider>
)

describe('Collection Component', () => {
    it('renders the collection section', () => {
        render(
            <MockShopProvider>
                <Collection />
            </MockShopProvider>
        )
        expect(screen.getByTestId('collection-section')).toBeInTheDocument()
    })

    it('filters products by category', async () => {
        render(
            <MockShopProvider>
                <Collection />
            </MockShopProvider>
        )

        const categoryInput = screen.getByRole('checkbox', { name: /cat1/i })
        fireEvent.click(categoryInput)

        await waitFor(() => {
            const filteredProducts = screen.getAllByTestId('product-card')
            expect(filteredProducts).toHaveLength(2)
        })
    })

    it('sorts products by price low to high', async () => {
        render(
            <MockShopProvider>
                <Collection />
            </MockShopProvider>
        )

        const sortSelect = screen.getByRole('combobox')
        fireEvent.change(sortSelect, { target: { value: 'low-high' } })

        await waitFor(() => {
            const products = screen.getAllByTestId('product-card')
            expect(products[0]).toHaveTextContent('100')
            expect(products[products.length - 1]).toHaveTextContent('200')
        })
    })

    it('combines category and subcategory filters', async () => {
        render(
            <MockShopProvider>
                <Collection />
            </MockShopProvider>
        )

        const categoryInput = screen.getByRole('checkbox', { name: /cat1/i })
        const subcategoryInput = screen.getByRole('checkbox', { name: /sub1/i })

        fireEvent.click(categoryInput)
        fireEvent.click(subcategoryInput)

        await waitFor(() => {
            const filteredProducts = screen.getAllByTestId('product-card')
            expect(filteredProducts).toHaveLength(1)
        })
    })

    it('toggles filter visibility on mobile', () => {
        render(
            <MockShopProvider>
                <Collection />
            </MockShopProvider>
        )

        const filterButton = screen.getByRole('button', { name: /filter/i })
        fireEvent.click(filterButton)

        expect(screen.getByTestId('left-side-filter')).toHaveClass('show-filter')
    })
})
