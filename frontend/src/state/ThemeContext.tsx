import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { defaultTheme } from '../constants/themes';
import { themes } from '../constants/themes';

export type ThemeContextType = {
  theme: string;
  themes: Array<string>;
  setTheme: (Theme: string) => void;
};

const initialState: ThemeContextType = {
  theme: defaultTheme,
  themes: themes,
  setTheme: newTheme => { console.log(newTheme); }
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(localStorage.theme || defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
