import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import { navigation } from "../../constants/navigation";
import Footer from "../Footer";
import SidebarIconSwap from "../SidebarIconSwap";

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
          <SidebarIconSwap onClick={toggle} active={mini} />

          <span
            className={clsx('font-bold text-xl', mini && 'sr-only')}>
            Hodo Network
          </span>
        </div>
      </div>

      <nav aria-label='Sidebar' className='flex-1 space-y-2 px-3 py-2 sm:py-4'>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={(navData) => clsx('btn btn-block capitalize justify-start gap-2', navData.isActive ? 'btn-primary' : ' btn-ghost')}
          >
            <item.icon className='h-6 w-6' aria-hidden='true' />
            <span className={mini ? 'sr-only' : ''}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {!mini && <Footer />}
    </div >
  );
};
