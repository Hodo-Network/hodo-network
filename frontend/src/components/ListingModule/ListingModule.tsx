import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Avax } from '../../assets';
import Badge from '../../base/Badge';
import Button from '../../base/Button';
import {
  TEXT_BUY,
  TEXT_CHANGE_PRICE,
  TEXT_CURRENT_PRICE,
  TEXT_REMOVE_LISTING,
  TEXT_SELL,
} from '../../constants/text';

export interface PureListingModuleProps {
  price?: string | number;
  owned?: boolean;
  forSale?: boolean;
  connected?: boolean;
  onBuyAsset?: () => void;
  onSellAsset?: () => void;
  onRemoveListing?: () => void;
  onChangePrice?: () => void;
}

export const PureListingModule = ({
  price,
  owned = false,
  forSale = false,
  connected = false,
  onBuyAsset,
  onSellAsset,
  onRemoveListing,
  onChangePrice,
}: PureListingModuleProps) => {
  return (
    <Disclosure defaultOpen={true} as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button className='p-4 border-2 border-base-300 w-full text-left flex items-center justify-between'>
            <span className='font-semibold'>Listing</span>
            {open ? (
              <ChevronUpIcon className='w-4 h-4' />
            ) : (
              <ChevronDownIcon className='w-4 h-4' />
            )}
          </Disclosure.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'>
            <Disclosure.Panel className='border-2 border-t-0 border-base-300 bg-base-200 p-4 text-xs'>
              <h1 className='text-base font-medium'>{TEXT_CURRENT_PRICE}</h1>
              <div className='mt-2 flex items-center'>
                {/* TODO: allow other currency logos */}
                {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
                <img src={Avax} alt='AVAX logo' className='w-6 h-6 mr-2' />
                <span className='text-2xl font-semibold'>{price}</span>
              </div>

              <div className='mt-4 flex gap-4'>
                {owned && forSale && (
                  <>
                    <Button
                      size='md'
                      color='primary'
                      onClick={onChangePrice}
                      disabled={!connected}>
                      {TEXT_CHANGE_PRICE}
                    </Button>
                    <Button
                      size='md'
                      color='primary'
                      onClick={onRemoveListing}
                      disabled={!connected}>
                      {TEXT_REMOVE_LISTING}
                    </Button>
                  </>
                )}
                {owned && !forSale && (
                  <Button
                    size='md'
                    color='primary'
                    onClick={onSellAsset}
                    disabled={!connected}>
                    {TEXT_SELL}
                  </Button>
                )}
                {!owned && forSale && (
                  <Button
                    size='md'
                    color='primary'
                    onClick={onBuyAsset}
                    disabled={!connected}>
                    {TEXT_BUY}
                  </Button>
                )}
                {!owned && !forSale && (
                  <Badge label='Sold' size='lg' color='success' />
                )}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
