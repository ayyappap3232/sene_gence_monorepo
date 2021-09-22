import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS } from '../../constants'
import { IOutlineButton } from '../../types'
import Text from '../text/Text'

export default function OutlineButton({title, onPress, containerStyle,textStyleContainer, activeOpacity=0.2}: IOutlineButton) {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} style={[styles.container, containerStyle]} onPress={onPress}>
            <Text containerStyle={[styles.textStyle, textStyleContainer]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        borderWidth: 1,
        borderColor: COLORS.border,
        width: 334
    },
    textStyle: {
        fontFamily: FONTS.BebasNeueRegular,
        letterSpacing: 2,
        color: COLORS.text,
        fontSize: 20,
    }
})
