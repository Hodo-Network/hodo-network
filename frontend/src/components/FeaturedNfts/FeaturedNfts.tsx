import React from "react";
import ReactLoading from "react-loading";
import { CollectionCardEmpty, NFTCard } from "../index";
import { NFT } from "../../typings/nft";

export interface FeaturedNftsProps {
  loading?: boolean;
  items: Array<NFT>;
}

export const FeaturedNfts: React.FC<FeaturedNftsProps> = ({
  loading = "false",
  items,
}) => {
  if (loading) {
    return (
      <ReactLoading
        type='bubbles'
        color='currentColor'
        className='text-blue-600 dark:text-blue-500'
      />
    );
  }

  return (
    <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.length === 0 ? (
        <CollectionCardEmpty />
      ) : (
        items.map((item: NFT, index: number) => (
          <NFTCard key={index} nft={item} />
        ))
      )}
    </div>
  );
};
