import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

export interface ActivityDisclosureProps {
  item: any;
}

export const ActivityDisclosure = ({ item }: ActivityDisclosureProps) => {
  const activities = [
    { event: 'List', from: 'Owner', to: '' },
    { event: 'Mint', from: 'Admin', to: 'Owner' },
  ];

  return (
    <Disclosure defaultOpen={true} as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="p-4 border border-gray-300 dark:border-gray-700 w-full text-left flex items-center justify-between">
            <span className="font-semibold">Activity</span>
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
            <Disclosure.Panel className="border border-t-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-xs">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Event
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      To
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {activity.event}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {activity.from}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                        {activity.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};