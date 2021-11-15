//Add any type of product to the cart

import {gql} from '@apollo/client';

export const ADD_PRODUCT_TO_CART = gql`
  mutation addProductToCart(
    $cartId: String!
    $quantity: Float!
    $sku: String!
  ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: [{quantity: $quantity, sku: $sku}]
    ) {
      cart {
        items {
          id
          product {
            name
            sku
            image {
              url
            }
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

export type AddProductsToCartResponseType = {
  addProductsToCart: {
    cart: {
      id: string;
      items: {
        id: string;
        product: {
          name: string;
          sku: string;
          image: {
            url: string;
          }
        };
        quantity: number;
      };
      prices: {
        grand_total: {
          value: number;
          currency: string;
        };
      };
    };
  };
};
