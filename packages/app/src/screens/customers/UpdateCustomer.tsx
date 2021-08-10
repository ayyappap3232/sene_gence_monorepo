import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { UPDATE_CUSTOMER } from '../../services/apollo/mutations/customers/updateCustomer'

export default function UpdateCustomer() {
    const [updateCustomer, {loading, error, data}] = useMutation(UPDATE_CUSTOMER,{
        variables:{
            email: "test1212@gmail.com", firstname: "updated my firstname"
        }
    })

    useEffect(() => {
        updateCustomer()
    }, [updateCustomer])

    if(error){
        console.warn(error.message)
    }

    if(loading){
        return <ActivityIndicator />
    }

    return (
        <View>
            <Text>Update Customer</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
