"use client";
import { useEffect, useState } from "react";

export function useDarkTheme() {
  const defaultDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const validateDefaultDark = defaultDark ? "dark" : "light";

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") || validateDefaultDark;
    }
    return validateDefaultDark; // Return default if window is not defined
  });

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newTheme); // Update localStorage
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
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
        window.localStorage.setItem("theme", "light"); // Update localStorage
      }
    }
  }, []); // Empty dependency array to run only once on mount

  return { theme, switchTheme };
}
