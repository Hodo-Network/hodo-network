import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getCollections } from "../../state/asyncActions/collections";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import { Collection } from "../../typings/nft";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  // const collections = useAppSelector((state) => state.collections);
  const collectionData = useAppSelector((state) => state.collections.data);
  const loading = useAppSelector((state) => state.collections.loading);
  const [items, setItems] = useState<Array<Collection>>([]);

  useEffect(() => {
    dispatch(getCollections());
  }, [chainId]);

  useEffect(() => {
    if (collectionData) {
      setItems(collectionData);
    }

    return () => setItems([]);
  }, [collectionData]);

  return <PureCollectionsPage items={items} />;
};

export default CollectionsPage;
