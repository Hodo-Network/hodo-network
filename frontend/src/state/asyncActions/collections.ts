import {
    getCollectionsStarted, getCollectionsSuccess, getCollectionsFailure
} from "../actions/collections";
// import { collectionsEndpoint } from '../../http';
import convertIpfsUrl from "../../utils/convertIpfsUrl";
// import { COLLECTIONS_BY_NETWORK, Networks } from "../../constants";
import { collections } from '../../data/collections';

// get collection list
export const getCollections = () => async (dispatch: any) => {
    dispatch(getCollectionsStarted());
    try {
        // const res = await fetch(collectionsEndpoint);
        // const data = await res.json();
        // const data = COLLECTIONS_BY_NETWORK[chainId || Networks.Avalanche];
        let data = collections;

        // Convert ipfs image url
        data = data.map((item: any) => {
            const indexOfIpfs = item.image.indexOf('ipfs');
            if (indexOfIpfs >= 0) {
                return { ...item, image: convertIpfsUrl(item.image) };
            } else {
                return item;
            }
        });

        dispatch(getCollectionsSuccess(data));

    } catch (err: any) {
        dispatch(getCollectionsFailure(err.message));
    }
};
