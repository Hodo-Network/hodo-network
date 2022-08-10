import clsx from 'clsx';
import Button from '../../base/Button';
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import SidebarCloseIcon from '../SidebarCloseIcon';
import SidebarOpenIcon from '../SidebarOpenIcon';

export interface ISidebarIconSwap {
  active?: boolean;
  onClick?: () => void;
}

export const SidebarIconSwap = ({
  active = false,
  onClick,
}: ISidebarIconSwap) => {
  return (
    <Button
      variant='ghost'
      util={clsx(
        'px-3 hover:bg-transparent swap swap-rotate',
        active && 'swap-active'
      )}
      onClick={onClick}
      aria-label='Toggle sidebar'>
      <SidebarOpenIcon
        className='swap-off fill-current w-6 h-6'
        aria-hidden='true'
      />

      <SidebarCloseIcon
        className='swap-on fill-current w-6 h-6'
        aria-hidden='true'
      />
    </Button>
  );
};
