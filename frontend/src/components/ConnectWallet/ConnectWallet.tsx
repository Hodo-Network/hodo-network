import Alert from '../../base/Alert';
import Button from '../../base/Button';

export interface ConnectWalletProps {
  onConnectWallet: () => void;
  onDismiss?: () => void;
  networkError?: string;
}

export const ConnectWallet = ({
  onConnectWallet,
  onDismiss,
  networkError,
}: ConnectWalletProps) => {
  return (
    <div className='space-y-4'>
      {networkError && (
        <Alert message={networkError} status='error' onDismiss={onDismiss} />
      )}

      <div className='text-center space-y-2'>
        <p>Please connect to your wallet.</p>
        <Button color='warning' onClick={onConnectWallet}>
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
