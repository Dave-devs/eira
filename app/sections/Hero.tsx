import React from "react";
import { heroPic } from "../utils";

interface HeroProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Hero({ isDarkMode, setIsDarkMode }: HeroProps) {
  return (
    <section className="w-full pt-16 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-6">
      {/* ******** Left Side (Large Image) ******** */}
      <div
        className="w-full lg:w-1/2 h-[446px] sm:h-[500px] flex flex-col items-start justify-end p-6 text-[#0d1b2a] bg-black/60 backdrop-blur-sm"
        style={{
          backgroundImage: 'url("/hero_one.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-playwrite">Women&apos;s Fashion</h2>
        <p className="mt-2 text-sm sm:text-base">
          Discover the latest trends in women’s fashion.
        </p>
        <button className="mt-4 bg-[#780000] text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base cursor-pointer hover:translate-y-1 hover:shadow-md">
          Shop now
        </button>
      </div>

      {/* ******** Right Side (Grid) ******** */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#0d1b2a]">
        {heroPic.map(({ id, bgImg, title, items }) => (
          <div
            key={id}
            className="h-[200px] sm:h-[240px] flex flex-col items-start justify-end p-4 bg-black/60 backdrop-blur-sm"
            style={{
              backgroundImage: `url("${bgImg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-lg sm:text-xl font-semibold font-playwrite">{title}</h2>
            <p className="text-xs sm:text-sm">{items}</p>
            <button className="mt-2 bg-[#780000] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer hover:translate-y-1 hover:shadow-md">
              Shop now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
Hero component displays a featured section with product categories and promotional content
@component
@param {boolean} isDarkMode - Current theme mode state
@param {function} setIsDarkMode - Function to toggle theme mode
@returns {JSX.Element} A responsive section with a large featured image and grid of category cards 
*/
