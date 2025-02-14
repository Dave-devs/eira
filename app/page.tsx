'use client'

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestCollection from "./components/LatestCollection";
import BestSeller from "./components/BestSeller";
import OurPolicy from "./components/OurPolicy";
import NewsLetterBox from './components/NewsLetterBox';
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Discovers system theme preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <LatestCollection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
