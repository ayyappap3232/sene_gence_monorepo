import React from 'react'
import { StyleSheet, View } from 'react-native'

//User defined Imports
import { COLORS } from '../../constants'
import Text from '../text/Text'

export default function Error({errorMessage=""}:any) {
    return (
        !!errorMessage ? <Text containerStyle={{color: COLORS.red}}>{errorMessage}</Text> : null
    )
}

const styles = StyleSheet.create({})
