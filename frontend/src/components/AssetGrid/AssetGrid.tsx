import { NFT } from "../../typings/nft";
import AssetCard from "../AssetCard";
import CardEmpty from "../CardEmpty";
import Loader from "../../base/Loader";

export interface PureAssetGridProps {
  items: Array<NFT>;
  loading?: boolean;
}

export const PureAssetGrid = ({
  items,
  loading = false,
}: PureAssetGridProps) => {
  if (loading) {
    return <Loader />;
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
