import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//User defined Imports
import { COLORS } from '../../constants'

export default function VerticalDivider() {
    return (
        <View style={{width: 2,height: 20, backgroundColor: COLORS.white}}>
        </View>
    )
}

const styles = StyleSheet.create({})
