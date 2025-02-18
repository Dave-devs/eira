import type { Metadata } from "next";
import { Outfit, Playfair_Display, Playwrite_IN } from "next/font/google";
import "./globals.css";
import { ShopContextProvider } from "./context/ShopContext";
import FooterWrapper from './components/FooterWrapper';
import NavbarWrapper from "./components/NavbarWrapper";

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
});

const playwrite = Playwrite_IN({
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Eira - Trendy Fashion for Everyone",
  description: "Discover the latest trends in fashion at Eira. Shop from a wide range of stylish clothing, accessories, and footwear for men, women, and kids. Enjoy fast shipping, easy returns, and exclusive deals!",
  keywords: [
    "fashion",
    "trendy clothing",
    "online shopping",
    "women's fashion",
    "men's fashion",
    "kids' fashion",
    "accessories",
    "footwear",
    "Eira fashion",
    "affordable fashion",
  ],
  openGraph: {
    title: "Eira - Trendy Fashion for Everyone",
    description: "Discover the latest trends in fashion at Eira. Shop from a wide range of stylish clothing, accessories, and footwear for men, women, and kids.",
    url: "https://www.eirafashion.com",
    siteName: "Eira",
    images: [
      {
        url: "https://www.eirafashion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eira Fashion - Trendy Styles for Everyone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eira - Trendy Fashion for Everyone",
    description: "Discover the latest trends in fashion at Eira. Shop from a wide range of stylish clothing, accessories, and footwear for men, women, and kids.",
    images: {
      url: "https://www.eirafashion.com/twitter-image.jpg",
      alt: "Eira Fashion - Trendy Styles for Everyone",
    },
    site: "@eirafashion",
    creator: "@eirafashion",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://www.eirafashion.com/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${playfair.className} ${playwrite.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <ShopContextProvider>
          <NavbarWrapper />
          {children}
          <FooterWrapper />
        </ShopContextProvider>
      </body>
    </html>
  );
}
