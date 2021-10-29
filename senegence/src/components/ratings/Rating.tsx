import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import Spacer from '../Spacer';
import Text from '../text/Text';
import {Rating as Ratings, AirbnbRating} from 'react-native-ratings';

export default function Rating({ratingText="4.1",containerStyle={}}) {
  return (
    <View style={[{alignItems: 'center'},containerStyle]}>
      {/* Rating Value - 4.1, 4.4 etc */}
      {ratingText ? <Text containerStyle={styles.ratingText}>{ratingText}</Text> : null }
      {/* Rating Stars based on the rating value */}
      <AirbnbRating
        isDisabled={true}
        defaultRating={4.1}
        size={14}
        showRating
        onFinishRating={() => {}}
        selectedColor={COLORS.primary2}
        ratingContainerStyle={{marginTop: 0, height: 1}}
      />
      <Spacer mt={20} />
      {/* Number of Reviewers */}
      <Text
        containerStyle={[
          globalStyles.text_avenir_medium,
          {fontSize: SIZES.body4, letterSpacing: 0.7, color: COLORS.text},
        ]}>
        120 Reviews
      </Text>
      <Spacer mt={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingText: {
    fontFamily: FONTS.AvenirBlack,
    fontSize: SIZES.h3,
    letterSpacing: 2,
    color: COLORS.text,
  },
});
