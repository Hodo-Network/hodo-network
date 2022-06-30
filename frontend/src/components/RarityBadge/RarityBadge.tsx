import { NFTRarity } from "../../typings/nft";
import Badge from "../../base/Badge";

type Badge = {
  color: "error" | "warning" | "info";
  label: NFTRarity;
};

export const EpicBadge: Badge = {
  color: "error",
  label: NFTRarity.EPIC,
};

export const RareBadge: Badge = {
  color: "warning",
  label: NFTRarity.RARE,
};

export const CommonBadge: Badge = {
  color: "info",
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

export const RarityBadge = ({ rarity }: RarityBadgeProps) => {
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
