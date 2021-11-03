import React from 'react';
import {StyleSheet} from 'react-native';

//User defined Imports
import {COLORS, FONTS, SIZES} from '../../constants';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from './OutlineTextInput';

export default function InputTextBoxWithTitle({
  title,
  placeholder,
  onChangeText,
  titleStyle = {},
  inputBoxStyle = {}
}: any) {
  return (
    <>
      <Text
        containerStyle={[{
          marginLeft: 22.5,
          fontFamily: FONTS.AvenirMedium,
          fontSize: SIZES.h4,
          color: COLORS.assistColor,
        }, titleStyle]}>
        {title}
      </Text>
      <Spacer mt={10} />
      <OutlineTextInput
        containerStyle={[{
          borderWidth: 1,
          width: 290,
          alignSelf: 'center',
          borderColor: COLORS.border2,
        },inputBoxStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </>
  );
}

const styles = StyleSheet.create({});
