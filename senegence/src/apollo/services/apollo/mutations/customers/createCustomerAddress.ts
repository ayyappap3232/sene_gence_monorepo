// Create Customer Address

import { gql } from '@apollo/client';

export const CREATE_CUSTOMER_ADDRESS = gql`
mutation CreateCustomerAddress($region: String, $region_code: String, $country_code: CountryCodeEnum, $city: String, $street: [String], $telephone: String,
$postcode: String, $city: String, $firstname: String!, $lastname: String, $default_shipping: Boolean, $default_billing: Boolean ){
  createCustomerAddress(input: {
    region: {
      region: $region
      region_code: $region_code
    }
    country_code: $country_code
    street: $street
    telephone: $telephone
    postcode: $postcode
    city: $city
    firstname: $firstname
    lastname: $lastname
    default_shipping: $default_shipping
    default_billing: $default_billing
  }) {
    id
    region {
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}
`

export interface Region {
    region: string;
    region_code: string;
}

export interface CreateCustomerAddress {
    id: number;
    region: Region;
    country_code: string;
    street: string[];
    telephone: string;
    postcode: string;
    city: string;
    default_shipping: boolean;
    default_billing: boolean;
}

export interface Data {
    createCustomerAddress: CreateCustomerAddress;
}

export interface RootObject {
    data: Data;
}