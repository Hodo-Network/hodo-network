import { useState, useEffect } from "react";

const useThemeChoice = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = (theme: string) => setTheme(theme);

  // Whenever the user explicitly chooses to respect the OS preference
  //   const removeTheme = () => {
  //     localStorage.removeItem("theme");
  //   };

  // On page load or when changing themes
  useEffect(() => {
    const isDark = document
      .getElementsByTagName("html")[0]
      .classList.contains("dark");

    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.theme = theme;
  }, [theme, setTheme]);

  return { theme, switchTheme };
};

export default useThemeChoice;
