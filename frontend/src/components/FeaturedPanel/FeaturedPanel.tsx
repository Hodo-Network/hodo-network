import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ChevronRightIcon } from "@heroicons/react/solid";

import { NFT } from "../../typings/nft";
import { FeaturedNfts } from "../index";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import { collectibles } from "../../data";
import { ROUTE_COLLECTIONS } from "../../constants/routes";

export interface FeaturedPanelProps {
  type: string;
  title: string;
}

export const FeaturedPanel: React.FC<FeaturedPanelProps> = ({
  type,
  title,
}) => {
  // TODO: temporary to have chainId
  const { chainId } = useWeb3React<Web3Provider>();
  const [items, setItems] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // TODO: replace with api calls
  const getItems = useCallback((val) => {
    const items =
      chainId === 43113
        ? collectibles.filter((item) => item.category === val).splice(0, 5)
        : [];
    return items;
  }, []);

  useEffect(() => {
    setItems(getItems(type));
    setLoading(false);
  }, [getItems, type]);

  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl dark:text-white'>{title}</h2>
        <Link to={`${ROUTE_COLLECTIONS}/${type}`} className='link flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <ChevronRightIcon className='h-6' />
        </Link>
      </div>

      <FeaturedNfts items={items} loading={loading} />
    </div>
  );
};
