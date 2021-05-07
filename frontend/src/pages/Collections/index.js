import React from "react";
import ContentWrapper from "../ContentWrapper";
import { CollectionCard } from "../../components";
import { collections } from "../../data";

export default function Collections() {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {collections.map((item, key) => (
            <CollectionCard key={key} collection={item} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
