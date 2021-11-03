import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../services/apollo/queries/cart/getCart'
import { useDispatch } from 'react-redux'
import {cartCount} from '../../redux/cartItems'

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
    const [cartData, setCartData] = useState();
    const dispatch = useDispatch();
    const [getCartItems,{loading,error,data}] = useLazyQuery(GET_CART_ITEMS,{
        variables:{
            cart_id: props.cartId
        },
        fetchPolicy: "no-cache"
    })

    useEffect(() => {
        if(data){
            setCartData(data)
            dispatch(cartCount(data?.cart?.items?.length))
        }
    }, [data])



    return {
        loading,
        getCartItems,
        error,
        cartData
    }
}


