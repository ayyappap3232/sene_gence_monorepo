import React from 'react'
import { StyleSheet, View } from 'react-native'


import { globalStyles } from 'globalstyles/GlobalStyles'
import { COLORS, SIZES } from '../../constants'
import Spacer from '../Spacer'
import Divider from '../dividers/Divider'
import Text from '../text/Text'

export default function OrderSummary() {
    return (
        <View style={[globalStyles.shadowEffect,{backgroundColor: COLORS.white, marginHorizontal: 1,padding:10}]}>
            <Spacer mt={10}/>
            <Text>ORDER SUMMARY</Text>
            <Spacer mt={20}/>
            <View style={[globalStyles.row]}>
                <Text>Subtotal</Text>
                <Text>$100.00</Text>
            </View>
            <Spacer mt={10}/>
            <View style={[globalStyles.row]}>
                <Text>Shipping</Text>
                <Text>$10.00</Text>
            </View>
            <Spacer mt={10}/>
            <Divider width={SIZES.width} backgroundColor={COLORS.ligthGrey}/>
            <Spacer mt={20}/>
            <View style={[globalStyles.row]}>
                <Text containerStyle={[globalStyles.text_avenir_medium]}>ORDER TOTAL</Text>
                <Text containerStyle={[globalStyles.text_avenir_medium]}>$110.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
