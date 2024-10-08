import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
// @ts-ignore
import GibranMyageri_Resume from "../files/GibranMyageri_Resume.pdf";
import SunCalc from "suncalc";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Calculate if it's currently dark based on local sunrise and sunset times
  const calculateDarkMode = (latitude, longitude) => {
    const times = SunCalc.getTimes(new Date(), latitude, longitude);
    const now = new Date();
    return now < times.sunrise || now > times.sunset;
  };

  // Get the user's location and determine if dark mode should be enabled
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const isDark = calculateDarkMode(latitude, longitude);
        setDarkMode(isDark);
        if (isDark) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
      });
    } else {
      const storedTheme = localStorage.getItem("theme");
      setDarkMode(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    }
  }, []);

  // Toggle dark mode manually
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center md:justify-between items-center p-6 bg-white dark:bg-[#222831] shadow-md dark:shadow-[#76abae]"
    >
      <Link
        to={"/"}
        className="hidden md:block text-2xl font-bold text-black dark:text-white cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        My Portfolio
      </Link>
      <div className="space-x-8 flex items-center">
        {isHome && (
          <>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
          </>
        )}
        {!isHome && (
          <Link to="/">
            <div className="flex items-center space-x-2 hover:border-solid hover:border-black">
              <IoMdArrowRoundBack size={24} />
              <span className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
                Home
              </span>
            </div>
          </Link>
        )}
        <a
          href="mailto:myageri.g@northeastern.edu"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href={GibranMyageri_Resume}
          rel="noreferrer"
          target="_blank"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          Resume
        </a>
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
