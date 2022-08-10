import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { load, save } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
// import collectionReducer from './state/features/collections/collectionsSlice'
import assetReducer from './state/reducers/asset';
import assetsReducer from './state/reducers/assets';
import collectionReducer from './state/reducers/collection';
import collectionsReducer from './state/reducers/collections';
// import application from "./application/reducer";
// import user from "./user/reducer";

const rootReducer = combineReducers({
  // application,
  // user,
  collections: collectionsReducer,
  collection: collectionReducer,
  assets: assetsReducer,
  asset: assetReducer,
});

// const PERSISTED_KEYS: string[] = ["user", "collections", "assets"];
const PERSISTED_KEYS: string[] = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: [save({ states: PERSISTED_KEYS }), thunk],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

// store.dispatch(updateVersion());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
