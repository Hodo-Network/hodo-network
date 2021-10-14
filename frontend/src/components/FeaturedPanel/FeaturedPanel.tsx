import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useWeb3React } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";
import { ChevronRightIcon } from "@heroicons/react/solid";

import { NFT } from "../../typings/nft";
import { getNftByContractAddressApi } from "../../http";
import { MESSAGE_VIEW_ALL } from "../../constants/messages";
import { ROUTE_COLLECTIONS } from "../../constants/routes";
import FeaturedNfts from "../FeaturedNfts";

export interface PureFeaturedPanelProps {
  contractAddress: string;
  title: string;
}

export const PureFeaturedPanel: React.FC<PureFeaturedPanelProps> = ({
  contractAddress,
  title,
}) => {
  const [items, setItems] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(
        `${getNftByContractAddressApi}?contractAddress=${contractAddress}`
      )
        .then((res) => res.json())
        .then((res) => setItems(res.data));
    };

    getItems()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [contractAddress]);

  return (
    <div className='mx-auto max-w-8xl mt-12'>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-xl dark:text-white'>{title}</h2>
        <Link
          to={`${ROUTE_COLLECTIONS}/${contractAddress}`}
          className='link flex'>
          <span className='whitespace-nowrap'>{MESSAGE_VIEW_ALL}</span>
          <ChevronRightIcon className='h-6' />
        </Link>
      </div>

      <FeaturedNfts items={items} loading={loading} />
    </div>
  );
};
