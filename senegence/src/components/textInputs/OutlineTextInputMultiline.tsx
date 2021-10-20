import React, { useState } from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import { COLORS } from '../../constants';
import {IOutlineTextProps} from '../../types';

export default function OutlineTextInputMultiline({
  placeholder,
  onChangeText,
  containerStyle,
  restProps,
  value
}: IOutlineTextProps) {
  const [height, setHeight] = useState(40)
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...restProps}
      style={[styles.textInput,containerStyle]}
      multiline={true}
      height={80}
      textAlignVertical="top"
      onContentSizeChange={() => setHeight(Math.max(48, height+16))}
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
