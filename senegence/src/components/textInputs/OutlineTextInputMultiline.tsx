import React, { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';

//User defined Imports
import { COLORS } from '../../constants';
import {IOutlineTextProps} from '../../types';

export default function OutlineTextInputMultiline({
  placeholder,
  onChangeText,
  containerStyle,
  placeholderTextColor=COLORS.swatch,
  restProps,
  value,
  containerHeight=80
}: IOutlineTextProps) {
  const [height, setHeight] = useState(containerHeight)
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      {...restProps}
      style={[styles.textInput,containerStyle]}
      multiline={true}
      height={height}
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
