import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ISpacer } from '../types'

export default function Spacer({mt,mr,mb,ml}: ISpacer) {
    return (
        <View style={{marginTop: mt, marginBottom: mb,marginLeft: ml, marginRight: mr}}>
        </View>
    )
}

const styles = StyleSheet.create({})
