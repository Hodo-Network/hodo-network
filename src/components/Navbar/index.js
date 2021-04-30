import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  CollectionIcon,
  GlobeIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import {
  ConnectionBadge,
  DarkToggle,
  Footer,
  OnboardingButton,
} from "../index";
import {
  ROUTE_COLLECTIONS,
  ROUTE_DEFAULT,
  ROUTE_EXPLORE,
  ROUTE_FAQ,
  ROUTE_WALLET,
} from "../../constants/routes";

const navigation = [
  { name: "Home", href: ROUTE_DEFAULT, icon: HomeIcon, exact: true },
  {
    name: "Collections",
    href: `${ROUTE_COLLECTIONS}/All`,
    icon: CollectionIcon,
    exact: false,
  },
  { name: "Expore", href: ROUTE_EXPLORE, icon: GlobeIcon, exact: false },
  { name: "Wallet", href: ROUTE_WALLET, icon: CreditCardIcon, exact: true },
  { name: "FAQ", href: ROUTE_FAQ, icon: QuestionMarkCircleIcon, exact: true },
];

export default function Navbar() {
  const { account } = useWeb3React();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const enableSearch = false;

  return (
    <header className='flex-shrink-0 relative h-16 bg-white dark:bg-gray-900 border-b dark:border-gray-800 flex items-center'>
      <div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
        <button
          type='button'
          className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
          onClick={() => setMobileMenuOpen(true)}>
          <span className='sr-only'>Open main menu</span>
          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
        </button>
      </div>

      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
          {enableSearch && (
            <div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500 hidden'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <input
                id='search'
                type='search'
                placeholder='Search'
                className='block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0 dark:bg-gray-900'
              />
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'>
                <SearchIcon className='h-5 w-5' aria-hidden='true' />
              </div>
            </div>
          )}
        </div>

        <div className='ml-10 pr-8 flex-shrink-0 flex items-center space-x-6'>
          <DarkToggle />

          {account ? <ConnectionBadge /> : <OnboardingButton />}
        </div>
      </div>

      {/* Mobile menu, show/hide this `div` based on menu open/closed state */}

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-40 md:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
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
              className='fixed z-40 inset-0 h-full w-full bg-white dark:bg-gray-900 sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
              aria-label='Global'>
              <div className='h-16 flex items-center justify-between px-4 sm:px-6'>
                <span className='ml-1 font-bold text-xl text-gray-900 dark:text-white'>
                  Hodo Network
                </span>
                <button
                  type='button'
                  className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='block h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {enableSearch && (
                <div className='mt-2 max-w-8xl mx-auto px-4 sm:px-6'>
                  <div className='relative text-gray-400 focus-within:text-gray-500'>
                    <label htmlFor='search' className='sr-only'>
                      Search all assets
                    </label>
                    <input
                      id='search'
                      type='search'
                      placeholder='Search all assets'
                      className='block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600'
                    />
                    <div className='absolute inset-y-0 left-0 flex items-center justify-center pl-3'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                  </div>
                </div>
              )}

              <div className='flex-1 space-y-2 p-4'>
                <div className='flex justify-between mb-6'>
                  {account ? <ConnectionBadge /> : <OnboardingButton />}
                  <DarkToggle />
                </div>

                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    exact={item.exact}
                    className='text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center rounded-md px-4 py-3'
                    activeClassName='bg-gray-200 dark:bg-gray-800 text-white'>
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
