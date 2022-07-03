import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { PureAssetPage } from "./AssetPage";
import { getCollection } from "../../state/asyncActions/collection";

type IParams = {
  contractAddress: string;
  tokenId: string;
};

const AssetPage = () => {
  const { contractAddress, tokenId } = useParams<IParams>();
  const collectionAssets = useAppSelector((state) => state.collection.data);
  const loading = useAppSelector((state) => state.collection.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contractAddress) {
      dispatch(getCollection(contractAddress));
    }
  }, []);

  return (
    <PureAssetPage
      collectionAssets={collectionAssets}
      contractAddress={contractAddress}
      tokenId={tokenId}
      loading={loading}
    />
  );
};

export default AssetPage;
