import React from "react";
import { NFTCard } from "../index";

export default function FeaturedNfts(props) {
  const { items } = props;
  return (
    <div className='grid gap-6 lg:grid-cols-5'>
      {items.map((item, index) => (
        <NFTCard
          key={index}
          img={item.img}
          name={item.name}
          rarity={item.rarity}
          desc={item.desc}
          cost={item.cost}
        />
      ))}
    </div>
  );
}
