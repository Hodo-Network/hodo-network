import clsx from "clsx";
import { NFT } from "../../typings/nft";

export interface IAssetListCompactItemProps {
  item: NFT;
  active?: boolean;
  onClick?: () => void;
}

export const AssetListCompactItem = ({
  item: { image, name, description },
  active,
  onClick
}: IAssetListCompactItemProps) => {
  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={clsx(
        "cursor-pointer flex p-4 items-center bg-base-100 gap-3",
        active ? "bg-base-200" : "hover:bg-base-200",
      )}>
      <img
        className='flex-shrink-0 -mt-0.5 h-14 w-14'
        src={image}
        alt={name}
      />
      <div className='text-sm overflow-hidden space-y-2'>
        <p className='font-semibold text-bc-muted truncate'>
          {name}
        </p>
        <p className='truncate'>
          {description}
        </p>
      </div>
    </div>
  );
};