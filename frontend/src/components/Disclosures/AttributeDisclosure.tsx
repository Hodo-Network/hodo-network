import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

export interface AttrDisclosureProps {
    attrs?: Array<any>;
}

export const AttributeDisclosure = ({ attrs }: AttrDisclosureProps) => {
    return (
        <Disclosure defaultOpen={true} as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button className="p-4 border border-base-300 w-full text-left flex items-center justify-between">
                        <span className="font-semibold">Traits</span>
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
                        <Disclosure.Panel className="grid grid-cols-3 gap-3 p-4 border border-t-0 border-base-300 bg-base-200">
                            {attrs?.map((attr: any) => (
                                <div key={attr.trait_type} className="w-full p-2 border border-base-content rounded-box uppercase text-center">
                                    <div className="text-xs font-medium text-primary mb-1">{attr.trait_type}</div>
                                    <div className="text-sm">{attr.value}</div>
                                </div>
                            ))}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};