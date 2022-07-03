import clsx from "clsx";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export interface IMenuIconSwap {
  active?: boolean;
  onClick?: () => void;
}

export const MenuIconSwap = ({ active = false, onClick }: IMenuIconSwap) => {
  return (
    <button className={clsx("btn btn-square swap swap-rotate", active && 'swap-active')} onClick={onClick} aria-label='Toggle menu'>
      {/* hamburger icon */}
      {/* <span className='sr-only'>Open main menu</span> */}
      <MenuIcon className='swap-off fill-current h-6 w-6' aria-hidden='true' />

      {/* close icon */}
      {/* <span className='sr-only'>Close main menu</span> */}
      <XIcon className='swap-on fill-current h-6 w-6' aria-hidden='true' />
    </button>
  );
};