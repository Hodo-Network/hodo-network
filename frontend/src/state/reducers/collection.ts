import {
  GET_COLLECTION_FAILURE,
  GET_COLLECTION_STARTED,
  GET_COLLECTION_SUCCESS,
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
    case GET_COLLECTION_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_COLLECTION_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_COLLECTION_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
}
