import clsx from "clsx";
import { XIcon } from "@heroicons/react/solid";

export interface NotificationProps {
  hidden: boolean;
  message: string;
  onClose?: () => void;
  onUndo?: () => void;
}

//   Notification panel, show/hide based on alert state.
//   Entering: "transform ease-out duration-300 transition"
//     From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
//     To: "translate-y-0 opacity-100 sm:translate-x-0"
//   Leaving: "transition ease-in duration-100"
//     From: "opacity-100"
//     To: "opacity-0"
export const Notification = ({
  hidden,
  message,
  onClose,
  onUndo,
}: NotificationProps) => {
  return (
    <div
      className={clsx(hidden ? "hidden" : "visible",
        'z-40 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end')}>
      <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
        <div className='p-4'>
          <div className='flex items-center'>
            <div className='w-0 flex-1 flex justify-between'>
              <p className='w-0 flex-1 text-sm font-medium text-gray-900'>
                {message}
              </p>
              <button
                onClick={onUndo}
                className='ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus'>
                Undo
              </button>
            </div>
            <div className='ml-4 flex-shrink-0 flex'>
              <button
                onClick={onClose}
                className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus'>
                <span className='sr-only'>Close</span>
                <XIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
