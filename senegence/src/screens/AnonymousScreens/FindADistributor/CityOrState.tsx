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

export default function CityOrState() {
  return (
    <CardTabHeaderWrapper title="Search BY CITY / STATE">
      <Spacer mt={18} />
      <InputTextBoxWithTitle
        title={'City (optional)'}
        placeholder={'Eg-los-angels'}
        onChangeText={() => {}}
      />
      <Spacer mt={20}/>
      <Text containerStyle={{fontFamily: FONTS.AvenirMedium,fontSize: SIZES.h2, color: COLORS.assistColor,marginLeft: 22}}>OR</Text>
      <Spacer mt={20}/>
      <InputTextBoxWithTitle
        title={'State'}
        placeholder={'Eg-california'}
        onChangeText={() => {}}
      />
      <Spacer mt={19.7} />
    </CardTabHeaderWrapper>
  );
}

const styles = StyleSheet.create({});
