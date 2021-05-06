import { useState, useEffect } from "react";

export default function useDark() {
  const [dark, setDark] = useState<boolean>(false);

  // Whenever the user explicitly chooses to respect the OS preference
  //   const removeTheme = () => {
  //     localStorage.removeItem("dark");
  //   };

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  // On page load or when changing dark
  // Initial logic in /public/index.html
  useEffect(() => {
    const isDark = document
      .getElementsByTagName("html")[0]
      .classList.contains("dark");

    setDark(isDark);
    localStorage.dark = isDark;
  }, [dark]);

  return [dark, toggleDark] as const;
}
