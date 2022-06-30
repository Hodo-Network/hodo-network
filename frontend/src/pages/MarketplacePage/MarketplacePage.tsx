import { useState } from 'react';
import clsx from 'clsx';
import { RadioGroup } from "@headlessui/react";
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import { NFT } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import AssetGrid from "../../components/AssetGrid";
import AssetList from '../../components/AssetList';
import Toggle from '../../base/Toggle';

const displayOptions = [
  { name: 'Grid', icon: ViewGridIcon, disabled: false },
  { name: 'List', icon: ViewListIcon, disabled: false },
];

export interface PureMarketplacePageProps {
  items: Array<NFT>;
  loading?: boolean;
  verifiedOnly?: boolean;
  onFilterVerified: (checked: boolean) => void;
}

export const PureMarketplacePage = ({
  items,
  loading = false,
  verifiedOnly = false,
  onFilterVerified,
}: PureMarketplacePageProps) => {
  const [mem, setMem] = useState(displayOptions[0]);

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='mb-4 flex justify-between items-center'>
          <p className="text-xl">
            {items.length} results
          </p>

          <div className="flex items-center justify-items-end gap-4">
            <RadioGroup value={mem} onChange={setMem}>
              <RadioGroup.Label className="sr-only">Choose a display option</RadioGroup.Label>
              <div className="btn-group">
                {displayOptions.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    disabled={option.disabled}
                    className={({ active, checked }) => clsx(
                      'btn btn-square',
                      active && 'btn-active',
                      checked && 'btn-active'
                    )}
                  >
                    <RadioGroup.Label as={option.icon} className='w-4 h-4' />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <Toggle checked={verifiedOnly} onToggle={onFilterVerified} label="Verified" />
          </div>
        </div>

        {mem.name === "Grid" ? (
          <AssetGrid items={items} loading={loading} />
        ) : (
          <AssetList items={items} loading={loading} />
        )}
      </div>
    </ContentWrapper>
  );
};
