import ContentWrapper from "../../ContentWrapper";
import AssetGrid from "../../components/AssetGrid";
import { NFT } from "../../typings/nft";

export interface PureCollectionPageProps {
  items: Array<NFT>;
}

export const PureCollectionPage = ({ items }: PureCollectionPageProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <AssetGrid items={items} />
      </div>
    </ContentWrapper>
  );
};
