import { ChevronRightIcon } from "@heroicons/react/solid";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FeaturedNfts } from "..";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import { collectibles } from "../../data";

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
  const getItems = useCallback((type) => {
    if (type === "all") {
      return collectibles;
    } else {
      return collectibles.filter((item) => item.category === type);
    }
  }, []);

  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl dark:text-white'>{title}</h2>
        <NavLink to={to} className='link flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <ChevronRightIcon className='h-6' />
        </NavLink>
      </div>

      <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        <FeaturedNfts getItems={getItems} type={type} />
      </div>
    </div>
  );
}
