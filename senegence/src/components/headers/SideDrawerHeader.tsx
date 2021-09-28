import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Close } from '../../../assets/svgs'
import { COLORS, images } from '../../constants'

export default function SideDrawerHeader({visible, setVisible}: any) {
    return (
        <View style={styles.drawerHeader}>
            <TouchableOpacity
              style={{marginHorizontal: 22.5}}
              onPress={() => setVisible(!visible)}>
              <Close />
            </TouchableOpacity>
            <Image source={images.logo} style={{width: 127, height: 29}} />
          </View>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 3,
        paddingVertical: 11.2,
        borderBottomColor: COLORS.border,
      },
})
