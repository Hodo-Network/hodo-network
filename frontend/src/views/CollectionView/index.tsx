import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getCollection } from "../../state/asyncActions/collection";
import { NFT } from "../../typings/nft";
import { PureCollectionView } from "./CollectionView";

type IParams = {
  contractAddress: string;
};

const CollectionView = () => {
  const { contractAddress } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);

  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  // const loading = useAppSelector((state) => state.collection.loading);

  useEffect(() => {
    if (contractAddress) {
      dispatch(getCollection(contractAddress));
    }
  }, [contractAddress]);

  useEffect(() => {
    if (collection) {
      setItems(collection);
    }
  }, [collection]);

  return <PureCollectionView items={items} />;
};

export default CollectionView;
