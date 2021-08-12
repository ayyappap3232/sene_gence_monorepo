import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAddProductsToCart } from 'common/controllers/addProductToCart.Controller'

export default function ProductsList() {
    const {loading, error, addProductToCart, productsToCart} = useAddProductsToCart(
      {
            cart_id:"",
            sku: "",
            quantity: 1
        }
    )

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
