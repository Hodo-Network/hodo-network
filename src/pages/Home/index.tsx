import useGeolocation from "@rooks/use-geolocation";
import { Hero, FeaturedPanel } from "../../components";
import {
  ROUTE_BROWSE_REGION,
  ROUTE_BROWSE_CAPITALS,
  ROUTE_BROWSE_COUNTRIES,
  ROUTE_BROWSE_MONUMENTS,
} from "../../constants/routes";
import {
  TEXT_LOCATION,
  TEXT_AVAILABLE_TO_GEO,
  TEXT_COUNTRIES,
  TEXT_CAPITAL_CITIES,
  TEXT_MONUMENTS,
} from "../../constants/text";

export default function Home() {
  const geoObj = useGeolocation();

  return (
    <>
      <Hero />

      <div className='mt-12 mx-auto max-w-8xl dark:text-white'>
        <span className='font-bold'>{TEXT_LOCATION}: </span>
        {geoObj && JSON.stringify(geoObj)}
      </div>

      {/* TODO: 'to' route for current location instead of ALL */}
      {/* {locationItems.length > 0 && ( */}
      <FeaturedPanel
        title={TEXT_AVAILABLE_TO_GEO}
        to={ROUTE_BROWSE_REGION}
        type='region'
      />
      {/* )} */}

      {/* {countries.length > 0 && ( */}
      <FeaturedPanel
        title={TEXT_COUNTRIES}
        to={ROUTE_BROWSE_COUNTRIES}
        type='countries'
      />
      {/* )} */}

      {/* {capitals.length > 0 && ( */}
      <FeaturedPanel
        title={TEXT_CAPITAL_CITIES}
        to={ROUTE_BROWSE_CAPITALS}
        type='capitals'
      />
      {/* )} */}

      {/* {monuments.length > 0 && ( */}
      <FeaturedPanel
        title={TEXT_MONUMENTS}
        to={ROUTE_BROWSE_MONUMENTS}
        type='monuments'
      />
      {/* )} */}
    </>
  );
}
