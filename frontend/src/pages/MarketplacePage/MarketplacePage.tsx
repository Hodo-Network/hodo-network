import { useState } from 'react';
import { Switch, RadioGroup } from "@headlessui/react";
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';
import { NFT } from "../../typings/nft";
import classNames from '../../utils/classNames';
import ContentWrapper from "../../ContentWrapper";
import AssetGrid from "../../components/AssetGrid";
import AssetList from '../../components/AssetList';

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
              <div className="grid grid-cols-2 gap-2">
                {displayOptions.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    disabled={option.disabled}
                    className={({ active, checked }) =>
                      classNames(
                        option.disabled ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer focus:outline-none',
                        active ? 'ring-2 ring-offset-2 ring-blue-500' : '',
                        checked
                          ? 'bg-blue-600 border-transparent text-white hover:bg-blue-700'
                          : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                        'cursor-pointer focus:outline-none border rounded-md py-2 px-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                      )
                    }
                  >
                    <RadioGroup.Label as={option.icon} className='w-4 h-4' />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={verifiedOnly}
                onChange={onFilterVerified}
                className={classNames(
                  verifiedOnly ? 'bg-blue-600' : 'bg-gray-300',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    verifiedOnly ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-2">
                <span className="text-sm font-medium">Verified</span>
              </Switch.Label>
            </Switch.Group>
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
