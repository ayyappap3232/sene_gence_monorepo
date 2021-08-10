//Create a new company user at the request of an existing customer
//Note: You can get the target_id and the role_id with the company query.
import {gql} from '@apollo/client';

export const CREATE_COMPANY_USER = gql`
mutation CreateCompanyUser($email: String!, $firstname: String!, $lastname: String!, $job_title: String!, $role_id: String!,
$status: CompanyUserStatusEnum, $telephone: String!, $target_id: String){
  createCompanyUser(
    input: {
      email: $email
      firstname: $firstname
      lastname: $lastname
      job_title: $job_title
      role_id: $role_id
      status: $status
      telephone: $telephone
    }
  ) {
    user {
      created_at
      email
    }
  }
}
`

export interface User {
    created_at: string;
    email: string;
}

export interface CreateCompanyUser {
    user: User;
}

export interface Data {
    createCompanyUser: CreateCompanyUser;
}

export interface RootObject {
    data: Data;
}