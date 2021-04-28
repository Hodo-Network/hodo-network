import { useCallback } from "react";
import { useParams } from "react-router";
import { SelectCollection, FeaturedNfts } from "../../components";
import { collectibles } from "../../data";

const collections = collectibles
  .map((item) => item.group)
  .filter((value, index, _arr) => _arr.indexOf(value) === index)
  .concat("All")
  .sort();

export default function Collections() {
  const { name } = useParams();

  // TODO: replace with api calls
  const getItems = useCallback((type) => {
    if (type === "All") {
      return collectibles;
    } else {
      return collectibles.filter((item) => item.group === type);
    }
  }, []);

  return (
    <div className='p-4 sm:p-8 max-w-8xl'>
      <div className='mb-8'>
        <div className='inline-block w-72'>
          <SelectCollection collections={collections} />
        </div>
      </div>

      <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <FeaturedNfts getItems={getItems} type={name} />
      </div>
    </div>
  );
}
