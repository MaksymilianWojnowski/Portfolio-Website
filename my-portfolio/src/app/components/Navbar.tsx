"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOn, setThemeOn] = useState(false);

  const toggleTheme = () => {
    setThemeOn(!themeOn);
    // Toggle a class on the document's root element.
    if (!themeOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="w-full bg-dark border-b-4 border-primary fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <h2 className="text-light text-xl md:text-2xl font-black tracking-widest uppercase">
          Maksymilian Wojnowski
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-4 font-semibold">
          <a href="#home" className="hover:bg-primary px-4 py-2 rounded-full">
            Home
          </a>
          <a href="#about" className="hover:bg-primary px-4 py-2 rounded-full">
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-primary px-4 py-2 rounded-full"
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:bg-primary px-4 py-2 rounded-full"
          >
            Contact
          </a>
          {/* Desktop Theme Switch */}
          <label className="switch">
            <input
              type="checkbox"
              title="theme"
              checked={themeOn}
              onChange={toggleTheme}
            />
            <span
              className={`slider round ${themeOn ? "checked" : ""}`}
              id="theme"
            ></span>
          </label>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-8 h-1 bg-light rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-light rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-light rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark w-full px-4 pb-4 flex flex-col items-center space-y-2 font-semibold">
          <a
            href="#home"
            className="hover:bg-primary w-full text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-primary w-full text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-primary w-full text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:bg-primary w-full text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          {/* Mobile Theme Switch */}
          <div className="wrapper">
            <label className="switch">
              <input
                type="checkbox"
                title="theme-mobile"
                checked={themeOn}
                onChange={toggleTheme}
              />
              <span
                className={`slider round ${themeOn ? "checked" : ""}`}
                id="theme-mobile"
              ></span>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
}
