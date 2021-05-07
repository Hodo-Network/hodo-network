import { useCallback } from "react";
import { useParams } from "react-router";
import { FeaturedNfts } from "../../components";
import { collectibles } from "../../data";
import ContentWrapper from "../ContentWrapper";

export default function Collection() {
  const { name } = useParams();

  // TODO: replace with api calls
  const getItems = useCallback((type) => {
    return collectibles.filter((item) => item.category === type);
  }, []);

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <FeaturedNfts getItems={getItems} type={name} />
        </div>
      </div>
    </ContentWrapper>
  );
}
