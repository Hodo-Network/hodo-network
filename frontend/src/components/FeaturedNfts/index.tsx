import React from "react";
import ReactLoading from "react-loading";
import { CollectionCardEmpty, NFTCard } from "../index";
import { NFT } from "../../typings/nft";

export default function FeaturedNfts({
  loading,
  items,
}: {
  loading: boolean;
  items: Array<NFT>;
}) {
  return (
    <>
      {loading ? (
        <ReactLoading
          type='bubbles'
          color='currentColor'
          className='text-blue-600 dark:text-blue-500'
        />
      ) : items.length ? (
        items.map((item: NFT, index: number) => (
          <NFTCard key={index} nft={item} />
        ))
      ) : (
        <CollectionCardEmpty />
      )}
    </>
  );
}
