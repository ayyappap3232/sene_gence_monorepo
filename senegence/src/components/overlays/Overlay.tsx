import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Overlay({containerStyle={}}) {
    return (
        <View style={[styles.overlay,containerStyle]}></View>
    )
}

const styles = StyleSheet.create({
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'rgba(0,0,0,0.2)'
    }
})
