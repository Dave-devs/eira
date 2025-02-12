import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ShopContext } from '../../context/ShopContext'
import ProductItem from '../../components/ProductItem';

const mockProduct = {
    _id: '123',
    title: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    images: ['/test-image.jpg'],
    category: 'Test Category',
    subCategory: 'Test SubCategory',
    size: ['S', 'M', 'L'],
    bestSeller: true,
    rating: 4.5
}

const renderWithContext = (component: React.ReactNode) => {
    return render(
        <ShopContext.Provider value={{ currency: '$', products: [], delivery_fee: 0 }}>
            {component}
        </ShopContext.Provider>
    )
}
describe('ProductItem Component', () => {
    it('renders product with all required props', () => {
        renderWithContext(<ProductItem {...mockProduct} />)

        expect(screen.getByText('Test Product')).toBeInTheDocument()
        expect(screen.getByText('Test Description')).toBeInTheDocument()
        expect(screen.getByText('$99.99')).toBeInTheDocument()
    })

    it('renders product image with correct attributes', () => {
        renderWithContext(<ProductItem {...mockProduct} />)

        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('src')
        expect(image).toHaveAttribute('alt', 'Test Product')
    })

    it('renders correct link to product detail', () => {
        renderWithContext(<ProductItem {...mockProduct} />)

        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/product/123')
    })

    it('renders all action buttons', () => {
        renderWithContext(<ProductItem {...mockProduct} />)

        const buttons = screen.getAllByRole('button')
        expect(buttons).toHaveLength(3)
    })

    it('formats price correctly with currency symbol', () => {
        renderWithContext(<ProductItem {...mockProduct} />)

        expect(screen.getByText('$99.99')).toBeInTheDocument()
    })

    it('renders with minimum required props', () => {
        const minProps = {
            _id: '123',
            title: 'Test Product',
            description: 'Test Description',
            price: 99.99,
            images: ['/test-image.jpg']
        }

        renderWithContext(<ProductItem {...minProps} />)
        expect(screen.getByText('Test Product')).toBeInTheDocument()
    })
})
