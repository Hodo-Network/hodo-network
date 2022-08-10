import { HomeIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export interface BreadcrumbsProps {
  crumbs: any;
}

export interface PureBreadcrumbProps {
  name: string;
  path: string;
  current?: boolean;
  isHome?: boolean;
}

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <nav
      className='flex border-b border-base-content'
      aria-label='Breadcrumb'
      style={{ minHeight: '45px' }}>
      <ol className='max-w-screen-xl w-full px-4 flex space-x-4 sm:px-8'>
        {crumbs.map(
          (
            { name, path, current, isHome }: PureBreadcrumbProps,
            key: number
          ) => {
            if (isHome) {
              return (
                <li key={key} className='flex'>
                  <div className='flex items-center'>
                    <NavLink
                      to={path}
                      // exact={true}
                      className='link link-hover'
                      aria-current={current ? 'page' : undefined}>
                      <HomeIcon
                        className='flex-shrink-0 h-5 w-5'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{name}</span>
                    </NavLink>
                  </div>
                </li>
              );
            }
            return (
              <li key={key} className='flex'>
                <div className='flex items-center'>
                  <svg
                    className='flex-shrink-0 w-6 h-full text-base-content'
                    viewBox='0 0 24 44'
                    preserveAspectRatio='none'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'>
                    <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                  </svg>
                  <NavLink
                    key={name}
                    to={path}
                    // exact={true}
                    className={(navData) =>
                      clsx(
                        'ml-4 text-sm font-medium capitalize link link-hover',
                        navData.isActive && 'link-primary'
                      )
                    }
                    aria-current={current ? 'page' : undefined}>
                    {name}
                  </NavLink>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </nav>
  );
};
