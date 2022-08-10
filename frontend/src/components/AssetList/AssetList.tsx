import { NFT } from '../../typings/nft';
import AssetListItem from '../AssetListItem';
import CardEmpty from '../CardEmpty';

export interface AssetListProps {
  items: Array<NFT>;
}

export const AssetList = ({ items }: AssetListProps) => {
  return (
    <nav
      aria-label='Sections'
      className='bg-neutral text-neutral-content divide-y divide-neutral-focus rounded-box overflow-hidden'>
      {/* TODO: update empty state */}
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
