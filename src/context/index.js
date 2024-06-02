import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import wishlistReducer from "./reducers/wishlistReducer";

const reducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export const store = legacy_createStore(reducer)