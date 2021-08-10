import  {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import {Customer, GET_CUSTOMER_DETAILS} from '../services/apollo/queries/customers/customer'
type Props = {

}

type Result = {
    loading: Boolean;
    getCustomerDetails(): void;
    error: any;
    customerData: Customer;
}

export const useCustomer = (props: Props): Result => {
    const [customerData, setCustomerData] = useState()
    const [getCustomerDetails,{loading, error, data}] = useLazyQuery(GET_CUSTOMER_DETAILS)

    useEffect(() => {
        if(data){
            setCustomerData(data)
        }
    }, [data])

    return {
        loading,
        getCustomerDetails,
        error,
        customerData
    }
}


