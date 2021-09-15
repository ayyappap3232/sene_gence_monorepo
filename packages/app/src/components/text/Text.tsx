import React from 'react'
import { StyleSheet, Text as CustomText, View } from 'react-native'
import { FONTS } from '../../constants'

export default function Text({children, fontFamily = FONTS.AvenirRegular,containerStyle={}}: any) {
    return (
            <CustomText style={[{fontFamily: fontFamily},containerStyle]}>
                {children}
            </CustomText>
    )
}

const styles = StyleSheet.create({})
