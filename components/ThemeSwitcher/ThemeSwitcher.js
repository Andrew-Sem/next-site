import React, { useState, useEffect } from "react";
import cl from "./ThemeSwitcher.module.css";
import { BiSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

export default function ThemeSwitcher() {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    const theme = window.localStorage.getItem("theme") || "light";
    theme === "light" ? setIcon("dark") : setIcon("light");
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      setIcon("dark");
      theme = "light";
      localStorage.setItem("theme", theme);
    } else {
      setIcon("light");
      theme = "dark";
      localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={cl.switcher_wrapper}>
      {icon === "dark" ? (
        <BsMoon
          className={[cl.switcher, cl.dark].join(" ")}
          onClick={() => toggleTheme("light")}
        />
      ) : (
        <BiSun
          className={[cl.switcher, cl.light].join(" ")}
          onClick={() => toggleTheme("dark")}
        />
      )}
    </div>
  );
}
