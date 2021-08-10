import { gql } from '@apollo/client';


export const GET_PRODUCTS = gql`
query GetProductsByFilter($match: String!){
    products(filter:{name:{match:$match}}){
      items{
        name
      }
    }
  }
`

export interface Products{
    items: Array<ProductItem>;
}

export interface ProductItem{
    name: string;
}