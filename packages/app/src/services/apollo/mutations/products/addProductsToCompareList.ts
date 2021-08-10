//products : ["1","2"]

import {gql} from '@apollo/client';

export const ADD_PRODUCT_TO_COMPARE_LIST = gql`
mutation AddProductsToCompareList($uid: ID!, $products: [ID]!){
  addProductsToCompareList(
    input: {
      uid: $uid,
      products: $products
    }
  ) {
    uid
    item_count
    attributes {
      code
      label
    }
    items {
      uid
      product {
        sku
        name
        description {
          html
        }
      }
    }
  }
}
`

export interface Attribute {
    code: string;
    label: string;
}

export interface Description {
    html: string;
}

export interface Product {
    sku: string;
    name: string;
    description: Description;
}

export interface Item {
    uid: string;
    product: Product;
}

export interface AddProductsToCompareList {
    uid: string;
    item_count: number;
    attributes: Attribute[];
    items: Item[];
}

export interface Data {
    addProductsToCompareList: AddProductsToCompareList;
}

export interface RootObject {
    data: Data;
}