import { NFT } from "../../typings/nft";
import AssetCard from "../AssetCard";
import CardEmpty from "../CardEmpty";

export interface AssetGridProps {
  items: Array<NFT>;
}

export const AssetGrid = ({ items }: AssetGridProps) => {
  return (
    <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.length === 0 ? (
        <CardEmpty />
      ) : (
        items?.map((item: NFT, index: number) => <AssetCard key={index} item={item} />)
      )}
    </div>
  );
};
