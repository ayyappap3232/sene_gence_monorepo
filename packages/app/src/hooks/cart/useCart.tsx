import { ApolloError, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartId, setCartId } from '../../redux/cart'
import { CreateCartResponseType, CREATE_CART } from '../../services/apollo/mutations/cart/createCart'

type Result = {
    cartId: string;
}

export const useCart = () : Result => {
    const cartId = useSelector(getCartId)
    const dispatch = useDispatch();

    const [fetchCartId] = useMutation(CREATE_CART);
    const createCart = async () => {
        try {
            const {data,errors}: {data: CreateCartResponseType, errors: ApolloError[]} = await fetchCartId();
            dispatch(setCartId(data.cartId))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(!cartId){
            createCart();
        }
    }, [])

    return {
        cartId
    };
}