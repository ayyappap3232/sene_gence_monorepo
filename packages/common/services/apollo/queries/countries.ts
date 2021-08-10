// Retries all the Information about countries

import {gql} from '@apollo/client';

export const COUNTRIES = gql`
    query {
    countries {
        id
        two_letter_abbreviation
        three_letter_abbreviation
        full_name_locale
        full_name_english
        available_regions {
            id
            code
            name
        }
    }
}
`

//Retrive the information for a particular country

export const Country = gql`
    query Country($id: String!){
        country(id: $id) {
            id
            two_letter_abbreviation
            three_letter_abbreviation
            full_name_locale
            full_name_english
            available_regions {
                id
                code
                name
            }
        }
    }
`