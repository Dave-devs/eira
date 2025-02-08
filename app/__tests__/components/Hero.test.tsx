import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Hero from '../../components/Hero';
import { heroPic } from '../../utils';

describe('Hero Component', () => {
  const mockSetIsDarkMode = jest.fn();

  beforeEach(() => {
    mockSetIsDarkMode.mockClear();
  });

  it('renders the hero section with main banner and grid', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('main-hero-banner')).toBeInTheDocument();
    expect(screen.getByTestId('hero-grid')).toBeInTheDocument();
  });

  it('displays correct content in main banner', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    expect(screen.getByTestId('main-hero-title')).toHaveTextContent("Women's Fashion");
    expect(screen.getByTestId('main-hero-description')).toHaveTextContent("Discover the latest trends in women's fashion.");
    expect(screen.getByTestId('main-hero-cta')).toHaveTextContent('Shop now');
  });

  it('renders correct number of grid items', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    heroPic.forEach((item) => {
      expect(screen.getByTestId(`grid-item-${item.id}`)).toBeInTheDocument();
      expect(screen.getByTestId(`grid-title-${item.id}`)).toHaveTextContent(item.title);
      expect(screen.getByTestId(`grid-description-${item.id}`)).toHaveTextContent(item.items);
      expect(screen.getByTestId(`grid-cta-${item.id}`)).toHaveTextContent('Shop now');
    });
  });

  it('applies correct background styles to main banner', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    const mainBanner = screen.getByTestId('main-hero-banner');
    expect(mainBanner).toHaveStyle({
      backgroundImage: 'url("/hero_one.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    });
  });

  it('applies correct background styles to grid items', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    heroPic.forEach((item) => {
      const gridItem = screen.getByTestId(`grid-item-${item.id}`);
      expect(gridItem).toHaveStyle({
        backgroundImage: `url("${item.bgImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
    });
  });

  it('maintains responsive classes for different screen sizes', () => {
    render(<Hero isDarkMode={false} setIsDarkMode={mockSetIsDarkMode} />);

    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass('lg:flex-row');
    expect(heroSection).toHaveClass('w-full');

    const mainBanner = screen.getByTestId('main-hero-banner');
    expect(mainBanner).toHaveClass('lg:w-1/2');

    const heroGrid = screen.getByTestId('hero-grid');
    expect(heroGrid).toHaveClass('lg:w-1/2');
    expect(heroGrid).toHaveClass('sm:grid-cols-2');
  });
});
