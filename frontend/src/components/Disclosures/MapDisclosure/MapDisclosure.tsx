import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { Attribute } from '../../../typings/nft';

export interface IMapDisclosureProps {
  attrs?: Array<Attribute>;
}

export const MapDisclosure = ({ attrs }: IMapDisclosureProps) => {
  const [latitude, setLatitude] = useState<number | string>(0);
  const [longitude, setLongitude] = useState<number | string>(0);

  useEffect(() => {
    let lat = attrs?.find((attr) => attr.trait_type === 'Latitude')?.value || 0;
    let lng =
      attrs?.find((attr) => attr.trait_type === 'Longitude')?.value || 0;

    setLatitude(lat);
    setLongitude(lng);
  }, [attrs]);

  return (
    <Disclosure defaultOpen={true} as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button className='p-4 border-2 border-base-300 w-full text-left flex items-center justify-between'>
            <span className='font-semibold'>Map</span>
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
            <Disclosure.Panel className='border-2 border-t-0 border-base-300 bg-base-200 p-4'>
              <p>
                Coming soon for location,{' '}
                <span className='nowrap text-sm font-semibold text-green-600'>
                  [{latitude}, {longitude}]
                </span>
              </p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
