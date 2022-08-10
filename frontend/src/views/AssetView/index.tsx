import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { collections } from '../../data/collections';
import { getAsset } from '../../state/asyncActions/asset';
import { getCollection } from '../../state/asyncActions/collection';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { Collection, NFT } from '../../typings/nft';
import { PureAssetView } from './AssetView';

type IParams = {
  contractAddress: string;
  tokenId: string;
};

const AssetView = () => {
  const { contractAddress, tokenId } = useParams<IParams>();
  const { account } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  // collectionAssets?: Array<NFT>;
  const collectionAssets = useAppSelector((state) => state.collection.data);
  // const loading = useAppSelector((state) => state.collection.loading);
  const asset = useAppSelector((state) => state.asset.data);
  const [item, setItem] = useState<NFT>();
  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    if (tokenId) {
      dispatch(getAsset(tokenId));
    }
  }, [tokenId]);

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }

    return () => setItem(undefined);
  }, [asset]);

  useEffect(() => {
    // TODO: move to state management
    const data = collections.find(
      (collection: Collection) => collection.contractAddress === contractAddress
    );
    setCollection(data);
  }, [collections]);

  useEffect(() => {
    if (contractAddress) {
      dispatch(getCollection(contractAddress));
    }
  }, []);

  return (
    <PureAssetView
      item={item}
      collection={collection}
      account={account}
      collectionAssets={collectionAssets}
      contractAddress={contractAddress}
    />
  );
};

export default AssetView;
