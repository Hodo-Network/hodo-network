import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/solid';
import clsx from 'clsx';
import Button from '../Button';

export interface IAlertProps {
  message: string;
  status: 'success' | 'warning' | 'error' | 'info';
  hidden?: boolean;
  onDismiss?: () => void;
}

export const Alert = ({
  message,
  status = 'info',
  hidden = false,
  onDismiss,
}: IAlertProps) => {
  const container: { [key: string]: string } = {
    success: 'bg-green-50 border-green-400 text-green-700',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-700',
    error: 'bg-red-50 border-red-400 text-red-700',
    info: 'bg-blue-50 border-blue-400 text-blue-700',
  };

  return (
    <div
      role='alert'
      className={clsx('border-b-2 p-4', container[status], hidden && 'hidden')}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          {status === 'success' ? (
            <CheckCircleIcon className='h-5 w-5' />
          ) : status === 'warning' ? (
            <ExclamationCircleIcon className='h-5 w-5' />
          ) : status === 'error' ? (
            <XCircleIcon className='h-5 w-5' />
          ) : (
            // status === 'info'
            <InformationCircleIcon className='h-5 w-5' />
          )}
        </div>
        <div className='ml-3'>
          <p className='text-sm'>{message}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <Button
              size='sm'
              variant='ghost'
              util='focus:outline-current'
              onClick={onDismiss}
              aria-label='Close'
              data-dismiss='alert'>
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-5 w-5' aria-hidden='true' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
