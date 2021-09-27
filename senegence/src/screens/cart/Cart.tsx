import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useCart } from '../../apollo/controllers/getCart.Controller';
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
//@ts-ignore

export default function Cart() {
    const cart_id = "";

    const {getCart,loading, error} = useCart({cartId: cart_id})

    useEffect(() => {
       getCart();
    }, [getCart])

    if(loading){
        return <ActivityIndicator />
    }

    if(error){
        return <Text>{error.message}</Text>
    }

    return (
        <View>
            <Text>Cart Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
