import ReactLoading from "react-loading";
import { Collection } from "../../typings/nft";
import CollectionCard from "../CollectionCard";
import CollectionCardEmpty from "../CollectionCardEmpty";

export interface PureCollectionCardListProps {
  items: Collection[];
  loading?: boolean;
}

export function PureCollectionCardList({
  items,
  loading = false,
}: PureCollectionCardListProps) {
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
    <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.length === 0 ? (
        <CollectionCardEmpty />
      ) : (
        items.map((item, key) => <CollectionCard key={key} collection={item} />)
      )}
    </div>
  );
}
