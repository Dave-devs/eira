import { render, screen, fireEvent } from '@testing-library/react';
import LeftSideCollectionFilter from '../../components/LeftSideCollectionFilter';

describe('LeftSideCollectionFilter', () => {
    const mockSetShowFilter = jest.fn();
    const mockToggleCategory = jest.fn();
    const mockToggleSubCategory = jest.fn();

    const defaultProps = {
        showFilter: true,
        setShowFilter: mockSetShowFilter,
        toggleCategory: mockToggleCategory,
        toggleSubCategory: mockToggleSubCategory
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the filter component correctly', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        expect(screen.getByTestId('filter-container')).toBeInTheDocument();
        expect(screen.getByText('FILTERS')).toBeInTheDocument();
        expect(screen.getByText('CATEGORIES')).toBeInTheDocument();
        expect(screen.getByText('TYPES')).toBeInTheDocument();
    });

    it('toggles filter visibility when clicking the filter header', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        const filterToggle = screen.getByTestId('filter-toggle');
        fireEvent.click(filterToggle);
        expect(mockSetShowFilter).toHaveBeenCalledWith(false);
    });

    it('handles category checkbox changes', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        const menCheckbox = screen.getByTestId('category-men');
        fireEvent.click(menCheckbox);
        expect(mockToggleCategory).toHaveBeenCalled();
    });

    it('handles subcategory checkbox changes', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        const topwearCheckbox = screen.getByTestId('subcategory-topwear');
        fireEvent.click(topwearCheckbox);
        expect(mockToggleSubCategory).toHaveBeenCalled();
    });

    it('hides filter sections when showFilter is false', () => {
        render(<LeftSideCollectionFilter {...defaultProps} showFilter={false} />);
        const categorySection = screen.getByTestId('category-filter-section');
        const subcategorySection = screen.getByTestId('subcategory-filter-section');

        expect(categorySection).toHaveClass('hidden');
        expect(subcategorySection).toHaveClass('hidden');
    });

    it('rotates chevron icon when filter is expanded', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        const chevron = screen.getByTestId('filter-chevron');
        expect(chevron).toHaveClass('rotate-90');
    });

    it('shows all category options', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        expect(screen.getByTestId('category-men')).toBeInTheDocument();
        expect(screen.getByTestId('category-women')).toBeInTheDocument();
        expect(screen.getByTestId('category-kids')).toBeInTheDocument();
    });

    it('shows all subcategory options', () => {
        render(<LeftSideCollectionFilter {...defaultProps} />);
        expect(screen.getByTestId('subcategory-topwear')).toBeInTheDocument();
        expect(screen.getByTestId('subcategory-bottomwear')).toBeInTheDocument();
        expect(screen.getByTestId('subcategory-winterwear')).toBeInTheDocument();
    });
});
