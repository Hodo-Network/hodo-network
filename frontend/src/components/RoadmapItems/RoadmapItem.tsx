import clsx from "clsx";
import { CheckIcon } from "@heroicons/react/solid";

type RoadmapItemProps = {
  current?: boolean;
  complete?: boolean;
  name: string;
  description: string;
};

export const RoadmapItem = ({ current, complete, name, description }: RoadmapItemProps) => {
  return (
    <div className='relative flex items-start group' aria-current={current && 'step'}>
      <span
        className='h-9 flex items-center'
        aria-hidden='true'>
        <span className={clsx(
          complete ? 'bg-primary' : 'bg-white border-2',
          current ? 'border-primary-focus' : 'border-gray-300',
          'relative z-10 w-8 h-8 flex items-center justify-center rounded-full',
        )}>
          {complete ? (
            <CheckIcon
              className='w-5 h-5 text-white'
              aria-hidden='true'
            />
          ) : (
            <span className={clsx(current ? ' bg-primary' : 'bg-gray-300', 'h-2.5 w-2.5 rounded-full')} />
          )}
        </span>
      </span>

      <span className='ml-4 min-w-0 flex flex-col'>
        <span className={clsx('text-xs font-semibold tracking-wide uppercase', current && 'text-primary')}>
          {name}
        </span>
        <span className='text-sm'>
          {description}
        </span>
      </span>
    </div>
  );
};