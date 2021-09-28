import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../constants';

export default function RadioButton({checked, index, containerStyle}: any) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: COLORS.unCheckedColor,
          alignItems: 'center',
          justifyContent: 'center',
        }, containerStyle]}>
          {
            checked === index ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: COLORS.footerColor,
              }}/>
              : null
          }
        </View>
    );
}

const styles = StyleSheet.create({})
