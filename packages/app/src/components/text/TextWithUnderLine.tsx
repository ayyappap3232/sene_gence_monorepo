import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from './Text';

interface ITextWithUnderLineProps {
  title: string;
  underLineStyle?: {};
}

export default function TextWithUnderLine({
  title,
  underLineStyle,
}: ITextWithUnderLineProps) {
  return (
    <>
      <Text
        containerStyle={[
          styles.underLineContainer,
          underLineStyle,
        ]}>
        {title}
      </Text>
      <Spacer mb={4.5} />
      <Divider backgroundColor={COLORS.border1} width={80} />
      <Spacer mb={19.5} />
    </>
  );
}

const styles = StyleSheet.create({
    underLineContainer: {
    textAlign: 'center',
    fontFamily: FONTS.BebasNeueRegular,
    fontSize: SIZES.h1,
    letterSpacing: 1.5,
  }
});
