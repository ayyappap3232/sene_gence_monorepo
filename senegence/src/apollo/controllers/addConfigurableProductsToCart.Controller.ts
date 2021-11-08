import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_TO_CART } from "../services/apollo/mutations/cart/addProductToCart";
import { useDispatch } from "react-redux";
import {productsInCart, success} from '../../redux/cartItems'
import { ADD_CONFIGURABLE_PRODUCT_TO_CART } from "../services/apollo/mutations/cart/addConfigurableProductsToCart";

type Props = {
  cart_id: string;
  sku: string;
  quantity: number;
  selectedOptions: Array<string>;
};

type Result = {
  addConfigurableLoading: Boolean;
  addConfigurableProductError: any;
  addConfigurableProductToCart(): void;
  configurableProductsToCart: any;
};

export const useAddConfigurableProductsToCart = (props: Props): Result => {
  const dispatch = useDispatch();

  const [configurableProductsToCart, setConfigurableProductsToCart] = useState();
  const [addConfigurableProductToCart, { loading, error, data }] = useMutation(
    ADD_CONFIGURABLE_PRODUCT_TO_CART,
    {
      variables: {
        cart_id: props?.cart_id,
        sku: props?.sku,
        quantity: 1,
        selected_options: props?.selectedOptions
      },
    }
  );

  useEffect(() => {
    if (data) {
        setConfigurableProductsToCart(data);
        dispatch(productsInCart(data?.cart?.items));
    }
  }, [data]);

  if(!loading){
    dispatch(success(true))
  }

  return {
    addConfigurableLoading: loading,
    addConfigurableProductError: error,
    addConfigurableProductToCart,
    configurableProductsToCart,
  };
};
