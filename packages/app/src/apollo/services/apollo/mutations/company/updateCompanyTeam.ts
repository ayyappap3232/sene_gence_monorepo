//

import {gql} from '@apollo/client'

export const UPDATE_COMPANY_TEAM = gql`
mutation UpdateCompanyTeam($id: ID!, $name: String, $description: String){
  updateCompanyTeam(
    input: {
      name: $name
      description: $description
      id: $id
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