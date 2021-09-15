import  {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import {Data, GET_CUSTOMER_DETAILS} from '../services/apollo/queries/customers/customer'
type Props = {

}

type Result = {
    loading: Boolean;
    getCustomerDetails(): void;
    error: any;
    customerData: Data;
}

export const useCustomer = (): Result => {
    const [customerData, setCustomerData] = useState<Data>()
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


