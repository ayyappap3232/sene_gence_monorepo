//Remove an Item from cart items array list

import {gql} from '@apollo/client';

export const REMOVE_ITEM_FROM_CART = gql`
  mutation ($cart_id: String!, $cart_item_id: Int!) {
    removeItemFromCart(
      input: {cart_id: $cart_id, cart_item_id: $cart_item_id}
    ) {
      cart {
        id
        items {
          product {
            name
          }
        }
      }
    }
  }
`;
