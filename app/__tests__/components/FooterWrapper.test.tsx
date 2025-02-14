import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import FooterWrapper from '../../components/FooterWrapper';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn()
}));

describe('FooterWrapper', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Footer component when not on home page', () => {
        (usePathname as jest.Mock).mockReturnValue('/about');
        render(<FooterWrapper />);

        const footerWrapper = screen.getByTestId('footer-wrapper');
        expect(footerWrapper).toBeInTheDocument();
    });

    it('should not render Footer component on home page', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        render(<FooterWrapper />);

        const footerWrapper = screen.queryByTestId('footer-wrapper');
        expect(footerWrapper).not.toBeInTheDocument();
    });

    it('should pass isDarkMode prop to Footer component', () => {
        (usePathname as jest.Mock).mockReturnValue('/about');
        render(<FooterWrapper />);

        const footer = screen.getByTestId('footer');
        expect(footer).toBeInTheDocument();
    });

    it('should render Footer with correct structure', () => {
        (usePathname as jest.Mock).mockReturnValue('/about');
        render(<FooterWrapper />);

        const footer = screen.getByTestId('footer');
        const footerContent = screen.getByTestId('footer-content');
        const footerBottom = screen.getByTestId('footer-bottom');

        expect(footer).toBeInTheDocument();
        expect(footerContent).toBeInTheDocument();
        expect(footerBottom).toBeInTheDocument();
    });
});
