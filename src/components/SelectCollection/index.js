import { Fragment, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

export default function SelectCollection({ collections }) {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState(collections[0]);

  useEffect(() => {
    const href = `/collections/${selected}`;
    if (![href].includes(location.pathname)) {
      history.push(href);
    }
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-medium text-gray-700 dark:text-gray-100'>
            Collection
          </Listbox.Label>
          <div className='mt-1 relative z-40'>
            <Listbox.Button className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
              <span className='block truncate capitalize'>{selected}</span>
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
                {collections?.map((collection) => (
                  <Listbox.Option
                    key={collection}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-blue-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={collection}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate capitalize"
                          )}>
                          {collection}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-blue-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
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
