//Change the password for the logged-in customer

import {gql} from '@apollo/client';

export const CHANGE_CURRENT_PASSWORD = gql`
mutation ChangeCurrentPassword($currentPassword: String!, $newPassword: String!){
  changeCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    id
    email
  }
}
`

export interface ChangeCustomerPassword {
    id: number;
    email: string;
}

export interface Data {
    changeCustomerPassword: ChangeCustomerPassword;
}

export interface RootObject {
    data: Data;
}