import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";
// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { Avax } from "../../assets";
// import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { NFT } from "../../typings/nft";

export interface PureAssetListItemProps {
  item: NFT;
}

export const PureAssetListItem: React.FC<PureAssetListItemProps> = ({
  item: { tokenId, contractAddress, name, image, description, sold, price, contractName, contractVerified }
}) => {
  // const { chainId } = useWeb3React<Web3Provider>();
  const location = useLocation();
  const path = `${ROUTE_MARKETPLACE}/${contractAddress}/${tokenId}`;

  return (
    <NavLink
      to={path}
      exact={true}
      className='cursor-pointer flex p-4 border-b border-gray-200 dark:border-gray-800 items-center hover:bg-gray-50 dark:hover:bg-gray-800'
      activeClassName='bg-gray-100 dark:bg-gray-800'
      aria-current={[path].includes(location.pathname) ? "page" : undefined}
    >
      <div className='flex-shrink-0'>
        <img
          className='flex-shrink-0 h-24 w-24 md:h-32 md:w-32'
          src={image}
          alt={name}
        />
      </div>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 max-w-2xl'>
          <p className='text-xs text-gray-600 dark:text-gray-400 flex items-center'>
            {contractName}
            {!!contractVerified ? (
              <BadgeCheckIcon className='w-4 h-4 text-blue-500 ml-1' />
            ) : (
              <ExclamationIcon className='w-4 h-4 text-yellow-500 ml-1' />
            )}
          </p>
          <p className='mt-1 text-base font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
            {description}
          </p>
        </div>
      </div>
      {!sold && (
        <div className='flex flex-col items-end'>
          <p className='text-xs text-gray-600 dark:text-gray-400'>Price</p>
          <div className='mt-1 flex items-center'>
            {/* TODO: allow other currency logos */}
            {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
            <img src={Avax} alt='AVAX logo' className='w-3 h-3 mr-2' />
            <span className='text-sm font-medium'>{price}</span>
          </div>
        </div>
      )}
    </NavLink>
  );
};
