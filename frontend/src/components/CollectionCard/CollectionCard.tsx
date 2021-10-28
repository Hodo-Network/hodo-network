import { Link } from "react-router-dom";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { Collection } from "../../typings/nft";
import { ROUTE_MARKETPLACE } from "../../constants/routes";

export interface PureCollectionCardProps {
  collection: Collection;
}

export const PureCollectionCard = ({
  collection: { name, thumbnail, contractAddress, verified, network },
}: PureCollectionCardProps) => {
  return (
    <Link
      to={`${ROUTE_MARKETPLACE}/${contractAddress}`}
      className='flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-1'>
      <div className='flex-shrink-0'>
        <img
          className='h-54 w-full object-scale-down'
          src={thumbnail}
          alt={name}
        />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 py-3 px-4 flex flex-col justify-between'>
        <p className='text-base font-semibold text-gray-900 dark:text-gray-100 capitalize flex justify-between'>
          <span>{name}</span>
          {!!verified && (
            <BadgeCheckIcon className='w-6 h-6 text-blue-500 ml-2' />
          )}
        </p>
      </div>
    </Link>
  );
};
