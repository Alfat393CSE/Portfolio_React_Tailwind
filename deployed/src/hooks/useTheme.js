import { useEffect, useState } from "react";
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("alfat-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("alfat-theme", theme);
    } catch {}
  }, [theme]);
return [theme, setTheme];
}
