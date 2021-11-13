import {
    getCollectionsStarted, getCollectionsSuccess, getCollectionsFailure
} from "../actions/collections";
import { collectionsEndpoint } from '../../http';
// import { COLLECTIONS_BY_NETWORK, Networks } from "../../constants";

// get collection list
export const getCollections = () => async (dispatch: any) => {
    dispatch(getCollectionsStarted());
    try {
        const res = await fetch(collectionsEndpoint);
        const data = await res.json();
        // const data = COLLECTIONS_BY_NETWORK[chainId || Networks.Avalanche];
        dispatch(getCollectionsSuccess(data));

    } catch (err: any) {
        dispatch(getCollectionsFailure(err.message));
    }
}
