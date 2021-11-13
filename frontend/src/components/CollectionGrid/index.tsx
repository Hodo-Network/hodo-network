import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getCollections } from "../../state/asyncActions/collections";
import { PureCollectionGrid } from "./CollectionGrid";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import { Collection } from "../../typings/nft";

export interface CollectionGridProps {
  status?: any;
}

const CollectionGrid = ({ status }: CollectionGridProps) => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);
  const loading = useAppSelector((state) => state.collections.loading);
  const [items, setItems] = useState<Array<Collection>>([]);

  useEffect(() => {
    dispatch(getCollections());
  }, [chainId]);

  useEffect(() => {
    if (collections?.status) {
      let temp = collections.data;

      if (status) {
        temp = temp.filter((item: any) => item.status === status);
      }
      temp = temp.map((item: any) => {
        return { ...item, thumbnail: convertIpfsUrl(item.thumbnail) };
      });

      setItems(temp);
    }
  }, [collections]);

  return <PureCollectionGrid items={items} loading={loading} />;
};

export default CollectionGrid;
