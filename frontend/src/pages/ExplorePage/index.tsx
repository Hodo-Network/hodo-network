import { useState, useEffect } from "react";
import { getCollection } from "../../state/asyncActions/collection";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import ContractAddresses from "../../contracts/contract-address.json";
import { NFT } from "../../typings/nft";

import { PureExplorePage } from "./ExplorePage";
import convertIpfsUrl from "../../utils/convertIpfsUrl";

const ExplorePage = () => {
  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  const loading = useAppSelector((state) => state.collection.loading);
  const [items, setItems] = useState<NFT[]>([]);

  useEffect(() => {
    // TODO: update. 1st Collection used for MVP
    dispatch(getCollection(ContractAddresses.Continents));
  }, []);

  useEffect(() => {
    if (collection?.status) {
      const temp = collection.data.map((item: any) => {
        return { ...item, thumbnail: convertIpfsUrl(item.image) };
      });

      setItems(temp);
    }
  }, [collection]);

  return <PureExplorePage items={items} loading={loading} />;
};
export default ExplorePage;
