import React from 'react';
import {StyleSheet, View} from 'react-native';

//User defined Imports
import Spacer from '../../../components/Spacer';
import InputTextBoxWithTitle from '../../../components/textInputs/InputTextBoxWithTitle';
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
