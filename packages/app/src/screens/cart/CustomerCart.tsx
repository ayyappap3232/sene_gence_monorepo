import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
import {useGetCustomerCart} from "common/controllers/getCustomerCart.Controller"
import {useClearCustomerCart} from "common/controllers/clearCustomerCart.Controller"
import {useRemoveItemFromACart} from "common/controllers/removeItemFromCart.Controller"

export default function CustomerCart() {
    const [customerCartItems, setCustomerCartItems] = useState()
    const {loading,error,getCustomerCart,customerCart} = useGetCustomerCart()
    const cartUid = customerCart?.customerCart?.id;

    useEffect(() => {
        getCustomerCart();
        setCustomerCartItems(customerCart);
    }, [getCustomerCart])


    if(loading){
        return <ActivityIndicator />
    }

    if(error){
        return <Text>{error.message}</Text>
    }

    const handleClearCustomerCart = () => {
        const {clearCustomerCart,loading, error, customerCart} = useClearCustomerCart({
            cartUid: cartUid
        })
        clearCustomerCart();
        if(loading){
            return <ActivityIndicator />
        }
        !loading && setCustomerCartItems(customerCart)
    }

    const handleRemoveItemFromACart = async (cart_item_id: number) => {
        const {loading,error, customerCart, removeItemFromCart} = await useRemoveItemFromACart({cart_id: cartUid, cart_item_id: cart_item_id})
        
        removeItemFromCart()

        if(loading){
            return <ActivityIndicator />
        }
        !loading && setCustomerCartItems(customerCart);
    }

    return (
        <View>
            <Text>{customerCart.length}</Text>
            {/* Remove button for individual Cart Item this goes inside a flat list / map list */}
            <TouchableOpacity onPress={() => handleRemoveItemFromACart(1)}><Text>ClearCustomerCart</Text></TouchableOpacity>
            {/* Clear customer cart button */}
            <TouchableOpacity onPress={handleClearCustomerCart}><Text>ClearCustomerCart</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
