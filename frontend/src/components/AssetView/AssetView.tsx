// import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";
import { NETWORK_LABELS_SHORT } from '../../constants';
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { TEXT_DESCRIPTION, TEXT_OWNER } from "../../constants/text";
import { Attribute, NFT } from "../../typings/nft";
// import { ActivityDisclosure } from '../Disclosures/ActivityDisclosure';
import { AttributeDisclosure } from '../Disclosures/AttributeDisclosure';
import { DetailsDisclosure } from '../Disclosures/DetailsDisclosure';
import { MapDisclosure } from '../Disclosures/MapDisclosure';
import ListingModule from '../ListingModule';
import Loader from "../../base/Loader";

export interface PureAssetViewProps {
  item?: NFT;
  collection?: any;
  loading?: boolean;
  account?: any;
}

export const PureAssetView = ({
  item,
  collection,
  loading = false,
  account,
}: PureAssetViewProps) => {
  const location = useLocation();
  const collectionPath = `${ROUTE_MARKETPLACE}/${collection?.contractAddress}`;
  const attrs: Array<Attribute> = [{
    "display_type": "number",
    "trait_type": "Latitude",
    "value": item?.lat || "0"
  },
  {
    "display_type": "number",
    "trait_type": "Longitude",
    "value": item?.lng || "0"
  }];

  if (loading) {
    return <Loader />;
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
            <DetailsDisclosure
              network={NETWORK_LABELS_SHORT[collection.network]}
              contractAddress={collection.contractAddress}
              tokenId={item.tokenId}
            />
          </div>

          <div className="mb-3">
            {/* TODO: replace attrs */}
            <AttributeDisclosure attrs={attrs} />
          </div>

          <div className="">
            <MapDisclosure attrs={attrs} />
          </div>
        </div>

        <div className='mb-3 lg:ml-6 flex-1 order-first lg:order-last'>
          <NavLink
            to={collectionPath}
            // exact={true}
            className='link link-hover text-sm flex items-center mb-1'
            aria-current={[collectionPath].includes(location.pathname) ? "page" : undefined}
          >
            {collection?.name}
            {!!collection?.verified ? (
              <BadgeCheckIcon className='w-4 h-4 text-primary ml-1' />
            ) : (
              <ExclamationIcon className='w-4 h-4 text-yellow-500 ml-1' />
            )}
          </NavLink>

          <h3 className='mb-6 text-3xl uppercase font-medium'>
            {item.name}
          </h3>

          <div className='mb-6'>
            <h1 className='text-sm uppercase font-medium text-bc-muted'>
              {TEXT_DESCRIPTION}
            </h1>
            <p className='mt-2 font-medium overflow-hidden overflow-ellipsis'>
              {item.description}
            </p>
          </div>

          <div className='mb-8'>
            <h1 className='text-sm uppercase font-medium text-bc-muted'>
              {TEXT_OWNER}
            </h1>
            <p className='mt-2 font-medium overflow-hidden overflow-ellipsis capitalize'>
              {item.owner_address === account ? "You" : item.owner_address}
            </p>
          </div>

          <div className="mb-3">
            <ListingModule item={item} collection={collection} />
          </div>

          {/* <div className="mb-3">
            <ActivityDisclosure item={item} />
          </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <h2>Unable to load Asset.</h2>
    );
  }
};
