import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../index";
import { ReactLogo } from "../../assets";
import ProfileLink from "../ProfileLink";
import { userImg, name } from "../../data/user";

export default function Navbar() {
  return (
    <nav className='px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to='/'
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
                to='/'
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Home
              </NavLink>
              <NavLink
                to='/browse'
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Browse
              </NavLink>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <ProfileLink img={userImg} name={name} />
          </div>
        </div>
      </div>
    </nav>
  );
}
