import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export function useDarkTheme() {
  const defaultDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const validateDefaultDark = defaultDark ? "dark" : "light";

  const [theme, setTheme] = useLocalStorage("theme", validateDefaultDark);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // to know when reload the page
    const pageAccessedByReload =
      (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.type)
        .includes("reload");
    //id reload the page, reset theme
    pageAccessedByReload ? setTheme("light") : setTheme("dark");
  }, [setTheme]);

  return { theme, switchTheme };
}
