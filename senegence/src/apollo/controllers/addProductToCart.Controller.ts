import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_TO_CART } from "../services/apollo/mutations/cart/addProductToCart";

type Props = {
  cart_id: string;
  sku: string;
  quantity: number;
};

type Result = {
  loading: Boolean;
  error: any;
  addProductToCart(): void;
  productsToCart: any;
};

export const useAddProductsToCart = (props: Props): Result => {
  const [productsToCart, setProductsToCart] = useState();
  const [addProductToCart, { loading, error, data }] = useMutation(
    ADD_PRODUCT_TO_CART,
    {
      variables: {
        cart_id: props.cart_id,
        sku: props.sku,
        quantity: 1,
      },
    }
  );

  useEffect(() => {
    if (data) {
        setProductsToCart(data);
    }
  }, [data]);

  return {
    loading,
    error,
    addProductToCart,
    productsToCart,
  };
};
