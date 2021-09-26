//The updateCompany mutation allows you to update a company’s address as well as top-level string attributes such as the name, legal name, and email. You cannot update the administrator or other objects such as teams, roles, or resources with this mutation.

import {gql} from '@apollo/client';

export const UPDATE_COMPANY = gql`
mutation UpdateCompany($street: [String], $city: String, $region_code: String, $region_id: Int, $postcode: String){
  updateCompany(
    input: {
      legal_address: {
        street: $street
        city: $city
        region: {
          region_code: $region_code
          region_id: $region_id
        }
        postcode: $postcode
      }
    }
  ) {
    company {
      legal_address {
        street
        city
        region {
          region_code
        }
        postcode
      }
    }
  }
}
`