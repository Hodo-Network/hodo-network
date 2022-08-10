// import { useEffect, useState } from "react";
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import { NavLink, useLocation } from 'react-router-dom';
import ActivityDisclosure from '../../components/Disclosures/ActivityDisclosure';
import AttributeDisclosure from '../../components/Disclosures/AttributeDisclosure';
import CollectionDisclosure from '../../components/Disclosures/CollectionDisclosure';
import DetailsDisclosure from '../../components/Disclosures/DetailsDisclosure';
import MapDisclosure from '../../components/Disclosures/MapDisclosure';
import ListingModule from '../../components/ListingModule';
import NetworkSwitch from '../../components/NetworkSwitch';
import { NETWORK_LABELS_SHORT } from '../../constants';
import { ROUTE_MARKETPLACE } from '../../constants/routes';
import { TEXT_DESCRIPTION, TEXT_OWNER } from '../../constants/text';
import ContentWrapper from '../../ContentWrapper';
import { Attribute, Collection, NFT } from '../../typings/nft';

export interface PureAssetViewProps {
  item?: NFT;
  collection?: Collection;
  account?: any;
  collectionAssets?: Array<NFT>;
  contractAddress?: string;
}

export const PureAssetView = ({
  item,
  collection,
  account,
  collectionAssets,
  contractAddress,
}: PureAssetViewProps) => {
  const location = useLocation();
  const collectionPath = `${ROUTE_MARKETPLACE}/${collection?.contractAddress}`;
  const attrs: Array<Attribute> = [
    {
      display_type: 'number',
      trait_type: 'Latitude',
      value: item?.lat || '0',
    },
    {
      display_type: 'number',
      trait_type: 'Longitude',
      value: item?.lng || '0',
    },
  ];

  return (
    <ContentWrapper>
      {item && collection ? (
        <div className='p-4 sm:p-8 max-w-8xl space-y-4'>
          <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0'>
            <div className='lg:w-1/3 space-y-4'>
              <div className='w-60 lg:w-auto'>
                <div className='aspect-w-1 aspect-h-1'>
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
              <DetailsDisclosure
                network={NETWORK_LABELS_SHORT[collection.network]}
                contractAddress={collection.contractAddress}
                tokenId={item.tokenId}
              />
              {/* TODO: replace attrs */}
              <AttributeDisclosure attrs={attrs} />
              <MapDisclosure attrs={attrs} />
            </div>

            <div className='lg:ml-6 flex-1 order-first lg:order-last'>
              <div className='space-y-4'>
                <div>
                  <NavLink
                    to={collectionPath}
                    // exact={true}
                    className='link link-hover text-sm flex items-center mb-1'
                    aria-current={
                      [collectionPath].includes(location.pathname)
                        ? 'page'
                        : undefined
                    }>
                    {collection?.name}
                    {!!collection?.verified ? (
                      <BadgeCheckIcon className='w-4 h-4 text-primary ml-1' />
                    ) : (
                      <ExclamationIcon className='w-4 h-4 text-yellow-500 ml-1' />
                    )}
                  </NavLink>

                  <h3 className='text-3xl uppercase font-medium'>
                    {item.name}
                  </h3>
                </div>

                <div>
                  <h1 className='text-sm uppercase font-medium text-bc-muted'>
                    {TEXT_DESCRIPTION}
                  </h1>
                  <p className='mt-1 font-medium overflow-hidden overflow-ellipsis'>
                    {item.description}
                  </p>
                </div>

                <div>
                  <h1 className='text-sm uppercase font-medium text-bc-muted'>
                    {TEXT_OWNER}
                  </h1>
                  <p className='mt-1 font-medium overflow-hidden overflow-ellipsis'>
                    {item.owner_address === account
                      ? 'You'
                      : item.owner_address}
                  </p>
                </div>

                <NetworkSwitch />
                <ListingModule item={item} collection={collection} />
                <ActivityDisclosure item={item} />
              </div>
            </div>
          </div>

          {collectionAssets && contractAddress && (
            <CollectionDisclosure
              collectionAssets={collectionAssets}
              contractAddress={contractAddress}
            />
          )}
        </div>
      ) : (
        <h2>Unable to load Asset.</h2>
      )}
    </ContentWrapper>
  );
};
