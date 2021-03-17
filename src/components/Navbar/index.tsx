import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, ThemeSwitcher } from "../index";
import { ReactLogo } from "../../assets";
import ProfileLink from "../ProfileLink";
import { userImg, name } from "../../data/user";
import { BROWSE_ALL_ROUTE, DEFAULT_ROUTE } from "../../constants/routes";

export default function Navbar() {
  return (
    <nav className='px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to={DEFAULT_ROUTE}
                exact={true}
                className='flex-shrink-0 flex items-center'>
                <Logo img={ReactLogo} alt='React Logo' />
                <span className='text-black dark:text-white font-medium'>
                  {process.env.REACT_APP_COMPANY}
                </span>
              </NavLink>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <NavLink
                to={DEFAULT_ROUTE}
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Home
              </NavLink>
              <NavLink
                to={BROWSE_ALL_ROUTE}
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Browse
              </NavLink>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <ThemeSwitcher />
            <div className='ml-4'>
              <ProfileLink img={userImg} name={name} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
