import { useState } from "react";
import useGeolocation from "@rooks/use-geolocation";

export default function LocationButton() {
  const [when, setWhen] = useState(false);

  const geoObj = useGeolocation({
    when,
  });

  return (
    <>
      <button
        onClick={() => {
          setWhen(true);
        }}
        className='btn btn--large w-full'>
        Get Location
      </button>
      <div className='mt-2 text-sm text-gray-500'>
        {geoObj && JSON.stringify(geoObj)}
      </div>
    </>
  );
}
