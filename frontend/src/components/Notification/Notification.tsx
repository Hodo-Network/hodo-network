import { XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import Button from '../../base/Button';

export interface NotificationProps {
  hidden?: boolean;
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
  hidden = false,
  message,
  onClose,
  onUndo,
}: NotificationProps) => {
  return (
    <div
      className={clsx(
        hidden ? 'hidden' : 'visible',
        'z-40 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end'
      )}>
      <div className='max-w-sm w-full bg-white text-base-200 shadow-lg rounded-box pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden p-4'>
        <div className='flex items-center space-x-2'>
          <p className='flex-1 text-sm font-medium'>{message}</p>

          <Button size='xs' variant='link' onClick={onUndo}>
            Undo
          </Button>

          <Button size='xs' variant='ghost' onClick={onClose}>
            <span className='sr-only'>Close</span>
            <XIcon className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};
