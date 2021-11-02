import {gql} from '@apollo/client';
import { MEDIA_GALLERY_FRAGMENT } from '../categories/mediaGalleryFragment';
import { PRODUCT_PRICE_FRAGMENT } from '../categories/productPriceFragment';

export const SEARCH_CATEGORY_LIST = gql`
  query GetProducts($name: String!, $pageSize: Int!, $currentPage: Int!,$sortName: ProductAttributeSortInput) {
    products(pageSize: $pageSize, currentPage: $currentPage, search: $name, sort: $sortName) {
      total_count
      items {
        uid
        ... on ConfigurableProduct {
            configurable_options {
              attribute_code
              label
              values {
                label
                uid
                swatch_data {
                  value
                }
              }
            }
            variants{
            attributes{
              code
              uid
              value_index
            }
            product{
              sku
              ...MediaGallery
              ...ProductPrice
              
            }
          }
        }
        categories {
          breadcrumbs {
            category_name
            category_url_path
          }
        }
        product_tag
        stock_status
        name
        application_techniques
        benefits
        ingredients
        thumbnail {
          label
          url
        }
        image {
          disabled
          label
          url
        }
        small_image {
          label
          disabled
          url
        }
        hover_image
        media_gallery {
          disabled
          label
          url
        }
        description {
          html
        }

        second_title
        swatch_image
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
            }
            discount {
              amount_off
            }
          }
        }
      }
    }
  }
  ${MEDIA_GALLERY_FRAGMENT}
  ${PRODUCT_PRICE_FRAGMENT}
`;

//Get Search Product Name and Overall Count
export const SEARCH_PRODUCT_NAME_OVERALL_COUNT = gql`
  query GetProductNameWithOverallCount($name: String!, $pageSize: Int!) {
    products(search: $name,pageSize: $pageSize) {
      total_count
      items {
        name
      }
    }
  }
`;

//Get Individual product count
export const GET_SEARCH_PRODUCT_COUNT = gql`
  query GetProductNameWithOverallCount($name: String!) {
    products(search: $name) {
      total_count
    }
  }
`;


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

export interface BreadCrumbs {
  category_name: string;
  category_url_path: string;
}

export interface Categories {
  breadcrumbs: BreadCrumbs;
}

export interface Item {
  uid: string;
  categories: Categories;
  stock_status: string;
  product_tag: number;
  name: string;
  application_techniques: string;
  benefits: string;
  ingredients: string;
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
  url_path: string;
  products: Products;
}

export interface Data {
  categoryList: CategoryList[];
}

export interface RootObject {
  data: Data;
}
