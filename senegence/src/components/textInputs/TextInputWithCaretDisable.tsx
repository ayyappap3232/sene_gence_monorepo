import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

//User defined Imports
import { COLORS, images } from '../../constants'

export default function TextInputWithCaretDisable({textInputValue, placeholder}: any) {
    return (
        <View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: COLORS.border1,
              padding: 10,
              paddingRight: 30,
              height: 40,
            }}
            editable={false}
            placeholder={placeholder}
            placeholderTextColor={COLORS.border1}
            value={textInputValue}
          />
          <Image
            source={images.dropdowncaret}
            style={{
              width: 12,
              height: 12,
              position: 'absolute',
              right: 10,
              top: 15,
            }}
          />
        </View>
    )
}

const styles = StyleSheet.create({})
