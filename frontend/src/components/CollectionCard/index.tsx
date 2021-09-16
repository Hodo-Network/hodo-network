import { useEffect } from "react";
import { Collection } from "../../typings/nft";
import { PureCollectionCard } from "./CollectionCard";

const CollectionCard = ({ collection }: { collection: Collection }) => {
  useEffect(() => {
    const getItems = async () => {
      // if (chainId === 43113 || chainId === 31337) {
      //   setItems(collections);
      // }

      let fetchNftData: any = await fetch(
        `https://testapi.banana-coin.org/list_nfts`
      );
      fetchNftData = await fetchNftData.json();
      // fetchNftData = fetchNftData.reverse();
      // setFetchedItem(fetchNftData.data);
      console.log("dsadas", fetchNftData);
    };

    getItems().then(() => {
      // setLoading(false);
    });
  }, []);

  return <PureCollectionCard collection={collection} />;
};

export default CollectionCard;
