//Remove single Item from a cart

import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { REMOVE_ITEM_FROM_CART } from "../services/apollo/mutations/cart/removeItemFromCart"


type Props = {
    cart_id : string,
    cart_item_id : number
}

type Result = {
    loading: Boolean,
    error: any,
    removeItemFromCart() : void,
    customerCart: any
}

export const useRemoveItemFromACart = async (props:Props) : Promise<Result> => {
    const [customerCart, setCustomerCart] = useState()
    const [removeItemFromCart, {loading, data, error}] = await useMutation(REMOVE_ITEM_FROM_CART, {
        variables: {
            cart_id: props.cart_id,
            cart_item_id: props.cart_item_id
        }
    })

    useEffect(() => {
        if(data){
            setCustomerCart(data)
        }
    }, [data])


    return {
        loading,
        error,
        removeItemFromCart,
        customerCart
    }
}