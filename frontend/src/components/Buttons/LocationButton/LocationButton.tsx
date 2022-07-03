import Button from "../../../base/Button";

export interface IPureLocationButtonProps {
  label?: string;
  location?: string;
  onClick?: () => void;
}

export const PureLocationButton = ({ label = "Get Location", location, onClick }: IPureLocationButtonProps) => {
  if (location) {
    return (
      <span>
        {location}
      </span>
    );
  } else {
    return (
      <Button color="primary" onClick={onClick}>
        {label}
      </Button>
    );
  }
};
