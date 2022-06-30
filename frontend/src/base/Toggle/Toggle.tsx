import clsx from "clsx";
import { Switch } from "@headlessui/react";

export type ToggleProps = {
  checked: boolean;
  onToggle: (T: boolean) => void;
  label?: string;
};

export const Toggle = ({ checked = false, onToggle, label }: ToggleProps) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={checked}
        onChange={onToggle}
        className={clsx(
          checked ? 'bg-primary' : 'bg-gray-300',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus'
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            checked ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>

      {label && (
        <Switch.Label as="span" className="ml-2">
          <span className="text-sm font-medium">{label}</span>
        </Switch.Label>
      )}
    </Switch.Group>
  );
};