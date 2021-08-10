import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import { GENERATE_CUSTOMER_TOKEN } from '../../services/apollo/mutations/customers/generateCustomerToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCookie, setCookie } from '../../utils/helpers/tokens';

export default function LoginAsCustomer() {
    //Prepare Login as customer form
    //Once logged in, get the accesstoken and save it in the localstorage using AsyncStorage

    const [loginAsCustomer,{loading, error, data}] = useMutation(GENERATE_CUSTOMER_TOKEN,{
        variables:{email: "test1212@gmail.com", password: "test123@123"}
    })

    useEffect(() => {
        getCookie(loginAsCustomer,"token");
    }, [])


    if(loading){
        return <ActivityIndicator />
    }

    if(data?.generateCustomerToken?.token){
        setCookie("token",data?.generateCustomerToken?.token)
    }else if(error){
        setCookie("token","")
    }

    return (
        <View>
            <Text>LoginAsCustomer</Text>
            <Text>{data} - {data?.generateCustomerToken?.token}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
