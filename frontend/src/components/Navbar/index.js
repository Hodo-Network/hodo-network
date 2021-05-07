import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation } from "../../constants/navigation";
import {
  ConnectionBadge,
  DarkToggle,
  Footer,
  OnboardingButton,
  SearchBar,
} from "../index";

export default function Navbar({ miniSidebar }) {
  const { account } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);
  const enableSearch = false;

  return (
    <header className='flex-shrink-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800 flex items-center'>
      <div className='flex-1 flex items-center justify-between py-3 px-4 sm:px-8'>
        <div className='flex items-center'>
          <span className={`font-bold text-xl ${!miniSidebar && "md:hidden"}`}>
            Hodo Network
          </span>
        </div>

        {enableSearch && (
          <div className='min-w-0 hidden md:flex flex-1'>
            <SearchBar />
          </div>
        )}

        <div className='ml-10 flex-shrink-0 hidden md:flex items-center space-x-6'>
          <DarkToggle />

          {account ? <ConnectionBadge /> : <OnboardingButton />}
        </div>
      </div>

      <div className='py-3 px-4 flex items-center md:hidden'>
        <button
          type='button'
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
          onClick={() => setMenuOpen(true)}>
          <span className='sr-only'>Open main menu</span>
          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
        </button>
      </div>

      <Transition.Root show={menuOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-50 md:hidden'
          open={menuOpen}
          onClose={setMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-out duration-150 sm:ease-in-out sm:duration-300'
            enterFrom='transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
            enterTo='transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
            leave='transition ease-in duration-150 sm:ease-in-out sm:duration-300'
            leaveFrom='transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
            leaveTo='transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100'>
            <nav
              className='fixed z-50 inset-0 h-full w-full bg-white dark:bg-gray-900 sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
              aria-label='Global'>
              <div className='flex items-center justify-between py-3 px-4'>
                <span className='ml-1 font-bold text-xl text-gray-900 dark:text-white'>
                  Hodo Network
                </span>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
                  onClick={() => setMenuOpen(false)}>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='block h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {enableSearch && (
                <div className='mt-2 max-w-8xl mx-auto px-4 sm:px-6'>
                  <SearchBar />
                </div>
              )}

              <div className='flex-1 space-y-2 p-4'>
                <div className='flex justify-between mb-6 text-gray-900 dark:text-white'>
                  {account ? <ConnectionBadge /> : <OnboardingButton />}
                  <DarkToggle />
                </div>

                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    exact={item.exact}
                    className='text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-md px-4 py-3'
                    activeClassName='bg-gray-200 dark:bg-gray-800 text-white'
                    onClick={() => setMenuOpen(false)}>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                    <span className='ml-3'>{item.name}</span>
                  </NavLink>
                ))}
              </div>

              <Footer />
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
