//Delete the specified company Team
//Note: You can get the team ID with the company query.

import {gql} from '@apollo/client';

export const DELETE_COMPANY_TEAM = gql`
mutation DeleteCompanyTeam($id: ID!){
  deleteCompanyTeam(
    id: $id
  ) {
    success
  }
}
`

export interface DeleteCompanyTeam {
    success: boolean;
}

export interface Data {
    deleteCompanyTeam: DeleteCompanyTeam;
}

export interface RootObject {
    data: Data;
}