import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Collection } from "../../typings/nft";
import { collections } from "../../data";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // TODO: replace with API data
  useEffect(() => {
    const getItems = async () => {
      if (chainId === 43113 || chainId === 31337) {
        setItems(collections);
      }
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);

  return <PureCollectionsPage items={items} loading={loading} />;
};

export default CollectionsPage;
