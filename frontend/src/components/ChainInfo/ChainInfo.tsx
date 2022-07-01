import Button from "../../base/Button";

export interface PureChainInfoProps {
  onClick: () => void;
}

export const PureChainInfo = ({ onClick }: PureChainInfoProps) => {
  return (
    <Button color="primary" size='lg' onClick={onClick}>
      Get Balances
    </Button>
  );
};
