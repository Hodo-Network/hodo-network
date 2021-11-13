import {
    getCollectionStarted, getCollectionSuccess, getCollectionFailure
} from "../actions/collection";
import { collectionEndpoint } from '../../http';
// import { nftEndpoint, getNftByOwnerEndpoint } from '../../http';

// Collection
export const getCollection = (contractAddress: string) => async (dispatch: any) => {
    dispatch(getCollectionStarted());
    try {
        const res = await fetch(`${collectionEndpoint}?contractAddress=${contractAddress}`);
        const data = await res.json();
        dispatch(getCollectionSuccess(data));
    } catch (err: any) {
        dispatch(getCollectionFailure(err.message));
    }
};;

// export const getNft = (tokenId: string) => async (dispatch: any) => {
//     dispatch(getCollectionStarted());
//     try {
//         const res = await fetch(`${nftEndpoint}?tokenId=${tokenId}`);
//         const data = await res.json();
//         dispatch(getCollectionSuccess(data));
//     } catch (err: any) {
//         dispatch(getCollectionFailure(err.message));
//     }
// }

// export const getNftByOwner = (ownerAddress: string) => async (dispatch: any) => {
//     dispatch(getCollectionStarted());
//     try {
//         const res = await fetch(`${getNftByOwnerEndpoint}?ownerAddress=${ownerAddress}`);
//         const data = await res.json();
//         dispatch(getCollectionSuccess(data));
//     } catch (err: any) {
//         dispatch(getCollectionFailure(err.message));
//     }
// }
