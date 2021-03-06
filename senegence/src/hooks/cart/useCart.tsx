import {ApolloError, useMutation} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//user defined imports
import {
  AddProductsToCartResponseType,
  ADD_PRODUCT_TO_CART,
} from 'apollo/services/apollo/mutations/cart/addProductToCart';
import {
  CreateCartResponseType,
  CREATE_CART,
} from 'apollo/services/apollo/mutations/cart/createCart';
import {getCartId, setCartId} from '../../redux/cart';
import {showMessage} from 'react-native-flash-message';
import {cartCount, productsInCart} from '../../redux/cartItems';
import {
  UpdateProductsInCartResponseType,
  UPDATE_CART_ITEMS,
} from 'apollo/services/apollo/mutations/cart/updateCartItems';
import {
  RemoveProductsInCartResponseType,
  REMOVE_ITEM_FROM_CART,
} from 'apollo/services/apollo/mutations/cart/removeItemFromCart';

type Result = {
  cartId: string;
  addToCart: (sku: string, name: string, quantity?: number) => Promise<void>;
  addProductLoading: boolean;
  updateCartItems: (cart_item_id: number, quantity: number) => Promise<void>;
  updateProductLoading: boolean;
  deleteCartItem: (cart_item_id: number) => Promise<void>;
  deleteProductLoading: boolean;
};

export const useCart = (): Result => {
  const cartId = useSelector(getCartId);
  const dispatch = useDispatch();

  const [fetchCartId] = useMutation(CREATE_CART);
  const [addProductsToCart, {loading: addProductLoading}] =
    useMutation(ADD_PRODUCT_TO_CART);
  const [updateProductsInCart, {loading: updateProductLoading}] =
    useMutation(UPDATE_CART_ITEMS);
  const [removeItemFromCart, {loading: deleteProductLoading}] = useMutation(
    REMOVE_ITEM_FROM_CART,
  );

  //Create Empty Cart
  const createCart = async () => {
    try {
      const {
        data,
        errors,
      }: {data: CreateCartResponseType; errors: ApolloError[]} =
        await fetchCartId();
      dispatch(setCartId(data.cartId));
    } catch (error) {
      console.log(error);
    }
  };


  //Create Add To Cart
  const addToCart = async (sku: string, name: string, quantity: number = 1) => {
    try {
      const {
        data,
        errors,
      }: {data: any; errors: ApolloError[]} =
        await addProductsToCart({
          variables: {
            cartId,
            sku,
            quantity,
          },
        });
      dispatch(productsInCart(data?.addProductsToCart?.cart?.items));
      dispatch(cartCount(data?.addProductsToCart?.cart?.items?.length));
      showMessage({
        message: 'Success',
        description: `${name} is added to the cart`,
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Update Cart Item
  const updateCartItems = async (cart_item_id: number, quantity: number) => {
    try {
      const {
        data,
        errors,
      }: {data: UpdateProductsInCartResponseType; errors: ApolloError[]} =
        await updateProductsInCart({
          variables: {
            cart_id: cartId,
            cart_item_id: cart_item_id,
            quantity,
          },
        });
      dispatch(productsInCart(data?.updateCartItems?.cart?.items));
      dispatch(cartCount(data?.updateCartItems?.cart?.items?.length));
    } catch (error) {
      console.log('error in 77 usecart', error);
    }
  };

  //Delete Cart Item
  const deleteCartItem = async (cart_item_id: number) => {
    try {
      const {
        data,
        errors,
      }: {data: RemoveProductsInCartResponseType; errors: ApolloError[]} =
        await removeItemFromCart({
          variables: {
            cart_id: cartId,
            cart_item_id: cart_item_id,
          },
        });
      showMessage({
        message: 'Success',
        description: `Deleted the item from the cart`,
        type: 'success',
      });
      dispatch(productsInCart(data?.removeItemFromCart?.cart?.items));
      dispatch(cartCount(data?.removeItemFromCart?.cart?.items?.length));
    } catch (error) {
      console.log('error in 77 usecart', error);
      showMessage({
        message: 'Error',
        description: `Something went wrong while deleting the product`,
        type: 'danger',
      });
    }
  };

  useEffect(() => {
    if (!cartId) {
      createCart();
    }
  }, []);

  return {
    cartId,
    addToCart,
    addProductLoading,
    updateProductLoading,
    updateCartItems,
    deleteProductLoading,
    deleteCartItem,
  };
};
