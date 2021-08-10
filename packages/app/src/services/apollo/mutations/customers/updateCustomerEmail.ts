//Update the customer email

import {gql} from '@apollo/client';

export const UPDATE_CUSTOMER_EMAIL = gql`
mutation UpdateCustomerEmail($email: String!, $password: String!) {
  updateCustomerEmail(email: $email, password: $password) {
    customer {
      email
    }
  }
}
`