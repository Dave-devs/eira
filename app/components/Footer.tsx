import Image from "next/image";
interface FooterProps {
  isDarkMode: boolean;
}
export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className="max-w-6xl mx-auto" data-testid="footer">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm" data-testid="footer-content">

        <div data-testid="footer-brand">
          <Image
            src={`${isDarkMode ? "/logo-dark.png" : "/logo-light.png"}`}
            alt="logo"
            width={100}
            height={64}
            className="h-16 cursor-pointer"
            style={{ objectFit: "contain" }}
            data-testid="footer-logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400" data-testid="footer-description">
            Discover quality, convenience, and style at Eira. From fashion to home essentials, we bring you the best online shopping experience. Enjoy secure payments, fast delivery and exceptional customer service. Thank you for choosing Eira-your trusted e-commerce partner.
          </p>
        </div>

        <div data-testid="footer-company">
          <p className="text-1xl font-medium mb-5" data-testid="company-heading">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400" data-testid="company-links">
            <li data-testid="company-link">Home</li>
            <li data-testid="company-link">About us</li>
            <li data-testid="company-link">Delivery</li>
            <li data-testid="company-link">Privacy policy</li>
          </ul>
        </div>

        <div data-testid="footer-contact">
          <p className="text-1xl font-medium mb-5" data-testid="contact-heading">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400" data-testid="contact-info">
            <li data-testid="contact-phone">+234-123-4567-890</li>
            <li data-testid="contact-email">contact@eira.com</li>
          </ul>
        </div>

      </div>

      <div data-testid="footer-bottom">
        <hr />
        <p className="py-5 text-sm text-center" data-testid="copyright">&copy;2025 - Eira.com - All rights reserved.</p>
      </div>
    </footer>
  );
}
