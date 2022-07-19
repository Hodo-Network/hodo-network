import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "../../state/ThemeContext";
import Button from "../../base/Button";

export interface IDarkToggle {
  light?: string;
  dark?: string;
}

export const DarkToggle = ({ light = 'light', dark = 'dark' }: IDarkToggle) => {
  const { theme, setTheme } = useTheme();

  // Toggle between 2 themes
  const toggleThemes = (theme1: string, theme2: string) => {
    if (theme === theme1) {
      setTheme(theme2);
    } else {
      setTheme(theme1);
    }
  };

  return (
    <Button
      onClick={() => toggleThemes(light, dark)}
      variant="ghost"
      shape="square">
      {theme === light ? (
        <MoonIcon className='h-6 w-6' />
      ) : (
        <SunIcon className='h-6 w-6' />
      )}
    </Button>
  );
};
