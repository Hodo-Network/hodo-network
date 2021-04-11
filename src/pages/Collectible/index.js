import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Web3 from "web3";
import { RarityBadge } from "../../components";
import {
  TEXT_BUY,
  TEXT_COST,
  TEXT_DESCRIPTION,
  TEXT_ID,
} from "../../constants/text";
import { capitals, countries, monuments } from "../../data";
import { HODO_WALLET_ADDRESS } from "../../constants";
// import { NFTProps } from "../../typings/nft";

const assets = [...capitals, ...monuments, ...countries];

export default function Collectible() {
  const web3 = new Web3(Web3.givenProvider);
  const { id } = useParams();
  const [asset, setAsset] = useState();

  const getAsset = (id) => {
    return assets.filter((asset) => {
      return asset.id === id;
    });
  };

  // TODO: replace api call
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    setAsset(getAsset(id)[0]);
  }, [id]);

  const buyCollectible = async () => {
    // TODO: switch to AVAX network first
    try {
      const transactionParameters = {
        from: window.ethereum.selectedAddress,
        to: HODO_WALLET_ADDRESS,
        value: web3.utils.toHex(asset.cost * 1e18),
        gasPrice: web3.utils.toHex(225 * 1e9),
        gas: web3.utils.toHex(21000),
      };

      await window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {asset && (
        <>
          <div className='-mx-4 sm:-mx-8 lg:-mx-12 bg-gray-900 dark:bg-black'>
            {/* px-4 sm:px-8 lg:px-12 */}
            <div className='relative h-48 sm:h-72 md:h-80'>
              {/* <LeafletMap className='w-full object-cover h-48 sm:h-72 md:h-80' /> */}
            </div>
          </div>

          <div className='mx-auto max-w-8xl mt-8 md:mt-12'>
            <div className='md:flex'>
              <div className='md:w-1/3 md:max-w-lg'>
                <div className='w-60 md:w-auto'>
                  <div className='aspect-w-1 aspect-h-1'>
                    <img src={asset.img} alt={asset.name} />
                  </div>
                </div>
              </div>

              <div className='md:w-2/3 md:pl-8 mt-6'>
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
