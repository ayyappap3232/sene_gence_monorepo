import {gql} from '@apollo/client';

export const PRODUCT_PRICE_FRAGMENT = gql`
  fragment ProductPrice on SimpleProduct {
    price_range {
      minimum_price {
        final_price {
          currency
          value
        }
      }
    }
  }
`;
