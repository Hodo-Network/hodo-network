import React from "react";
import ReactLoading from "react-loading";
import { TEXT_ADDRESS } from "../../constants/text";

export interface WalletAddressProps {
  address: string | null | undefined;
  loading?: boolean;
}

export const WalletAddress: React.FC<WalletAddressProps> = ({
  address,
  loading,
}) => {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
        {TEXT_ADDRESS}
      </h1>
      {loading ? (
        <ReactLoading
          type='bubbles'
          color='currentColor'
          className='text-blue-600 dark:text-blue-500'
        />
      ) : address ? (
        <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          {address}
        </p>
      ) : (
        <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          Not connected
        </p>
      )}
    </div>
  );
};
