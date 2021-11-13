import { NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import AssetGrid from "../AssetGrid";

export interface CollectionDisclosureProps {
    contractAddress: string;
    collection: any;
}

export const CollectionDisclosure = ({ contractAddress, collection }: CollectionDisclosureProps) => {
    return (
        <Disclosure defaultOpen={true} as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button className="p-4 border border-gray-300 dark:border-gray-700 w-full text-left flex items-center justify-between">
                        <span className="font-semibold">More from this collection</span>
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
                        <Disclosure.Panel className="p-4 border border-t-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-xs">
                            <AssetGrid items={collection.data} />
                            <div className="mt-6 flex justify-around">
                                <NavLink
                                    to={`${ROUTE_MARKETPLACE}/${contractAddress}`}
                                    className='btn btn--primary'>
                                    View Collection
                                </NavLink>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};