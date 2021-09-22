import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
// import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectionPage } from "./CollectionPage";
import { useWeb3React } from "@web3-react/core";


interface IParams {
  name: string;
}

const CollectionPage = () => {
  const { chainId } = useWeb3React();

  const { name } = useParams<IParams>();
  const [itemsss, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(false);

  // TODO: replace with API data
  const getItems = useCallback((type: string) => {
    const items = itemsss.filter((item) => item.category === type) || [];
    return items;
  }, []);

  // useEffect(() => {
  //   setItems(getItems(name));
  //   setLoading(false);
  // }, [getItems, name]);

  useEffect(() => {
    const getItems = async () => {
      // setItems(collections);

      let fetchNftData: any = await fetch(
        `https://hodoapi.buildmydapp.co/list_nfts`
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
  }, []);


  return <PureCollectionPage items={itemsss} loading={loading} />;
};

export default CollectionPage;
