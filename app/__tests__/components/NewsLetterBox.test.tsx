import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsLetterBox from "../../components/NewsLetterBox";

describe("NewsLetterBox", () => {
    it("renders newsletter section with all elements", () => {
        render(<NewsLetterBox />);

        expect(screen.getByTestId("newsletter-section")).toBeInTheDocument();
        expect(screen.getByTestId("newsletter-title")).toHaveTextContent(
            "Subscribe now & get 20% off"
        );
        expect(screen.getByTestId("newsletter-subtitle")).toHaveTextContent(
            "Subscribe now and enjoy an exclusive 20% off your purchase!"
        );
        expect(screen.getByTestId("newsletter-input")).toBeInTheDocument();
        expect(screen.getByTestId("newsletter-submit")).toHaveTextContent(
            "SUBSCRIBE"
        );
    });

    it("prevents form submission with empty email", async () => {
        render(<NewsLetterBox />);

        const form = screen.getByTestId("newsletter-form");

        fireEvent.submit(form);

        expect(screen.getByTestId("newsletter-input")).toBeInvalid();
    });

    it("allows entering email in input field", async () => {
        render(<NewsLetterBox />);

        const input = screen.getByTestId("newsletter-input");
        const testEmail = "test@example.com";

        await userEvent.type(input, testEmail);

        expect(input).toHaveValue(testEmail);
    });

    it("handles form submission with valid email", async () => {
        const user = userEvent.setup();
        render(<NewsLetterBox />);

        const input = screen.getByTestId("newsletter-input");
        const form = screen.getByTestId("newsletter-form");
        const testEmail = "test@example.com";

        await user.type(input, testEmail);
        fireEvent.submit(form);

        expect(input).toBeValid();
    });
});
