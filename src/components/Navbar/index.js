import React, { Fragment, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ConnectionBadge, OnboardingButton } from "../index";

const navigation = [
  // { name: "Reporting", href: "#", children: [] },
];

export default function Navbar() {
  const { account } = useWeb3React();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Desktop nav area */}
      <div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
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
        </div>
        <div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
          {navigation.length > 0 && (
            <nav aria-label='Global' className='flex space-x-10'>
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm font-medium text-gray-900'>
                    {item.name}
                  </a>
                </Fragment>
              ))}
            </nav>
          )}
          <div className='ml-6 flex space-x-4 items-center'>
            {account ? <ConnectionBadge /> : <OnboardingButton />}
          </div>
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
              className='fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
              aria-label='Global'>
              <div className='h-16 flex items-center justify-between px-4 sm:px-6'>
                <a href='#none'>
                  <img
                    className='block h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=500'
                    alt='Workflow'
                  />
                </a>
                <button
                  type='button'
                  className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600'
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='block h-6 w-6' aria-hidden='true' />
                </button>
              </div>
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
              <div className='max-w-8xl mx-auto py-3 px-2 sm:px-4'>
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <a
                      href={item.href}
                      className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'>
                      {item.name}
                    </a>
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className='block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100'>
                        {child.name}
                      </a>
                    ))}
                  </Fragment>
                ))}
              </div>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}

// <nav className='px-4 sm:px-8 lg:px-12'>
//       <div className='mx-auto max-w-8xl'>
//         <div className='flex justify-between h-20'>
//           <div className='flex'>
//             <div className='flex-shrink-0 flex items-center'>
//               <NavLink
//                 to={ROUTE_DEFAULT}
//                 exact={true}
//                 className='flex-shrink-0 flex items-center'>
//                 <Logo img={HodoLogo} alt='Logo' />
//                 <span className='text-black dark:text-white font-medium text-lg'>
//                   {process.env.REACT_APP_COMPANY}
//                 </span>
//               </NavLink>
//             </div>

//             <div className='ml-6 flex space-x-6 items-center'>
//               <NavLink
//                 to={ROUTE_DEFAULT}
//                 exact={true}
//                 className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-blue-400 inline-flex items-center px-1 text-base font-medium'
//                 activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
//                 Home
//               </NavLink>
//               <NavLink
//                 to={ROUTE_COLLECTIONS}
//                 exact={false}
//                 className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-blue-400 inline-flex items-center px-1 text-base font-medium'
//                 activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
//                 Collections
//               </NavLink>
//               <NavLink
//                 to={ROUTE_WALLET}
//                 exact={true}
//                 className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-blue-400 inline-flex items-center px-1 text-base font-medium'
//                 activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
//                 Wallet
//               </NavLink>
//             </div>
//           </div>

//           <div className='ml-6 flex space-x-4 items-center'>
//             {account ? <ConnectionBadge /> : <OnboardingButton />}
//             <DarkToggle />
//           </div>
//         </div>
//       </div>
//     </nav>
