import Button from "../../../base/Button";

export interface PureChainSwitchButtonProps {
  label?: string;
  disabled?: boolean;
  onClick?: any;
}

export const PureChainSwitchButton = ({
  label = "Switch to Network",
  disabled,
  onClick,
}: PureChainSwitchButtonProps) => {
  return (
    <Button color="primary" onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
