import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useDark } from "../../hooks";

export const DarkToggle = () => {
  const [dark, toggleDark] = useDark();

  return (
    <button
      type='button'
      onClick={toggleDark}
      className='inline-flex items-center p-2 rounded-full'>
      {dark ? (
        <SunIcon className='h-6 w-6' />
      ) : (
        <MoonIcon className='h-6 w-6' />
      )}
    </button>
  );
};
