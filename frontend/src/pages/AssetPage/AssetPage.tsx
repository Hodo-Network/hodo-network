import ContentWrapper from "../../ContentWrapper";
import Loader from "../../base/Loader";
import AssetView from "../../components/AssetView";
import CollectionDisclosure from "../../components/Disclosures/CollectionDisclosure";
import { NFT } from "../../typings/nft";

export interface PureAssetPageProps {
  collectionAssets?: Array<NFT>;
  contractAddress?: string;
  tokenId?: string;
  loading?: boolean;
}

export const PureAssetPage = ({
  collectionAssets,
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

          {collectionAssets && (
            <CollectionDisclosure collectionAssets={collectionAssets} contractAddress={contractAddress} />
          )}
        </div>
      )}
    </ContentWrapper>
  );
};
