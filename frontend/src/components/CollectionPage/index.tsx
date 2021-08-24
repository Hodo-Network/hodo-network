import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useWeb3React } from "@web3-react/core";
import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectionPage } from "./CollectionPage";

interface IParams {
  name: string;
}

const CollectionPage = () => {
  const { chainId } = useWeb3React();
  const { name } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(true);

  // // TODO: replace with api calls
  const getItems = useCallback((type: string) => {
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

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;