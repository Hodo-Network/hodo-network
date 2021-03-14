import React from "react";
import { NFTProps } from "../../typings/nft";
import { NFTCard } from "../index";

export default function FeaturedNfts(props: { items: Array<NFTProps> }) {
  const { items } = props;
  return (
    <>
      {items.map((item: NFTProps, index: number) => (
        <NFTCard
          key={index}
          id={item.id}
          img={item.img}
          name={item.name}
          rarity={item.rarity}
          desc={item.desc}
          cost={item.cost}
        />
      ))}
    </>
  );
}
