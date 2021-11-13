import {
    GET_COLLECTIONS_STARTED, GET_COLLECTIONS_SUCCESS, GET_COLLECTIONS_FAILURE
} from "./actionTypes";

// to get the list of collections - started
export const getCollectionsStarted = () => {
    return {
        type: GET_COLLECTIONS_STARTED
    }
}

// to get the list of collections - success
export const getCollectionsSuccess = (data: any) => {
    return {
        type: GET_COLLECTIONS_SUCCESS,
        payload: {
            data
        }
    }
}

// to get the list of collections - failure
export const getCollectionsFailure = (error: any) => {
    return {
        type: GET_COLLECTIONS_FAILURE,
        payload: {
            error
        }
    }
}