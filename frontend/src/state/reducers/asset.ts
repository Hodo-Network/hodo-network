import {
  GET_ASSET_FAILURE,
  GET_ASSET_STARTED,
  GET_ASSET_SUCCESS,
} from '../actions/actionTypes';

// define initial state of asset
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// update store based on type and payload and return the state
export default function common(state = initialState, action: any) {
  switch (action.type) {
    case GET_ASSET_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSET_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_ASSET_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
}
