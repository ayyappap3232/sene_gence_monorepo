//Creates a new compare list. The compare list is saved for logged in customers

import {gql} from "@apollo/client";

export const CREATE_COMPARE_LIST = gql`
mutation CreateCompareList($products:[ID]){
    createCompareList(
        input: {
            products: $products
        }
    ) {
        uid
        item_count
        attributes {
            code
            label
        }
        items {
            uid
            product {
                sku
                name
                description {
                    html
                }
            }
        }
    }
}
`

export interface Attribute {
    code: string;
    label: string;
}

export interface Description {
    html: string;
}

export interface Product {
    sku: string;
    name: string;
    description: Description;
}

export interface Item {
    uid: string;
    product: Product;
}

export interface CreateCompareList {
    uid: string;
    item_count: number;
    attributes: Attribute[];
    items: Item[];
}

export interface Data {
    createCompareList: CreateCompareList;
}

export interface RootObject {
    data: Data;
}
