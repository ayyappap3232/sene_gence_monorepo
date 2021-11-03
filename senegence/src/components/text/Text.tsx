import React from 'react'
import { StyleSheet, Text as CustomText, View } from 'react-native'

//User defined Imports
import { FONTS } from '../../constants'

export default function Text({children, fontFamily = FONTS.AvenirRegular,containerStyle={},numberOfLines=10000}: any) {
    return (
            <CustomText numberOfLines={numberOfLines}  style={[{fontFamily: fontFamily},containerStyle]}>
                {children}
            </CustomText>
    )
}

const styles = StyleSheet.create({})