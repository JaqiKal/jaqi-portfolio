import { useState, useEffect } from "react";
import sunIcon from "../../assets/images/icons8-sun-94.png";
import moonIcon from "../../assets/images/icons8-moon-94.png";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Ensure document exists before accessing documentElement
    if (typeof document !== "undefined") {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }
    }, [theme]);

    return (
        <button
        className="p-1 rounded-lg bg-gray-300 dark:bg-gray-700 transition hover:bg-gray-400 dark:hover:bg-gray-600"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? (
                <img src={moonIcon} alt="Moon icon" className="w-4 h-4" />
            ) : (
                <img src={sunIcon} alt="Sun icon" className="w-4 h-4" />
            )}  
        </button>
    );
};

export default ThemeToggle;