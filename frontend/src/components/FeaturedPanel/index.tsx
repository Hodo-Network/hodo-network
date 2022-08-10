import { useEffect, useState } from 'react';
import { ROUTE_MARKETPLACE } from '../../constants/routes';
import { getCollection } from '../../state/asyncActions/collection';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { NFT } from '../../typings/nft';
import { PureFeaturedPanel } from './FeaturedPanel';

export interface FeaturedPanelProps {
  contractAddress: string;
}

const FeaturedPanel = ({ contractAddress }: FeaturedPanelProps) => {
  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.collection.data);
  const [items, setItems] = useState<NFT[]>([]);

  useEffect(() => {
    dispatch(getCollection(contractAddress));
    setItems(collection.data);
  }, [contractAddress]);

  return (
    <PureFeaturedPanel
      url={`${ROUTE_MARKETPLACE}/${contractAddress}`}
      title='Featured Assets'
      items={items}
    />
  );
};

export default FeaturedPanel;
