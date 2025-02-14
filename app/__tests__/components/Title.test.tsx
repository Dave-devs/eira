import { render, screen } from '@testing-library/react'
import Title from '../../components/Title';

describe('Title Component', () => {
    const defaultProps = {
        text1: 'Hello',
        text2: 'World'
    }

    it('renders without crashing', () => {
        render(<Title {...defaultProps} />)
        expect(screen.getByTestId('title-container')).toBeInTheDocument()
    })

    it('displays both text props correctly', () => {
        render(<Title {...defaultProps} />)
        const titleText = screen.getByTestId('title-text')
        const titleSpan = screen.getByTestId('title-span')

        expect(titleText).toHaveTextContent('Hello')
        expect(titleSpan).toHaveTextContent('World')
    })

    it('has correct styling classes', () => {
        render(<Title {...defaultProps} />)
        const container = screen.getByTestId('title-container')
        const line = screen.getByTestId('title-line')

        expect(container).toHaveClass('inline-flex', 'items-center', 'gap-2', 'mb-3', 'font-playfair')
        expect(line).toHaveClass('w-8', 'sm:w-12', 'h-[1px]', 'sm:h-[2px]', 'bg-gray-700', 'dark:bg-gray-50')
    })

    it('handles empty strings as props', () => {
        render(<Title text1="" text2="" />)
        const titleText = screen.getByTestId('title-text')
        const titleSpan = screen.getByTestId('title-span')

        expect(titleText).toHaveTextContent('')
        expect(titleSpan).toHaveTextContent('')
    })

    it('maintains correct structure with long text content', () => {
        const longProps = {
            text1: 'This is a very long text that could potentially break layout',
            text2: 'And this is another long piece of text for testing'
        }
        render(<Title {...longProps} />)

        const container = screen.getByTestId('title-container')
        expect(container).toBeInTheDocument()
        expect(container).toHaveClass('inline-flex')
    })
})
