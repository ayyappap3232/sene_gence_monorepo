import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActivityIndicator from '../../components/spinners/ActivityIndicator'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCookie, setCookie } from '../../utils/helpers/tokens';
import { useGenerateCustomerToken } from '../../apollo/controllers/generateCustomerToken.Controller';

export default function LoginAsCustomer() {
    //Prepare Login as customer form
    //Once logged in, get the accesstoken and save it in the localstorage using AsyncStorage

    const {loading, error, getToken, token} = useGenerateCustomerToken(
        {email: "test1212@gmail.com", password: "test123@123"}
    )

    useEffect(() => {
        getCookie(getToken,"token");
    }, [])


    if(loading){
        return <ActivityIndicator />
    }

    if(token?.generateCustomerToken?.token){
        setCookie("token",token?.generateCustomerToken?.token)
    }else if(error){
        setCookie("token","")
    }

    return (
        <View>
            <Text>LoginAsCustomer</Text>
            <Text>{token} - {token?.generateCustomerToken?.token}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
