import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { PureAssetPage } from "./AssetPage";
import { getCollection } from "../../state/asyncActions/collection";

interface IParams {
  contractAddress: string;
  tokenId: string;
}

const AssetPage = () => {
  const { contractAddress, tokenId } = useParams<IParams>();
  const collection = useAppSelector((state) => state.collection.data);
  const loading = useAppSelector((state) => state.collection.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollection(contractAddress));
  }, []);

  return (
    <PureAssetPage
      collection={collection}
      contractAddress={contractAddress}
      tokenId={tokenId}
      loading={loading}
    />
  );
};

export default AssetPage;
