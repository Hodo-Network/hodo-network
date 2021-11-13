import {
    GET_ASSET_STARTED, GET_ASSET_SUCCESS, GET_ASSET_FAILURE
} from "./actionTypes";

// to get the asset - started
export const getAssetStarted = () => {
    return {
        type: GET_ASSET_STARTED
    }
}

// to get the asset - success
export const getAssetSuccess = (data: any) => {
    return {
        type: GET_ASSET_SUCCESS,
        payload: {
            data
        }
    }
}

// to get the asset - failure
export const getAssetFailure = (error: any) => {
    return {
        type: GET_ASSET_FAILURE,
        payload: {
            error
        }
    }
}