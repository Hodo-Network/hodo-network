import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getCollections } from "../../state/asyncActions/collections";
import { PureCollectionGrid } from "./CollectionGrid";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import { Collection } from "../../typings/nft";

export interface CollectionGridProps {
  status?: string;
}

const CollectionGrid = ({ status }: CollectionGridProps) => {
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
      let temp = collectionData;

      if (status) {
        temp = temp.filter((item: any) => item.status === status);
      }
      temp = temp.map((item: any) => {
        const indexOfIpfs = item.thumbnail.indexOf('ipfs');
        if (indexOfIpfs >= 0) {
          return { ...item, thumbnail: convertIpfsUrl(item.thumbnail) };
        } else {
          return item;
        }
      });

      setItems(temp);
    }
  }, [collectionData]);

  return <PureCollectionGrid items={items} loading={loading} />;
};

export default CollectionGrid;
