//Returns an array of categories based on the specified filters.

import { gql } from '@apollo/client';


export const CATEGORY_LIST = gql`
    query CategoryList($id: String!){
  categoryList(filters:{ids:{eq: $id}}) {
    products {
      total_count
      page_info {
        current_page
        page_size
      }
    }
    children_count
    children {
      id
      level
      name
      path
      children {
        id
        level
        name
        path
        children {
          id
          level
          name
          path
          children {
            id
            level
            name
            path
          }
        }
      }
    }
  }
}
`