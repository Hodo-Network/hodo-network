import { useEffect, useState } from 'react';
import ContractAddresses from '../../contracts/contract-address.json';
import { getCollection } from '../../state/asyncActions/collection';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { NFT } from '../../typings/nft';

import convertIpfsUrl from '../../utils/convertIpfsUrl';
import { PureExploreView } from './ExploreView';

const ExploreView = () => {
  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  // const loading = useAppSelector((state) => state.collection.loading);
  const [items, setItems] = useState<NFT[]>([]);

  useEffect(() => {
    // TODO: update. 1st Collection used for MVP
    dispatch(getCollection(ContractAddresses.Continents));
  }, []);

  useEffect(() => {
    if (collection?.status) {
      const temp = collection.data.map((item: any) => {
        return { ...item, image: convertIpfsUrl(item.image) };
      });

      setItems(temp);
    }
  }, [collection]);

  return <PureExploreView items={items} />;
};
export default ExploreView;
