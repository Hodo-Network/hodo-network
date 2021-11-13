import ContentWrapper from "../../ContentWrapper";
import CollectionGrid from "../../components/CollectionGrid";

export const PureCollectionsPage = () => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <CollectionGrid />
      </div>
    </ContentWrapper>
  );
};
