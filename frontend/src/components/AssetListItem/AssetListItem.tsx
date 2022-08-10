import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import { NavLink, useLocation } from 'react-router-dom';
// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { Avax } from '../../assets';
// import { NATIVE_CURRENCY } from "../../constants";
import clsx from 'clsx';
import { ROUTE_MARKETPLACE } from '../../constants/routes';
import { NFT } from '../../typings/nft';

export interface AssetListItemProps {
  item: NFT;
}

export const AssetListItem = ({
  item: {
    tokenId,
    contractAddress,
    name,
    image,
    description,
    sold,
    price,
    contractName,
    contractVerified,
  },
}: AssetListItemProps) => {
  // const { chainId } = useWeb3React<Web3Provider>();
  const location = useLocation();
  const path = `${ROUTE_MARKETPLACE}/${contractAddress}/${tokenId}`;

  return (
    <NavLink
      to={path}
      // exact={true}
      className={(navData) =>
        clsx(
          'flex p-4 gap-4 items-center cursor-pointer hover:bg-primary hover:text-primary-content',
          navData.isActive && 'bg-primary text-primary-content'
        )
      }
      aria-current={[path].includes(location.pathname) ? 'page' : undefined}>
      <div className='flex-shrink-0'>
        <img
          className='flex-shrink-0 h-24 w-24 md:h-32 md:w-32'
          src={image}
          alt={name}
        />
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='flex-1 max-w-2xl'>
          <p className='text-xs flex items-center'>
            {contractName}
            {!!contractVerified ? (
              <BadgeCheckIcon className='w-4 h-4 text-info ml-1' />
            ) : (
              <ExclamationIcon className='w-4 h-4 text-warning ml-1' />
            )}
          </p>
          <p className='mt-1 text-base font-semibold'>{name}</p>
          <p className='mt-1 text-sm line-clamp-3'>{description}</p>
        </div>
      </div>
      {!sold && (
        <div className='flex flex-col items-end'>
          <p className='text-xs'>Price</p>
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
