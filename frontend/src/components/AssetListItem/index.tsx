// import { useState, useEffect } from "react";
// import {
//   useAppDispatch,
//   useAppSelector
// } from "../../state/hooks";
// import { getCollectionList } from "../../state/asyncActions/collections";
// import { Collection, NFT } from "../../typings/nft";
import { PureAssetListItem } from "./AssetListItem";

// export interface AssetListItemProps {
//   nft: NFT;
// }

// const AssetListItem = ({ nft }: AssetListItemProps) => {
//   // const dispatch = useAppDispatch();
//   const collections = useAppSelector((state) => state.collections.data);
//   const [collection, setCollection] = useState<Collection>();

//   useEffect(() => {
//     // dispatch(getCollections());

//     const data = collections?.data.find(
//       (collection: any) => collection.contractAddress === nft.contractAddress
//     );

//     setCollection(data);
//   }, []);

//   return <PureAssetListItem nft={nft} />;
// };

export default PureAssetListItem;
