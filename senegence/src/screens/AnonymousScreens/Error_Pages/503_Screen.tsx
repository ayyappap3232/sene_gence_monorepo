import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import { COLORS, FONTS, SIZES } from '../../../constants';

export default function Error_503() {
  return (
    <View style={styles.container}>
      {/* image need to be update */}
      <Text containerStyle={styles.text_503}>503</Text>
      <Text containerStyle={styles.subText_503}>Service not available</Text>
      <Spacer mt={10}/>
      <Text containerStyle={{textAlign: 'center'}}>
        Server is overloaded or down for maintenance! Hang on till we get error
        fixedYou may also refresh the page or try again
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text_503: {
        fontFamily: FONTS.BebasNeueBold,
        fontSize: SIZES.h1 * 2,
        letterSpacing: 6,
        color: COLORS.searchTitle,
      },
      subText_503: {
        fontFamily: FONTS.BebasNeueBold,
        fontSize: SIZES.h1 + 2 ,
        letterSpacing: 3.2,
        color: COLORS.searchTitle,
        textAlign: 'left'
      },
});
