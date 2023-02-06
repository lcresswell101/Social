import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import checkAuth from "./middleware/check-auth";
import storage from "redux-persist/lib/storage";
import errorsSlice from "./errors";
import userSlice from "./user";
import successSlice from "./success";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['isLoggedIn']
}

const rootReducer = combineReducers({
  errors: errorsSlice,
  user: userSlice,
  success: successSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    thunk,
    checkAuth,
  ],
});

export const persistor = persistStore(store);