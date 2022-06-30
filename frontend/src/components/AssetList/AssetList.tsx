import { NFT } from "../../typings/nft";
import AssetListItem from '../AssetListItem';
import Loader from "../../base/Loader";
import CardEmpty from "../CardEmpty";

export interface PureAssetListProps {
  items: Array<NFT>;
  loading?: boolean;
}

export const PureAssetList = ({ items, loading = false }: PureAssetListProps) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <nav
      aria-label='Sections'
      className='bg-neutral text-neutral-content divide-y divide-neutral-focus rounded-box overflow-hidden'>
      {!items || items?.length === 0 ? (
        <CardEmpty />
      ) : (
        items.map((item: NFT) => (
          <AssetListItem item={item} key={item.tokenId} />
        ))
      )}
    </nav>
  );
};
