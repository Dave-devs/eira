import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OurPolicy from '../../components/OurPolicy';

describe('OurPolicy Component', () => {
    it('renders the policy section', () => {
        render(<OurPolicy />)
        const policySection = screen.getByTestId('policy-section')
        expect(policySection).toBeInTheDocument()
    })

    it('renders all three policy sections with correct content', () => {
        render(<OurPolicy />)

        // Exchange Policy
        const exchangePolicy = screen.getByTestId('exchange-policy')
        expect(exchangePolicy).toBeInTheDocument()
        expect(screen.getByTestId('exchange-title')).toHaveTextContent('Easy Exchange Policy')
        expect(screen.getByTestId('exchange-description')).toHaveTextContent('We offer hassle free exchange policy')

        // Return Policy
        const returnPolicy = screen.getByTestId('return-policy')
        expect(returnPolicy).toBeInTheDocument()
        expect(screen.getByTestId('return-title')).toHaveTextContent('7 Days Return Policy')
        expect(screen.getByTestId('return-description')).toHaveTextContent('We provide 7 days free return policy')

        // Support Policy
        const supportPolicy = screen.getByTestId('support-policy')
        expect(supportPolicy).toBeInTheDocument()
        expect(screen.getByTestId('support-title')).toHaveTextContent('Best customer support')
        expect(screen.getByTestId('support-description')).toHaveTextContent('We provide 24/7 customer support')
    })

    it('applies correct responsive classes', () => {
        render(<OurPolicy />)
        const policySection = screen.getByTestId('policy-section')
        expect(policySection).toHaveClass('sm:flex-col')
        expect(policySection).toHaveClass('md:flex-row')
    })

    it('applies dark mode text classes', () => {
        render(<OurPolicy />)
        const titles = [
            screen.getByTestId('exchange-title'),
            screen.getByTestId('return-title'),
            screen.getByTestId('support-title')
        ]

        titles.forEach(title => {
            expect(title).toHaveClass('dark:text-gray-100')
        })
    })
})
