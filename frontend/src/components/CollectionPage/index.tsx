import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectionPage } from "./CollectionPage";

interface IParams {
  name: string;
}

const CollectionPage = () => {
  const { name } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(true);

  // TODO: replace with api calls
  const getItems = useCallback((type: string) => {
    const items = collectibles.filter((item) => item.category === type) || [];
    return items;
  }, []);

  useEffect(() => {
    setItems(getItems(name));
    setLoading(false);
  }, [getItems, name]);

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;
