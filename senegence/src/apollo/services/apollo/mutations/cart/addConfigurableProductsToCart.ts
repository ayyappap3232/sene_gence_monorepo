//Add any type of product to the cart

import {gql} from '@apollo/client';

export const ADD_CONFIGURABLE_PRODUCT_TO_CART = gql`
  mutation AddConfigurableProductToCart(
    $cart_id: String!
    $quantity: Float!
    $sku: String!
    $selected_options: [ID]
  ) {
    addConfigurableProductsToCart(
      input: {
        cart_id: $cart_id
        cart_items: [{data: {quantity: $quantity, sku: $sku}}]
      }
    ) {
      cart {
        items {
          id
          product {
            name
            sku
          }
          quantity
        }
      }
    }
  }
`;
