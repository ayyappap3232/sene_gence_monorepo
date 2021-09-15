import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/headers/Header';

export default function CategoryScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const {name,url_path} = route?.params?.categoryData

    // useLayoutEffect(() => {
    // navigation.setOptions({
    //     title: name
    // })
    // }, [navigation,route])

    return (
        <View>
            <Header />
            <Text>{name},{url_path}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
