import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
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
      let nftList: any = await fetch(
        "https://hodoapi.buildmydapp.co/list_nfts"
      );
      nftList = await nftList.json();
      nftList =
        nftList.data.filter((item: any) => item.category === name) || [];
      // nftList = nftList.reverse();
      setItems(nftList);
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, []);

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;
