import Button from "../../base/Button";

export interface PureChainAddButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const PureChainAddButton = ({
  label,
  disabled = false,
  onClick,
}: PureChainAddButtonProps) => {
  return (
    <Button color="primary" onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
