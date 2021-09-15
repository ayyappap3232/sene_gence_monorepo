import {gql} from '@apollo/client'

export const UPDATE_CUSTOMER = gql`
mutation UpdateCustomer($email: String!, $firstname: String!){
  updateCustomer(input:{email: $email,firstname: $firstname}){
    customer{
      firstname
      email
      lastname
    }
  }
}
`

export interface Customer {
    firstname: string;
    email: string;
    lastname: string;
}

export interface UpdateCustomer {
    customer: Customer;
}

export interface Data {
    updateCustomer: UpdateCustomer;
}

export interface RootObject {
    data: Data;
}