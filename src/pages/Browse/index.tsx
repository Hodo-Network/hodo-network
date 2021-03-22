import { useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowseNav, FeaturedNfts } from "../../components";
import { countries, capitals, monuments } from "../../data";
import {
  ROUTE_BROWSE_ALL,
  ROUTE_BROWSE_CAPITALS,
  ROUTE_BROWSE_COUNTRIES,
  ROUTE_BROWSE_MONUMENTS,
  ROUTE_BROWSE_REGION,
} from "../../constants/routes";

export default function Browse() {
  // TODO: replace with api calls
  const getItems = useCallback((type) => {
    switch (type) {
      case "all":
        return [...countries, ...capitals, ...monuments];
      case "region":
        // TODO: filter all items using geoObj
        return [countries[0], capitals[0], monuments[0], capitals[3]];
      case "countries":
        return countries;
      case "capitals":
        return capitals;
      case "monuments":
        return monuments;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div className='py-8 mx-auto max-w-8xl'>
        <div className='flex'>
          {/* TODO: make mobile friendly widths */}
          <div className='w-1/5'>
            <BrowseNav />
          </div>
          <div className='w-4/5'>
            <div className='lg:ml-8 grid gap-6 grid-cols-2 lg:grid-cols-4'>
              <Switch>
                <Route path={ROUTE_BROWSE_ALL} exact>
                  <FeaturedNfts getItems={getItems} type='all' />
                </Route>
                <Route path={ROUTE_BROWSE_REGION} exact>
                  <FeaturedNfts getItems={getItems} type='region' />
                </Route>
                <Route path={ROUTE_BROWSE_COUNTRIES} exact>
                  <FeaturedNfts getItems={getItems} type='countries' />
                </Route>
                <Route path={ROUTE_BROWSE_CAPITALS} exact>
                  <FeaturedNfts getItems={getItems} type='capitals' />
                </Route>
                <Route path={ROUTE_BROWSE_MONUMENTS} exact>
                  <FeaturedNfts getItems={getItems} type='monuments' />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
