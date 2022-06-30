import {
    getCollectionsStarted, getCollectionsSuccess, getCollectionsFailure
} from "../actions/collections";
// import { collectionsEndpoint } from '../../http';
// import { COLLECTIONS_BY_NETWORK, Networks } from "../../constants";
import { collections } from '../../data/collections';

// get collection list
export const getCollections = () => async (dispatch: any) => {
    dispatch(getCollectionsStarted());
    try {
        // const res = await fetch(collectionsEndpoint);
        // const data = await res.json();
        // const data = COLLECTIONS_BY_NETWORK[chainId || Networks.Avalanche];
        const data = collections;
        dispatch(getCollectionsSuccess(data));

    } catch (err: any) {
        dispatch(getCollectionsFailure(err.message));
    }
};
