import clsx from 'clsx';
import { RoadmapSection } from '../../typings/roadmap';
import { RoadmapItem } from './RoadmapItem';

export interface RoadmapItemsProps {
  items?: Array<RoadmapSection>;
}

export function RoadmapItems({ items }: RoadmapItemsProps) {
  return (
    <nav aria-label='Progress'>
      {!items || items.length === 0 ? (
        <p>Coming Soon</p>
      ) : (
        items.map((step, stepIdx) => (
          <div key={step.heading}>
            <h2
              className={clsx(
                'font-semibold text-lg pl-1 mb-4',
                stepIdx !== 0 && 'mt-8'
              )}>
              {step.heading}
            </h2>
            <ol className='overflow-hidden'>
              {step.tasks.map((task, taskIdx) => (
                <li
                  key={task.name}
                  className={clsx(
                    'relative',
                    taskIdx !== step.tasks.length - 1 && 'pb-10'
                  )}>
                  {task.status === 'complete' ? (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary'
                          aria-hidden='true'
                        />
                      ) : null}
                      <RoadmapItem
                        current={false}
                        name={task.name}
                        description={task.description}
                        complete={true}
                      />
                    </>
                  ) : task.status === 'current' ? (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <RoadmapItem
                        current={true}
                        name={task.name}
                        description={task.description}
                      />
                    </>
                  ) : (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <RoadmapItem
                        current={false}
                        name={task.name}
                        description={task.description}
                      />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))
      )}
    </nav>
  );
}
