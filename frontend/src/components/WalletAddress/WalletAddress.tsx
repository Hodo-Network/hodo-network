import { TEXT_ADDRESS } from "../../constants/text";
import Loader from "../../base/Loader";

export interface WalletAddressProps {
  address: string | null | undefined;
  loading?: boolean;
}

export const WalletAddress = ({
  address,
  loading,
}: WalletAddressProps) => {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500'>
        {TEXT_ADDRESS}
      </h1>
      {loading ? (
        <Loader />
      ) : address ? (
        <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
          {address}
        </p>
      ) : (
        <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
          Not connected
        </p>
      )}
    </div>
  );
};
