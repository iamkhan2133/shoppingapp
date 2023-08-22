import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';

import AddDelSlice from "./reducers/AddDelSlice";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
    addDelProduct: AddDelSlice
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const Store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export default Store
