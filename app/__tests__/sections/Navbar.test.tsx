import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../../sections/Navbar";

describe("Navbar Component", () => {
  const mockSetIsDarkMode = jest.fn();

  beforeEach(() => {
    mockSetIsDarkMode.mockClear();
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("applies correct classes when scrolling", () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);
    const navbar = screen.getByRole("navigation");

    expect(navbar).toHaveClass("bg-transparent");
    act(() => {
      window.scrollY = 51;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(navbar).toHaveClass("bg-white/50");
    expect(navbar).toHaveClass("backdrop-blur-lg");
  });

  it("renders navbar with all navigation links", () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    // Using getByRole to find links more reliably
    const links = [
      "Home",
      "Women's",
      "Men's",
      "Collection",
      "About",
      "Contact",
    ];
    links.forEach((link) => {
      expect(screen.getAllByRole("link", { name: link })).toHaveLength(2);
      expect(screen.getAllByRole("link", { name: link })[0]).toBeInTheDocument();
    });
  });

    it('handles theme toggle correctly', () => {
      const { rerender } = render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);
    
      const themeButton = screen.getByRole('button', { name: /toggle theme/i });
      fireEvent.click(themeButton);
      expect(mockSetIsDarkMode).toHaveBeenCalledWith(true);
    
      rerender(<Navbar isDarkMode={true} setIsDarkMode={mockSetIsDarkMode} />);
      const logo = screen.getByRole('img', { name: /logo/i });
      // Match Next.js Image URL pattern
      expect(logo.getAttribute('src')).toMatch(/logo-dark\.png/);
    });

  it("handles mobile menu visibility", () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);

    const mobileMenu = screen.getByText("Back").closest("aside");
    expect(mobileMenu).toHaveClass("w-full");
    expect(mobileMenu).toHaveClass("h-screen");

    const backButton = screen.getByText("Back");
    fireEvent.click(backButton);
    expect(mobileMenu).toHaveClass("w-0");
  });

  it("displays profile dropdown menu correctly", () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    const profileMenu = screen.getByTestId("profile-menu");
    const dropdownItems = ["My Profile", "Orders", "Logout"];

    fireEvent.mouseEnter(profileMenu);

    dropdownItems.forEach((item) => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveClass("cursor-pointer");
    });
  });

  it("displays cart with correct counter", () => {
    render(<Navbar isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    const cartLink = screen.getByRole("link", { name: /0/i });
    expect(cartLink).toHaveAttribute("href", "/cart");

    const counter = screen.getByText("0");
    expect(counter).toHaveClass("text-[8px]");
    expect(counter).toHaveClass("rounded-full");
  });

  it("applies dark theme styles correctly", () => {
    render(<Navbar isDarkMode={true} setIsDarkMode={mockSetIsDarkMode} />);

    const navbar = screen.getByRole("navigation");
    act(() => {
      window.scrollY = 51;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(navbar).toHaveClass("dark:bg-darkTheme");
    expect(navbar).toHaveClass("dark:shadow-white/20");
  });
});
