import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';
import { ROUTE_MARKETPLACE } from '../../constants/routes';
import { NFT } from '../../typings/nft';
import CurrencyLogo from '../CurrencyLogo';

export interface AssetCardProps {
  item: NFT;
}

export const AssetCard = ({
  item: {
    tokenId,
    network,
    contractAddress,
    name,
    image,
    sold,
    price,
    contractName,
    contractVerified,
  },
}: AssetCardProps) => {
  return (
    <NavLink
      to={`${ROUTE_MARKETPLACE}/${contractAddress}/${tokenId}`}
      className='card card-compact shadow bg-neutral-focus text-neutral-content transition-transform duration-300 transform hover:-translate-y-1 max-w-sm'>
      <div className='figure'>
        <img className='h-54 w-full object-scale-down' src={image} alt={name} />
      </div>
      <div className='card-body bg-neutral'>
        <div className='flex'>
          <div className='flex-1'>
            <p className='text-xs flex items-center'>
              {contractName}
              {!!contractVerified ? (
                <BadgeCheckIcon className='w-4 h-4 text-success ml-1' />
              ) : (
                <ExclamationIcon className='w-4 h-4 text-warning ml-1' />
              )}
            </p>
            <p className='mt-1 text-sm font-semibold'>{name}</p>
          </div>
          {!sold && (
            <div className='flex flex-col items-end'>
              <p className='text-xs'>Price</p>
              <div className='mt-1 flex items-center gap-1'>
                <CurrencyLogo network={network} />
                <span className='text-sm font-medium'>{price}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </NavLink>
  );
};
