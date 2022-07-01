import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { getCollections } from "../../state/asyncActions/collections";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { Collection } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import Hero from "../../components/Hero";
import CollectionGrid from '../../components/CollectionGrid';

export const HomePage = () => {
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
      let temp = collectionData.filter((item: any) => item.status === "featured");
      setItems(temp);
    }

    return () => setItems([]);
  }, [collectionData]);

  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='px-4 sm:px-8 max-w-8xl'>
        <h1 id='primary-heading' className='sr-only'>
          Home
        </h1>

        <Hero />

        <h2 className='text-xl font-semibold text-primary-focus mb-4'>Featured Collections</h2>
        <CollectionGrid items={items} />
      </section>
    </ContentWrapper>
  );
};
