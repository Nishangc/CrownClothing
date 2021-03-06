import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/User.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
