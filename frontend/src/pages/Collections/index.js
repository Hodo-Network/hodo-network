import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useWeb3React } from "@web3-react/core";
import ContentWrapper from "../ContentWrapper";
import { CollectionCard, CollectionCardEmpty } from "../../components";
import { collections } from "../../data";

export default function Collections() {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: replace with API data
  useEffect(() => {
    const getItems = async () => {
      if (chainId === 43113) {
        setItems(collections);
      }
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {loading ? (
            <ReactLoading
              type='bubbles'
              color='currentColor'
              className='text-blue-600 dark:text-blue-500'
            />
          ) : items.length ? (
            items?.map((item, key) => (
              <CollectionCard key={key} collection={item} />
            ))
          ) : (
            <CollectionCardEmpty />
          )}
        </div>
      </div>
    </ContentWrapper>
  );
}
