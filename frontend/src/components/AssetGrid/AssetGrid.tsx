import ReactLoading from "react-loading";
import { NFT } from "../../typings/nft";
import CardEmpty from "../CardEmpty";
import AssetCard from "../AssetCard";

export interface PureAssetGridProps {
  items: Array<NFT>;
  loading?: boolean;
}

export const PureAssetGrid = ({
  items,
  loading = false,
}: PureAssetGridProps) => {
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
      {!items || items?.length === 0 ? (
        <CardEmpty />
      ) : (
        items?.map((item: NFT, index: number) => (
          <AssetCard key={index} nft={item} />
        ))
      )}
    </div>
  );
};
