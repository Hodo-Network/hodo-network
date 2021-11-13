import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getCollection } from "../../state/asyncActions/collection";
import { NFT } from "../../typings/nft";
import AssetGrid from "../AssetGrid";

export interface PureFeaturedPanelProps {
  contractAddress: string;
  title: string;
}

export const PureFeaturedPanel: React.FC<PureFeaturedPanelProps> = ({
  contractAddress,
  title,
}) => {
  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  const loading = useAppSelector((state) => state.collection.loading);
  const [items, setItems] = useState<NFT[]>([]);

  useEffect(() => {
    dispatch(getCollection(contractAddress));
    setItems(collection.data);
  }, [contractAddress]);

  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl dark:text-white'>{title}</h2>
        <Link
          to={`${ROUTE_MARKETPLACE}/${contractAddress}`}
          className='link flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <ChevronRightIcon className='h-6' />
        </Link>
      </div>

      <AssetGrid items={items} loading={loading} />
    </div>
  );
};
