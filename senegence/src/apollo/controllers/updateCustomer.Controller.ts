import { useEffect,useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { UPDATE_CUSTOMER } from "../services/apollo/mutations/customers/updateCustomer";

type Props = {
    email: string,
    firstname: string
}

type Result = {
    loading : Boolean;
    error : any;
    updateCustomer(): void;
    customerUpdatedData: any;
}

export const useUpdateCustomer = (props: Props) : Result => {
    const [customerUpdatedData, setCustomerUpdatedData] = useState()
    const [updateCustomer, {loading, error, data}] = useMutation(UPDATE_CUSTOMER,{
        variables: {email: props.email, firstname: props.firstname}
    });

    useEffect(() => {
        if(data){
            setCustomerUpdatedData(data)
        }
    }, [data])

    return {
        loading,
        error,
        updateCustomer,
        customerUpdatedData
    }
}

