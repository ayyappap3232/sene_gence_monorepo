import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import {GET_CART} from '../services/apollo/queries/cart/getCart'

type Props = {
    cartId : String;
}

type Result = {
    loading: Boolean;
    getCart(): void;
    error: any;
    cartData: any;
}

export const useCart = (props: Props): Result => {
    const [cartData, setCartData] = useState()
    const [getCart,{loading,error,data}] = useLazyQuery(GET_CART,{
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
        getCart,
        error,
        cartData
    }
}


