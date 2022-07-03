import { TEXT_ADDRESS } from "../../constants/text";
import Loader from "../../base/Loader";

export interface WalletAddressProps {
  address: string | null | undefined;
  loading?: boolean;
}

export const WalletAddress = ({
  address,
  loading = false,
}: WalletAddressProps) => {
  return (
    <div className="space-y-2">
      <h1 className='text-sm uppercase font-medium text-bc-muted'>
        {TEXT_ADDRESS}
      </h1>
      {loading ? (
        <Loader />
      ) : address ? (
        <p className='font-medium overflow-hidden overflow-ellipsis'>
          {address}
        </p>
      ) : (
        <p className='font-medium overflow-hidden overflow-ellipsis'>
          Not connected
        </p>
      )}
    </div>
  );
};
