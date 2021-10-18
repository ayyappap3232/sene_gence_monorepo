import {gql} from '@apollo/client';

export const GET_SORT_FIELDS = gql`
  {
    products(search: "") {
      sort_fields {
        options {
          label
          value
        }
      }
    }
  }
`;
