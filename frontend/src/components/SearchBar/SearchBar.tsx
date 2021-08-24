import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

export const SearchBar = () => {
  return (
    <div className='relative text-gray-400 focus-within:text-gray-500'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        id='search'
        type='search'
        placeholder='Search'
        className='block w-full border-transparent pl-8 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0 dark:bg-gray-900'
      />
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center'>
        <SearchIcon className='h-5 w-5' aria-hidden='true' />
      </div>
    </div>
  );
};
