import { Collection } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import CollectionGrid from "../../components/CollectionGrid";

export interface PureCollectionsPageProps {
  items: Array<Collection>;
}

export const PureCollectionsPage = ({ items }: PureCollectionsPageProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <CollectionGrid items={items} />
      </div>
    </ContentWrapper>
  );
};
