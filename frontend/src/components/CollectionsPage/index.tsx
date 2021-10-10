import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Collection } from "../../typings/nft";
import { collectionsApi } from "../../http";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<Array<Collection>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(collectionsApi)
        .then((res) => res.json())
        .then((res) => setItems(res.data));
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);

  return <PureCollectionsPage items={items} loading={loading} />;
};

export default CollectionsPage;
