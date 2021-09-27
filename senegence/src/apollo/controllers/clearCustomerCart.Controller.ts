import { useEffect,useState } from "react";
//@ts-ignore
import {useMutation} from "@apollo/client";
import { CLEAR_CUSTOMER_CART } from "../services/apollo/mutations/cart/clearCustomerCart";

type Props = {
    cartUid: string
}

type Result = {
    loading : Boolean;
    error : any;
    clearCustomerCart(): void;
    customerCart: any;
}

export const useClearCustomerCart = (props: Props) : Result => {
    const [customerCart, setCustomerCart] = useState()
    const [clearCustomerCart, {loading, error, data}] = useMutation(CLEAR_CUSTOMER_CART,{
        variables: {cartUid: props.cartUid}
    });

    useEffect(() => {
        if(data){
            setCustomerCart(data)
        }
    }, [data])

    return {
        loading,
        error,
        clearCustomerCart,
        customerCart
    }
}

