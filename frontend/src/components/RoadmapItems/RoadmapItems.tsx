import { CheckIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import { RoadmapSection } from "../../typings/roadmap";

export interface RoadmapItemsProps {
  items: Array<RoadmapSection>;
}

export function RoadmapItems({ items }: RoadmapItemsProps) {
  return (
    <nav aria-label='Progress'>
      {items.map((step, stepIdx) => (
        <div key={step.heading}>
          <h2
            className={`font-semibold text-lg pl-1 mb-4 dark:text-white ${
              stepIdx !== 0 && "mt-8"
            }`}>
            {step.heading}
          </h2>
          <ol className='overflow-hidden'>
            {step.tasks.map((task, taskIdx) => (
              <li
                key={task.name}
                className={classNames(
                  taskIdx !== step.tasks.length - 1 ? "pb-10" : "",
                  "relative"
                )}>
                {task.status === "complete" ? (
                  <>
                    {taskIdx !== step.tasks.length - 1 ? (
                      <div
                        className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-blue-600'
                        aria-hidden='true'
                      />
                    ) : null}
                    <div className='relative flex items-start group'>
                      <span className='h-9 flex items-center'>
                        <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full'>
                          <CheckIcon
                            className='w-5 h-5 text-white'
                            aria-hidden='true'
                          />
                        </span>
                      </span>
                      <span className='ml-4 min-w-0 flex flex-col'>
                        <span className='text-xs font-semibold tracking-wide uppercase dark:text-white'>
                          {task.name}
                        </span>
                        <span className='text-sm text-gray-600 dark:text-gray-300'>
                          {task.description}
                        </span>
                      </span>
                    </div>
                  </>
                ) : task.status === "current" ? (
                  <>
                    {taskIdx !== step.tasks.length - 1 ? (
                      <div
                        className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300 dark:bg-gray-400'
                        aria-hidden='true'
                      />
                    ) : null}
                    <div
                      className='relative flex items-start group'
                      aria-current='step'>
                      <span
                        className='h-9 flex items-center'
                        aria-hidden='true'>
                        <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-600 rounded-full'>
                          <span className='h-2.5 w-2.5 bg-blue-600 rounded-full' />
                        </span>
                      </span>
                      <span className='ml-4 min-w-0 flex flex-col'>
                        <span className='text-xs font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-500'>
                          {task.name}
                        </span>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>
                          {task.description}
                        </span>
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {taskIdx !== step.tasks.length - 1 ? (
                      <div
                        className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300 dark:bg-gray-400'
                        aria-hidden='true'
                      />
                    ) : null}
                    <div className='relative flex items-start group'>
                      <span
                        className='h-9 flex items-center'
                        aria-hidden='true'>
                        <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 dark:border-gray-400 rounded-full'>
                          <span className='h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-400' />
                        </span>
                      </span>
                      <span className='ml-4 min-w-0 flex flex-col'>
                        <span className='text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-300'>
                          {task.name}
                        </span>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>
                          {task.description}
                        </span>
                      </span>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </nav>
  );
}
