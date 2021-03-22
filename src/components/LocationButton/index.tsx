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
        className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'>
        Get Location
      </button>
      <div className='mt-2 text-sm text-gray-500'>
        {geoObj && JSON.stringify(geoObj)}
      </div>
    </>
  );
}
