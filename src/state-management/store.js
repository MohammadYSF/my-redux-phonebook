import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducers from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["personState"]
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };