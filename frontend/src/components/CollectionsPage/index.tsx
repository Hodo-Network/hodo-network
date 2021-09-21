import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
// import { Collection } from "../../typings/nft";
import { collections } from "../../data";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [fetchedItem, setFetchedItem] = useState<any>([]);

 

  // TODO: replace with API data
  useEffect(() => {
    const getItems = async () => {
      // setItems(collections);

      let fetchNftData: any = await fetch(
        `http://localhost:8080/list_collection`
      );
      fetchNftData = await fetchNftData.json();
      // fetchNftData = fetchNftData.reverse();
      // setFetchedItem(fetchNftData.data);
      // console.log("dsadas", fetchNftData);
      setItems(fetchNftData.data);
      console.log("fetchNftData.data",fetchNftData.data)
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);
console.log("collections",items)
  return <PureCollectionsPage items={items} loading={loading} />;
};

export default CollectionsPage;
