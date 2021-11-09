import { ApolloError, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProductsToCartResponseType, ADD_PRODUCT_TO_CART } from 'apollo/services/apollo/mutations/cart/addProductToCart'
import { CreateCartResponseType, CREATE_CART } from '../../apollo/services/apollo/mutations/cart/createCart'
import { getCartId, setCartId } from '../../redux/cart'
import {showMessage} from 'react-native-flash-message'
import { productsInCart } from '../../redux/cartItems'

type Result = {
    cartId: string;
    addToCart : (sku: string, name: string, quantity?: number) => Promise<void>;
    addProductLoading: boolean;
}

export const useCart = () : Result => {
    const cartId = useSelector(getCartId)
    const dispatch = useDispatch();

    const [fetchCartId] = useMutation(CREATE_CART);
    const [addProductsToCart, {loading: addProductLoading}] = useMutation(ADD_PRODUCT_TO_CART)

    //Create Empty Cart
    const createCart = async () => {
        try {
            const {data,errors}: {data: CreateCartResponseType, errors: ApolloError[]} = await fetchCartId();
            dispatch(setCartId(data.cartId))
        } catch (error) {
            console.log(error)
        }
    }

    console.log('cart id',cartId)

    //Create Add To Cart
    const addToCart = async (sku: string, name: string, quantity: number = 1) => {
        try {
            const {data,errors}: {data: AddProductsToCartResponseType, errors: ApolloError[]} = await addProductsToCart({
                variables:{
                    cartId,
                    sku,
                    quantity
                }
            });
            console.log('data')
            dispatch(productsInCart(data?.addProductsToCart?.cart?.items));
            showMessage(
                {
                  message: "Success",
                  description: `${name} is added to the cart`,
                  type: "success"
                }
              )
        } catch (error) {
            console.log(error)
        }
    }

    //Update Cart Item

    //Delete Cart Item

    useEffect(() => {
        if(!cartId){
            createCart();
        }
    }, [])

    return {
        cartId,
        addProductLoading,
        addToCart
    };
}