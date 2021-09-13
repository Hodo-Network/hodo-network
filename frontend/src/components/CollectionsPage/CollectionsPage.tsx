import ContentWrapper from "../../ContentWrapper";
import { CollectionCardList } from "../../components";

export interface PureCollectionsPageProps {
  items: any;
  loading?: boolean;
}

export const PureCollectionsPage = ({
  items,
  loading = false,
}: PureCollectionsPageProps) => {

 
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <CollectionCardList loading={loading} items={items} />
      </div>
    </ContentWrapper>
  );
};
