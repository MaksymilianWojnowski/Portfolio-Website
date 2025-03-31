"use client";

import React, { useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
        id="theme-switcher"
        title="Toggle dark mode"
      />
      <span className="sr-only">Toggle dark mode</span>
      <span className="label flex items-center text-sm font-medium text-dark dark:text-light">
      </span>
      <span
        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
        }`}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-light duration-200 ${
            isChecked ? "translate-x-[28px] bg-primary" : ""
          }`}
        ></span>
      </span>
    </label>
  );
};

export default Switcher;