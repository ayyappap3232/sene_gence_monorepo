import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { useCart } from '../../hooks/cart/useCart'
import { GET_PRODUCTS, ProductItem } from '../../services/apollo/queries/products/products'

export default function SearchProduct() {
    const [searchProduct,{loading,error,data}] = useLazyQuery(GET_PRODUCTS,{
        variables:{match:"dress"}
    })
    
    useEffect(() => {
        searchProduct();
    }, [searchProduct])

    if(loading){
        return <ActivityIndicator />
    }

    return (
        <>
        {data?.products?.items.map((item : ProductItem) => <Text key={item.name}>{item.name}</Text>)}</>
    )
}

const styles = StyleSheet.create({})
