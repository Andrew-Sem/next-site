import cl from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light")
      document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    // <div className={cl.themeSwitcher_wrapper}>
    <div>
      <input
        className={cl.checkbox}
        onChange={toggleTheme}
        type="checkbox"
        id="chekbox"
      />
      <span className={cl.checkbox_text}>Switch theme</span>
    </div>
    // </div>
  );
}
