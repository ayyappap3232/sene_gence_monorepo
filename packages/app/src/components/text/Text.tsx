import React from 'react'
import { StyleSheet, Text as CustomText, View } from 'react-native'
import { FONTS } from '../../constants'

export default function Text({children, fontFamily = FONTS.AvenirRegular}: any) {
    return (
            <CustomText style={{fontFamily: fontFamily}}>
                {children}
            </CustomText>
    )
}

const styles = StyleSheet.create({})
