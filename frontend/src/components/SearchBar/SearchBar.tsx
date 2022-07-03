import { SearchIcon } from "@heroicons/react/solid";

export const SearchBar = () => {
  return (
    <div className='relative'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        id='search'
        type='search'
        placeholder='Search'
        className='input input-bordered w-full pl-8'
      />
      <div className='pointer-events-none absolute inset-y-0 left-2 flex items-center justify-center'>
        <SearchIcon className='h-5 w-5' aria-hidden='true' />
      </div>
    </div>
  );
};
