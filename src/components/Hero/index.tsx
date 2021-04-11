import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_BROWSE_ALL } from "../../constants/routes";
import LeafletMap from "../LeafletMap";

export default function Hero() {
  return (
    <div className='lg:relative p-4 sm:p-8 lg:p-12 -mx-4 sm:-mx-8 lg:-mx-12'>
      <div className='mx-auto max-w-8xl py-8 md:py-12 lg:pb-20 text-center sm:text-left'>
        <div className='lg:w-1/2 sm:pr-8 xl:pr-16'>
          <h1 className='tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl xl:text-6xl'>
            <span>Hodo </span>
            <span className='text-indigo-600 dark:text-white'>Network</span>
          </h1>
          <p className='mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl mt-4 md:mt-6'>
            Welcome to the first marketplace for Georeferenced Non-Fungible
            Tokens (gNFT).
          </p>
          <div className='mt-8 sm:flex'>
            <div>
              <NavLink to={ROUTE_BROWSE_ALL} className='btn btn--large w-full'>
                Start Browsing
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='relative w-full h-48 sm:h-64 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
        <LeafletMap className='h-48 w-full object-cover sm:h-56 md:h-72 lg:w-full lg:h-full' />
      </div>
    </div>
  );
}
