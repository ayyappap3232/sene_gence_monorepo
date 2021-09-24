import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { useCart } from '../../hooks/cart/useCart'
import { ProductItem } from '../../../../common/services/apollo/queries/products/products'
import { useSearchProducts } from '../../apollo/controllers/searchProducts.Controller'

export default function SearchProduct() {
    const {loading,error,searchProducts, getSearchProducts} = useSearchProducts(
       {match:"dress"}
    )
    
    useEffect(() => {
        getSearchProducts();
    }, [getSearchProducts])

    if(loading){
        return <ActivityIndicator />
    }

    return (
        <>
        {searchProducts?.products?.items.map((item : ProductItem) => <Text key={item.name}>{item.name}</Text>)}</>
    )
}

const styles = StyleSheet.create({})
