import { createSlice,createSelector } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState:{
        cartCount: 0
    },
    reducers: {
        cartCount(state,action){
            state.cartCount = action.payload
        },
    }
});

export const {cartCount} = cartItemsSlice.actions;

export const getCartItemsCount = createSelector((state) => state.cartItems, (cartItems) => cartItems.cartCount)

export default cartItemsSlice.reducer;