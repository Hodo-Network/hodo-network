import { NFT } from "../../typings/nft";
import { AssetListCompactItem } from './AssetListCompactItem';

export interface AssetListCompactProps {
  items: Array<NFT>;
  selected?: NFT;
  onSelectItem?: (T: NFT) => void;
}

export const AssetListCompact = ({ items, selected, onSelectItem }: AssetListCompactProps) => {
  return (
    <nav
      aria-label='Sections'
      className='w-96 h-full divide-y divide-neutral relative hidden lg:block overflow-hidden'>
      {!items || items?.length === 0 ? (
        <div className='flex p-4 items-center'>
          <div className='text-sm overflow-hidden space-y-2'>
            <p className='font-semibold text-bc-muted'>
              Empty
            </p>
            <p>No items to display.</p>
          </div>
        </div>
      ) : (
        items.map((item: NFT) => (
          <AssetListCompactItem
            key={item.id}
            item={item}
            active={item === selected}
            onClick={() => onSelectItem?.(item)}
          />
        ))
      )}
    </nav>
  );
};
