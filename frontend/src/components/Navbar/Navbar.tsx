import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Dialog, Transition } from "@headlessui/react";
import { navigation } from "../../constants/navigation";
import { NETWORK_LABELS_SHORT } from "../../constants";

import ConnectionBadge from "../ConnectionBadge";
import DarkToggle from "../DarkToggle";
import Footer from "../Footer";
import MenuIconSwap from '../MenuIconSwap';
import OnboardingButton from "../OnboardingButton";
import SearchBar from "../SearchBar";
import ThemeSwitch from "../ThemeSwitch";

export interface NavbarProps {
  hideTitle?: boolean;
}

export const Navbar = ({ hideTitle }: NavbarProps) => {
  const { chainId, account } = useWeb3React<Web3Provider>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const enableSearch = false;
  const network = (chainId && NETWORK_LABELS_SHORT[chainId]) || "";

  return (
    <header className='flex-shrink-0 border-b border-neutral flex items-center'>
      <div className='flex-1 flex items-center justify-between py-3 px-4 sm:px-8'>
        <div className='flex items-center'>
          <span className={clsx('font-bold text-xl', hideTitle && 'md:hidden')}>
            Hodo Network
          </span>
        </div>

        {enableSearch && (
          <div className='min-w-0 max-w-2xl hidden md:flex flex-1'>
            <SearchBar />
          </div>
        )}

        <div className='ml-10 flex-shrink-0 hidden md:flex items-center space-x-2'>
          <ThemeSwitch />
          <DarkToggle />

          {account ? (
            <ConnectionBadge network={network} account={account} />
          ) : (
            <OnboardingButton />
          )}
        </div>
      </div>

      <div className='py-3 px-4 flex items-center md:hidden'>
        <MenuIconSwap active={false} onClick={() => setMenuOpen(true)} />
      </div>

      <Transition show={menuOpen} as={Fragment}>
        <Dialog
          // as='div'
          // static
          // className='fixed inset-0 z-50 md:hidden'
          open={menuOpen}
          onClose={() => setMenuOpen(false)}>
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
              className='fixed z-50 inset-0 h-full w-full sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg bg-base-100 flex flex-col'
              aria-label='Global'>
              <div className='flex items-center justify-between py-3 px-4'>
                <span className='font-bold text-xl'>
                  Hodo Network
                </span>
                <MenuIconSwap active={true} onClick={() => setMenuOpen(false)} />
              </div>

              {enableSearch && (
                <div className='mt-2 max-w-8xl mx-auto px-4 sm:px-6'>
                  <SearchBar />
                </div>
              )}

              <div className='flex-1 space-y-6 p-4'>
                <div className='flex justify-between'>
                  {account ? (
                    <ConnectionBadge network={network} account={account} />
                  ) : (
                    <OnboardingButton />
                  )}
                  <ThemeSwitch />
                </div>

                <div className="space-y-1">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      // exact={item.exact}
                      className={(navData) => clsx('flex items-center rounded-md px-4 py-3 hover:bg-neutral hover:text-neutral-content', navData.isActive && 'bg-neutral text-neutral-content')}
                      onClick={() => setMenuOpen(false)}>
                      <item.icon className='h-6 w-6' aria-hidden='true' />
                      <span className='ml-3'>{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              <Footer />
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};
