import {
    getAssetStarted, getAssetSuccess, getAssetFailure
} from "../actions/asset";
import { assetEndpoint } from '../../http';
// import { nftEndpoint, getNftByOwnerEndpoint } from '../../http';

// Asset
export const getAsset = (tokenId: string) => async (dispatch: any) => {
    dispatch(getAssetStarted());
    try {
        const res = await fetch(`${assetEndpoint}?tokenId=${tokenId}`);
        const data = await res.json();
        dispatch(getAssetSuccess(data));
    } catch (err: any) {
        dispatch(getAssetFailure(err.message));
    }
};
