import { useLazyQuery, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { CREATE_CUSTOMER } from '../../services/apollo/mutations/customers/createCustomer'

export default function CreateCustomer() {
    //Todo: Pass the parameters email, password from a customer signup form
    const [createCustomer, { loading, error, data }] = useMutation(CREATE_CUSTOMER, {
        variables: { email: "test1212@gmail.com", password: "test123@123", firstname: "test123", lastname: "test123" }
    })

    useEffect(() => {
        //! Note: Move this method to the submit handler event since createCustomer should trigger only when user clicks on create customer button
        createCustomer();
    }, [createCustomer])

    if (loading) {
        return <ActivityIndicator />
    }

    if (error) {
        //Todo: Change it according to the requirement either Alert or Toast error message
        Alert.alert(error.message)
        return <></>;
    }

    return (
        <View>
            <Text>CreateCustomer</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
