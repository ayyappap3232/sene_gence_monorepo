import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, images} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import Spacer from '../Spacer';
import ShowMoreLessText from '../text/ShowMoreLessText';
import Text from '../text/Text';
import TextWithUnderLine from '../text/TextWithUnderLine';

export default function CardWithImageTextAndReadMoreOrLessButton({image,headerTitle, text, moreTitle, lessTitle,textContainerStyle={},containerStyle={}}: any) {
  return (
      <ScrollView
        contentContainerStyle={[
          globalStyles.shadowEffect,
          {
            alignSelf: 'center',
            backgroundColor: COLORS.white,
            padding: 15,
            margin: 10,
          },
          containerStyle
        ]}>
        <Image
          source={image}
          style={{width: 294, height: 254, alignSelf: 'center'}}
        />
        <Spacer mt={10} />
        <Text
          containerStyle={[
            globalStyles.text,
            {
              fontFamily: FONTS.AvenirHeavy,
              lineHeight: 50,
              textTransform: 'uppercase',
            },
            textContainerStyle
          ]}>
          {headerTitle}
        </Text>
        <ShowMoreLessText
          text={
            text
          }
          targetLines={6}
          moreTitle={moreTitle}
          lessTitle={lessTitle}
          textContainerStyle={textContainerStyle}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({});
