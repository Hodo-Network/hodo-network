import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NFT } from "../../typings/nft";
import { nftCategoryApi } from "../../http";
import { PureCollectionPage } from "./CollectionPage";

interface IParams {
  name: string;
}

const CollectionPage = () => {
  const { name } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(nftCategoryApi, {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ category: name }),
      })
        .then((res) => res.json())
        .then((res) => setItems(res.data));
    };

    getItems()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [name]);

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;
