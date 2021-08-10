import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
import { CLEAR_CUSTOMER_CART } from '../../services/apollo/mutations/cart/ClearCustomerCart';
import { GET_CUSTOMER_CART } from '../../services/apollo/queries/cart/getCustomerCart'
import { removeItemFromACart } from './removeCartItem';

export default function CustomerCart() {
    const [customerCart, setCustomerCart] = useState([])
    const [getCustomerCart,{loading, error, data}] = useLazyQuery(GET_CUSTOMER_CART);
    const cartUid = data?.customerCart?.id;
    useEffect(() => {
        getCustomerCart();
        if(data){
            setCustomerCart(data);
        }
    }, [getCustomerCart,data])


    if(loading){
        return <ActivityIndicator />
    }

    if(error){
        return <Text>{error.message}</Text>
    }

    const handleClearCustomerCart = () => {
        const [clearCustomerCart,{loading, error, data}] = useLazyQuery(CLEAR_CUSTOMER_CART,{
            variables: {cartUid: cartUid}
        })
        clearCustomerCart();
        if(loading){
            return <ActivityIndicator />
        }
        !loading && setCustomerCart(data)
    }

    const handleRemoveItemFromACart = async (cart_item_id: number) => {
        const {loading,error, data} = await removeItemFromACart(cartUid,cart_item_id)
        if(loading){
            return <ActivityIndicator />
        }
        !loading && setCustomerCart(data);
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
