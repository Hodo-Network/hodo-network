import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Avax } from "../../assets";
import {
  TEXT_BUY,
  TEXT_CHANGE_PRICE,
  TEXT_CURRENT_PRICE,
  TEXT_SELL,
} from "../../constants/text";
import Badge from "../Badge";
import Button from "../Button";

export interface PureListingModuleProps {
  price?: string | number;
  owned?: boolean;
  forSale?: boolean;
  onBuyAsset?: () => void;
  onCreateListing?: () => void;
  onChangePrice?: () => void;
}

export const PureListingModule = ({
  price,
  owned = false,
  forSale = false,
  onBuyAsset,
  onCreateListing,
  onChangePrice,
}: PureListingModuleProps) => {
  return (
    <Disclosure defaultOpen={true} as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="p-4 border border-gray-300 dark:border-gray-700 w-full text-left flex items-center justify-between">
            <span className="font-semibold">Listing</span>
            {open ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="p-4 border border-t-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-xs">
              <h1 className='text-base font-medium text-gray-600 dark:text-gray-300'>
                {TEXT_CURRENT_PRICE}
              </h1>
              <div className='mt-2 flex items-center'>
                {/* TODO: allow other currency logos */}
                {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
                <img src={Avax} alt='AVAX logo' className='w-6 h-6 mr-2' />
                <span className='text-2xl font-semibold text-gray-900 dark:text-gray-200'>{price}</span>
              </div>

              <div className='mt-4'>
                {owned && forSale && (
                  <Button
                    size='medium'
                    primary={true}
                    onClick={onChangePrice}
                    disabled={false}>
                    {TEXT_CHANGE_PRICE}
                  </Button>
                )}
                {owned && !forSale && (
                  <Button
                    size='medium'
                    primary={true}
                    onClick={onCreateListing}
                    disabled={false}>
                    {TEXT_SELL}
                  </Button>
                )}
                {!owned && forSale && (
                  <Button
                    size='medium'
                    primary={true}
                    onClick={onBuyAsset}
                    disabled={false}>
                    {TEXT_BUY}
                  </Button>
                )}
                {!owned && !forSale && (
                  <Badge label="Sold" size="large" color="green" />
                )}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
