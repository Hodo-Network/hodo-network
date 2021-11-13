import { useState } from "react";
import useGeolocation from "@rooks/use-geolocation";
import Button from "../Button";

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
        <Button onClick={onClick}>Get Location</Button>
      )}
    </>
  );
};
