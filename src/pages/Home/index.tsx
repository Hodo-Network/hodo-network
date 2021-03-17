import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { FeaturedNfts, Footer, Hero, Navbar } from "../../components";
import {
  BROWSE_ALL_ROUTE,
  BROWSE_CAPITALS_ROUTE,
  BROWSE_COUNTRIES_ROUTE,
  BROWSE_MONUMENTS_ROUTE,
} from "../../constants/routes";
import { countries } from "../../data/countries";
import { monuments } from "../../data/monuments";
import { capitals } from "../../data/capitals";

const featured = capitals;

const Home: FC = () => (
  <>
    <div className='bg-gray-100 dark:bg-gray-900'>
      <Navbar />
      <div>
        <Hero />
        <div className='p-4 sm:p-8'>
          <div className='mt-4 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
            <div className='flex justify-between mb-6'>
              <h2 className='font-bold text-xl dark:text-white'>
                Available in your area
              </h2>
              <NavLink
                to={BROWSE_ALL_ROUTE}
                className='text-indigo-700 font-medium flex'>
                <span className='whitespace-nowrap'>View All</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-6'>
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </NavLink>
            </div>
            {countries.length > 0 ? (
              <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                <FeaturedNfts items={featured} />
              </div>
            ) : (
              <div>No gNFTs available in your area.</div>
            )}
          </div>

          {countries.length > 0 && (
            <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
              <div className='flex justify-between mb-6'>
                <h2 className='font-bold text-xl dark:text-white'>Countries</h2>
                <NavLink
                  to={BROWSE_COUNTRIES_ROUTE}
                  className='text-indigo-700 font-medium flex'>
                  <span className='whitespace-nowrap'>View All</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </NavLink>
              </div>

              <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                <FeaturedNfts items={countries} />
              </div>
            </div>
          )}

          {capitals.length > 0 && (
            <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
              <div className='flex justify-between mb-6'>
                <h2 className='font-bold text-xl dark:text-white'>
                  Capital Cities
                </h2>
                <NavLink
                  to={BROWSE_CAPITALS_ROUTE}
                  className='text-indigo-700 font-medium flex'>
                  <span className='whitespace-nowrap'>View All</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </NavLink>
              </div>

              <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                <FeaturedNfts items={capitals} />
              </div>
            </div>
          )}

          {monuments.length > 0 && (
            <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
              <div className='flex justify-between mb-6'>
                <h2 className='font-bold text-xl dark:text-white flex-shrink-0'>
                  Monuments
                </h2>
                <NavLink
                  to={BROWSE_MONUMENTS_ROUTE}
                  className='text-indigo-700 font-medium flex'>
                  <span className='whitespace-nowrap'>View All</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </NavLink>
              </div>

              <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                <FeaturedNfts items={monuments} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;
