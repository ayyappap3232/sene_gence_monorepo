import {gql} from '@apollo/client';

export const ADD_PRODUCTS_TO_CART = gql`
mutation AddProductsToCart($cartId:String!,$quantity: Float!, $sku: String!){
  addProductsToCart(
    cartId: $cartId
    cartItems: [
      {
        quantity: $quantity
        sku: $sku
      }
    ]
  ) {
    cart {
      items {
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

export interface Product {
    name: string;
    sku: string;
}

export interface Item {
    product: Product;
    quantity: number;
}

export interface Cart {
    items: Item[];
}

export interface AddProductsToCart {
    cart: Cart;
}

export interface Data {
    addProductsToCart: AddProductsToCart;
}

export interface RootObject {
    data: Data;
}