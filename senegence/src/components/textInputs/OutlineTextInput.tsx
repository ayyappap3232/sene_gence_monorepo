import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import { COLORS } from '../../constants';
import {IOutlineTextProps} from '../../types';

export default function OutlineTextInput({
  placeholder,
  onChangeText,
  containerStyle,
  value,
  ...restProps
}: IOutlineTextProps) {
  return (
    <TextInput
    value={value}
      placeholder={placeholder}
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
        backgroundColor: COLORS.white
    }
});
