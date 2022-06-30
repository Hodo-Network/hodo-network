import {
    getAssetStarted, getAssetSuccess, getAssetFailure
} from "../actions/asset";
import { assetEndpoint } from '../../http';
// import { nftEndpoint, getNftByOwnerEndpoint } from '../../http';
import { assets } from '../../data/assets';

// Asset
export const getAsset = (tokenId: string) => async (dispatch: any) => {
    dispatch(getAssetStarted());
    try {
        // const res = await fetch(`${assetEndpoint}?tokenId=${tokenId}`);
        // const data = await res.json();
        const data = assets.find(asset => asset.tokenId === tokenId);
        dispatch(getAssetSuccess(data));
    } catch (err: any) {
        dispatch(getAssetFailure(err.message));
    }
};
