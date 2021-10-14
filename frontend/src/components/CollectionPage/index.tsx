import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NFT } from "../../typings/nft";
import { getNftByContractAddressApi } from "../../http";
import { PureCollectionPage } from "./CollectionPage";

interface IParams {
  contractAddress: string;
}

const CollectionPage = () => {
  const { contractAddress } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch(
        `${getNftByContractAddressApi}?contractAddress=${contractAddress}`
      )
        .then((res) => res.json())
        .then((res) => setItems(res.data));
    };

    getItems()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [contractAddress]);

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;
