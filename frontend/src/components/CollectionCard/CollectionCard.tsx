import { Link } from "react-router-dom";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Collection } from "../../typings/nft";
import { ROUTE_MARKETPLACE } from "../../constants/routes";

export interface PureCollectionCardProps {
  item: Collection;
}

export const PureCollectionCard = ({
  item: { name, image, contractAddress, verified },
}: PureCollectionCardProps) => {
  return (
    <Link
      to={`${ROUTE_MARKETPLACE}/${contractAddress}`}
      className='card card-compact shadow-md bg-neutral-focus text-neutral-content transition-transform duration-300 transform hover:-translate-y-1'>
      <figure className="h-60">
        <img src={image} alt={name} />
      </figure>
      <div className='card-body bg-neutral'>
        <p className='font-semibold flex justify-between space-x-2'>
          <span>{name}</span>
          {!!verified ? (
            <BadgeCheckIcon className='w-6 h-6 text-info' />
          ) : (
            <ExclamationIcon className='w-6 h-6 text-warning' />
          )}
        </p>
      </div>
    </Link>
  );
};
