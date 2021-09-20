import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectionPage } from "./CollectionPage";
import { useWeb3React } from "@web3-react/core";


interface IParams {
  name: string;
}

const CollectionPage = () => {
  const { chainId } = useWeb3React();

  const { name } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(false);

  // TODO: replace with API data
  const getItems = useCallback((type: string) => {
    const items = collectibles.filter((item) => item.category === type) || [];
    return items;
  }, []);

  // useEffect(() => {
  //   setItems(getItems(name));
  //   setLoading(false);
  // }, [getItems, name]);

  // useEffect(() => {
  //   const getItems = async () => {
  //     // setItems(collections);

  //     let fetchNftData: any = await fetch(
  //       `http://localhost:8080/list_nfts`
  //     );
  //     fetchNftData = await fetchNftData.json();
  //     // fetchNftData = fetchNftData.reverse();
  //     // setFetchedItem(fetchNftData.data);
  //     // console.log("dsadas", fetchNftData);
  //     setItems(fetchNftData.data);
  //     console.log("fetchNftData.data",fetchNftData.data)
  //   };

  //   getItems().then(() => {
  //     setLoading(false);
  //   });
  // }, [chainId]);


  return <PureCollectionPage items={collectibles} loading={loading} />;
};

export default CollectionPage;
