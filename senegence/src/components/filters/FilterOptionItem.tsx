import React from 'react';
import { Platform } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
// import {RadioButton} from 'react-native-paper';
import { COLORS, FONTS, SIZES } from '../../constants';
import RadioButton from '../buttons/radioButtons/RadioButton';


export default function FilterOptionItem({index, checked, setChecked,title}:any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>{title}</Text>
      {/* <RadioButton
        value={checked}
        status={checked === index ? 'checked' : 'unchecked'}
        onPress={() => setChecked(index)}
        uncheckedColor={COLORS.unCheckedColor}
        color={COLORS.footerColor}
      />  */}
      <RadioButton checked={checked} index={index}/>
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
