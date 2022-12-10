import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import { userSlice } from "./userSlice";

const root = combineReducers({
  [userSlice.name]: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, root);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  });

export const wrapper = createWrapper(makeStore);
