import ReactLoading from 'react-loading';
import { NFT } from "../../typings/nft";
import AssetListItem from '../AssetListItem';

export interface PureAssetListProps {
  items: Array<NFT>;
  loading?: boolean;
}

export const PureAssetList = ({ items, loading = false }: PureAssetListProps) => {
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
    <nav
      aria-label='Sections'
      className='bg-white dark:bg-gray-900'>

      {items.map((item: NFT) => (
        <AssetListItem item={item} key={item.tokenId} />
      ))}
    </nav>
  );
};
