import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowseNav, FeaturedNfts, Footer, Navbar } from "../../components";
import { countries } from "../../data/countries";
import { capitals } from "../../data/capitals";
import { monuments } from "../../data/monuments";

export default function Browse() {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-900'>
        <Navbar />
        <div>
          <div className='p-4 sm:p-8'>
            <div className='mt-4 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
              <div className='flex'>
                <div className='w-1/5'>
                  <BrowseNav />
                </div>
                <div className='w-4/5'>
                  <div className='lg:ml-8 grid gap-6 grid-cols-2 lg:grid-cols-4'>
                    <Switch>
                      <Route path={`/browse`} exact>
                        <FeaturedNfts
                          items={[...countries, ...capitals, ...monuments]}
                        />
                      </Route>
                      <Route path={`/browse/countries`} exact>
                        <FeaturedNfts items={countries} />
                      </Route>
                      <Route path={`/browse/capitals`} exact>
                        <FeaturedNfts items={capitals} />
                      </Route>
                      <Route path={`/browse/monuments`} exact>
                        <FeaturedNfts items={monuments} />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
