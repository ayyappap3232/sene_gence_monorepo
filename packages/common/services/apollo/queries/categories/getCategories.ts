import {gql} from '@apollo/client'


export const GET_CATEGORIES = gql`
    query Get_Categories($id: String!){
        categories(filters:{ids:{eq:$id}}){
            items{
                name
                children{
                    name
                }
            }
        }
        categoryList(filters:{ids:{eq:$id}}){
            id
            name
            children{
              name
              description
              product_count
            }
          }
    }
`

// export interface Categories {
//     items: Array<ItemCategory>;
// }

// export interface ItemCategory {
//     name: string;
//     children: Array<ItemChildrenCategory>;
// }

// export interface ItemChildrenCategory{
//     name: string;
// }