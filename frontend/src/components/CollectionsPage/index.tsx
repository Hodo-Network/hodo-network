import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
// import { Collection } from "../../typings/nft";
// import { collections } from "../../data";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getItems = async () => {
      // TODO: update typings
      let collectionList: any = await fetch(
        "https://hodoapi.buildmydapp.co/list_collection"
      );
      collectionList = await collectionList.json();
      setItems(collectionList.data);
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);

  return <PureCollectionsPage items={items} loading={loading} />;
};

export default CollectionsPage;
