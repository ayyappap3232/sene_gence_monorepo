// Customer and Customer Orders we can get from the customer query
import {gql} from '@apollo/client'


export const GET_CUSTOMER_DETAILS = gql`{
    customer{
        email
        orders{
        items{
            id
        }
        }
    }
}`

export interface Customer {
    email: string;
}

export interface Data {
    customer: Customer;
}

export interface RootObject {
    data: Data;
}