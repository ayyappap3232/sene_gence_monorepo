import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ADD_PRODUCT_TO_CART } from '../../services/apollo/mutations/cart/addProductToCart'

export default function ProductsList() {
    const [addProductToCart,{loading, error, data}] = useMutation(ADD_PRODUCT_TO_CART,{
        variables: {
            cart_id:"",
            sku: "",
            quantity: 1
        }
    })

    useEffect(() => {
        //For testing purpose writing in useEffect later need to send this method only when we click on handleAddToCart button
        addProductToCart();
    }, [addProductToCart])

    return (
        //Show Product List
        //Increment or Decrement Product items to cart
        //Add Product To Cart Button
        <Text>ProductListPage</Text>
    )
}

const styles = StyleSheet.create({})
