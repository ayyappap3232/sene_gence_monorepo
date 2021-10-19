import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { images } from '../../constants';
import Astrick from '../Astrick';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import OutlineTextInputMultiline from '../textInputs/OutlineTextInputMultiline';

export interface ISelectProps {
  title: string;
  onChangeText: any;
  value: any;
  placeholder: string;
  isMandatory?: boolean;
  currentIndex: number;
  index: number;
  onPress: any;
}

export default function Select({
  title,
  onChangeText,
  value,
  placeholder,
  isMandatory,
  currentIndex = 0,
  index,
  onPress
}: ISelectProps) {
  return (
    <View>
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <OutlineTextInput
            value={value}
            editable={false}
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
          <Image source={images.chervondown} style={{position: 'absolute',top: 15, right: 10,width: 16.9, height: 8.9,resizeMode: 'contain'}}/>
        </TouchableOpacity>
        {currentIndex === index && <View>
            <Text>Data</Text>
        </View>}
        <Spacer mt={10} />
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
