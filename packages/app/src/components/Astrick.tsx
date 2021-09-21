import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'
import Text from './text/Text'

export default function Astrick() {
    return (
        <Text containerStyle={{color: COLORS.mandatoryColor}} >*</Text>
    )
}

const styles = StyleSheet.create({})
