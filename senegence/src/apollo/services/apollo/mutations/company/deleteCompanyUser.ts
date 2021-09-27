//Delete the specified company user
//Note: You can get the user ID with the company query.

import {gql} from '@apollo/client';

export const DELETE_COMPANY_USER = gql`
mutation DeleteCompanyUser($id: ID!){
  deleteCompanyUser(
    id: $id
  ) {
    success
  }
}
`

export interface DeleteCompanyUser {
    success: boolean;
}

export interface Data {
    deleteCompanyUser: DeleteCompanyUser;
}

export interface RootObject {
    data: Data;
}