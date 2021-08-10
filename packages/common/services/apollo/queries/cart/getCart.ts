// Returns information about shopping cart.

import { gql } from '@apollo/client';


export const GET_CART = gql`
    query GetCart($cart_id: String!){
  cart(cart_id:$cart_id){
    id
    email
    items{
      id
      quantity
      product{
        image{
          url
        }
        color
        price_range{
          maximum_price{
            regular_price{
              value
              currency
            }
            discount{
              amount_off
              percent_off
            }
            final_price{
              value
              currency
            }
          }
          minimum_price{
            regular_price{
              value
              currency
            }
            discount{
              amount_off
              percent_off
            }
            final_price{
              value
              currency
            }
          }
        }
      }
    }
  }
}
`