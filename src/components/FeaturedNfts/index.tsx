import { useEffect, useState } from "react";
import { NFTCard } from "../index";
import { NFTProps } from "../../typings/nft";

export default function FeaturedNfts({
  getItems,
  type,
}: {
  getItems: Function;
  type: string;
}) {
  const [items, setItems] = useState<Array<NFTProps>>([]);

  useEffect(() => {
    setItems(getItems(type));
  }, [getItems, type]);

  return (
    <>
      {items?.map((item: NFTProps, index: number) => (
        <NFTCard
          key={index}
          id={item.id}
          group={item.group}
          img={item.img}
          name={item.name}
          rarity={item.rarity}
          description={item.description}
          cost={item.cost}
          location={item.location}
        />
      ))}
    </>
  );
}
