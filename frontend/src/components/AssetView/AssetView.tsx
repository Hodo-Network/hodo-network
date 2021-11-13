// import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";
import { NETWORK_LABELS_SHORT } from '../../constants';
// import { NATIVE_CURRENCY } from "../../constants";
import {
  TEXT_DESCRIPTION,
  // TEXT_LOCATION,
  // TEXT_CONTRACT,
  // TEXT_ID,
  TEXT_OWNER,
} from "../../constants/text";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { NFT } from "../../typings/nft";
import { AttributeDisclosure } from '../Disclosures/AttributeDisclosure';
import { DetailsDisclosure } from '../Disclosures/DetailsDisclosure';
import { ListingDisclosure } from '../Disclosures/ListingDisclosure';
// import RarityBadge from "../RarityBadge";

export interface PureAssetViewProps {
  item?: NFT;
  collection?: any;
  onBuyAsset?: () => void;
  onCreateListing?: () => void;
  connected?: boolean;
  loading?: boolean;
  account?: any;
}

export const PureAssetView = ({
  item,
  collection,
  onBuyAsset,
  onCreateListing,
  connected,
  loading = false,
  account,
}: PureAssetViewProps) => {
  const location = useLocation();
  const path = `${ROUTE_MARKETPLACE}/${collection?.contractAddress}`;
  // const { chainId } = useWeb3React<Web3Provider>();
  // const [latitude, setLatitude] = useState<number | string>(0);
  // const [longitude, setLongitude] = useState<number | string>(0);

  // useEffect(() => {
  //   let lat =
  //     item?.attributes?.find((attr) => attr.trait_type === "Latitude")?.value ||
  //     0;
  //   let lng =
  //     item?.attributes?.find((attr) => attr.trait_type === "Longitude")
  //       ?.value || 0;

  //   setLatitude(lat);
  //   setLongitude(lng);
  // }, [item]);

  if (loading) {
    return (
      <ReactLoading
        type='bubbles'
        color='currentColor'
        className='text-blue-600 dark:text-blue-500'
      />
    );
  }

  if (item && collection) {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className='mb-3 lg:w-1/3'>
          <div className='mb-3 w-60 lg:w-auto'>
            <div className='aspect-w-1 aspect-h-1'>
              <img src={item.image} alt={item.name} />
            </div>
          </div>

          <div className="mb-3">
            {/* TODO: replace attrs */}
            <AttributeDisclosure attrs={[
              {
                "display_type": "number",
                "trait_type": "Latitude",
                "value": -3.064382331
              },
              {
                "display_type": "number",
                "trait_type": "Longitude",
                "value": 37.35792304
              }]} />
          </div>

          <DetailsDisclosure network={NETWORK_LABELS_SHORT[collection.network]} contractAddress={collection.contractAddress} tokenId={item.tokenId} />
        </div>

        <div className='mb-3 lg:ml-8 flex-1 order-first lg:order-last'>
          <NavLink
            to={path}
            exact={true}
            className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 flex items-center mb-1'
            aria-current={[path].includes(location.pathname) ? "page" : undefined}
          >
            {collection?.name}
            {!!collection?.verified ? (
              <BadgeCheckIcon className='w-4 h-4 text-blue-500 ml-1' />
            ) : (
              <ExclamationIcon className='w-4 h-4 text-yellow-500 ml-1' />
            )}
          </NavLink>
          <h3 className='text-3xl uppercase font-medium text-gray-900 dark:text-white'>
            {item.name}
          </h3>

          <div className='mt-6'>
            <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
              {TEXT_DESCRIPTION}
            </h1>
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              {item.description}
            </p>
          </div>

          {/* <div className='mt-6'>
            <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
              {TEXT_LOCATION}
            </h1>
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              [{item.lat}, {item.lng}]
            </p>
          </div> */}

          {/* <div className='mt-6'>
            <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
              {TEXT_CONTRACT}
            </h1>
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
              {collection.contractAddress}
            </p>
          </div> */}

          {/* <div className='mt-6'>
            <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
              {TEXT_ID}
            </h1>
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              {item.tokenId}
            </p>
          </div> */}

          <div className='mt-6'>
            <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
              {TEXT_OWNER}
            </h1>
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
              {item.owner_address === account ? (
                "You"
              ) : item.owner_address}
            </p>
          </div>

          <div className="mt-8">
            <ListingDisclosure item={item} onCreateListing={onCreateListing} onBuyAsset={onBuyAsset} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h2>Unable to load Asset.</h2>
    );
  }
};
