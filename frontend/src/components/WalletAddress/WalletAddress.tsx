import { TEXT_ADDRESS } from '../../constants/text';

export interface WalletAddressProps {
  address?: string;
}

export const WalletAddress = ({
  address = 'Not connected',
}: WalletAddressProps) => {
  return (
    <div className='space-y-2'>
      <h1 className='text-sm uppercase font-medium text-bc-muted'>
        {TEXT_ADDRESS}
      </h1>
      <p className='overflow-hidden overflow-ellipsis'>{address}</p>
    </div>
  );
};
