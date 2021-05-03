import React from "react";
import { NFTRarity } from "../../typings/nft";

export default function RarityBadge({
  rarity,
  className,
}: {
  rarity: string;
  className?: string;
}) {
  let badgeClass = "";

  switch (rarity) {
    case NFTRarity.RARE:
      badgeClass = "bg-red-100 text-red-800";
      break;

    case NFTRarity.EPIC:
      badgeClass = "bg-yellow-100 text-yellow-800";
      break;

    case NFTRarity.COMMON:
      badgeClass = "bg-blue-100 text-blue-800";
      break;

    default:
      badgeClass = "bg-gray-100 text-gray-800";
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium capitalize ${badgeClass} ${className}`}>
      {rarity}
    </span>
  );
}
