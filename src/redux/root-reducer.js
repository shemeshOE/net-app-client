import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import nodesReducer from './nodes/nodes.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nodes'], // reducers that save in localStorage
};

const rootReducer = combineReducers({
  nodes: nodesReducer,
});

export default persistReducer(persistConfig, rootReducer);
