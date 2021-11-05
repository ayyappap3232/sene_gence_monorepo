import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_TO_CART } from "../services/apollo/mutations/cart/addProductToCart";
import { UPDATE_CART_ITEMS } from "../services/apollo/mutations/cart/updateCartItems";
import { useDispatch } from "react-redux";

type Props = {
  cart_id: string;
  cart_item_uid: number;
  quantity: number;
};

type Result = {
  loading: Boolean;
  error: any;
  updateCartItem(): void;
  updatedCartItems: any;
};

export const useUpdateCartItems = (props: Props): Result => {
  const dispatch = useDispatch()
  const [updatedCartItems, setUpdatedCartItems] = useState();
  const [updateCartItem, { loading, error, data }] = useMutation(
    UPDATE_CART_ITEMS,
    {
      variables: {
        cart_id: props?.cart_id,
        cart_item_id: props?.cart_item_uid,
        quantity: props?.quantity,
      },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (data) {
        setUpdatedCartItems(data);
    }
  }, [data]);

  return {
    loading,
    error,
    updateCartItem,
    updatedCartItems,
  };
};
