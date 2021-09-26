import React from 'react';
import {StyleSheet, View} from 'react-native';
import Astrick from '../../../components/Astrick';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import OutlineTextInput from '../../../components/textInputs/OutlineTextInput';
import OutlineTextInputMultiline from '../../../components/textInputs/OutlineTextInputMultiline';
import {COLORS} from '../../../constants';

export default function ContactUsForm() {
  const _inputItem = (
    title: string,
    onChangeText: any,
    placeholder: string,
    isMandatory?: boolean,
    multiline?: boolean,
  ) => {
    return (
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />
        {multiline ? (
          <OutlineTextInputMultiline
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
            multiline={multiline}
          />
        ) : (
          <OutlineTextInput
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
          />
        )}
        <Spacer mt={10} />
      </>
    );
  };
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
