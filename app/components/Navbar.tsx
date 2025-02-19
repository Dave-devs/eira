"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const { setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px[8%] font-medium flex justify-between items-center z-50  ${
        isScroll
          ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
          : "bg-transparent"
      }`}
    >
      {/* ******** Logo Image ******** */}
      <div>
        <Image
          src={`${isDarkMode ? "/logo-dark.png" : "/logo-light.png"}`}
          alt="logo"
          width={100}
          height={64}
          className="w-full h-16 cursor-pointer"
          style={{ objectFit: "contain" }}
        />
      </div>
      {/* ******** Nav Links ******** */}
      <ul className="hidden sm:flex items-center gap-6 font-playfair font-medium">
        <li>
          <Link className="flex flex-col items-center gap-1" href={"/home"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="flex flex-col items-center gap-1"
            href={"/collection"}
          >
            Collection{" "}
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" href={"/women"}>
            Women&apos;s
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" href={"/men"}>
            Men&apos;s
          </Link>
        </li>
        
        <li>
          <Link className="flex flex-col items-center gap-1" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" href={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ******** Nav Icons ******** */}
      <div className="flex items-center gap-6">
        {/* ******** Toggle Theme Icons ******** */}
        <button aria-label="Toggle theme" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <MdOutlineLightMode size={24} />
          ) : (
            <MdOutlineDarkMode size={24} />
          )}
        </button>

        {/* ******** Search Icon ******** */}
        <FiSearch onClick={() => setShowSearch(true)} className="cursor-pointer" size={24} />

        {/* ******** Profile Icon ******** */}
        <div className="group relative" data-testid="profile-menu">
          <MdOutlinePersonOutline className="cursor-pointer" size={24} />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className={`flex flex-col gap-2 w-36 py-3 px-5 bg-black text-gray-200 rounded ${isDarkMode ? "bg-white text-slate-400 shadow-sm shadow-slate-50" : ""}`}>
              <p className={`cursor-pointer ${isDarkMode ? "text-black" : "text-white"}`}>My Profile</p>
              <p className={`cursor-pointer ${isDarkMode ? "text-black" : "text-white"}`}>Orders</p>
              <p className={`cursor-pointer ${isDarkMode ? "text-black" : "text-white"}`}>Logout</p>
            </div>
          </div>
        </div>

        {/* ******** Cart Icon ******** */}
        <Link href={"/cart"} className="relative">
          <IoCartOutline className="cursor-pointer" size={24} />
          <p
            className={`absolute right-[-5px] top-[-5px] text-center w-4 h-4 leading-4 flex justify-center items-center aspect-square rounded-full text-[8px] ${
              isDarkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            0
          </p>
        </Link>
        {/* ******** Mobile Menu Icon ******** */}
        <RiMenu3Fill
          aria-label="Open menu"
          onClick={() => setMenuIsVisible(true)}
          className="cursor-pointer sm:hidden"
          size={24}
        />
      </div>

      {/* ******** Mobile Menu Sidebar ******** */}
      <aside
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-darkTheme transition-all ${
          menuIsVisible ? "w-full h-screen" : "w-0 h-0"
        }`}
      >
        <div className={"flex flex-col"}>
          {/* Back button */}
          <div
            onClick={() => setMenuIsVisible(false)}
            className="flex items-center gap-3 p-4 cursor-pointer"
          >
            <FiChevronLeft className="cursor-pointer" size={24} />
            <p>Back</p>
          </div>

          <ul
            className={`flex flex-col gap-4 ${
              isDarkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/collection"}
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/women"}
              >
                Women&apos;s
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/men"}
              >
                Men&apos;s
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuIsVisible(false)}
                className="py-2 pl-6"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

/**
 * Navigation bar component that provides the main navigation interface for the application.
 * Features responsive design with mobile menu, theme toggling, search, profile dropdown,
 * and shopping cart functionality.
 * 
 * @component
 * @param {boolean} isDarkMode - Current theme state (dark/light)
 * @param {function} setIsDarkMode - Function to toggle theme state
 * @returns {JSX.Element} Responsive navigation bar with dynamic styling based on scroll position
 */
