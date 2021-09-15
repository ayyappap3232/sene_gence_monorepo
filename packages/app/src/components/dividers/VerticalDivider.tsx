import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'

export default function VerticalDivider() {
    return (
        <View style={{marginRight: 10,borderRightWidth: 1, borderRightColor: COLORS.white}}>
        </View>
    )
}

const styles = StyleSheet.create({})
