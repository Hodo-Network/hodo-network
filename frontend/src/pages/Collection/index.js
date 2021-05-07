import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useWeb3React } from "@web3-react/core";
import { FeaturedNfts } from "../../components";
import { collectibles } from "../../data";
import ContentWrapper from "../ContentWrapper";

export default function Collection() {
  const { chainId } = useWeb3React();
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: replace with api calls
  const getItems = useCallback((type) => {
    const items =
      chainId === 43113
        ? collectibles.filter((item) => item.category === type)
        : [];
    return items;
  }, []);

  useEffect(() => {
    setItems(getItems(name));
    setLoading(false);
  }, [getItems, name]);

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <FeaturedNfts items={items} loading={loading} />
        </div>
      </div>
    </ContentWrapper>
  );
}
