"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOn, setThemeOn] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeOn(true);
    }
  }, []);

  const toggleTheme = () => {
    setThemeOn((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <nav className="w-full bg-light dark:bg-dark text-dark dark:text-light border-b-4 border-primary fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between ">
        <h2 className="text-dark dark:text-light text-xl md:text-2xl font-black tracking-widest uppercase ">
          Maksymilian Wojnowski
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-4 font-semibold gap-10">
          <a href="#home" className="hover:bg-primary px-4 py-2 rounded-full hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:bg-primary px-4 py-2 rounded-full hover:text-white transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-primary px-4 py-2 rounded-full hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:bg-primary px-4 py-2 rounded-full hover:text-white transition-colors"
          >
            Contact
          </a>
          {/* Desktop Theme Switch */}
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <span className="label flex items-center text-sm font-medium text-black dark:text-light">Light</span>
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                themeOn ? "bg-[#212b36]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  themeOn ? "translate-x-[28px]" : ""
                }`}
              ></span>
            </span>
            <span className="label flex items-center text-sm font-medium text-black dark:text-light">Dark</span>
            <input
              type="checkbox"
              title="theme"
              checked={themeOn}
              onChange={toggleTheme}
              className="sr-only"
            />
          </label>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-8 h-1 bg-dark dark:bg-light rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-dark dark:bg-light rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-dark dark:bg-light rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-light dark:bg-dark w-full px-4 pb-4 flex flex-col items-center space-y-2 font-semibold">
          <a
            href="#home"
            className="hover:bg-primary w-full text-center py-2 rounded-full hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-primary w-full text-center py-2 rounded-full hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-primary w-full text-center py-2 rounded-full hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:bg-primary w-full text-center py-2 rounded-full hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          {/* Mobile Theme Switch */}
          <div className="wrapper">
            <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
              <span className="label flex items-center text-sm font-medium text-black dark:text-light">Light</span>
              <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                  themeOn ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                }`}
              >
                <span
                  className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                    themeOn ? "translate-x-[28px]" : ""
                  }`}
                ></span>
              </span>
              <span className="label flex items-center text-sm font-medium text-black dark:text-light">Dark</span>
              <input
                type="checkbox"
                title="theme"
                checked={themeOn}
                onChange={toggleTheme}
                className="sr-only"
              />
            </label>
          </div>
        </div>
      )}
    </nav>
  );
}
