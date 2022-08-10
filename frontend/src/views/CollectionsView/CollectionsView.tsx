import CollectionGrid from '../../components/CollectionGrid';
import ContentWrapper from '../../ContentWrapper';
import { Collection } from '../../typings/nft';

export interface PureCollectionsViewProps {
  items: Array<Collection>;
}

export const PureCollectionsView = ({ items }: PureCollectionsViewProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <CollectionGrid items={items} />
      </div>
    </ContentWrapper>
  );
};
