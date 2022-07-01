import { Collection } from "../../typings/nft";
import CollectionCard from "../CollectionCard";
import CardEmpty from "../CardEmpty";

export interface CollectionGridProps {
  items: Array<Collection>;
}

export const CollectionGrid = ({ items }: CollectionGridProps) => {
  return (
    <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.length === 0 ? (
        <CardEmpty />
      ) : (
        items?.map((item: Collection, index: number) => <CollectionCard key={index} item={item} />)
      )}
    </div>
  );
};
