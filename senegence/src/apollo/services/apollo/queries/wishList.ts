import {gql} from '@apollo/client'

export const WISH_LIST = gql`
{
  wishlist {
    items_count
    name
    sharing_code
    updated_at
    items {
      id
      qty
      description
      added_at
      product {
        sku
        name
      }
    }
  }
}
`