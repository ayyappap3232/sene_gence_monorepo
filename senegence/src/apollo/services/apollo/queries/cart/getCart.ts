// Returns information about shopping cart.

import { gql } from '@apollo/client';


export const GET_CART_ITEMS = gql`
query GetCart($cart_id: String!){
  cart(cart_id:$cart_id){
    items {
      uid
        product {
          name
          sku 
          image{
            url
          }         
        }
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        quantity
        prices{
          price{
            currency
            value
          }
        }
    }
  }
}
`

export interface Image {
  url: string;
}

export interface Product {
  name: string;
  sku: string;
  image: Image;
}

export interface Price {
  currency: string;
  value: number;
}

export interface Prices {
  price: Price;
}

export interface Item {
  uid: string;
  product: Product;
  quantity: number;
  prices: Prices;
}

export interface Cart {
  items: Item[];
}

export interface Data {
  cart: Cart;
}

export interface RootObject {
  data: Data;
}