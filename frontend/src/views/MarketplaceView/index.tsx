import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { NFT } from "../../typings/nft";
import { PureMarketplaceView } from "./MarketplaceView";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getAssets } from "../../state/asyncActions/assets";

const MarketplaceView = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const assets = useAppSelector<NFT[]>((state) => state.assets.data);
  // const loading = useAppSelector((state) => state.assets.loading);
  const [verifiedOnly, onFilterVerified] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAssets());
  }, [chainId]);

  const items = useMemo(() => {
    // Return unsold items. Filter more if Only Verified is toggled
    return assets.filter(asset => {
      return verifiedOnly ? asset.contractVerified && !asset.sold : !asset.sold;
    });

  }, [assets, verifiedOnly]);

  return <PureMarketplaceView items={items} verifiedOnly={verifiedOnly} onFilterVerified={onFilterVerified} />;
};

export default MarketplaceView;
