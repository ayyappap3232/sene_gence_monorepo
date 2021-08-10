//The compareList query retrieves information about a list of products so that the shopper can compare those products.

import {gql} from '@apollo/client'

export const COMPARE_LIST = gql`
query CompareList($id: ID!){
    compareList(
        uid: $id
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