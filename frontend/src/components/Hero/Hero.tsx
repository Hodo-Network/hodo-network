import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_COLLECTIONS } from "../../constants/routes";
import { Button } from "../Button";

export const Hero = () => {
  const history = useHistory();
  const onClick = () => {
    history.push(ROUTE_COLLECTIONS);
  };

  return (
    <div className='p-4 sm:p-8 -mx-4 sm:-mx-8'>
      <div className='mx-auto max-w-8xl py-8 md:py-12 lg:pb-20 text-center'>
        <h1 className='tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl xl:text-6xl'>
          <span>Hodo </span>
          <span className='text-blue-600 dark:text-white'>Network</span>
        </h1>
        <p className='mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl mt-4 md:mt-6'>
          Welcome to the first marketplace for Georeferenced Non-Fungible Tokens
          (gNFTs).
        </p>
        <div className='mt-8 sm:flex justify-center'>
          <div>
            <Button primary={true} size='large' onClick={onClick}>
              Start Browsing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
