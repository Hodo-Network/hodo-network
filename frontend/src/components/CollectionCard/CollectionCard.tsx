import React from "react";
import { Link } from "react-router-dom";
import { Collection } from "../../typings/nft";
import { ROUTE_COLLECTIONS } from "../../constants/routes";

export interface CollectionCardProps {
  collection: Collection;
  className?: string;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection: { name, image },
  className,
}) => {
  return (
    <Link
      to={`${ROUTE_COLLECTIONS}/${name}`}
      className={`flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className='flex-shrink-0'>
        <img className='h-54 w-full object-scale-down' src={image} alt={name} />
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100 capitalize'>
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};