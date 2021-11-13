import {
    GET_COLLECTION_STARTED, GET_COLLECTION_SUCCESS, GET_COLLECTION_FAILURE
} from "./actionTypes";

// to get the collection - started
export const getCollectionStarted = () => {
    return {
        type: GET_COLLECTION_STARTED
    }
}

// to get the collection - success
export const getCollectionSuccess = (data: any) => {
    return {
        type: GET_COLLECTION_SUCCESS,
        payload: {
            data
        }
    }
}

// to get the collection - failure
export const getCollectionFailure = (error: any) => {
    return {
        type: GET_COLLECTION_FAILURE,
        payload: {
            error
        }
    }
}