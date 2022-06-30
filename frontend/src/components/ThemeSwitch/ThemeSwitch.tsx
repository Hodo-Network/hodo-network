import clsx from "clsx";
import useTheme from "../../hooks/useTheme";

export const ThemeSwitch = () => {
  const { theme, switchTheme } = useTheme();
  const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter'].sort();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">Theme</label>
      <div className="menu dropdown-content shadow-lg bg-base-300 rounded-box w-52 mt-1 overflow-hidden">
        {/* <div className="bg-primary text-primary-content capitalize px-4 py-3">{theme}</div> */}
        <ul tabIndex={0} className="h-96 overflow-y-scroll">
          {themes.map(item => (
            <li key={item}><button className={clsx('capitalize', item === theme && 'bg-primary text-primary-content')} onClick={() => switchTheme(item)}>{item}</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
