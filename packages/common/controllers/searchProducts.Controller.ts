import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../services/apollo/queries/products/products'

type Props = {
    match : String;
}

type Result = {
    loading: Boolean;
    getSearchProducts(): void;
    error: any;
    searchProducts: any;
}

export const useSearchProducts = (props: Props): Result => {
    const [searchProducts, setSearchProducts] = useState()
    const [getSearchProducts,{loading,error,data}] = useLazyQuery(GET_PRODUCTS,{
        variables:{match:props.match}
    })

    useEffect(() => {
        if(data){
            setSearchProducts(data)
        }
    }, [data])

    return {
        loading,
        getSearchProducts,
        error,
        searchProducts
    }
}


