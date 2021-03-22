import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FeaturedNfts } from "..";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import { countries, capitals, monuments } from "../../data";

export default function FeaturedPanel({
  title,
  to,
  type,
}: {
  title: string;
  to: string;
  type: string;
}) {
  // TODO: replace with api calls
  const getItems = useCallback(() => {
    switch (type) {
      case "all":
        return [...countries, ...capitals, ...monuments];
      case "region":
        // TODO: filter all items using geoObj
        return [countries[0], capitals[0], monuments[0]];
      case "countries":
        return countries;
      case "capitals":
        return capitals;
      case "monuments":
        return monuments;
      default:
        break;
    }
  }, [type]);

  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl dark:text-white'>{title}</h2>
        <NavLink
          to={to}
          className='text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-6'>
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </NavLink>
      </div>

      <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        <FeaturedNfts getItems={getItems} type={type} />
      </div>
    </div>
  );
}
