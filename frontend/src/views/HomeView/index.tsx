import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useMemo } from 'react';
import { getCollections } from '../../state/asyncActions/collections';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { Collection } from '../../typings/nft';
import { PureHomeView } from './HomeView';

const HomeView = () => {
  const { chainId } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  // const collections = useAppSelector((state) => state.collections);
  const collectionData = useAppSelector<Collection[]>(
    (state) => state.collections.data
  );
  // const loading = useAppSelector((state) => state.collections.loading);
  const items = useMemo(
    () => collectionData.filter((item) => item.status === 'featured'),
    [collectionData]
  );

  useEffect(() => {
    dispatch(getCollections());
  }, [chainId]);

  return <PureHomeView items={items} />;
};

export default HomeView;
