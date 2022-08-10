import Button from '../../base/Button';

export interface PureChainInfoProps {
  label?: string;
  onClick: () => void;
}

export const PureChainInfo = ({
  label = 'Get Balances',
  onClick,
}: PureChainInfoProps) => {
  return (
    <Button color='primary' onClick={onClick}>
      {label}
    </Button>
  );
};
