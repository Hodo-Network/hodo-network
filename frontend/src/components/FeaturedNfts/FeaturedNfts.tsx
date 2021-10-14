import React from "react";
import ReactLoading from "react-loading";
import { NFT } from "../../typings/nft";
import CollectionCardEmpty from "../CollectionCardEmpty";
import NFTCard from "../NFTCard";

export interface FeaturedNftsProps {
  items: Array<NFT>;
  loading?: boolean;
}

export const FeaturedNfts: React.FC<FeaturedNftsProps> = ({
  items,
  loading = false,
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
