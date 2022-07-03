import { useState } from "react";
import useGeolocation from "@rooks/use-geolocation";
import { PureLocationButton } from './LocationButton';

export const LocationButton = () => {
  const [when, setWhen] = useState(false);

  const geoObj = useGeolocation({
    when,
  });

  const onClick = () => {
    setWhen(true);
  };

  {/* JSON.stringify(geoObj) */ }
  return <PureLocationButton location={`${geoObj?.lat}, ${geoObj?.lng}`} onClick={onClick} />;
};

export default LocationButton;
