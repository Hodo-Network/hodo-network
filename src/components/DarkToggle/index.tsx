import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useDark } from "../../hooks";

export default function DarkToggle({ mini }: { mini: Boolean }) {
  const [dark, toggleDark] = useDark();

  return (
    <button
      type='button'
      onClick={toggleDark}
      className='flex flex-1 items-center rounded-full text-white px-4 py-3'>
      {dark ? (
        <SunIcon className='h-6 w-6' />
      ) : (
        <MoonIcon className='h-6 w-6' />
      )}
      {!mini && <span className='ml-3'>{dark ? "Light" : "Dark"}</span>}
    </button>
  );
}
