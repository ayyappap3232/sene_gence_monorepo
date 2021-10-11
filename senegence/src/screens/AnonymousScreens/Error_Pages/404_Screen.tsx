import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import OutlineButton from '../../../components/buttons/OutlineButton';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {ScreenNames} from '../../../utils/screenNames';

export default function Error_404() {
  const navigation = useNavigation<any>();
  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        {/* image content */}
        <View style={{alignItems: 'center'}}>
          <Text containerStyle={styles.text_404}>404</Text>
          <Text containerStyle={styles.subText_404}>
            UH OH, Something Broke!
          </Text>
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {fontSize: SIZES.body4},
            ]}>
            Sorry we can’t, find the page you are looking forFollow these links
            to get you back on track or using search to find more products
          </Text>
          <Spacer mt={20} />
          <OutlineButton
            title={'Back to Previous Page'}
            onPress={() => navigation.goBack()}
            containerStyle={styles.btn}
            textStyleContainer={styles.btnText}
          />
          <Spacer mt={10} />

          <OutlineButton
            title={'Back To Home'}
            onPress={() => navigation.navigate(ScreenNames.StartUpDrawer)}
            containerStyle={styles.btn}
            textStyleContainer={styles.btnText}
          />
        </View>
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  text_404: {
    fontFamily: FONTS.BebasNeueBold,
    fontSize: SIZES.h1 + SIZES.h1,
    letterSpacing: 6,
    color: COLORS.searchTitle,
  },
  subText_404: {
    fontFamily: FONTS.BebasNeueBold,
    fontSize: SIZES.h1 + 2,
    letterSpacing: 3.2,
    color: COLORS.searchTitle,
  },
  btn: {
    width: 244,
    backgroundColor: COLORS.footerColor,
    borderColor: COLORS.footerColor
  },
  btnText: {
    color: COLORS.white
  }
});
