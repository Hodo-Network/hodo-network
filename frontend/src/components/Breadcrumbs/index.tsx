import React from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/outline";
import { ROUTE_DEFAULT } from "../../constants/routes";

export default function Breadcrumbs({ crumbs }: { crumbs: any }) {
  const location = useLocation();
  // TODO: remove after launch
  const match = useRouteMatch({
    path: "/home",
    exact: true,
  });

  if (match || crumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      className='flex bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800'
      aria-label='Breadcrumb'>
      <ol className='max-w-screen-xl w-full px-4 flex space-x-4 sm:px-8'>
        {crumbs.map(
          ({ name, path }: { name: string; path: string }, key: number) => {
            if (path === ROUTE_DEFAULT) {
              return (
                <li key={key} className='flex'>
                  <div className='flex items-center'>
                    <NavLink
                      to={path}
                      exact={true}
                      className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
                      activeClassName='text-gray-500'
                      aria-current={
                        [path].includes(location.pathname) ? "page" : undefined
                      }>
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
                    className='flex-shrink-0 w-6 h-full text-gray-200 dark:text-gray-700'
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
                    exact={true}
                    className='ml-4 text-sm font-medium capitalize text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    activeClassName='text-gray-500 cursor-disabled'
                    aria-current={
                      [path].includes(location.pathname) ? "page" : undefined
                    }>
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
}
