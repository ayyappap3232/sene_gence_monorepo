//Remove an Item from cart items array list

import {gql} from '@apollo/client';

export const REMOVE_ITEM_FROM_CART = gql`
  mutation ($cart_id: String!, $cart_item_id: Int!) {
    removeItemFromCart(
      input: {cart_id: $cart_id, cart_item_id: $cart_item_id}
    ) {
      cart {
        items {
          id
          product {
            name
          }
          quantity
        }
        prices {
          grand_total {
            value
            currency
          }
        }
      }
    }
  }
`;

export type RemoveProductsInCartResponseType = {
  removeItemFromCart: {
    cart: {
      id: string,
      items: {
        id: string,
        product: {
          name: string,
        },
        quantity: number,
      }
      prices : {
        grand_total : {
          value : number,
          currency : string,
        }
      }
    }
  }
}
