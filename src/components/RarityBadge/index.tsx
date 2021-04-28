import React from "react";

export default function RarityBadge({
  rarity,
  className,
}: {
  rarity: string;
  className?: string;
}) {
  let badgeClass = "";

  switch (rarity) {
    case "Rare":
      badgeClass = "bg-red-100 text-red-800";
      break;

    case "Epic":
      badgeClass = "bg-yellow-100 text-yellow-800";
      break;

    case "Common":
      badgeClass = "bg-blue-100 text-blue-800";
      break;

    default:
      badgeClass = "bg-gray-100 text-gray-800";
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${badgeClass} ${className}`}>
      {rarity}
    </span>
  );
}
