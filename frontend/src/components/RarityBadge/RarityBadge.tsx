import Badge from "../../base/Badge";

const colors: { [key: string]: "error" | "warning" | "info"; } = {
  epic: 'error',
  rare: 'warning',
  common: 'info',
};

export interface RarityBadgeProps {
  rarity?: 'epic' | 'rare' | 'common';
}

export const RarityBadge = ({ rarity = 'common' }: RarityBadgeProps) => {
  return <Badge color={colors[rarity]} label={rarity} />;
};
