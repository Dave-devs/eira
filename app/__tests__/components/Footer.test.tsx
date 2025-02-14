import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer';

describe('Footer', () => {
    it('renders footer with correct structure in light mode', () => {
        render(<Footer isDarkMode={false} />)

        expect(screen.getByTestId('footer')).toBeInTheDocument()
        expect(screen.getByTestId('footer-content')).toBeInTheDocument()
        expect(screen.getByTestId('footer-bottom')).toBeInTheDocument()
    })

    it('renders footer with correct structure in dark mode', () => {
        render(<Footer isDarkMode={true} />)

        expect(screen.getByTestId('footer')).toBeInTheDocument()
        expect(screen.getByTestId('footer-content')).toBeInTheDocument()
        expect(screen.getByTestId('footer-bottom')).toBeInTheDocument()
    })

    it('displays correct logo based on theme mode', () => {
        const { rerender } = render(<Footer isDarkMode={false} />)
        const lightLogo = screen.getByTestId('footer-logo')
        expect(lightLogo.getAttribute('src')).toContain('logo-light.png')

        rerender(<Footer isDarkMode={true} />)
        const darkLogo = screen.getByTestId('footer-logo')
        expect(darkLogo.getAttribute('src')).toContain('logo-dark.png')
    })


    it('renders company section with all links', () => {
        render(<Footer isDarkMode={false} />)

        expect(screen.getByTestId('company-heading')).toHaveTextContent('COMPANY')
        const companyLinks = screen.getAllByTestId('company-link')
        expect(companyLinks).toHaveLength(4)
        expect(companyLinks[0]).toHaveTextContent('Home')
        expect(companyLinks[1]).toHaveTextContent('About us')
        expect(companyLinks[2]).toHaveTextContent('Delivery')
        expect(companyLinks[3]).toHaveTextContent('Privacy policy')
    })

    it('renders contact section with correct information', () => {
        render(<Footer isDarkMode={false} />)

        expect(screen.getByTestId('contact-heading')).toHaveTextContent('GET IN TOUCH')
        expect(screen.getByTestId('contact-phone')).toHaveTextContent('+234-123-4567-890')
        expect(screen.getByTestId('contact-email')).toHaveTextContent('contact@eira.com')
    })

    it('renders copyright notice', () => {
        render(<Footer isDarkMode={false} />)

        expect(screen.getByTestId('copyright')).toHaveTextContent('©2025 - Eira.com - All rights reserved.')
    })

    it('renders footer description', () => {
        render(<Footer isDarkMode={false} />)

        const description = screen.getByTestId('footer-description')
        expect(description).toBeInTheDocument()
        expect(description).toHaveTextContent(/Discover quality, convenience, and style at Eira/)
    })
})
