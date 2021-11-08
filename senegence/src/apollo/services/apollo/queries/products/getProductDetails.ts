import {gql} from '@apollo/client';
import { MEDIA_GALLERY_FRAGMENT } from '../categories/mediaGalleryFragment';
import { PRODUCT_PRICE_FRAGMENT } from '../categories/productPriceFragment';

export const GET_PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($sku: String!) {
    products(filter: {sku: {eq: $sku}}) {
      total_count
      items {
        uid
        __typename
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

export interface ConfigurableOption {
  attribute_code: string;
  label: string;
  values: Value[];
}

export interface Value {
  label: string;
  uid: string;
  swatch_data?: SwatchData;
}

export interface SwatchData {
  value: string;
}

export interface ConfigurableProductVarient {
  attributes: Attribute[]
  product: Product
}

export interface Attribute {
  code: string
  uid: string
  value_index: number
}

export interface Product {
  sku: string
  media_gallery: MediaGallery2[]
  price_range: PriceRange2
}

export interface MediaGallery2 {
  disabled: boolean
  label: any
  position: number
  url: string
}

export interface PriceRange2 {
  minimum_price: MinimumPrice2
}

export interface MinimumPrice2 {
  final_price: FinalPrice2
}

export interface FinalPrice2 {
  currency: string
  value: number
}

export interface Item {
  uid: string;
  __typename: string;
  categories: Categories;
  stock_status: string;
  product_tag: number;
  name: string;
  configurable_options?: ConfigurableOption[] | undefined;
  variants: ConfigurableProductVarient[];
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
