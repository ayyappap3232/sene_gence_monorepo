//Add any type of product to the cart

import {gql} from '@apollo/client';

export const UPDATE_CART_ITEMS = gql`
  mutation UpdateCartItems(
    $cart_id: String!,
    $cart_item_id: Int!,
    $quantity: Float!
  ) {
    updateCartItems(
      input: {
        cart_id: $cart_id,
        cart_items: [{cart_item_id: $cart_item_id, quantity: $quantity}]
      }
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

export type UpdateProductsInCartResponseType = {
  updateCartItems: {
    cart: {
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
