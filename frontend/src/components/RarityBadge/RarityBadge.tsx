import React from "react";
import Badge from "../Badge";
import { NFTRarity } from "../../typings/nft";

export const EpicBadge = {
  color: "red",
  label: NFTRarity.EPIC,
};

export const RareBadge = {
  color: "yellow",
  label: NFTRarity.RARE,
};

export const CommonBadge = {
  color: "blue",
  label: NFTRarity.COMMON,
};

export const BADGE_INFO = {
  [NFTRarity.RARE]: RareBadge,
  [NFTRarity.EPIC]: EpicBadge,
  [NFTRarity.COMMON]: CommonBadge,
};

export interface RarityBadgeProps {
  rarity: string;
}

export const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity }) => {
  let info = CommonBadge;

  if (rarity === NFTRarity.RARE) {
    info = RareBadge;
  } else if (rarity === NFTRarity.EPIC) {
    info = EpicBadge;
  } else {
    info = CommonBadge;
  }

  return <Badge color={info.color} label={info.label} />;
};
