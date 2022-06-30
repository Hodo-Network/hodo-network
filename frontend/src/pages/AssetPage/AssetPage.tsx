import ContentWrapper from "../../ContentWrapper";
import AssetView from "../../components/AssetView";
import { CollectionDisclosure } from "../../components/Disclosures/CollectionDisclosure";
import Loader from "../../base/Loader";

export interface PureAssetPageProps {
  collection?: any;
  contractAddress?: string;
  tokenId?: string;
  loading?: boolean;
}

export const PureAssetPage = ({
  collection,
  contractAddress,
  tokenId,
  loading = false,
}: PureAssetPageProps) => {
  if (loading) {
    return (
      <ContentWrapper>
        <Loader />
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      {contractAddress && tokenId && (
        <div className='p-4 sm:p-8 max-w-8xl'>
          <AssetView contractAddress={contractAddress} tokenId={tokenId} />

          {collection && (
            <CollectionDisclosure collection={collection} contractAddress={contractAddress} />
          )}
        </div>
      )}
    </ContentWrapper>
  );
};
