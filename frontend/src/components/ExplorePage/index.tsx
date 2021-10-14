import { useState, useEffect } from "react";
import { PureExplorePage } from "./ExplorePage";
import { NFT } from "../../typings/nft";
import { nftListApi } from "../../http";

const ExplorePage = () => {
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(nftListApi)
        .then((res) => res.json())
        .then((res) => setItems(res.data));
    };

    getItems()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return <PureExplorePage items={items} loading={loading} />;
};
export default ExplorePage;
