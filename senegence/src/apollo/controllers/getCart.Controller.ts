import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../services/apollo/queries/cart/getCart'

type Props = {
    cartId : String;
}

type Result = {
    loading: Boolean;
    getCartItems(): void;
    error: any;
    cartData: any;
}

export const useGetCartItems = (props: Props): Result => {
    const [cartData, setCartData] = useState()
    const [getCartItems,{loading,error,data}] = useLazyQuery(GET_CART_ITEMS,{
        variables:{
            cart_id: props.cartId
        }
    })

    useEffect(() => {
        if(data){
            setCartData(data)
        }
    }, [data])

    return {
        loading,
        getCartItems,
        error,
        cartData
    }
}


