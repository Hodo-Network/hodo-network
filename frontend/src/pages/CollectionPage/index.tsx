import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
// import { getCollection } from "../../state/asyncActions/collection";
import { NFT } from "../../typings/nft";
import { PureCollectionPage } from "./CollectionPage";

type IParams = {
  contractAddress: string;
};

const CollectionPage = () => {
  const { contractAddress } = useParams<IParams>();
  const [items, setItems] = useState<Array<NFT>>([]);

  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  const loading = useAppSelector((state) => state.collection.loading);

  useEffect(() => {
    // dispatch(getCollection(contractAddress));
    console.log('getcollection')
  }, [contractAddress]);

  useEffect(() => {
    if (collection?.status) {
      setItems(collection.data);
    }
  }, [collection]);

  return <PureCollectionPage items={items} loading={loading} />;
};

export default CollectionPage;
