import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Button from "../../base/Button";
import { useTheme } from "../../hooks";

export interface IDarkToggle {
  light?: string;
  dark?: string;
}

export const DarkToggle = ({ light = 'light', dark = 'dark' }: IDarkToggle) => {
  const { theme, toggleThemes } = useTheme();

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
