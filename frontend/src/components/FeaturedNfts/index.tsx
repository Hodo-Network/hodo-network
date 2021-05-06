import { useEffect, useState } from "react";
import { NFTCard } from "../index";
import { NFT } from "../../typings/nft";

export default function FeaturedNfts({
  getItems,
  type,
}: {
  getItems: Function;
  type: string;
}) {
  const [items, setItems] = useState<Array<NFT>>([]);

  useEffect(() => {
    setItems(getItems(type));
  }, [getItems, type]);

  return (
    <>
      {items?.map((item: NFT, index: number) => (
        <NFTCard key={index} nft={item} />
      ))}
    </>
  );
}
