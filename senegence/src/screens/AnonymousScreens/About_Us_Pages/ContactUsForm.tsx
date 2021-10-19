import React from 'react';
import {StyleSheet, View} from 'react-native';
import Astrick from '../../../components/Astrick';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import { _inputItem } from '../../../components/textInputs/InputItemWithAsterik';
import OutlineTextInput from '../../../components/textInputs/OutlineTextInput';
import OutlineTextInputMultiline from '../../../components/textInputs/OutlineTextInputMultiline';
import {COLORS} from '../../../constants';

export default function ContactUsForm() {
  
  return (
    <View style={{marginLeft: 33, marginRight: 29}}>
      {_inputItem('Full Name', {}, 'Enter Your Full Name', true)}
      {_inputItem('Email', {}, 'Enter Your Email...', true)}
      {_inputItem('Phone', {}, 'Enter Your Phone...', true)}
      {_inputItem('I need information on', {}, 'Please Select ', true)}
      {_inputItem('I heard about SeneGence', {}, 'Please Select ', true)}
      {_inputItem('Comments', {}, 'Enter Your Comments ', false, true)}
      <Spacer mt={30.2} />
      <OutlineButton
        textStyleContainer={{color: COLORS.white}}
        title={'SUBMIT'}
        containerStyle={{
          alignSelf: 'center',
          width: 100,
          backgroundColor: COLORS.footerColor,
          borderColor: COLORS.footerColor,
        }}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
