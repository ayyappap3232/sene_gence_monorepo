//

import {gql} from '@apollo/client';

export const REMOVE_PRODUCTS_FROM_COMPARE_LIST = gql`
mutation RemoveProductsFromCompareList($uid: ID!, $products: [ID]!){
  removeProductsFromCompareList(
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