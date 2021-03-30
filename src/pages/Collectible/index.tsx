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
          <div className='p-4 sm:p-8 lg:p-12 -mx-4 sm:-mx-8 lg:-mx-12 bg-gray-700'>
            <div className='mx-auto max-w-8xl max-h-60 flex items-center'>
              <img className='max-h-full' src={asset.img} alt={asset.name} />
            </div>
          </div>

          <div className='mx-auto max-w-8xl mt-12'>
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
              <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                {TEXT_COST}
              </h1>
              <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                {asset.cost}
              </p>
            </div>

            <div className='mt-8'>
              <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                {TEXT_ID}
              </h1>
              <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                {asset.id}
              </p>
            </div>

            <div className='mt-8 sm:flex'>
              <div>
                <button onClick={buyCollectible} className='btn w-full'>
                  {TEXT_BUY}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
