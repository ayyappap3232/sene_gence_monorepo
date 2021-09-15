

//Remove single Item from a cart

import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { CREATE_CUSTOMER } from "../services/apollo/mutations/customers/createCustomer"


type Props = {
    email : string,
    password : string,
    firstname: string,
    lastname: string
}

type Result = {
    loading: Boolean,
    error: any,
    createCustomer() : void,
    customerData: any
}

export const useCreateCustomer =  (props:Props) : Result => {
    const [customerData, setCustomerData] = useState()
    const [createCustomer, {loading, data, error}] =  useMutation(CREATE_CUSTOMER, {
        variables: { email: props.email, password: props.password, firstname: props.firstname, lastname: props.lastname }
    })

    useEffect(() => {
        if(data){
            setCustomerData(data)
        }
    }, [data])


    return {
        loading,
        error,
        createCustomer,
        customerData
    }
}
