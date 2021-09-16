//Returns an array of categories based on the specified filters.

import { gql } from '@apollo/client';

enum SortEnum {
  ASC,
  DESC
}

export interface IProductAttributeSortInput {
  name: SortEnum;
  position: SortEnum;
  price: SortEnum;
  relevance: SortEnum;
}

export const CATEGORY_LIST = gql`
    query CategoryList($url_path: String!, $pageSize: Int!, $currentPage: Int!){
  categoryList(filters: {url_path:{eq: $url_path}}){
    name
    product_count
    image
    
    products(pageSize:$pageSize, currentPage: $currentPage){
      items{
        stock_status
        name
        thumbnail{
          label
          url
        }
        image{
          disabled
          label
          url
        }
        small_image{
          label
          disabled
          url
        }
        hover_image
        media_gallery{
          disabled
          label
          url
        }
        description{
          html
        }
        
        second_title
				swatch_image
        sku
        price_range{
          minimum_price{
            regular_price{
              value
              currency
            }
            final_price{
              value
            }
            discount{
              amount_off
            }
          }         
        }        
      }
    }
  }
}
`

//Types

export interface Thumbnail {
  label: string;
  url: string;
}

export interface Image {
  disabled?: any;
  label: string;
  url: string;
}

export interface SmallImage {
  label: string;
  disabled?: any;
  url: string;
}

export interface MediaGallery {
  disabled: boolean;
  label?: any;
  url: string;
}

export interface Description {
  html: string;
}

export interface RegularPrice {
  value: number;
  currency: string;
}

export interface FinalPrice {
  value: number;
}

export interface Discount {
  amount_off: number;
}

export interface MinimumPrice {
  regular_price: RegularPrice;
  final_price: FinalPrice;
  discount: Discount;
}

export interface PriceRange {
  minimum_price: MinimumPrice;
}

export interface Item {
  stock_status: string;
  name: string;
  thumbnail: Thumbnail;
  image: Image;
  small_image: SmallImage;
  hover_image: string;
  media_gallery: MediaGallery[];
  description: Description;
  second_title: string;
  swatch_image: string;
  sku: string;
  price_range: PriceRange;
}

export interface Products {
  total_count: number;
  items: Item[];
}

export interface CategoryList {
  name: string;
  product_count: number;
  image?: any;
  products: Products;
}

export interface Data {
  categoryList: CategoryList[];
}

export interface RootObject {
  data: Data;
}