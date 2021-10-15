import React from "react";
import ContentWrapper from "../../ContentWrapper";

export const CreatePage = () => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl divide-y-2 divide-gray-200 dark:divide-gray-800'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white'>
          Create NFT
        </h2>
        <div className='mt-6 pt-4'>
          <p>Soon you will be able to mint your own gNFTs.</p>
        </div>
      </div>
    </ContentWrapper>
  );
};
