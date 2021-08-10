//Remove single Item from a cart

import { useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import { REMOVE_ITEM_FROM_CART } from "../../services/apollo/mutations/cart/removeItemFromCart"


export const removeItemFromACart = async (cart_id: string,cart_item_id: number) => {
    const [removeItemFromCart, {loading, data, error}] = await useLazyQuery(REMOVE_ITEM_FROM_CART, {
        variables: {
            cart_id: cart_id,
            cart_item_id: cart_item_id
        }
    })

    return {
        loading,
        error,
        data
    }
}