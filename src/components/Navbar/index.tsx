import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../index";
import { ReactLogo } from "../../assets";
import ProfileLink from "../ProfileLink";
import { userImg, name } from "../../data/user";

export default function Navbar() {
  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to='/'
                exact={true}
                className='flex-shrink-0 flex items-center'>
                <Logo img={ReactLogo} alt='React Logo' />
                <span className='text-black font-medium'>
                  {process.env.REACT_APP_COMPANY}
                </span>
              </NavLink>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <NavLink
                to='/'
                exact={true}
                className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                activeClassName='border-indigo-500 hover:border-indigo-500 text-gray-900 hover:text-gray-900'>
                Home
              </NavLink>
              <NavLink
                to='/browse'
                exact={true}
                className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                activeClassName='border-indigo-500 hover:border-indigo-500 text-gray-900 hover:text-gray-900'>
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
