//Returns an array of categories based on the specified filters.

import {gql} from '@apollo/client';

enum SortEnum {
  ASC,
  DESC,
}

export interface IProductAttributeSortInput {
  name: SortEnum;
  position: SortEnum;
  price: SortEnum;
  relevance: SortEnum;
}

const queryObj = {};

export const CATEGORY_LIST = gql`
  query CategoryList($url_path: String!, $pageSize: Int!, $currentPage: Int!) {
    categoryList(filters: {url_path: {eq: $url_path}}) {
      name
      product_count
      image
      url_path
      products(pageSize: $pageSize, currentPage: $currentPage) {
        total_count
        items {
          uid
          categories {
            breadcrumbs {
              category_name
              category_url_path
            }
          }
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
  }
`;

export const SEARCH_CATEGORY_LIST = gql`
  query GetProducts($name: String!, $pageSize: Int!, $currentPage: Int!) {
    products(pageSize: $pageSize, currentPage: $currentPage, search: $name) {
      total_count
      items {
        uid
        categories {
          breadcrumbs {
            category_name
            category_url_path
          }
        }
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
