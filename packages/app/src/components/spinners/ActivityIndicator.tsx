import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator as Indicator } from 'react-native'

export default function ActivityIndicator() {
    return (
        <View style={styles.activityIndicator}>
            <Indicator size="large" color="grey"/>
        </View>
    )
}

const styles = StyleSheet.create({
    activityIndicator:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
