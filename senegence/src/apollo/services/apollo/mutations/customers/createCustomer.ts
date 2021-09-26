import {gql} from '@apollo/client';

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer($email: String!, $password: String!, $firstname: String!, $lastname: String!){
        createCustomer(input:{email: $email,password: $password,firstname: $firstname,lastname: $lastname}){
            customer{
            firstname
            email
            created_at
            }
        }
    }
`

export interface Customer {
    firstname: string;
    email: string;
    created_at: string;
}

export interface CreateCustomer {
    customer: Customer;
}

export interface Data {
    createCustomer: CreateCustomer;
}

export interface RootObject {
    data: Data;
}