import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

//User defined Imports
import { COLORS } from '../../constants';
import {IOutlineTextProps} from '../../types';

export default function OutlineTextInput({
  placeholder,
  onChangeText,
  containerStyle,
  value,
  placeholderTextColor=COLORS.swatch,
  ...restProps
}: IOutlineTextProps) {
  return (
    <TextInput
    value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      style={[styles.textInput,containerStyle]}
      {...restProps}
    />
  );
}

const styles = StyleSheet.create({
    textInput: {
        width: 217,
        height: 39,
        padding: 10,
        backgroundColor: COLORS.white,
        color: COLORS.swatch
    }
});
