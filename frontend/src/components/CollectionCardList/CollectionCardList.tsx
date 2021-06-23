import React from "react";
import ReactLoading from "react-loading";
import { Collection } from "../../typings/nft";
import { CollectionCard, CollectionCardEmpty } from "../index";

export interface CollectionCardListProps {
  loading: boolean;
  items: Collection[];
}

export function CollectionCardList({
  loading,
  items,
}: CollectionCardListProps) {
  if (loading) {
    return (
      <ReactLoading
        type='bubbles'
        color='currentColor'
        className='text-blue-600 dark:text-blue-500'
      />
    );
  }

  if (items.length === 0) {
    return <CollectionCardEmpty />;
  }

  return (
    <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.map((item, key) => (
        <CollectionCard key={key} collection={item} />
      ))}
    </div>
  );
}
