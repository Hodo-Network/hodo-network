import { NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export interface BreadcrumbsProps {
  crumbs: any;
}

export interface BreadcrumbProps {
  name: string;
  path: string;
  current?: boolean;
  isHome?: boolean;
}

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <nav
      className='flex bg-white border-b border-gray-300'
      aria-label='Breadcrumb'
      style={{ minHeight: "45px" }}>
      <ol className='max-w-screen-xl w-full px-4 flex space-x-4 sm:px-8'>
        {crumbs.map(
          ({ name, path, current, isHome }: BreadcrumbProps, key: number) => {
            if (isHome) {
              return (
                <li key={key} className='flex'>
                  <div className='flex items-center'>
                    <NavLink
                      to={path}
                      // exact={true}
                      className={(navData) => clsx('text-gray-400 hover:text-gray-500', navData.isActive && 'text-gray-500')}
                      aria-current={current ? "page" : undefined}>
                      <HomeIcon
                        className='flex-shrink-0 h-5 w-5'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{name}</span>
                    </NavLink>
                  </div>
                </li>
              );
            }
            return (
              <li key={key} className='flex'>
                <div className='flex items-center'>
                  <svg
                    className='flex-shrink-0 w-6 h-full text-gray-200'
                    viewBox='0 0 24 44'
                    preserveAspectRatio='none'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'>
                    <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                  </svg>
                  <NavLink
                    key={name}
                    to={path}
                    // exact={true}
                    className={(navData) => clsx('ml-4 text-sm font-medium capitalize text-gray-500 hover:text-gray-700', navData.isActive && 'text-gray-500 cursor-disabled')}
                    aria-current={current ? "page" : undefined}>
                    {name}
                  </NavLink>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </nav>
  );
};
