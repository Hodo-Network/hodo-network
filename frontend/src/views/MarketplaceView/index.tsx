import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { NFT } from "../../typings/nft";
import { PureMarketplaceView } from "./MarketplaceView";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getAssets } from "../../state/asyncActions/assets";

const MarketplaceView = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const assets = useAppSelector((state) => state.assets.data);
  // const loading = useAppSelector((state) => state.assets.loading);
  const [verifiedOnly, onFilterVerified] = useState<boolean>(false);
  const [items, setItems] = useState<Array<any>>([]);

  useEffect(() => {
    dispatch(getAssets());
  }, [chainId]);

  useEffect(() => {
    if (assets) {
      // Return unsold items
      // let filtered = assets.filter((asset: NFT) => !asset.sold);

      // Return items with Verified Contract
      // if (verifiedOnly) {
      //   filtered = filtered.filter((asset: NFT) => asset.contractVerified);
      // }

      // Return unsold items, with optional Verified Contract
      let filtered = assets.filter((asset: NFT) => {
        return verifiedOnly ? asset.contractVerified && !asset.sold : !asset.sold;
      });

      setItems(filtered);
    }

    return () => setItems([]);
  }, [assets, verifiedOnly]);

  return <PureMarketplaceView items={items} verifiedOnly={verifiedOnly} onFilterVerified={onFilterVerified} />;
};

export default MarketplaceView;
