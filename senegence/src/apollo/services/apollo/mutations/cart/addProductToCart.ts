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
          prices {
            price {
              currency
              value
            }
            row_total {
              value
              currency
            }
          }
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
      prices: {
        grand_total: {
          value: number;
          currency: string;
        };
      };
      items: {
        id: string;
        product: {
          name: string;
          sku: string;
          image: {
            url: string;
          };
        };
        quantity: number;
        prices: {
          price: {
            currency: string;
            value: number;
          };
          row_total:{
            value: number;
            currency: string;
          }
        };
      };
      
    };
  };
};
