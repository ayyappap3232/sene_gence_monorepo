import { createSlice,createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartId: ""
    },
    reducers: {
        setCartId(state,action){
            state.cartId = action.payload
        }
    }
});

export const {setCartId} = cartSlice.actions;

export const getCartId = createSelector((state) => state.cart, (cart) => cart.cartId)

export default cartSlice.reducer;