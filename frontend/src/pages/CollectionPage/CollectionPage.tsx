import ContentWrapper from "../../ContentWrapper";
import AssetGrid from "../../components/AssetGrid";

export interface PureCollectionPageProps {
  items: any;
  loading?: boolean;
}

export const PureCollectionPage = ({
  items,
  loading = false,
}: PureCollectionPageProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <AssetGrid items={items} loading={loading} />
      </div>
    </ContentWrapper>
  );
};
