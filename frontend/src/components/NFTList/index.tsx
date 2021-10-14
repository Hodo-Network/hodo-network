import { useEffect, useState } from "react";
import { getNftByContractAddressApi } from "../../http";
import { NFT } from "../../typings/nft";
import { PureNFTList } from "./NFTList";

export interface NFTListProps {
  contractAddress?: string;
}

const NFTList = ({ contractAddress }: NFTListProps) => {
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

    getItems().catch((error) => {
      setLoading(false);
      console.log(error);
    });
  }, []);

  return <PureNFTList items={items} loading={loading} />;
};

export default NFTList;
