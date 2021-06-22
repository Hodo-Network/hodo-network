import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

export interface SelectBoxProps {
  label: string;
  items: Array<any>;
  onChange?: () => void;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  items,
  onChange,
}) => {
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
          <Listbox.Label className='block text-sm font-medium text-gray-700 dark:text-gray-100'>
            {label}
          </Listbox.Label>
          <div className='mt-1 relative z-40'>
            <Listbox.Button className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
              <span className='block truncate capitalize'>
                {selected.name || selected}
              </span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
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
                className='absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {items.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-blue-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={item}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate capitalize"
                          )}>
                          {item.name || item}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-blue-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
};
