//Delete the specified company role
//Note: You can get the role ID with the company query.

import {gql} from '@apollo/client';

export const DELETE_COMPANY_ROLE = gql`
mutation DeleteCompanyRole($id: ID!){
  deleteCompanyRole(
    id: $id
  ) {
    success
  }
}
`

export interface DeleteCompanyRole {
    success: boolean;
}

export interface Data {
    deleteCompanyRole: DeleteCompanyRole;
}

export interface RootObject {
    data: Data;
}