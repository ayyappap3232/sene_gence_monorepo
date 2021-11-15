import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import {productsInCart, success} from '../../redux/cartItems'
import { ADD_CONFIGURABLE_PRODUCT_TO_CART } from "../services/apollo/mutations/cart/addConfigurableProductsToCart";
import {showMessage} from 'react-native-flash-message'

type Props = {
  cart_id: string;
  sku: string | undefined;
  quantity: number;
  selectedOptions: Array<string>;
};

type Result = {
  addConfigurableLoading: boolean;
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
        showMessage(
          {
            message: "Success",
            description: "Product is added to the cart",
            type: "success"
          }
        )
    }
  }, [data]);

  if(!loading){
    dispatch(success(true))
  }

  // if(error){
  //   showMessage(
  //     {
  //       message: "Error",
  //       description: "Something went wrong!",
  //       type: "danger"
  //     }
  //   )
  // }

  return {
    addConfigurableLoading: loading,
    addConfigurableProductError: error,
    addConfigurableProductToCart,
    configurableProductsToCart,
  };
};
