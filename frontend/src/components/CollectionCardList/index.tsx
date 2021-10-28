import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
// import { COLLECTIONS_BY_NETWORK, Networks } from "../../constants";
import { collectionsApi } from "../../http";
import { Collection } from "../../typings/nft";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import { PureCollectionCardList } from "./CollectionCardList";

const CollectionCardList = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<Array<Collection>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(collectionsApi)
        .then((res) => res.json())
        .then((res) => {
          let data = res.data.map((item: any) => {
            return { ...item, thumbnail: convertIpfsUrl(item.thumbnail) };
          });
          setItems(data);
        });

      // const collections = COLLECTIONS_BY_NETWORK[chainId || Networks.Avalanche];
      // setItems(collections);
    };

    getItems()
      .then(() => {
        console.log("Collections loaded");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Get Collections error:", error);
        setLoading(false);
      });
  }, [chainId]);

  return <PureCollectionCardList items={items} loading={loading} />;
};

export default CollectionCardList;
