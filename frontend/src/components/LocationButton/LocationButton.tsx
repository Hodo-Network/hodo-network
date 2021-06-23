import { useState } from "react";
import useGeolocation from "@rooks/use-geolocation";
import { Button } from "../Button";

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
      <Button primary={false} size='large' onClick={onClick}>
        Get Location
      </Button>
      <div className='mt-2 text-sm text-gray-500'>
        {geoObj && JSON.stringify(geoObj)}
      </div>
    </>
  );
};
