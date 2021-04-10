import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, DarkToggle } from "../index";
import { HodoLogo } from "../../assets";
// import ProfileLink from "../ProfileLink";
// import { user } from "../../data";
import {
  ROUTE_BROWSE_ALL,
  ROUTE_DEFAULT,
  ROUTE_ACCOUNT,
} from "../../constants/routes";

export default function Navbar() {
  return (
    <nav className='px-4 sm:px-8 lg:px-12'>
      <div className='mx-auto max-w-8xl'>
        <div className='flex justify-between h-20'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to={ROUTE_DEFAULT}
                exact={true}
                className='flex-shrink-0 flex items-center'>
                <Logo img={HodoLogo} alt='Logo' />
                <span className='text-black dark:text-white font-medium text-lg'>
                  {process.env.REACT_APP_COMPANY}
                </span>
              </NavLink>
            </div>
          </div>

          <div className='ml-6 flex space-x-6 items-center'>
            <NavLink
              to={ROUTE_DEFAULT}
              exact={true}
              className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-400 inline-flex items-center px-1 text-base font-medium'
              activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
              Home
            </NavLink>
            <NavLink
              to={ROUTE_BROWSE_ALL}
              exact={false}
              className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-400 inline-flex items-center px-1 text-base font-medium'
              activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
              Browse
            </NavLink>
            <NavLink
              to={ROUTE_ACCOUNT}
              exact={true}
              className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-400 inline-flex items-center px-1 text-base font-medium'
              activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
              Account
            </NavLink>
            <DarkToggle />
            {/* <ProfileLink img={user.img} name={user.name} /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
