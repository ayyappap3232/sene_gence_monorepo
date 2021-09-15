//Add any type of product to the cart

import {gql} from '@apollo/client';

export const ADD_PRODUCT_TO_CART = gql`
    mutation AddProductToCart($cart_id: String!, $quantity: Float!, $sku: String!){
  addProductsToCart(
    cartId: $cart_id
    cartItems: [
      {
        quantity: $quantity
        sku: $sku
      }
    ]
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
`