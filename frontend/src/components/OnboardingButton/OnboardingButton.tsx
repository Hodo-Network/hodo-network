import Button from "../Button";

export interface PureOnboardingButtonProps {
  label?: string;
  disabled?: boolean;
  onConnect?: () => void;
}

export const PureOnboardingButton = ({
  label = "Connect",
  disabled = false,
  onConnect,
}: PureOnboardingButtonProps) => {
  return (
    <Button onClick={onConnect} disabled={disabled}>
      {label}
    </Button>
  );
};
