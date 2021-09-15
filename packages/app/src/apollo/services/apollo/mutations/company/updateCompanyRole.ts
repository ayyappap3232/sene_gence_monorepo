//Update the Company Role

import { gql } from '@apollo/client';

export const UPDATE_COMPANY_ROLE = gql`
mutation UpdateCompanyRole($id: ID!,$name: String) {
  updateCompanyRole(
    input: {
      id: $id
      name: $name
    }
  ) {
    role {
      id
      name
      permissions {
        id
        text
        sort_order
        children {
          id
          text
          sort_order
          children {
            id
            text
            sort_order
          }
        }
      }
    }
  }
}
`