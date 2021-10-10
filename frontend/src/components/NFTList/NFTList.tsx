import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NFT } from "../../typings/nft";
import { ROUTE_COLLECTIONS } from "../../constants/routes";

export interface NFTListProps {
  items: NFT[];
}

export const NFTList: React.FC<NFTListProps> = ({ items }) => {
  const location = useLocation();

  return (
    <aside className='hidden xl:block'>
      <nav
        aria-label='Sections'
        className='w-96 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 relative hidden lg:flex lg:flex-col'>
        <div className='flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center'>
          <p className='text-lg font-medium text-gray-900 dark:text-gray-100'>
            Others in this Collection
          </p>
        </div>
        <div className='min-h-0 overflow-y-auto flex-1'>
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={`${ROUTE_COLLECTIONS}/${item.category}/${item.tokenId}`}
              exact={true}
              className='cursor-pointer flex p-4 border-b border-gray-200 dark:border-gray-800 items-center hover:bg-gray-100 dark:hover:bg-gray-800'
              activeClassName='bg-gray-100 dark:bg-gray-800'
              aria-current={
                [`${ROUTE_COLLECTIONS}/${item.category}/${item.tokenId}`].includes(
                  location.pathname
                )
                  ? "page"
                  : undefined
              }>
              <img
                className='flex-shrink-0 -mt-0.5 h-14 w-14'
                src={item.image}
                alt={item.name}
              />
              <div className='ml-3 text-sm overflow-hidden'>
                <p className='text-base font-semibold text-gray-900 dark:text-gray-100 truncate'>
                  {item.name}
                </p>
                <p className='mt-1 text-sm text-gray-600 dark:text-gray-300 truncate'>
                  {item.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};
