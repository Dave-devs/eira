import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import FooterWrapper from '../../components/FooterWrapper';

// Mock next/navigation
jest.mock("next/navigation", () => ({
    usePathname: jest.fn()
}));

describe("FooterWrapper", () => {
    it("should not render Footer when pathname is /home", () => {
        (usePathname as jest.Mock).mockReturnValue("/home");
        render(<FooterWrapper />);

        const footerWrapper = screen.queryByTestId("footer-wrapper");
        expect(footerWrapper).not.toBeInTheDocument();
    });

    it("should render Footer when pathname is not /home", () => {
        (usePathname as jest.Mock).mockReturnValue("/about");
        render(<FooterWrapper />);

        const footerWrapper = screen.getByTestId("footer-wrapper");
        expect(footerWrapper).toBeInTheDocument();
    });

    it("should pass isDarkMode prop as false by default to Footer", () => {
        (usePathname as jest.Mock).mockReturnValue("/about");
        render(<FooterWrapper />);

        const footer = screen.getByTestId("footer");
        expect(footer).toHaveAttribute("class", expect.not.stringContaining("dark"));
    });

    it("should render with correct data-testid attributes", () => {
        (usePathname as jest.Mock).mockReturnValue("/about");
        render(<FooterWrapper />);

        expect(screen.getByTestId("footer-wrapper")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    });
});
