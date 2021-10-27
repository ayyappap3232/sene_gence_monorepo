import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Get_Categories($pageSize: Int!) {
    categories(pageSize: $pageSize) {
      items {
        uid
        name
        children {
          uid
          name
          url_path
          breadcrumbs {
            category_name
            category_url_path
          }
          children {
            uid
            name
            url_path
            breadcrumbs {
              category_name
              category_url_path
            }
            children {
              uid
              name
              url_path
              breadcrumbs {
                category_name
                category_url_path
              }
            }
          }
        }
      }
    }
    # categoryList(filters:{ids:{eq:$id}}){
    #     id
    #     name
    #     children{
    #       name
    #       description
    #       product_count
    #     }
    #   }
  }
`;

export interface Categories {
  categories: CategoryItems;
}

export interface CategoryItems {
  items: Array<ItemCategory>;
}

export interface ItemCategory {
  name: string;
  children: Array<ItemChildrenCategory>;
}

export interface ItemChildrenCategory {
  name: string;
}
