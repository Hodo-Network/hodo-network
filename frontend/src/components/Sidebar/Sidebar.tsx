import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import { navigation } from "../../constants/navigation";
import Footer from "../Footer";
import MenuClosedIcon from "../MenuClosedIcon";
import MenuOpenIcon from "../MenuOpenIcon";

export interface SidebarProps {
  mini: boolean;
  toggle: () => void;
}

export const Sidebar = ({ mini, toggle }: SidebarProps) => {
  return (
    <div
      className={clsx('hidden md:flex flex-col border-r border-neutral bg-base-200', mini ? "w-20" : "w-80")}>
      <div className='h-16'>
        <div
          className={clsx('flex items-center h-full p-3', mini && 'justify-center')}>
          <button
            type='button'
            className='text-base-content px-4 py-3 focus:outline-none'
            aria-label='Toggle sidebar'
            onClick={toggle}>
            {mini ? (
              <MenuClosedIcon className='w-6 h-6' />
            ) : (
              <MenuOpenIcon className='w-6 h-6' />
            )}
          </button>

          <span
            className={clsx('-ml-1 font-bold text-xl', mini && 'sr-only')}>
            Hodo Network
          </span>
        </div>
      </div>

      <nav aria-label='Sidebar' className='flex-1 space-y-2 px-3 py-2 sm:py-4'>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            // exact={item.exact}
            className={(navData) => clsx(
              'flex items-center rounded-md px-4 py-3 hover:bg-neutral hover:text-neutral-content',
              navData.isActive && 'bg-neutral text-neutral-content'
            )}>
            <item.icon className='h-6 w-6' aria-hidden='true' />
            <span className={mini ? "sr-only" : "ml-3"}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {!mini && <Footer />}
    </div >
  );
};
