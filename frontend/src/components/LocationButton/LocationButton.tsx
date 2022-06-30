import { useState } from "react";
import useGeolocation from "@rooks/use-geolocation";
import Button from "../../base/Button";

export const LocationButton = () => {
  const [when, setWhen] = useState(false);

  const geoObj = useGeolocation({
    when,
  });

  const onClick = () => {
    setWhen(true);
  };

  return (
    <>
      {geoObj ? (
        <span>
          {/* JSON.stringify(geoObj) */}
          {geoObj.lat}, {geoObj.lng}
        </span>
      ) : (
        <Button color="primary" onClick={onClick}>Get Location</Button>
      )}
    </>
  );
};
