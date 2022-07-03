import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>("dark");

  const switchTheme = (theme: string) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.theme = theme;
  };

  // Whenever the user explicitly chooses to respect the OS preference
  const removeTheme = () => {
    setTheme('');
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem("theme");
  };

  // Toggle between 2 themes
  const toggleThemes = (theme1: string, theme2: string) => {
    if (theme === theme1) {
      switchTheme(theme2);
    } else {
      switchTheme(theme1);
    }
  };

  // On page load
  useEffect(() => {
    if (localStorage.theme) {
      switchTheme(localStorage.theme);
    }
  }, []);

  return { theme, switchTheme, removeTheme, toggleThemes };
}
