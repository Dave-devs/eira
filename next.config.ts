import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.kwcdn.com",
        pathname: "/product/**",
      },
    ],
  },
};

export default nextConfig;
