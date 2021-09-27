import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import { COLORS, FONTS, SIZES } from '../../constants';

export default function FilterOptionItem({index, checked, setChecked,title}:any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>{title}</Text>
      <RadioButton
        value="first"
        status={checked === index ? 'checked' : 'unchecked'}
        onPress={() => setChecked(index)}
        uncheckedColor={COLORS.unCheckedColor}
        color={COLORS.footerColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontFamily: FONTS.AvenirBook,
        fontSize: SIZES.body5,
        lineHeight: 50,
        letterSpacing: 0.6,
        color: COLORS.text
    }
});
