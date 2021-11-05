import { createSlice,createSelector } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState:{
        cartCount: 0,
        items: [],
        success: false
    },
    reducers: {
        cartCount(state,action){
            state.cartCount = action.payload
        },
        productsInCart(state,action){
            state.items = action.payload
        },
        success(state,action){
            state.success = action.payload
        }
    }
});

export const {cartCount, productsInCart,success} = cartItemsSlice.actions;

export const getCartItemsCount = createSelector((state) => state.cartItems, (cartItems) => cartItems.cartCount);
export const getProductsInCart = createSelector((state) => state.cartItems, (cartItems) => cartItems.items );

export default cartItemsSlice.reducer;