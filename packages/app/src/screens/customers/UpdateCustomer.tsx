import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { useUpdateCustomer } from 'common/controllers/updateCustomer.Controller'

export default function UpdateCustomer() {
    const {loading, error, customerUpdatedData, updateCustomer} = useUpdateCustomer(
       {
            email: "test1212@gmail.com", firstname: "updated my firstname"
        }
    )

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
