import {
    getAssetsStarted, getAssetsSuccess, getAssetsFailure
} from "../actions/assets";
import { assetsEndpoint } from '../../http';

// get assets list
export const getAssets = () => async (dispatch: any) => {
    dispatch(getAssetsStarted());
    try {
        const res = await fetch(assetsEndpoint);
        const data = await res.json();
        dispatch(getAssetsSuccess(data));

    } catch (err: any) {
        dispatch(getAssetsFailure(err.message));
    }
}
