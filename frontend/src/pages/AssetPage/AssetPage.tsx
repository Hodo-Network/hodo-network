import ContentWrapper from "../../ContentWrapper";
import Loader from "../../base/Loader";
import AssetView from "../../components/AssetView";
import { CollectionDisclosure } from "../../components/Disclosures/CollectionDisclosure";

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
        <div className='p-4 sm:p-8 max-w-8xl space-y-4'>
          <AssetView contractAddress={contractAddress} tokenId={tokenId} />

          {collection && (
            <CollectionDisclosure collection={collection} contractAddress={contractAddress} />
          )}
        </div>
      )}
    </ContentWrapper>
  );
};
