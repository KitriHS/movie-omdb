import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from '../reducers/index'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);