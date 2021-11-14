import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getAsset } from "../../state/asyncActions/asset";
import { Collection, NFT } from "../../typings/nft";
import { PureAssetView } from "./AssetView";

export interface AssetViewProps {
  contractAddress: string;
  tokenId: string;
}

const AssetView = ({ contractAddress, tokenId }: AssetViewProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);
  const asset = useAppSelector((state) => state.asset.data);
  const loading = useAppSelector((state) => state.asset.loading);
  const [item, setItem] = useState<NFT>();
  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    dispatch(getAsset(tokenId));
  }, [tokenId]);

  useEffect(() => {
    if (asset?.status) {
      setItem(asset?.data);
    }
  }, [asset]);

  useEffect(() => {
    const data = collections?.data.find(
      (item: any) => item.contractAddress === contractAddress
    );
    setCollection(data);
  }, []);

  return (
    <PureAssetView
      item={item}
      collection={collection}
      loading={loading}
      account={account}
    />
  );
};

export default AssetView;
