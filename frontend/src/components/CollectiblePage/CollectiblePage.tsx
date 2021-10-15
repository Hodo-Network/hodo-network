import ReactLoading from "react-loading";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import {
  TEXT_BUY,
  TEXT_COST,
  TEXT_DESCRIPTION,
  TEXT_COORDS,
  // TEXT_COLLECTION,
  // TEXT_ID,
  // TEXT_OWNER,
} from "../../constants/text";
import { NATIVE_CURRENCY } from "../../constants";
import { NFT } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import Button from "../Button";
import NFTList from "../NFTList";
import RarityBadge from "../RarityBadge";

export interface PureCollectiblePageProps {
  asset?: NFT;
  contractAddress?: string;
  onBuyAsset?: () => void;
  connected?: boolean;
  loading?: boolean;
}

export const PureCollectiblePage = ({
  asset,
  contractAddress,
  onBuyAsset,
  connected,
  loading = false,
}: PureCollectiblePageProps) => {
  const { chainId } = useWeb3React<Web3Provider>();

  if (loading) {
    return (
      <ContentWrapper>
        <ReactLoading
          type='bubbles'
          color='currentColor'
          className='text-blue-600 dark:text-blue-500'
        />
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      {asset && (
        <div className='max-w-8xl h-full'>
          <div className='flex flex-row items-stretch h-full'>
            <div className='flex-1 lg:flex p-4 sm:p-8'>
              <div className='lg:w-1/3 2xl:w-1/2 lg:max-w-lg mb-6'>
                <div className='w-60 lg:w-auto'>
                  <div className='aspect-w-1 aspect-h-1'>
                    <img src={asset.image} alt={asset.name} />
                  </div>
                </div>
              </div>

              <div className='lg:w-2/3 2xl:w-1/2 lg:pl-8'>
                <div className='flex flex-wrap items-center'>
                  <h3 className='text-3xl uppercase font-medium text-gray-900 dark:text-white'>
                    {asset.name}
                  </h3>

                  <span className='mt-1 ml-4'>
                    <RarityBadge rarity={asset.rarity} />
                  </span>
                </div>

                {/* <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_COLLECTION}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
                    {asset.category}
                  </p>
                </div> */}

                <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_DESCRIPTION}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                    {asset.description}
                  </p>
                </div>

                {/* <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_ID}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                    {asset.tokenId}
                  </p>
                </div> */}

                {/* <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_OWNER}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis capitalize'>
                    {asset.owner_address}
                  </p>
                </div> */}

                <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_COORDS}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                    [{asset.lat}, {asset.lng}]
                  </p>
                </div>

                <div className='mt-8'>
                  <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
                    {TEXT_COST}
                  </h1>
                  <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
                    {asset.price}{" "}
                    {(chainId && NATIVE_CURRENCY[chainId]) ||
                      NATIVE_CURRENCY[0]}
                  </p>
                </div>

                <div className='mt-8 sm:flex'>
                  <div>
                    <Button
                      size='medium'
                      primary={true}
                      onClick={onBuyAsset}
                      disabled={false}>
                      {TEXT_BUY}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <NFTList contractAddress={contractAddress} />
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};
