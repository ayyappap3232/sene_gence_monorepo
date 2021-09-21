import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import { COLORS } from '../../constants';
import {IOutlineTextProps} from '../../types';

export default function OutlineTextInput({
  placeholder,
  onChangeText,
  containerStyle,
  restProps,
}: IOutlineTextProps) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...restProps}
      style={[styles.textInput,containerStyle]}
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
