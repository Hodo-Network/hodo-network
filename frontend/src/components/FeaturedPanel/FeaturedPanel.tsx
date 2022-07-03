import { Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import AssetGrid from "../AssetGrid";
import Loader from "../../base/Loader";

export interface PureFeaturedPanelProps {
  url: string;
  title: string;
  items: any;
}

export const PureFeaturedPanel = ({
  url,
  title,
  items,
}: PureFeaturedPanelProps) => {
  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <Link
          to={url}
          className='link link-primary flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <ChevronRightIcon className='h-6' />
        </Link>
      </div>

      <Suspense fallback={<Loader />}>
        <AssetGrid items={items} />
      </Suspense>
    </div>
  );
};