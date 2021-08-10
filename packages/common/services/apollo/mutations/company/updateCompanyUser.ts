//update an existing company user.

import {gql} from '@apollo/client';


export const UPDATE_COMPANY_USER = gql`
mutation UpdateCompanyUser($id: ID!, job_title: String){
  updateCompanyUser(
    input: {
      id: $id
      job_title: $job_title
    }
  ) {
    user {
      email
      firstname
      lastname
      job_title
      telephone
      status
      role {
        id
        name
        users_count
      }
    }
  }
}
`