import clsx from "clsx";
import { useTheme } from "../../state/ThemeContext";

export interface IThemeSwitchProps {
  themes: Array<string>;
}

export const ThemeSwitch = ({ themes }: IThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const options = themes.sort();

  // TODO: need a way to update when theme is changed in some other component
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">Theme</label>
      <div className="menu dropdown-content shadow-lg bg-base-300 rounded-box w-52 mt-1 overflow-hidden">
        {/* <div className="bg-primary text-primary-content capitalize px-4 py-3">{theme}</div> */}
        <ul tabIndex={0} className="h-96 overflow-y-scroll">
          {options.map(item => (
            <li key={item}><button className={clsx('capitalize', item === theme && 'bg-primary text-primary-content')} onClick={() => setTheme(item)}>{item}</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
