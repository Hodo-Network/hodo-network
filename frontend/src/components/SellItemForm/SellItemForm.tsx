import React from "react";
import ReactLoading from "react-loading";
import ContentWrapper from "../../ContentWrapper";

export interface PureSellItemFormProps {
  loading?: boolean;
  onUpdateFormInput: (T: any) => void;
  onCreateItem: (T: any) => void;
}

export const PureSellItemForm = ({
  loading = false,
  onUpdateFormInput,
  onCreateItem,
}: PureSellItemFormProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        {loading ? (
          <ReactLoading
            type='bubbles'
            color='currentColor'
            className='text-blue-600 dark:text-blue-500'
          />
        ) : (
          "Insert form here"
        )}
      </div>
    </ContentWrapper>
  );
};
