//Create a new team for the authenticated customer's company

import {gql} from '@apollo/client';

export const CREATE_COMPANY_TEAM = gql`
mutation CreateCompanyTeam($name: String!, $description: String, $target_id: String){
  createCompanyTeam(
    input: {
      name: $name
    }
  ) {
    team {
      id
      name
      description
    }
  }
}
`

export interface Team {
    id: string;
    name: string;
    description?: any;
}

export interface CreateCompanyTeam {
    team: Team;
}

export interface Data {
    createCompanyTeam: CreateCompanyTeam;
}

export interface RootObject {
    data: Data;
}
