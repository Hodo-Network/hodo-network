import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RarityBadge } from "../../components";
import {
  TEXT_BUY,
  TEXT_COST,
  TEXT_DESCRIPTION,
  TEXT_ID,
} from "../../constants/text";
import { capitals, countries, monuments } from "../../data";
import { NFTProps } from "../../typings/nft";

const assets = [...capitals, ...monuments, ...countries];

export default function Collectible() {
  const { id } = useParams<{ id: string }>();
  const [asset, setAsset] = useState<NFTProps>();

  const getAsset = (id: string) => {
    return assets.filter((asset) => {
      return asset.id === id;
    });
  };

  // TODO: replace api call
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    setAsset(getAsset(id)[0]);
  }, [id]);

  const buyCollectible = () => {
    alert("Buy coming soon");
  };

  return (
    <>
      {asset && (
        <>
          <div className='p-4 sm:p-8 -mx-4 sm:-mx-8 bg-gray-700'>
            <div className='mx-auto max-w-md sm:max-w-lg lg:max-w-7xl h-60 flex items-center'>
              <img className='max-h-full' src={asset.img} alt={asset.name} />
            </div>
          </div>

          <div className='p-4 sm:p-8'>
            <div className='mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
              <div className='flex flex-wrap items-center'>
                <h3 className='text-3xl uppercase font-medium text-gray-900 dark:text-white'>
                  {asset.name}
                </h3>

                <RarityBadge rarity={asset.rarity} className='mt-1 ml-4' />
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_DESCRIPTION}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                  {asset.desc}
                </p>
              </div>

              <div className='mt-8'>
                <div className='max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between'>
                  <div>
                    <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                      {TEXT_COST}
                    </h1>
                    <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                      {asset.cost}
                    </p>
                  </div>
                  <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                    <div className='inline-flex rounded-md shadow'>
                      <button
                        onClick={buyCollectible}
                        className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'>
                        {TEXT_BUY}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_ID}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                  {asset.id}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
