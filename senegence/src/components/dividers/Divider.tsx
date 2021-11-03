import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//User defined Imports
import { COLORS } from '../../constants'

export default function Divider({width = 100, height = 2, backgroundColor= COLORS.white, containerStyle}: any) {
    return (
        <View style={[{alignSelf:'center',width: width, height: height, backgroundColor: backgroundColor},containerStyle]}>
            
        </View>
    )
}

const styles = StyleSheet.create({})
