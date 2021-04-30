import React from "react";
import { NavLink } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { NFTProps } from "../../typings/nft";
import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_ASSETS } from "../../constants/routes";
import { RarityBadge } from "../index";

export default function NFTCard(props: NFTProps) {
  const { id, img, name, rarity, description, cost, className } = props;
  const { chainId } = useWeb3React<Web3Provider>();

  return (
    <NavLink
      to={`${ROUTE_ASSETS}/${id}`}
      className={`${className} flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-2`}>
      <div className='flex-shrink-0'>
        <img className='h-54 w-full object-scale-down' src={img} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
            {description}
          </p>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <RarityBadge rarity={rarity} />
          </div>
          <div className='ml-3 text-sm font-medium text-green-600 dark:text-green-500'>
            {cost} {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
