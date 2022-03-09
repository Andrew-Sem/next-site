import cl from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    console.log(theme);
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <input
        className={cl.checkbox}
        onChange={toggleTheme}
        type="checkbox"
        id="chekbox"
      />
      <span className={cl.checkbox_text}>Switch theme</span>
    </div>
  );
}
