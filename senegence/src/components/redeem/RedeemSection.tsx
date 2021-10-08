import React, { useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { globalStyles } from '../../globalstyles/GlobalStyles'
import Text from '../text/Text'
import RedeemTabSection from './RedeemTabSection'

export default function RedeemSection() {
    return (
        <RedeemTabSection />
    )
}

const styles = StyleSheet.create({
    selectedStyles: {
        letterSpacing: 2,
        

    },
    isSelected: {
        width: "100%",
        height: 5,
        borderRadius: 3,
        backgroundColor: COLORS.primary2
    },
    unSelectedStyles: {
        letterSpacing: 1.6
    }
})
