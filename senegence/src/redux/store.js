import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import ThunkMiddleware from 'redux-thunk';
import { persistReducer,persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = rootReducer;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [ThunkMiddleware],
})

export const persistor = persistStore(store);