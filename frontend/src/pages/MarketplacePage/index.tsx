import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { NFT } from "../../typings/nft";
import { PureMarketplacePage } from "./MarketplacePage";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getAssets } from "../../state/asyncActions/assets";

const MarketplacePage = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const assets = useAppSelector((state) => state.assets.data);
  const loading = useAppSelector((state) => state.assets.loading);
  const [verifiedOnly, onFilterVerified] = useState<boolean>(false);
  const [items, setItems] = useState<Array<any>>([]);

  useEffect(() => {
    dispatch(getAssets());
  }, [chainId]);

  useEffect(() => {
    if (assets?.status) {
      // Return unsold items
      // let filtered = assets.data.filter((asset: NFT) => !asset.sold);

      // if (verifiedOnly) {
      //   // Return items with Verified Contract
      //   filtered = filtered.filter((asset: NFT) => asset.contractVerified);
      // }

      // Return unsold items, with optional Verified Contract
      let filtered = assets.data.filter((asset: NFT) => {
        return verifiedOnly ? asset.contractVerified && !asset.sold : !asset.sold;
      });

      setItems(filtered);
    }
  }, [assets, verifiedOnly]);

  return <PureMarketplacePage items={items} loading={loading} verifiedOnly={verifiedOnly} onFilterVerified={onFilterVerified} />;
};

export default MarketplacePage;
