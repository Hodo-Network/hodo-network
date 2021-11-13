import {
    GET_ASSETS_STARTED, GET_ASSETS_SUCCESS, GET_ASSETS_FAILURE
} from "./actionTypes";

// to get the list of assets - started
export const getAssetsStarted = () => {
    return {
        type: GET_ASSETS_STARTED
    }
}

// to get the list of assets - success
export const getAssetsSuccess = (data: any) => {
    return {
        type: GET_ASSETS_SUCCESS,
        payload: {
            data
        }
    }
}

// to get the list of assets - failure
export const getAssetsFailure = (error: any) => {
    return {
        type: GET_ASSETS_FAILURE,
        payload: {
            error
        }
    }
}