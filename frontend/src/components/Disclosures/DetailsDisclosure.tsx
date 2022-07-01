import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { TEXT_NETWORK, TEXT_CONTRACT, TEXT_ID } from "../../constants/text";

export interface DetailsDisclosureProps {
    contractAddress: string;
    network: string;
    tokenId: string;
}

export const DetailsDisclosure = ({ contractAddress, network, tokenId }: DetailsDisclosureProps) => {
    return (
        <Disclosure defaultOpen={true} as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button className="p-4 border-2 border-base-300 w-full text-left flex items-center justify-between">
                        <span className="font-semibold">Details</span>
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
                        <Disclosure.Panel className="border-2 border-t-0 border-base-300 bg-base-200 p-4 text-xs">
                            <div className="flex items-center justify-between">
                                <span>{TEXT_CONTRACT}</span>
                                {/* TODO: use network blockExplorer */}
                                <a
                                    href={`https://snowtrace.io/address/${contractAddress}`}
                                    className="link link-primary truncate pl-3"
                                    target="_blank"
                                    rel="noreferrer">
                                    {contractAddress}
                                </a>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <span>{TEXT_ID}</span>
                                <span>{tokenId}</span>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <span>{TEXT_NETWORK}</span>
                                <span>{network}</span>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};