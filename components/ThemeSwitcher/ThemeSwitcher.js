import React, { useState, useEffect } from "react";
import cl from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  let theme;
  useEffect(() => {
    theme = window.localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      theme = "light";
      localStorage.setItem("theme", theme);
    } else {
      theme = "dark";
      localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <button className={cl.theme_switcher} onClick={toggleTheme}>
      <span className={cl.theme_switcher__text}>Change theme</span>
    </button>
  );
}
