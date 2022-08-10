import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';

export interface SelectBoxProps {
  label?: string;
  items: Array<any>;
  onChange?: () => void;
}

export default function SelectBox({ label, items, onChange }: SelectBoxProps) {
  const [selected, setSelected] = useState(items[0]);

  useEffect(() => {
    if (onChange) {
      onChange();
    }
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className='block text-sm font-medium text-bc-muted mb-1'>
              {label}
            </Listbox.Label>
          )}
          <div className='relative z-40'>
            <Listbox.Button className='relative w-full border border-bc-muted rounded-sm shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-focus focus:border-primary-focus sm:text-sm'>
              <span className='block truncate capitalize'>
                {selected.name || selected}
              </span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='h-5 w-5' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options
                static
                className='absolute mt-1 w-full bg-base-100 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {items.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      clsx(
                        active && 'text-white bg-primary',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={item}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate capitalize'
                          )}>
                          {item.name || item}
                        </span>

                        {selected && (
                          <span
                            className={clsx(
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                              active ? 'text-white' : 'text-primary'
                            )}>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
