import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Get_Categories($pageSize: Int!) {
    categories(pageSize: $pageSize) {
      items {
        name
        children {
          name
          url_path
          children {
            name
            url_path
            children {
              name
              url_path
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
