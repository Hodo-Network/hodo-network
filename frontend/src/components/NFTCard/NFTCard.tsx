import React from "react";
import { NavLink } from "react-router-dom";
// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { NFT } from "../../typings/nft";
// import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_COLLECTIONS } from "../../constants/routes";
import RarityBadge from "../RarityBadge";

export interface NFTCardProps {
  nft: NFT;
  className?: string;
}

export const NFTCard: React.FC<NFTCardProps> = ({
  nft: { id, name, category, image, data, price },
  className,
}) => {
  // const { chainId } = useWeb3React<Web3Provider>();

  return (
    <NavLink
      to={`${ROUTE_COLLECTIONS}/${category}/${id}`}
      className={`${className} flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-1`}>
      <div className='flex-shrink-0'>
        <img className='h-54 w-full object-scale-down' src={image} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
            {data.description}
          </p>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <RarityBadge rarity={data.rarity} />
          </div>
          <div className='ml-3 text-sm font-medium text-green-600 dark:text-green-500'>
            {price.value} {price.units}
            {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
          </div>
        </div>
      </div>
    </NavLink>
  );
};
