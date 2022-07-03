import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { getCollections } from "../../state/asyncActions/collections";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { Collection } from "../../typings/nft";
import { PureHomeView } from "./HomeView";

const HomeView = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  // const collections = useAppSelector((state) => state.collections);
  const collectionData = useAppSelector((state) => state.collections.data);
  // const loading = useAppSelector((state) => state.collections.loading);
  const [items, setItems] = useState<Array<Collection>>([]);

  useEffect(() => {
    dispatch(getCollections());
  }, [chainId]);

  useEffect(() => {
    if (collectionData) {
      let temp = collectionData.filter((item: any) => item.status === "featured");
      setItems(temp);
    }

    return () => setItems([]);
  }, [collectionData]);

  return <PureHomeView items={items} />;
};

export default HomeView;
