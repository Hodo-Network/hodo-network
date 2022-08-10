import {
  GET_ASSETS_FAILURE,
  GET_ASSETS_STARTED,
  GET_ASSETS_SUCCESS,
} from '../actions/actionTypes';

// define initial state of assets
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// update store based on type and payload and return the state
export default function common(state = initialState, action: any) {
  switch (action.type) {
    case GET_ASSETS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSETS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_ASSETS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
}
