import React from 'react';
import {StyleSheet, View} from 'react-native';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import InputTextBoxWithTitle from '../../../components/textInputs/InputTextBoxWithTitle';
import OutlineTextInput from '../../../components/textInputs/OutlineTextInput';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import CardTabHeaderWrapper from './CardHeaderWrapper';

export default function ZipCode() {
  return (
    <CardTabHeaderWrapper title="Search BY ZIPCODE">
      <Spacer mt={18} />
      <InputTextBoxWithTitle
        title={'Zip Code'}
        placeholder={'Eg-12345'}
        onChangeText={() => {}}
      />

      <Spacer mt={19.7} />
    </CardTabHeaderWrapper>
  );
}

const styles = StyleSheet.create({});
