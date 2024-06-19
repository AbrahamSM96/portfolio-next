import { useEffect, useState } from "react";

export function useDarkTheme() {
  const defaultDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const validateDefaultDark = defaultDark ? "dark" : "light";

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || validateDefaultDark // Initialize from localStorage or default
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Update localStorage
  };

  useEffect(() => {
    // Check for reload
    const pageAccessedByReload =
      (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.type)
        .includes("reload");

    // Reset theme on reload
    if (pageAccessedByReload) {
      setTheme("light");
      localStorage.setItem("theme", "light"); // Update localStorage
    }
  }, []); // Empty dependency array to run only once on mount

  return { theme, switchTheme };
}
