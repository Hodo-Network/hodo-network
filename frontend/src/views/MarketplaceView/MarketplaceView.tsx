import { RadioGroup } from '@headlessui/react';
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { Suspense, useState } from 'react';
import Loader from '../../base/Loader';
import Toggle from '../../base/Toggle';
import AssetGrid from '../../components/AssetGrid';
import AssetList from '../../components/AssetList';
import ContentWrapper from '../../ContentWrapper';
import { NFT } from '../../typings/nft';

const displayOptions = [
  { name: 'Grid', icon: ViewGridIcon, disabled: false },
  { name: 'List', icon: ViewListIcon, disabled: false },
];

export interface PureMarketplaceViewProps {
  items: Array<NFT>;
  verifiedOnly?: boolean;
  onFilterVerified: (checked: boolean) => void;
}

export const PureMarketplaceView = ({
  items,
  verifiedOnly = false,
  onFilterVerified,
}: PureMarketplaceViewProps) => {
  const [mem, setMem] = useState(displayOptions[0]);

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='mb-4 flex justify-between items-center'>
          <p className='text-xl'>{items.length} results</p>

          <div className='flex items-center justify-items-end gap-4'>
            <RadioGroup value={mem} onChange={setMem}>
              <RadioGroup.Label className='sr-only'>
                Choose a display option
              </RadioGroup.Label>
              <div className='btn-group'>
                {displayOptions.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    disabled={option.disabled}
                    className={({ active, checked }) =>
                      clsx(
                        'btn btn-square',
                        active && 'btn-active',
                        checked && 'btn-active'
                      )
                    }>
                    <RadioGroup.Label as={option.icon} className='w-4 h-4' />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <Toggle
              checked={verifiedOnly}
              onToggle={onFilterVerified}
              label='Verified'
            />
          </div>
        </div>

        <Suspense fallback={<Loader />}>
          {mem.name === 'Grid' ? (
            <AssetGrid items={items} />
          ) : (
            <AssetList items={items} />
          )}
        </Suspense>
      </div>
    </ContentWrapper>
  );
};
