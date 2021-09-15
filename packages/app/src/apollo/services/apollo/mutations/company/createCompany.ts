//Create a company at the request of either a customer or a guest

import {gql} from '@apollo/client';

export const CREATE_COMPANY = gql`
mutation CreateCompany($email: String!, $firstname: String!, $lastname: String, $company_email: String!, $company_name: String!
,$legal_name: String, $city: String!, $street: [String]!, $region_code: String, $postcode: String!, $country_id: CountryCodeEnum,
$telephone: String!) {
  createCompany(input: {
    company_name: $company_name
    company_email: $$company_email
    company_admin: {
      email: $email
      firstname: $firstname
      lastname: $lastname
    }
    legal_name: $legal_name
    legal_address: {
      street: $street
      city: $city
      region: {
        region_code: $region_code
      }
      postcode: $postcode
      country_id: $country_id
      telephone: $telephone
    }
  }){
    company {
      id
      name
      company_admin {
        email
        firstname
        lastname
      }
      legal_address {
        street
        city
        region {
          region_code
          region_id
        }
        postcode
        telephone
      }
    }
  }
}
`

export interface CompanyAdmin {
    email: string;
    firstname: string;
    lastname: string;
}

export interface Region {
    region_code: string;
    region_id: number;
}

export interface LegalAddress {
    street: string[];
    city: string;
    region: Region;
    postcode: string;
    telephone: string;
}

export interface Company {
    id: string;
    name: string;
    company_admin: CompanyAdmin;
    legal_address: LegalAddress;
}

export interface CreateCompany {
    company: Company;
}

export interface Data {
    createCompany: CreateCompany;
}

export interface RootObject {
    data: Data;
}
