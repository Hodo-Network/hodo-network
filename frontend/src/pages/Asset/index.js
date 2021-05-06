import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import BN from "bn.js";
import { RarityBadge } from "../../components";
import { collectibles } from "../../data";
import { WALLET_ADDRESS } from "../../constants";
import {
  TEXT_BUY,
  TEXT_COST,
  TEXT_DESCRIPTION,
  TEXT_ID,
  TEXT_COLLECTION,
  TEXT_COORDS,
  TEXT_OWNER,
} from "../../constants/text";

export default function Asset() {
  const { account } = useWeb3React();
  const { id } = useParams();
  const [asset, setAsset] = useState();

  const getAsset = (id) => {
    return collectibles.filter((asset) => {
      return asset.id === id;
    });
  };

  // TODO: replace api call
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    setAsset(getAsset(id)[0]);
  }, [id]);

  const buyAsset = async () => {
    // TODO: switch to AVAX network first
    const val = new BN(asset.price.value * 1e18);
    console.log("val", val);
    try {
      const transactionParameters = {
        from: account,
        to: WALLET_ADDRESS,
        value: ethers.utils.hexValue(val),
        gasPrice: ethers.utils.hexValue(225 * 1e9),
        gas: ethers.utils.hexValue(21000),
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
        <div className='p-4 sm:p-8 lg:p-12 max-w-8xl'>
          <div className='md:flex'>
            <div className='md:w-1/3 md:max-w-lg mb-6'>
              <div className='w-60 md:w-auto'>
                <div className='aspect-w-1 aspect-h-1'>
                  <img src={asset.image} alt={asset.name} />
                </div>
              </div>
            </div>

            <div className='md:w-2/3 md:pl-8'>
              <div className='flex flex-wrap items-center'>
                <h3 className='text-3xl uppercase font-medium text-gray-900 dark:text-white'>
                  {asset.name}
                </h3>

                <RarityBadge rarity={asset.data.rarity} className='mt-1 ml-4' />
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_COLLECTION}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
                  {asset.category}
                </p>
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_DESCRIPTION}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                  {asset.data.description}
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

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_OWNER}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
                  {asset.owner}
                </p>
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_COORDS}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                  [{asset.data.location.lat}, {asset.data.location.long}]
                </p>
              </div>

              <div className='mt-8'>
                <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                  {TEXT_COST}
                </h1>
                <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                  {asset.price.value} {asset.price.units}
                  {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
                </p>
              </div>

              <div className='mt-8 sm:flex'>
                <div>
                  <button
                    onClick={buyAsset}
                    disabled={true}
                    className='btn w-full btn--disabled'>
                    {TEXT_BUY}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
