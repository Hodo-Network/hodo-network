import { NavLink } from "react-router-dom";
import { ROUTE_ASSET } from "../../constants/routes";
import { NFTProps } from "../../typings/nft";
import RarityBadge from "../RarityBadge";

export default function NFTCard(props: NFTProps) {
  const { id, img, name, rarity, desc, cost, className } = props;
  const units = "AVAX";

  return (
    <NavLink
      to={`${ROUTE_ASSET}/${id}`}
      className={`${className} flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-2`}>
      <div className='flex-shrink-0'>
        <img className='h-54 w-full object-scale-down' src={img} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-700 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
            {name}
          </p>
          <p className='mt-3 text-sm text-gray-500 dark:text-gray-300'>
            {desc}
          </p>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <RarityBadge rarity={rarity} />
          </div>
          <div className='ml-3 text-sm font-medium text-green-600 dark:text-green-500'>
            {cost} {units}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
