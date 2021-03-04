import React from "react";
import { Navbar, SiteAlert } from "../../components";

export default function Browse() {
  return (
    <>
      <SiteAlert />
      <div className='bg-gray-100 dark:bg-gray-900'>
        <Navbar />
        <div>
          <div className='p-4 lg:p-6'>
            <p>Page for Browse.</p>
          </div>
        </div>
      </div>
    </>
  );
}
