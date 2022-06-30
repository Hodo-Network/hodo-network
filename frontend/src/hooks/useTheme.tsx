import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = (theme: string) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.theme = theme;
  };

  // Whenever the user explicitly chooses to respect the OS preference
  // const removeTheme = () => {
  //   localStorage.removeItem("theme");
  // };

  // On page load
  useEffect(() => {
    const data = document.documentElement.getAttribute('data-theme') || '';
    switchTheme(data);
  }, []);

  return { theme, switchTheme };
}
