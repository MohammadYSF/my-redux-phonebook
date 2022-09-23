import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);
export { store, persistor };