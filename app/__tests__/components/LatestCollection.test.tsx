import { render, screen } from '@testing-library/react'
import { ShopContext } from '../../context/ShopContext'
import LatestCollection from '../../components/LatestCollection';


const mockProduct = {
  _id: "prod_7a9b2c3d4e",
  title: "Premium Cotton Oxford Shirt",
  description: "Classic button-down oxford shirt in breathable cotton",
  price: 79.99,
  images: [
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/747506e8ee6895d19c0c2f3960d7bbf6.jpg",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/11e0b1e0acb5695397f358cec7b31fa6.jpg",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8b8217c495ae75a6002e882acf0969bd.jpg",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b94679f14f5201176a326cbe7410c5b9.jpg",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7fb4dc2b7af01e73bbe273f6e362bfec.jpg",
  ],
  category: "Men",
  subCategory: "topwear",
  size: ["S", "M", "L", "XL", "XXL"],
  bestSeller: true,
  rating: 4.8,
}

const mockContextValue = {
  products: Array(10).fill(mockProduct),
  currency: "$",
  delivery_fee: 30.99
}

describe('LatestCollection', () => {
  const defaultProps = {
    isDarkMode: false,
    setIsDarkMode: jest.fn()
  }

  const renderLatestCollection = () => {
    return render(
      <ShopContext.Provider value={mockContextValue}>
        <LatestCollection {...defaultProps} />
      </ShopContext.Provider>
    )
  }

  it('renders the component correctly', () => {
    renderLatestCollection()
    expect(screen.getByTestId('latest-collection-section')).toBeInTheDocument()
  })

  it('displays the correct title and description', () => {
    renderLatestCollection()
    expect(screen.getByText('LATEST')).toBeInTheDocument()
    expect(screen.getByText('COLLECTIONS')).toBeInTheDocument()
    expect(screen.getByTestId('collection-description')).toBeInTheDocument()
  })

  it('renders the correct number of product items', () => {
    renderLatestCollection()
    const productItems = screen.getAllByTestId(/product-item-\d+/)
    expect(productItems).toHaveLength(8) // LATEST_COLLECTION_LIMIT is 8
  })

  it('renders product items with correct data', () => {
    renderLatestCollection()
    const productTitles = screen.getAllByText(mockProduct.title)
    const productPrices = screen.getAllByText(`$${mockProduct.price}`)
    
    expect(productTitles[0]).toBeInTheDocument()
    expect(productPrices[0]).toBeInTheDocument()
  })

  it('maintains responsive grid layout', () => {
    renderLatestCollection()
    const gridContainer = screen.getByTestId('products-grid')
    expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4')
  })
})
