//Return detailed information about the authenticated customer's company

import {gql} from '@apollo/client'

export const COMPANY = gql`
query{
    company{
      company_admin {
        firstname
        lastname
        email
      }
      email
      id
      legal_address {
        street
         city
        region {
          region_id
          region_code
        }
        postcode
        country_code
        telephone
      }
      legal_name
      name
    }
  }
`