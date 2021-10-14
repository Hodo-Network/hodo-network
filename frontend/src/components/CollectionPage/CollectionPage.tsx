import ContentWrapper from "../../ContentWrapper";
import FeaturedNfts from "../FeaturedNfts";

export interface PureCollectionPageProps {
  items?: any;
  loading?: boolean;
}

export const PureCollectionPage = ({
  items,
  loading = false,
}: PureCollectionPageProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <FeaturedNfts items={items} loading={loading} />
      </div>
    </ContentWrapper>
  );
};
