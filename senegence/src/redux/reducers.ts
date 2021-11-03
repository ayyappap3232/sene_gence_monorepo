import { combineReducers } from "redux";
import cartReducer from "./cart";
import cartItemsReducer from './cartItems';

export default combineReducers({
    cart: cartReducer,
    cartItems: cartItemsReducer
})