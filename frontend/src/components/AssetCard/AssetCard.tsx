import React from "react";
import { NavLink } from "react-router-dom";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";
// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { Avax } from "../../assets";
// import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { NFT } from "../../typings/nft";

export interface PureAssetCardProps {
  nft: NFT;
  // collection?: Collection;
}

export const PureAssetCard: React.FC<PureAssetCardProps> = ({
  nft: { tokenId, contractAddress, name, image, sold, price, contractName, contractVerified },
  // collection,
}) => {
  // const { chainId } = useWeb3React<Web3Provider>();

  return (
    <NavLink
      to={`${ROUTE_MARKETPLACE}/${contractAddress}/${tokenId}`}
      className='flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-1'>
      <div className='flex-shrink-0'>
        <img className='h-54 w-full object-scale-down' src={image} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex justify-between'>
        <div className='flex-1'>
          <p className='text-xs text-gray-600 dark:text-gray-400 flex items-center'>
            {contractName}
            {!!contractVerified ? (
              <BadgeCheckIcon className='w-4 h-4 text-blue-500 ml-1' />
            ) : (
              <ExclamationIcon className='w-4 h-4 text-yellow-500 ml-1' />
            )}
          </p>
          <p className='mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
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
      </div>
    </NavLink>
  );
};
