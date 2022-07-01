import Button from "../../base/Button";

export interface PureChainSwitchButtonProps {
  onClick?: any;
  disabled?: boolean;
}

export const PureChainSwitchButton = ({
  onClick,
  disabled,
}: PureChainSwitchButtonProps) => {
  return (
    <Button color="primary" onClick={onClick} disabled={disabled}>
      Switch to Network
    </Button>
  );
};
