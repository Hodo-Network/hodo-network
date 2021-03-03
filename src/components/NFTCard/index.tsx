import React from "react";
import { NavLink } from "react-router-dom";
import { NFTProps } from "../../typings/nft";

export default function NFTCard(props: NFTProps) {
  const { img, name, rarity, desc, cost } = props;
  const units = "AVAX";
  let badgeClass = "";

  switch (rarity) {
    case "Rare":
      badgeClass = "bg-red-100 text-red-800";
      break;

    case "Epic":
      badgeClass = "bg-yellow-100 text-yellow-800";
      break;

    case "Common":
      badgeClass = "bg-blue-100 text-blue-800";
      break;

    default:
      badgeClass = "bg-gray-100 text-gray-800";
      break;
  }

  return (
    <NavLink
      to='/browse'
      className='flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-2'>
      <div className='flex-shrink-0'>
        <img className='h-36 w-full object-cover' src={img} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
          <p className='mt-3 text-sm text-gray-500 dark:text-gray-400'>
            {desc}
          </p>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${badgeClass}`}>
              {rarity}
            </span>
          </div>
          <div className='ml-3 text-sm font-medium text-green-700'>
            {cost} {units}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
