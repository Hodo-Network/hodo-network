import {
  GET_COLLECTIONS_FAILURE,
  GET_COLLECTIONS_STARTED,
  GET_COLLECTIONS_SUCCESS,
} from '../actions/actionTypes';

// define initial state of collection
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// update store based on type and payload and return the state
export default function common(state = initialState, action: any) {
  switch (action.type) {
    case GET_COLLECTIONS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_COLLECTIONS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_COLLECTIONS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
}
