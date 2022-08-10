import {
  getAssetsFailure,
  getAssetsStarted,
  getAssetsSuccess,
} from '../actions/assets';
// import { assetsEndpoint } from '../../http';
import { assets } from '../../data/assets';

// get assets list
export const getAssets = () => async (dispatch: any) => {
  dispatch(getAssetsStarted());
  try {
    // const res = await fetch(assetsEndpoint);
    // const data = await res.json();
    const data = assets;
    dispatch(getAssetsSuccess(data));
  } catch (err: any) {
    dispatch(getAssetsFailure(err.message));
  }
};
