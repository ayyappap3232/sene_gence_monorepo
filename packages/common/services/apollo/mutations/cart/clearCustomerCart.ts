//Removes all items from the specified Cart

import {gql} from '@apollo/client';

export const CLEAR_CUSTOMER_CART = gql`
mutation ClearCustomerCart($cartUid: String!){
  clearCustomerCart(cartUid: $cartUid){
    cart{
      id
      items{
        product{
          name
        }
      }
    }
  }
}
`