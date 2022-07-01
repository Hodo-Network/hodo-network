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

  // On page load
  useEffect(() => {
    if (localStorage.theme) {
      switchTheme(localStorage.theme);
    }
  }, []);

  return { theme, switchTheme, removeTheme };
}
