import { useEffect,useState } from "react";
//@ts-ignore
import {useLazyQuery} from "@apollo/graphql";
import {GET_CUSTOMER_CART} from '../services/apollo/queries/cart/getCustomerCart'

type Props = {

}

type Result = {
    loading : Boolean;
    error : any;
    getCustomerCart(): void;
    customerCart: any;
}

export const useGetCustomerCart = () : Result => {
    const [customerCart, setCustomerCart] = useState()
    const [getCustomerCart, {loading, error, data}] = useLazyQuery(GET_CUSTOMER_CART);

    useEffect(() => {
        if(data){
            setCustomerCart(data)
        }
    }, [data])

    return {
        loading,
        error,
        getCustomerCart,
        customerCart
    }
}

